import React, { useEffect, useRef } from "react";
import { SCanvas } from "./Canvas.styled";

const setEraserConfig = (ctx) => {
  ctx.lineWidth = 24;
  ctx.lineCap = "round";
  ctx.globalCompositeOperation = "destionation-out";
  ctx.strokeStyle = "#fff";
};

const setBrushConfig = (ctx, color) => {
  ctx.lineWidth = 6;
  ctx.lineCap = "round";
  ctx.strokeStyle = `${color}`;
};

export const Canvas = ({
  brushColor,
  inEraserMode,
  shouldClear,
  toggleShouldClear,
}) => {
  const canvasRef = useRef(null);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const imgData = ctx.getImageData(0, 0, innerWidth, innerHeight);

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    ctx.putImageData(imgData, 0, 0);
  };

  const setContextConfig = (ctx) => {
    if (inEraserMode) return setEraserConfig(ctx);

    setBrushConfig(ctx, brushColor);
  };

  const handleStartDraw = (e) => {
    const { clientX, clientY } = e;
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();
    setContextConfig(ctx);
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

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldClear]);

  return (
    <SCanvas
      ref={canvasRef}
      onMouseDown={handleStartDraw}
      onMouseMove={handleDraw}
      inEraserMode={inEraserMode}
    />
  );
};
