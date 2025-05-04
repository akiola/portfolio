import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload} from '@react-three/drei';
import Ball from './Ball';
import CanvasLoader from '../Loader';
import { technologies } from '../../constants';

const TechCanvas = () => {
    return (
        <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            {technologies.map((tech, idx) => (
            <group key={tech.name} position={[idx * 2 - 5, 0, 0]}>
                <Ball imgUrl={tech.icon} />
            </group>
            ))}
        </Suspense>
        <Preload all />
        </Canvas>
    );
};

export default TechCanvas;
