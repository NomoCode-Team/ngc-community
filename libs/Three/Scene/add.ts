import * as THREE from "three"

/**
 * @brief Creates new ThreeJS Scene
 * @param scene scene to which add object
 * @param object ThreeJS Object3D to add
 * @speak add ThreeJS Object3D {object} to {scene}
 * @notest
 */
export default function add(scene:THREE.Scene, object:THREE.Object3D<THREE.Event>){
    scene.add(object)
}

