import * as THREE from "three"

/**
 * @brief Sets animation loop for ThreeJS WebGLRenderer
 * @param renderer ThreeJS WebGLRenderer for which animation loop should be set
 * @param callback animation function callback
 * @speak set ThreeJS WebGLRenderer {renderer} animation loop callback to {callback}
 * @notest
 */
export default function setAnimationLoop(renderer: THREE.WebGLRenderer, animation:THREE.XRAnimationLoopCallback) {
    renderer.setAnimationLoop(animation)
}

