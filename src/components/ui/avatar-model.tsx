// components/AnimatedAvatar.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function AvatarModel() {
  const group = useRef<THREE.Group>(null)
  // Carga el modelo y las animaciones
  const { scene, animations } = useGLTF('/model1.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Reproduce la primera animación disponible
    const firstAction = actions[Object.keys(actions)[0]]
    if (firstAction) {
      firstAction.reset().fadeIn(0.5).play()
    }
  }, [actions])

  return (
    <group ref={group} position={[0, -2.3, 0]} scale={1.8}>
      <primitive object={scene} />
    </group>
  )
}

export default function AnimatedAvatar() {
  return (
    <div className="flex justify-center items-center w-full h-[350px]">
      <div className="w-[320px] h-[350px] flex items-center justify-center">
        <Canvas camera={{ position: [0, -1.8, 3.5], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <AvatarModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  )
}
