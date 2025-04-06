import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${pxToRem(15)}rem;

  max-width: ${pxToRem(400)}rem;
  margin: ${pxToRem(32)}rem auto;
  padding: ${pxToRem(32)}rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-align: center;
`;
