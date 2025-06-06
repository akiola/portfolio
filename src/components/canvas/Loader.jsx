import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
const { progress } = useProgress();

    return (
        <Html center>
        <span className="text-white font-bold">{progress.toFixed(0)}% loaded</span>
        </Html>
    );
};

export default CanvasLoader;
