import {
    Engine,
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    Color4,
} from '@babylonjs/core'

function createCamera(canvas: HTMLCanvasElement, scene: Scene): void {
    const alpha = Math.PI / 4
    const beta = Math.PI / 3
    const radius = 8
    const target: Vector3 = new Vector3(0, 0, 0)

    new ArcRotateCamera('Camera', alpha, beta, radius, target, scene).attachControl(
        canvas,
        true
    )
}

function createLight(scene: Scene): void {
    new HemisphericLight('light', new Vector3(1, 1, 0), scene)
}

function setBackground(scene: Scene): void {
    scene.clearColor = new Color4(0, 0, 0, 1)
}

function createCanvas() {
    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.id = 'gameCanvas'
    document.body.appendChild(canvas)
    return canvas
}

function makeScene(): Scene {
    const scene = new Scene(engine)
    createCamera(canvas, scene)
    createLight(scene)
    setBackground(scene)

    return scene
}

export const canvas = createCanvas()
export const engine = new Engine(canvas, true)
export const scene = makeScene()
