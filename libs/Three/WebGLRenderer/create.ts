import * as THREE from "three"

/**
 * @brief Creates new ThreeJS WebGLRenderer
 * @return ThreeJS WebGLRenderer
 * @speak create ThreeJS WebGLRenderer
 * @notest
 */
export default function create() : THREE.WebGLRenderer {
    return new THREE.WebGLRenderer({ antialias: true })
}

