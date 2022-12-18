import styled from "styled-components";

export const SPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export const SUIOverlay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  padding: 32px;
  pointer-events: none;
`;

export const STopBar = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  pointer-events: all;
  height: fit-content;
  width: fit-content;
`;

export const SSideBar = styled.div`
  grid-area: 1 / 4 / 5 / 5;
  margin-top: auto;
  pointer-events: all;
`;

export const SInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
`

export const SBottomBar = styled.div`
  grid-area: 4 / 1 / 5 / 4;
  display: flex;
  align-items: center;
  margin-top: auto;
  width: fit-content;
  gap: 64px;
  pointer-events: all;
`;

export const SRoleText = styled.span`
  font-size: 1.5rem;
`;
