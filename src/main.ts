import * as Phaser from 'phaser';
import Scenes from './scenes'

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'L_ai_fe',

    type: Phaser.AUTO,

    width: window.innerWidth,
    height: window.innerHeight,

    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        },
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Scenes,
    parent: 'game',
    backgroundColor: '#aaaaaa',
};

export const game = new Phaser.Game(gameConfig);
