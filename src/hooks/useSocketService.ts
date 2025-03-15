import { useEffect, useState } from "react";
import { useUserActions, useUserId } from "../stores/User/useUserStore";
import { socketService } from "../services/socketService";
import { WorkspaceData } from "../stores/Workspace";
import { useWorkspaceActions } from "../stores/Workspace/useWorkspaceStore";

export type JoinWorkspaceData = {
  name: string;
  avatar: string;
};

export function useSocketService() {
  const { setUserId } = useUserActions();
  const userId: string | null = useUserId();
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

    socketService.onDisconnect(() => {
      console.log("disconected to server");
      setIsConnected(false);
      setHasJoinedWorkspace(false);
      setUserId(null);
    });
  }, []);

  const handleConnectToServer = () => {
    console.log("connected");
    socketService.connect();
  };

  const handleJoinWorkspace = (data: JoinWorkspaceData) => {
    if (userId) {
      console.log("join");
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
