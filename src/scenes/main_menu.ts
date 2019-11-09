
import { Scene } from 'phaser'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
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