
import { Scene } from 'phaser'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'Asteroid'
  };

export class AsteroidScene extends Scene {

    constructor() {
        super(sceneConfig);
    }

    preload() {
        this.load.image('stars', 'src/assets/background/stars.png');
        this.load.image('mars', 'src/assets/background/mars.png');
        this.load.image('crater', ['src/assets/background/crater.png', 'src/assets/background/crater_normal.png']);
    }

    create() {
        this.add.image(300, 200, 'stars');
        this.add.image(400, 255, 'mars');//.setPipeline('Light2D');
        this.add.image(400, 255, 'crater').setPipeline('Light2D');
        this.lights.addLight(100, 200, 600, 0xff0000, 0.4);
        this.lights.setAmbientColor(0x333300);
        this.lights.enable();
    }
}