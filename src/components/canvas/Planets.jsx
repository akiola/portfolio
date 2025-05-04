import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Planet = ({ orbitRadius, orbitSpeed, size, color, initialAngle = 0 }) => {
    const planet = useRef();
    const [angle, setAngle] = useState(initialAngle);

    useFrame((_, delta) => {
        setAngle((prev) => prev + orbitSpeed * delta);
        if (planet.current) {
        const x = orbitRadius * Math.cos(angle);
        const z = orbitRadius * Math.sin(angle);
        planet.current.position.set(x, 0, z);
        planet.current.rotation.y += 0.5 * delta; 
        }
    });

    return (
        <mesh ref={planet}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default Planet;
