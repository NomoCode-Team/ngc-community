//@ts-nocheck

import { util_getRandomIntFrom0ToExclusiveMax } from "./util/base/sync/func/random"  

import { CONFIG } from "../global/immutable/config"
import { HTML } from "../global/immutable/html"
import { SETTING } from "../global/immutable/setting"
import { STATE } from "../global/mutable/state"

import { cmd_setProperty } from "../ts/util/base/sync/cmd/set"

//!! - finish adding GLOBAL.msgIfNoDesc, hide description if is this message

// ---------------------------------------------------- //

function renderBuildButton(project_name) {
  const btn_build = document.getElementById('btn_build') as HTMLButtonElement
  btn_build.onclick = () => {
    buildProject(project_name)
  }
}

function getApiUrl(endpoint) { return `http://${CONFIG.compiler_domain_ip_address}/api/${endpoint}`}

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
  })
  return response.json()
}


function saveValue(name: string, path) {
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

const INPUT_RENDERERS_MAP = new Map(
  [
    ['string', (project_name, project_value, input_id) => {
      return `<input id="${input_id}" class="form-control" value="${project_value.value}" type='text'/>`
      // code with apply button: return `<input id="${input_id}" class="form-control" value="${project_value.value}" type='text'/><button class="btn btn-primary" onclick="saveValue('${project_value.name}','projects/${project_name}')">Apply</button>`
    }],
    ['boolean', (project_name, project_value, input_id) => {
      return `<input id="${input_id}" type='checkbox' ${project_value.value ? 'checked' : ''}>`
      // code with apply button: return `<input id="${input_id}" type='checkbox' ${project_value.value ? 'checked' : ''}><button class="btn btn-primary" onclick="saveValue('${project_value.name}','projects/${project_name}')">Apply</button>`
    }],
    ['unknown', (project_name, project_value, input_id) => { //!! - add handler to catch unknown throw error
      return `<p>unknown value type: <span style="color:red">${project_value.type}</span></p>`
    }]
  ]
)

const INPUT_EXTRACTORS = new Map(
  [
    ['string', (input_id: string) => {
      return (document.getElementById(input_id) as HTMLInputElement).value
    }],
    ['boolean', (input_id: string) => {
      return (document.getElementById(input_id) as HTMLInputElement).checked
    }],
    ['unknown', (input_id: string) => {
      return undefined
    }]
  ]
)

function renderProjectValues(project_name, values) {

  const content = values.map(v => {
    const _name = v.name
    const s_title = (v.title) ? `<h5>${v.title}</h5>` : ''
    // const s_name = `<i>${_name}</i>`
    const s_desc = (v.description) ? `<p>${v.description}</p>` : ''
    const s_id = convertProjectNameToId(v.name)

    const input = INPUT_RENDERERS_MAP.get(
      INPUT_RENDERERS_MAP.has(v.type) ? v.type : 'unknown'
    )(project_name, v, s_id)

    // return `${s_title}${s_name}${s_desc}${input}<hr>\n`
    return `${s_title}${s_desc}${input}<hr>\n`
  }).join('')

  HTML.DIV.development.innerHTML = content
}

function convertProjectNameToId(value_name: string): string {
  const s_id = `input.${value_name}`.replaceAll('.', '_')
  return s_id
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
                  const value_canonical_name = name_prefix.join('.')
                  return [{
                    name:        value_canonical_name,
                    title:       _schema.title,
                    description: _schema.description,
                    type:        _schema.type,
                    value:       getProperty(values, value_canonical_name)
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

function buildProject(project_name: string) {
  const values = {}
  STATE.ao_refHTMLConfigProjectValues.forEach(o => {

    const s_id = convertProjectNameToId(o.name)
    const input = INPUT_EXTRACTORS.get(
      INPUT_EXTRACTORS.has(o.type) ? o.type : 'unknown'
    )(s_id)

    cmd_setProperty(values, o.name, input)

  })

  const s_path = `projects/${project_name}`

  postData(getApiUrl('value/set'), {
    name: ".", 
    value: values, 
    path: s_path
  }).then(() => {
    postData(getApiUrl('build'), {
      path: s_path
    })
  })

  console.log('Beep beep building ' + project_name)

}

function openProject(name: string) { //!! - change to be expected name types
  HTML.DIV.inspector.style.display = 'block'
  HTML.H2.selectedProjectName.textContent = name
  getProjectValues(name)
  .then((values) => {
    STATE.ao_refHTMLConfigProjectValues = values
    renderProjectValues(name, values) 
    renderBuildButton(name)
  })
}

function toggleSelectedParentDivCardClasses(name: string) { //!! - change to be expected name types
  const div_card = document.getElementById(`card-parent-div-${name}`)
  if (STATE.selectedCardProjectElem !== null) {
    STATE.selectedCardProjectElem.classList.remove("selected-project-card")
    STATE.selectedCardProjectElem.classList.add("unselected-project-card")
  }
  div_card.classList.add("selected-project-card") //!! - change to logger mutation function for addingClass
  div_card.classList.remove("unselected-project-card") //!! - change to logger mutation function removingClass
  STATE.selectedCardProjectElem = div_card
}

function renderProjectsList(data) {
  const div = HTML.DIV.container
  div.innerHTML += data.map(d => {
    const n_random = util_getRandomIntFrom0ToExclusiveMax(
      SETTING.n_totalExclusiveMaxLetterAvatarBackgroundsProvided
    )
    const n_length = d.name.length
    let s_chars = ''
    switch (true) {
      case (n_length === 0):
        console.error(`expected char length > 0`)
        break
      case (n_length === 1):
        s_chars = d.name.slice(0, 1)
        break
      case (n_length > 1):
        s_chars = d.name.slice(0, 2)
        break
      default:
        console.error(`unexpected error`)
    }
    const s_upperCased = s_chars.toUpperCase()
    const s_lettersAndNum = `${s_upperCased}${n_random}`
    const URL = `https://letters.noticeable.io/${s_lettersAndNum}.svg`
    const div_card_current = `card-parent-div-${d.name}`
    return `
      <div id="${div_card_current}" class="card unselected-project-card" toggleSelectedParentDivCardClasses('${d.name}');" style="width: 18rem;">
        <img class="card-img-top" src="${URL}" alt="project_avatar_image_${s_lettersAndNum}_svg" style="border-radius: 8px; width: 80px;">
        <div class="card-body">
          <h5 class="card-title">${d.name}</h5>
          <p class="card-text">${d.description}</p>
        </div>
      </div>
      `
  }).join('\n')

  data.forEach(d => {
    const div_card_current = document.getElementById(`card-parent-div-${d.name}`) as HTMLDivElement
    div_card_current.addEventListener("click", function(){
      openProject(`${d.name}`)
      STATE.s_selectedProject = d.name
    })
  })

  STATE.a_NGCProjectNames = data.map(d => d.name)
  
}

ngcApiCall(`project/ls`)
  .then((msg) => {
    renderProjectsList(msg.data)
  })