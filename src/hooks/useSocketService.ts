import { useEffect, useState } from "react";
import { UserData } from "../stores/User/types";
import { useUserActions } from "../stores/User/useUserStore";
import { socketService } from "../services/socketService";

export type JoinWorkspaceData = {
  name: string;
  avatar: string;
};

export function useSocketService() {
  const { getUserData, setUserData } = useUserActions();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [hasJoinedWorkspace, setHasJoinedWorkspace] = useState<boolean>(false);

  useEffect(() => {
    socketService.onConnect(() => {
      console.log("Connected to server");
      setIsConnected(true);
      setUserData({ id: socketService.getSocketId() ?? undefined });
    });

    socketService.onWorkspaceUpdate((data: any) => {
      console.log("Workspace updated:", data);
      console.log(data);
      setHasJoinedWorkspace(true);
    });
  }, []);

  const handleConnectToServer = () => {
    socketService.connect();
  };

  const handleJoinWorkspace = (data: JoinWorkspaceData) => {
    if (isConnected) {
      socketService.joinWorkspace(data);
    }
  };

  const handleDisconnect = () => {
    if (isConnected) {
      socketService.disconnect();
    }
  };

  return {
    isConnected,
    handleDisconnect,
    handleConnectToServer,
    handleJoinWorkspace,
    hasJoinedWorkspace,
  };
}
