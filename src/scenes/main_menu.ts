
import { Scene } from 'phaser'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'MainMenu'
  };

export class MainMenuScene extends Scene {

    constructor() {
        super(sceneConfig);
    }

    create() {
        this.add.text(100, 50, 'Welcome!', { fill: '#FFFFFF' }).setFontSize(24);
    }
}