import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const StarsBG = () => {
    const starRef = useRef();

    useEffect(() => {
    resetStar();
    }, []);

    const resetStar = () => {
        if (starRef.current) {
        starRef.current.position.set(
        Math.random() * 200 - 100,
        Math.random() * 100 - 50,
        Math.random() * -100
        );
        }
    };

    useFrame((_, delta) => {
        if (starRef.current) {
        starRef.current.position.x -= 80 * delta;
        starRef.current.position.y -= 40 * delta;

        if (starRef.current.position.x < -100 || starRef.current.position.y < -50) {
            resetStar();
        }
        }
    });

    return (
        <mesh ref={starRef}>
        <sphereGeometry args={[0.1, 8, 8]} /> 
        <meshBasicMaterial color="white" />
        </mesh>
    );
};

export default StarsBG;
