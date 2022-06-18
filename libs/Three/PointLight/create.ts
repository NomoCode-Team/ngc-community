import * as THREE from "three"

/**
 * @brief Creates new ThreeJS PointLight
 * @param color light color
 * @param intensity light intensity
 * @return ThreeJS PointLight
 * @speak create ThreeJS PointLight with color {color} and intensity {intensity}
 * @notest
 */
export default function create(color:number, intensity:number) : THREE.PointLight {
    return new THREE.PointLight(color, intensity)
}

