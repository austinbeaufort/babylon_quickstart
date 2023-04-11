import { Mesh, MeshBuilder, PhysicsImpostor } from '@babylonjs/core'
import { scene } from './scene'

export function makeGround(): Mesh {
    const size = 4
    const ground = MeshBuilder.CreateGround(
        'ground',
        { width: size, height: size },
        scene
    )

    ground.physicsImpostor = new PhysicsImpostor(
        ground,
        PhysicsImpostor.BoxImpostor,
        { mass: 0, restitution: 0.9 },
        scene
    )

    return ground
}
