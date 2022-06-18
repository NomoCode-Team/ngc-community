import * as THREE from "three"

/**
 * @brief Creates new ThreeJS Mesh
 * @param geometry geometry for the mesh
 * @param material material for the mesh
 * @return ThreeJS Mesh
 * @speak create ThreeJS Mesh from geometry {geometry} and material {material}
 * @notest
 */
export default function create(geometry:any, material:any) : THREE.Mesh {
    return new THREE.Mesh(geometry, material)
}

