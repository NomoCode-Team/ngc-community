import * as ws from "ws"

/**
 * @brief Creates new WebSocket Server
 * @param port port number where server should listen
 * @return WebSocket Server instance
 * @speak create WebSocket Server
 * @notest
 */
export default function create(port:number) : ws.Server {
    return new ws.Server({port: port})
}

