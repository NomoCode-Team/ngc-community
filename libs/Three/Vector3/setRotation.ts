import * as THREE from "three"

/**
 * @brief sets new rotation for ThreeJS Object3D
 * @param object object for which rotation should be set
 * @param rotation new 3D rotation coordinates
 * @speak set ThreeJS object {object} rotation to {rotation}
 * @notest
 */
export default function setPosition(object:THREE.Object3D, rotation:{x:number,y:number,z:number}) {
    object.rotation.x = rotation.x
    object.rotation.y = rotation.y
    object.rotation.z = rotation.z
}

