import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(10)}rem;
`;
