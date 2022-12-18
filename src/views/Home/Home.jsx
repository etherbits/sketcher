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
  const [inEraserMode, setInEraserMode] = useState(false);
  const [shouldClear, setShouldClear] = useState(false);

  const handleColorChange = (color) => {
    setInEraserMode(false);
    setBrushColor(color);
  };

  const handleClearToggle = () => {
    setShouldClear(!shouldClear);
  };

  const handleEraserToggle = () => {
    setInEraserMode(!inEraserMode);
  };

  return (
    <SPage>
      <Canvas
        brushColor={brushColor}
        inEraserMode={inEraserMode}
        shouldClear={shouldClear}
        toggleShouldClear={handleClearToggle}
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
          <button onClick={handleEraserToggle}>eraser</button>
          <button onClick={handleClearToggle}>clear</button>
        </SBottomBar>
      </SUIOverlay>
    </SPage>
  );
};
