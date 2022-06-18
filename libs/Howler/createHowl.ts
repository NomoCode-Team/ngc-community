import {Howl, Howler} from "howler";


/**
 * @brief Create an audio group controller.
 * @param options Passed in properties for this group.
 */
export default function createHowl(options:Object):Howl{
    return new Howl(options)
}

