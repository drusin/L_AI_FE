
import { GameObjects, Scene, Types } from 'phaser';
import lAIfe from '../assets/img/LaIFE.png';

const sceneConfig: Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'MainMenu'
  };

export class MainMenuScene extends Scene {
    private graphics: GameObjects.Graphics;

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.image('lAIfe_logo', lAIfe);
    }

    create() {
        const { width, height } = this.sys.game.canvas;
        this.graphics = this.scene.scene.add.graphics();

        const image = this.add.image(width * 0.90, height * 0.25, "lAIfe_logo");
        image.setOrigin(1, 0);
        image.setScale(2);

        // this.debug(this.graphics, image);

        const start = this.add.text(width * 0.90, height * 0.60, 'Start...', { fill: '#FFFFFF' });
        start.setOrigin(1, 0);
        start.setFontSize(32);

        // this.debug(this.graphics, start);
    }

    private debug(graphics: GameObjects.Graphics, rect: GameObjects.Components.GetBounds) {
        const bounds = rect.getBounds();

        graphics.lineStyle(1, 0xFF0000);
        graphics.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
    }
}
