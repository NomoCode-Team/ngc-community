import * as THREE from "three"

/**
 * @brief Creates new ThreeJS MeshBasicMaterial
 * @param color a mesh color
 * @return ThreeJS MeshBasicMaterial
 * @speak create ThreeJS MeshBasicMaterial with {color} color
 * @notest
 */
export default function create(color:number) : THREE.MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({color: color})
}

