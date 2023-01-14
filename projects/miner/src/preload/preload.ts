export default (getContext: any) => {
    // General
    getContext.load.image("player", "assets/ship.gif");

    // Backgrounds
    getContext.load.image("background", "assets/backgrounds/background.png");
    getContext.load.image("menuBackground", "assets/Backgrounds/menuBackground.png");
    getContext.load.image("factoryBackground", "assets/Backgrounds/factory_background.png");

    // UI
    getContext.load.image("homeButton", "assets/UI/homeButton.png");
    getContext.load.image("convert", "assets/UI/convert.png");
    
    // Logos 
    getContext.load.image("discord", "assets/Logos/discord-logo.png");
    getContext.load.image("factoryLogo", "assets/Logos/factory.png");

    //Planets
    getContext.load.image("earth", "assets/Planets/earth.png");
    getContext.load.image("venus", "assets/Planets/venus.png");
    getContext.load.image("sun", "assets/Planets/sun.png");
    getContext.load.image("mercury", "assets/Planets/mercury.png");
    getContext.load.image("mars", "assets/Planets/mars.png");
    getContext.load.image("jupiter", "assets/Planets/jupiter.png");
    getContext.load.image("saturn", "assets/Planets/saturn.png");
    getContext.load.image("uranus", "assets/Planets/uranus.png");
    getContext.load.image("neptune", "assets/Planets/neptune.png");

    //Keys
    getContext.load.image("increase", "assets/UI/keys/increase.png")
    getContext.load.image("turnLeft", "assets/UI/keys/turnLeft.png")
    getContext.load.image("turnRight", "assets/UI/keys/turnRight.png")
    getContext.load.image("brake", "assets/UI/keys/brake.png")
}

