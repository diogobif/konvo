import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: ${pxToRem(20)}rem;
  max-width: ${pxToRem(1200)}rem;
  margin: 0 auto;
  padding: ${pxToRem(16)}rem;
`;
