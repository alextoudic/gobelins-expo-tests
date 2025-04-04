import { useFrame } from "./lib/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Box as R3FBox } from "./lib/drei";

export default function Box() {
  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!boxRef.current) return;

    boxRef.current.rotation.y += 0.05;
    boxRef.current.rotation.x += 0.025;
  });

  return (
    <R3FBox ref={boxRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshNormalMaterial />
    </R3FBox>
  );
}
