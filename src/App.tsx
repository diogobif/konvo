import React from "react";
import { useState, useEffect } from "react";
import { socketService } from "./services/socketService";
import { Login } from "./views/Login";
import { useUserActions } from "./stores/User/useUserStore";
import { UserData } from "./stores/User/types";
import { useSocketService } from "./hooks/useSocketService";

function App() {
  const {
    handleConnectToServer,
    handleDisconnect,
    isConnected,
    hasJoinedWorkspace,
  } = useSocketService();
  //const [isConnected, setIsConnected] = useState<boolean>(false);
  const [workspace, setWorkspace] = useState<any>(null);
  const { getUserData } = useUserActions();
  const [currentUser, setCurrentUser] = useState<UserData>(getUserData());

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

  // Handle user login
  const handleLogin = (userData: any) => {
    socketService.joinWorkspace(userData);
    setCurrentUser({
      id: socketService.getSocketId(),
      ...userData,
    });
  };

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

      <main>
        {!hasJoinedWorkspace ? (
          <Login />
        ) : (
          <div className="workspace-container">
            {workspace ? (
              <div>
                <p>Welcome, {currentUser.name}!</p>
                <p>There are {workspace.users.length} users online.</p>
                <p>Tasks: {workspace.tasks.length}</p>
                <p>Messages: {workspace.messages.length}</p>

                {/* TODO: Implement workspace components */}
              </div>
            ) : (
              <p>Loading workspace data...</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
