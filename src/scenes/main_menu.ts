
import { Scene } from 'phaser';
import Box2d from './box2d';

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

    create() {
        this.add.text(100, 50, 'Welcome!', { fill: '#FFFFFF' }).setFontSize(24);
        this.box2d = new Box2d();
        this.box2d.createStaticBox(10, 10, 100, 5);
    }

    update(time: number, delta: number): void {
        this.box2d.update(delta);
    }
}