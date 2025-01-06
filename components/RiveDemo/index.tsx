import { SafeAreaView } from "react-native-safe-area-context";
import RiveComponent, { RiveComponentRef } from "./RiveComponent";
import { Button } from "react-native";
import { useRef } from "react";

export default function RiveDemo() {
  const riveComponentRef = useRef<RiveComponentRef>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        title="Bump"
        onPress={() => {
          riveComponentRef.current?.triggerBump();
        }}
      />
      <RiveComponent ref={riveComponentRef} />
    </SafeAreaView>
  );
}
