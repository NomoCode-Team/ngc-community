import * as THREE from "three"

/**
 * @brief Renders scene
 * @param renderer ThreeJS Renderer which should render scene
 * @param scene scene to render
 * @param camera camera used for rendering scene
 * @speak render ThreeJS scene {scene} with renderer {renderer} and camera {camera}
 * @notest
 */
export default function render(renderer: THREE.Renderer, scene:THREE.Scene, camera:THREE.Camera) {
    renderer.render(scene,camera)
}

