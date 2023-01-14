import { Scene, Game, Input } from 'phaser';

import { Startscreen } from './startscreen';

import World from "./world";
import controls from "./controls"

import Preload from "./preload/preload"

import Player from "./create/Entity/player";

import planets from './create/Entity/planets';

import Factory from "./create/UI/factory";
import PauseMenu from "./create/UI/pausemenu";
import Stats from "./create/UI/stats";

import Player_Update from "./update/Entity/player";

import Stats_Update from "./update/UI/stats";
import Factory_Update from "./update/UI/factory";

export class GameClient extends Scene
{
    getData: any;
    speedText = String;
    waterText = String;
    fuelText = String;
    StaticInts = {
          playerDepth: 3,
          planetDepth: 2,
    };
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        Preload(this);
    }

    create()
    {
        if (!localStorage.getItem("gameData")) {
            localStorage.setItem("gameData", JSON.stringify({ 'oxygen': 0, 'hydrogen': 0, 'water': 0, 'iron': 0, 'counter': 0, 'player_x': 3000, 'player_y': 1650 }));
        }
        this.getData = Object.assign({}, JSON.parse(localStorage.getItem("gameData") || '{}'));
        setInterval(
            () => { localStorage.setItem("gameData", JSON.stringify(this.getData)) }
            , 1);  
    PauseMenu(this);
    Stats(this);

    World(this); 
    controls(this);

    Player(this);
    planets(this);
    Factory(this);
     }

    update () {
      Player_Update(this); 
      Stats_Update(this);
      Factory_Update(this);
    }
}

const game_config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scaleMode: Phaser.Scale.RESIZE,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: [ Startscreen, GameClient ]
};

new Game(game_config);