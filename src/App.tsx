import React from "react";
import { useEffect } from "react";
import { Login } from "./views/Login";
import { useSocketService } from "./hooks/useSocketService";
import { Home } from "./views/Home";
import { Header } from "./components/Header/Header";

function App() {
  const { handleConnectToServer, handleDisconnect, hasJoinedWorkspace } =
    useSocketService();

  useEffect(() => {
    handleConnectToServer();
    return () => {
      handleDisconnect();
    };
  }, []);

  const handleDisconectFromServer = () => {
    handleDisconnect();
  };

  return (
    <div className="app">
      <Header handleDisconect={handleDisconectFromServer} />
      <main>{!hasJoinedWorkspace ? <Login /> : <Home />}</main>
    </div>
  );
}

export default App;
