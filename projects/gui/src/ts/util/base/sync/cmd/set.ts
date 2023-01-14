/**
 * Sets property value. If property does not exist, it will be created
 * You can specify deeply nested properties by joining properties names with dot
 * @param {Object} obj Object in which look the property 
 * @param {string} prop_path path to the property inside object
 * @param {any} value value to be set
 * @returns {Object} Updated Object
 * 
*/
export function cmd_setProperty(
  obj: Object, 
  prop_path: string, 
  value: any
) {

  const props = prop_path.split('.').map( v => v.trim() )
  let ref: {[k: string]: any} = obj

  for(var i = 0; i< props.length; ++i) {

      const prop = props[i]

      if(!ref.hasOwnProperty(prop)) {
        ref[prop] = { }
      }

      if(i === props.length - 1) {
        ref[prop] = value
      }

      ref = ref[prop]
  }

  return obj
}