import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Wrapper = styled.div`
  width: ${pxToRem(100)}rem;
  height: ${pxToRem(100)}rem;

  img {
    border-radius: 100px;
    object-fit: scale-down;
    max-width: ${pxToRem(100)}rem;
    max-height: ${pxToRem(100)}rem;
  }
`;
