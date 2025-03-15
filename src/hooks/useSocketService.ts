import { useEffect, useState } from "react";
import { useUserActions } from "../stores/User/useUserStore";
import { socketService } from "../services/socketService";
import { WorkspaceData } from "../stores/Workspace";
import { useWorkspaceActions } from "../stores/Workspace/useWorkspaceStore";

export type JoinWorkspaceData = {
  name: string;
  avatar: string;
};

export function useSocketService() {
  const { setUserId } = useUserActions();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [hasJoinedWorkspace, setHasJoinedWorkspace] = useState<boolean>(false);
  const { setTasks, setMessages } = useWorkspaceActions();

  useEffect(() => {
    socketService.onConnect(() => {
      console.log("Connected to server");
      setIsConnected(true);

      if (!!socketService.getSocketId()) {
        setUserId(socketService.getSocketId()!);
      }
    });

    socketService.onWorkspaceUpdate((data: WorkspaceData) => {
      console.log("Workspace updated:", data);
      setTasks(data.tasks);
      setMessages(data.messages);
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

  const handleUpdateTaskStatus = (taskId: string, newStatus: string) => {
    console.log("updated task");
    socketService.moveTask(taskId, newStatus);
  };

  return {
    isConnected,
    handleDisconnect,
    handleConnectToServer,
    handleJoinWorkspace,
    hasJoinedWorkspace,
    handleUpdateTaskStatus,
  };
}
