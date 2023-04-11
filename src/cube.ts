import { Mesh, MeshBuilder, PhysicsImpostor, Vector3 } from '@babylonjs/core'
import { scene } from './scene'

export function makeCube(): Mesh {
    const cube: Mesh = MeshBuilder.CreateBox('cube', { size: 0.5 })
    cube.position = new Vector3(0, 1, 0)

    cube.physicsImpostor = new PhysicsImpostor(
        cube,
        PhysicsImpostor.BoxImpostor,
        {
            mass: 1,
            restitution: 0.9,
        },
        scene
    )

    return cube
}
