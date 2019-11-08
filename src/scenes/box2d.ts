import * as planck from 'planck-js';
import Renderer, { Runner } from 'planck-renderer';
import * as phaser from 'phaser';

const DEFAULT_CONFIG = {
    pixelToMetres: 32,
    gravity: planck.Vec2(0, 0),
    debug: false
};
Object.freeze(DEFAULT_CONFIG);

export default class Box2d {
    world: planck.World;
    pixelToMetres: number;
    debug: boolean;
    canvas: any;

    constructor(config: object = {}) {
        const currentConfig = Object.assign({}, DEFAULT_CONFIG, config);
        this.pixelToMetres = currentConfig.pixelToMetres;
        this.debug = currentConfig.debug;
        this.world = new planck.World(currentConfig.gravity);
        this.canvas = document.querySelector('canvas');
        const context = this.canvas.getContext('2d');

        const renderer = new Renderer(this.world, context, { strokeStyle: { static: 'white' } });
        const runner = new Runner(this.world);

        runner.start(() => renderer.renderWorld());
    }

    createStaticBox(x: number, y: number, width: number, height: number) {
        const body = this.world.createBody();
        body.createFixture(new planck.Box(width / 2 / this.pixelToMetres, height / 2 / this.pixelToMetres));
        body.setPosition(new planck.Vec2((x + width / 2) / this.pixelToMetres, (y + height / 2) / this.pixelToMetres));
    }

    update(delta) {
        this.world.step(delta);
        this.world.clearForces();
    }
}

