import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const CustomInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: ${pxToRem(10)}rem;
  width: 100%;
`;
