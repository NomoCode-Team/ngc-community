import * as THREE from "three"

/**
 * @brief Sets new size for ThreeJS Renderer
 * @param renderer ThreeJS Renderer for which size should be set
 * @param width new renderer width
 * @param height new renderer height
 * @speak set ThreeJS Renderer {renderer} size to {width} x {height} 
 * @notest
 */
export default function setSize(renderer: THREE.Renderer, width:number, height:number) {
    renderer.setSize(width, height)
}

