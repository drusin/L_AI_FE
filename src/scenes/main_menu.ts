
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

        this.box2d.createStaticBox(400, 300, 32, 32);
        this.add.image(400, 300, 'spider-bot');

        // possible example of how to draw debug lines:
        const graphics = this.add.graphics();
        graphics.lineStyle(5, 0xFF00FF, 1.0);
        // graphics.fillStyle(0xFFFFFF, 1.0);
        // graphics.fillRect(50, 50, 400, 200);
        graphics.strokeRect(50, 50, 400, 200);
        graphics.strokeRect(50, 50, 200, 200);
        // graphics.clear();
    }

    update(time: number, delta: number): void {
        this.box2d.update(delta);
    }
}
