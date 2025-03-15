import React from "react";
import { useEffect } from "react";
import { Login } from "./views/Login";
import { useSocketService } from "./hooks/useSocketService";
import { Home } from "./views/Home";

function App() {
  const {
    handleConnectToServer,
    handleDisconnect,
    isConnected,
    hasJoinedWorkspace,
  } = useSocketService();

  useEffect(() => {
    handleConnectToServer();
    return () => {
      handleDisconnect();
    };
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Collaborative Workspace</h1>
        <div className="connection-status">
          {isConnected ? (
            <span className="status connected" />
          ) : (
            <span className="status disconnected" />
          )}
        </div>
      </header>

      <main>{!hasJoinedWorkspace ? <Login /> : <Home />}</main>
    </div>
  );
}

export default App;
