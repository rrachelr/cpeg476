import Phaser from "phaser";
import MainScene from "./scenes/mainScene";
import PreloadScene from "./scenes/preloadScene";

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

export const CONFIG = {
    title: "CPEG476 Project 1",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [PreloadScene, MainScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
