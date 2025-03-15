import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(15)}rem;
  align-items: center;
`;
