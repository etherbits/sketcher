import React, { useEffect, useRef } from "react";
import { SCanvas } from "./Canvas.styled";

export const Canvas = ({ brushColor }) => {
  const canvasRef = useRef(null);

  const initCanvas = () => {
    const { innerWidth, innerHeight } = window;
    const canvas = canvasRef.current;

    canvas.width = innerWidth;
    canvas.height = innerHeight;
  };

  const handleStartDraw = (e) => {
    const { clientX, clientY } = e;
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = `${brushColor}`;

    ctx.moveTo(clientX, clientY);
  };

  const handleDraw = (e) => {
    if (e.buttons !== 1) return;

    const { clientX, clientY } = e;
    const ctx = canvasRef.current.getContext("2d");

    ctx.lineTo(clientX, clientY);
    ctx.stroke();
  };

  useEffect(() => {
    initCanvas();
  }, []);

  return (
    <SCanvas
      ref={canvasRef}
      onMouseDown={handleStartDraw}
      onMouseMove={handleDraw}
    />
  );
};
