import React from "react";
import { useEffect } from "react";
import { Login } from "../../views/Login";
import { useSocketService } from "../../hooks/useSocketService";
import { Home } from "../../views/Home";
import { Header } from "../Header/Header";
import { useUserName } from "../../stores/User/useUserStore";
import { UserStatusEnum } from "../../stores/Workspace";
import { Container } from "./style";

export function App() {
  const {
    handleConnectToServer,
    handleDisconnect,
    hasJoinedWorkspace,
    handleUpdateUserStatus,
  } = useSocketService();
  const userName: string | null = useUserName();

  useEffect(() => {
    handleConnectToServer();
    return () => {
      handleDisconnect();
    };
  }, []);

  const handleDisconectFromServer = () => {
    handleDisconnect();
  };

  const handleUpdateUserstatus = (newStatus: UserStatusEnum) => {
    handleUpdateUserStatus(newStatus);
  };

  return (
    <Container>
      <Header
        handleDisconect={handleDisconectFromServer}
        handleUpdateUserStatus={handleUpdateUserstatus}
      />
      {/* THE NAME CHECK IS NEEDED BECAUSE THE SERVER IS RETURN THE JOIN WORKSPACE EVENT RIGHT AFTER CONECTING */}
      <main>{hasJoinedWorkspace && !!userName ? <Home /> : <Login />}</main>
    </Container>
  );
}
