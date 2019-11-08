import * as Phaser from 'phaser';
import Scenes from './scenes'

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'L_ai_fe',

    type: Phaser.CANVAS,

    width: window.innerWidth,
    height: window.innerHeight,

    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        },
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Scenes,
    parent: 'game',
    backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);

function resizeDebugCanvas(width, height) {
    document.getElementById('debug').setAttribute('width', width);
    document.getElementById('debug').setAttribute('height', height);
}

game.scale.on('resize', (gameSize, baseSize, displaySize) => resizeDebugCanvas(displaySize.width, displaySize.height));