import { forwardRef, useImperativeHandle, useRef } from "react";
import Rive, { Fit, RiveRef } from "rive-react-native";

import type { RiveComponentRef } from "./RiveComponent";

function RiveComponent(_: {}, ref: React.Ref<RiveComponentRef>) {
  const riveComponentRef = useRef<RiveRef>(null);

  useImperativeHandle(ref, () => ({
    triggerBump: () => {
      riveComponentRef.current?.fireState("bumpy", "bump");
    },
  }));

  return (
    <Rive
      ref={riveComponentRef}
      resourceName="vehicles"
      fit={Fit.Cover}
      style={{
        width: "100%",
        height: "100%",
      }}
      stateMachineName="bumpy"
    />
  );
}

export default forwardRef(RiveComponent);
