import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  column-gap: ${pxToRem(30)}rem;
  margin-top: ${pxToRem(30)}rem;
`;
