import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(10)}rem;
`;
