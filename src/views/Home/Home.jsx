import React, { useState } from "react";
import {
  SBottomBar,
  SInput,
  SPage,
  SRoleText,
  SSideBar,
  STopBar,
  SUIOverlay,
} from "./Home.styled";
import { Canvas } from "../../components/Canvas";
import { ColorPicker } from "../../components/ColorPicker/ColorPicker";

const colors = ["#000", "#f44 ", "#40f", "#4fa", "#af4"];

export const Home = () => {
  const [brushColor, setBrushColor] = useState(colors[0]);
  const [shouldClear, setShouldClear] = useState(false);

  const handleColorChange = (color) => {
    setBrushColor(color);
  };

  const toggleShouldClear = () => {
    setShouldClear(!shouldClear);
  };

  return (
    <SPage>
      <Canvas
        brushColor={brushColor}
        shouldClear={shouldClear}
        toggleShouldClear={toggleShouldClear}
      />
      <SUIOverlay>
        <STopBar>
          <h1>_ _ _ _ _</h1>
          <span>time left: 00:25 </span>
        </STopBar>
        <SSideBar>
          <SInput type={"text"} placeholder="some guess" />
        </SSideBar>
        <SBottomBar>
          <SRoleText>You are drawing</SRoleText>
          <ColorPicker colors={colors} onChange={handleColorChange} />
          <button onClick={toggleShouldClear}>clear</button>
        </SBottomBar>
      </SUIOverlay>
    </SPage>
  );
};
