import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.header`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ConnectionStatus = styled.div<{ $isConnected: boolean }>`
  border-radius: 50%;
  width: ${pxToRem(10)}rem;
  height: ${pxToRem(10)}rem;
  display: inline-block;
  margin-right: 0.5rem;
  background-color: ${(p) => (p.$isConnected ? "#4cd964" : "#ff3b30")};
`;
