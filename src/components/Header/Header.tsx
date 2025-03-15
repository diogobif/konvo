import React from "react";
import { Container, ConnectionStatus } from "./style";
import { useSocketService } from "../../hooks/useSocketService";

type Props = {
  handleDisconect(): void;
};
export function Header(props: Props) {
  const { isConnected } = useSocketService();
  return (
    <Container>
      <h1>Collaborative Workspace</h1>
      <div>
        <ConnectionStatus $isConnected={isConnected} />
        {!!isConnected && (
          <button type="button" onClick={props.handleDisconect}>
            EXIT
          </button>
        )}
      </div>
    </Container>
  );
}
