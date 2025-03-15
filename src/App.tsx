import React from "react";
import { useEffect } from "react";
import { Login } from "./views/Login";
import { useSocketService } from "./hooks/useSocketService";
import { Home } from "./views/Home";
import { Header } from "./components/Header/Header";
import { useUserName } from "./stores/User/useUserStore";
import { UserStatusEnum } from "./stores/Workspace";

function App() {
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
    console.log(newStatus);
    handleUpdateUserStatus(newStatus);
  };

  return (
    <div className="app">
      <Header
        handleDisconect={handleDisconectFromServer}
        handleUpdateUserStatus={handleUpdateUserstatus}
      />
      <main>{hasJoinedWorkspace && !!userName ? <Home /> : <Login />}</main>
    </div>
  );
}

export default App;
