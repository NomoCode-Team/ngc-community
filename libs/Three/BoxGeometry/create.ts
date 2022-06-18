import * as THREE from "three"

/**
 * @brief Creates new ThreeJS BoxGeometry
 * @param width width of the box
 * @param height height of the box
 * @param depth depth of the box
 * @return ThreeJS BoxGeometry
 * @speak create ThreeJS BoxGeometry with size {width} x {height} x {depth}
 * @notest
 */
export default function create(width:number, height:number, depth:number) : THREE.BoxGeometry {
    return new THREE.BoxGeometry(width, height, depth)
}

