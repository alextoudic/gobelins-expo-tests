import Rive, {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { forwardRef, useImperativeHandle } from "react";

export interface RiveComponentRef {
  triggerBump: () => void;
}

function RiveComponent(_: {}, ref: React.Ref<RiveComponentRef>) {
  const { rive, RiveComponent } = useRive({
    src: require("../../rive/vehicles.riv"),
    stateMachines: "bumpy",
    layout: new Layout({
      fit: Fit.Cover,
    }),
    autoplay: true,
  });

  const bumpInput = useStateMachineInput(rive, "bumpy", "bump");

  useImperativeHandle(ref, () => ({
    triggerBump: () => {
      bumpInput?.fire();
    },
  }));

  return (
    <RiveComponent
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default forwardRef(RiveComponent);
