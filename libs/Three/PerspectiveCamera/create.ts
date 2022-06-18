import * as THREE from "three"

/**
 * @brief Creates new ThreeJS PerspectiveCamera
 * @return ThreeJS PerspectiveCamera
 * @param fov field of view
 * @param aspect aspect ratio
 * @speak create ThreeJS PerspectiveCamera with field of view {fov} and aspect ration {aspect}
 * @notest
 */
export default function create(fov:number,aspect:number) : THREE.PerspectiveCamera {
    return new THREE.PerspectiveCamera(fov,aspect)
}

