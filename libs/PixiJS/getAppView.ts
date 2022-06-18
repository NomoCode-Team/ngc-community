import * as PIXI from "pixi.js";

/**
 * @brief Gets Pixi application view ( canvas )
 * @param app Pixi application to get view from
 * @return Pixi application view HTMLCanvasElement
 * @speak get Pixi application view from {app}
 * @notest
 */
export default function getAppView(app: PIXI.Application) : HTMLCanvasElement {
    return app.view
}

