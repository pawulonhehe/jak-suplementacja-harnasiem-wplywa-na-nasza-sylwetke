import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox } from "@react-three/cannon";
import styled from "styled-components";

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 0.1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 5, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

const Plane = () => {
  const [ref] = useBox(() => ({ mass: 0, position: [0, 0, 0] }));
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  );
};

export default function App() {
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
  `;

  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </Container>
  );
}
