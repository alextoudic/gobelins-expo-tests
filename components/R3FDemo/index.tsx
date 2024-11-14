import { Canvas } from "./lib/fiber";
import Box from "./Box";

export default function ThreeDemo() {
  return (
    <Canvas camera={{ position: [2, 5, 5], fov: 70 }}>
      <color attach="background" args={[0x6ad6f0]} />
      <ambientLight color={0x101010} />
      <pointLight intensity={1.1} position={[0.5, 0, 0.866]} />
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />

      <Box />
    </Canvas>
  );
}
