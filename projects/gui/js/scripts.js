const COMPILER_DOMAIN = '172.28.0.2'


function renderBuildButton(project_name) {
  const btn_build = document.getElementById('btn_build')
  btn_build.onclick = () => {
    buildProject(project_name)
  }
}

function getApiUrl(endpoint) { return `http://${COMPILER_DOMAIN}/api/${endpoint}`}

function ngcApiCall(endpoint) {
  return fetch(getApiUrl(endpoint))
    .then((response) => { return response.json() } )
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}


function saveValue(name, path) {
  const input_id = `input.${name}`.replaceAll('.', '_')
  const input = document.getElementById(input_id)

  _value = input.value

  switch (input.type) {
    case 'checkbox':
      _value = input.checked
      break
    default:
      _value = input.value
  }

  return postData(getApiUrl('value/set'), {
    name: name,
    value: _value,
    path: path
  })
} 

function getProperty(obj, prop_path) {
        
  const props = prop_path.split('.')
  let ref = obj
  
  for(var i = 0; i< props.length; ++i) {
      const prop = props[i]
      if(!ref.hasOwnProperty(prop)) return undefined
      ref = ref[prop]
  }

  return ref
}


/*
Only checked and checked="checked" are valid. Your other options depend on error recovery in browsers.

checked="yes" and checked="true" are particularly bad as they imply that checked="no" and checked="false" will set the default state to be unchecked … which they will not.
*/

const input_renderers_map = new Map(
  [
    ['string', (project_name, project_value, input_id) => {
      return `<input id="${input_id}" value="${project_value.value}" type='text'/><button onclick="saveValue('${project_value.name}','projects/${project_name}')">Apply</button>`
    }],
    ['boolean', (project_name, project_value, input_id) => {
      return `<input id="${input_id}"  type='checkbox' ${project_value.value ? 'checked' : ''}><button onclick="saveValue('${project_value.name}','projects/${project_name}')">Apply</button>`
      // return `<input id="${input_id}"  type='checkbox' checked=${project_value.value}><button onclick="saveValue('${project_value.name}','projects/${project_name}')">Apply</button>`
    }],
    ['unknown', (project_name, project_value, input_id) => {
      return `<p>unknown value type: <span style="color:red">${project_value.type}</span></p>`
    }]
  ]
)

function renderProjectValues(project_name, values) {

  content = values.map(v => {
    const _name = v.name
    const s_name = `<p>Name: ${_name}</p>`
    const s_desc = `<p>Description: ${v.description}</p>`
    const s_id = `input.${v.name}`.replaceAll('.', '_')

    const input = input_renderers_map.get(
      input_renderers_map.has(v.type) ? v.type : 'unknown'
    )(project_name, v, s_id)

    return `${s_name}${s_desc}${input}<hr>\n`
  }).join('')

  document.getElementById('Development').innerHTML = content
}

function getProjectValues(name) {
  return ngcApiCall(`project/inspect?name=${name}`)
    .then((msg) => {

      const s_userProjectName = msg.data.name

      return ngcApiCall(`value/get?path=projects/${s_userProjectName}`)
        .then(msg_values => {
          const values = msg_values.data

          return ngcApiCall(`schema/get?path=projects/${s_userProjectName}`)
            .then(msg_schema => {
              const schema = msg_schema.data

              const flattenProjectValues = (values, _schema, name_prefix = []) => {
                if(_schema.type !== 'object') {
                  value_canonical_name = name_prefix.join('.')
                  return [{
                    name: value_canonical_name,
                    description: _schema.description,
                    type: _schema.type,
                    value: getProperty(values, value_canonical_name)
                  }]
                }

                const res = []
                Object.keys(_schema.properties).forEach(prop => {
                  res.push(...flattenProjectValues(values, _schema.properties[prop], [...name_prefix, prop]))
                })

                return res
              }
              return flattenProjectValues(values, schema || {})
            })
        })
    })
}

function buildProject(project_name) {
  console.log('Beep beep building ' + project_name)

  return postData(getApiUrl('build'), {
    path: `projects/${project_name}`
  })
}

function openProject(name) {
  getProjectValues(name)
  .then((values) => {
    console.log(values) 
    renderProjectValues(name, values) 
    renderBuildButton(name)
  })
}

function renderProjectsList(data) {
  const div = document.getElementById('div_container')
  div.innerHTML += data.map(d => {
    const 
      classes = "w3-panel w3-card w3-gray nopointerevents",
      event   = `onclick="openProject('${d.name}')"`,
      text    = `${d.name} - ${d.description}`
    return `<div ${event} class="${classes}"><p>${text}</p></div>`
  }).join('\n')
}

ngcApiCall(`project/ls`)
  .then((msg) => {
    renderProjectsList(msg.data)
  });

