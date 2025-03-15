import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  column-gap: ${pxToRem(15)}rem;
`;
