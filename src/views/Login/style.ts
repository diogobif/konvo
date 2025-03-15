import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`;
