import React from "react";
import { useState, useEffect } from "react";
import { socketService } from "./services/socketService";
import { Login } from "./views/Login";
import { useUserActions } from "./stores/User/useUserStore";
import { UserData } from "./stores/User/types";
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
    console.log(hasJoinedWorkspace);
  }, [hasJoinedWorkspace]);

  useEffect(() => {
    handleConnectToServer();
    /*
    // Connect to the socket server
    socketService.connect();

    // Set up event listeners
    socketService.onConnect(() => {
      console.log("Connected to server");
      setIsConnected(true);
    });

    socketService.onDisconnect(() => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });

    socketService.onWorkspaceUpdate((data: any) => {
      console.log("Workspace updated:", data);
      setWorkspace(data);
    });
    */

    // Clean up event listeners on component unmount
    return () => {
      handleDisconnect();
    };
  }, []);

  // For now, just render some basic UI to show connection status
  // You will replace this with your component structure
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
