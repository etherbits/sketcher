import React, { useEffect, useRef } from "react";
import { SCanvas } from "./Canvas.styled";

export const Canvas = ({ brushColor, shouldClear, toggleShouldClear }) => {
  const canvasRef = useRef(null);

  const resizeCanvas = () => {
    const { innerWidth, innerHeight } = window;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const imgData = ctx.getImageData(0, 0, innerWidth, innerHeight);

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    ctx.putImageData(imgData, 0, 0);
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

  const clearCanvas = () => {
    const { innerWidth, innerHeight } = window;
    const ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(0, 0, innerWidth, innerHeight);
  };

  useEffect(() => {
    if (shouldClear) {
      clearCanvas();
      toggleShouldClear();
      return;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [shouldClear]);

  return (
    <SCanvas
      ref={canvasRef}
      onMouseDown={handleStartDraw}
      onMouseMove={handleDraw}
    />
  );
};
