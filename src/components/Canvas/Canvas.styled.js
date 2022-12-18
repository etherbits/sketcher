import styled from "styled-components";

export const SCanvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: ${(props) =>
    props.inEraserMode
      ? 'url("/cursors/eraserCursor.svg") 12 12, auto'
      : 'url("/cursors/brushCursor.svg") 8 8, auto'};
`;
