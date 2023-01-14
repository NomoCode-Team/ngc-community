import Earth from "./Planets/earth";
import Venus from "./Planets/venus";
import Sun from "./Planets/sun"
import Mercury from "./Planets/mercury";
import Mars from "./Planets/mars";
import Jupiter from "./Planets/jupiter";
import Saturn from "./Planets/saturn";
import Uranus from "./Planets/uranus";
import Neptune from "./Planets/neptune";

export default (getContext: any) => {
    Earth(getContext)
    Venus(getContext)
    Sun(getContext)
    Mercury(getContext)
    Mars(getContext)
    Jupiter(getContext)
    Saturn(getContext)
    Uranus(getContext)
    Neptune(getContext)
}

