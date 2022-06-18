import * as THREE from "three"

/**
 * @brief sets new value for ThreeJS Vector3
 * @param vector vector for which set value
 * @param value new 3D coordinate
 * @speak set ThreeJS Vector3 {vector} value to {value}
 * @notest
 */
export default function setPosition(vector:THREE.Vector3, value:{x:number,y:number,z:number}) {
    vector.x = value.x
    vector.y = value.y
    vector.z = value.z
}

