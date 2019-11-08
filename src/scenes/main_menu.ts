
import { Scene } from 'phaser';
import Box2d from './box2d';

import spiderBotSpritesheet from '../assets/sprites/Spider.png';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'MainMenu'
  };

export class MainMenuScene extends Scene {
    box2d: Box2d;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.spritesheet(
            'spider-bot', 
            spiderBotSpritesheet, 
            { frameWidth: 32, frameHeight: 32 }
        );
    }

    create() {
        this.add.text(100, 50, 'Welcome!', { fill: '#FFFFFF' }).setFontSize(24);
        this.box2d = new Box2d();
        this.box2d.createStaticBox(10, 30, 100, 25);
        this.box2d.createStaticBox(100, 300, 17, 76);
        this.add.image(400, 300, 'spider-bot');
    }

    update(time: number, delta: number): void {
        this.box2d.update(delta);
    }
}