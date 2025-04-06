import React from "react";
import { Container, ConnectionStatus } from "./style";
import { useSocketService } from "../../hooks/useSocketService";
import { UserStatusEnum } from "../../stores/Workspace";

type Props = {
  handleDisconect(): void;
  handleUpdateUserStatus(newStatus: UserStatusEnum): void;
};

export function Header(props: Props) {
  const { isConnected } = useSocketService();
  return (
    <Container>
      <h1>Collaborative Workspace</h1>
      <div>
        <ConnectionStatus $isConnected={isConnected} />
        {isConnected && (
          <>
            <select
              onChange={(e) =>
                props.handleUpdateUserStatus(e.target.value as UserStatusEnum)
              }
            >
              <option value={UserStatusEnum.ACTIVE}>ACTIVE</option>
              <option value={UserStatusEnum.NOT_DISTURB}>NOT DISTURB</option>
              <option value={UserStatusEnum.AWAY}>AWAY</option>
            </select>

            <button type="button" onClick={props.handleDisconect}>
              EXIT
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
