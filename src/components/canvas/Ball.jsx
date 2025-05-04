import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from './Loader'

const Ball = (props) => {
const [decal] = useTexture([props.imgUrl])

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={3}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <mesh castShadow receiveShadow scale={3}>
            <icosahedronGeometry args={[1, 2]} /> 
            
            <meshStandardMaterial
            color="#e0e0ff"
            roughness={0.3}
            metalness={0.7}
            polygonOffset
            polygonOffsetFactor={-2}
            flatShading={false}
            />
            
            <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.2}
            map={decal}
            flatShading
            anisotropy={16}
            />
        </mesh>
        </Float>

    )
}

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
        </Canvas>
    )
}

export default BallCanvas
