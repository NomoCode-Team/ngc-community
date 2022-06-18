import * as ws from "ws"

/**
 * @brief Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventNameand listener will result in the listener being added, and called, multiple times.
 * @param server WebSocket Server
 * @param event name of the event to listen to
 * @param callback listener callback function
 * @speak set WebSocket Server {server} on {event} callback to {callback}
 * @notest
 */
export default function on(server: ws.Server, event: string, callback: (...args: any) => void) {
    server.on(event,callback)
}

