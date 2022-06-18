import * as ws from "ws"

/**
 * @brief Sends data through WebSocket
 * @param socket WebSocket
 * @param data data to be sent
 * @speak send {data} through WebSocket {socket}
 * @notest
 */
export default function send(socket: ws.WebSocket, data:any){
    socket.send(data)
}

