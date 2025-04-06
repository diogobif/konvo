import { useEffect, useState } from "react";
import { useUserActions, useUserId } from "../stores/User/useUserStore";
import { socketService } from "../services/socketService";
import { UserStatusEnum, WorkspaceData } from "../stores/Workspace";
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
  const { setTasks, setMessages, setUsers } = useWorkspaceActions();

  useEffect(() => {
    socketService.onConnect(() => {
      setIsConnected(true);
      if (!!socketService.getSocketId()) {
        setUserId(socketService.getSocketId()!);
      }
    });

    socketService.onWorkspaceUpdate((data: WorkspaceData) => {
      setTasks(data.tasks);
      setMessages(data.messages);
      setUsers(data.users);
      setHasJoinedWorkspace(true);
    });

    socketService.onDisconnect(() => {
      setIsConnected(false);
      setHasJoinedWorkspace(false);
      setUserId(null);
    });
  }, []);

  const handleConnectToServer = () => {
    socketService.connect();
  };

  const handleJoinWorkspace = (data: JoinWorkspaceData) => {
    if (userId) {
      socketService.joinWorkspace(data);
    }
  };

  const handleDisconnect = () => {
    if (isConnected) {
      socketService.disconnect();
    }
  };

  const handleUpdateTaskStatus = (taskId: string, newStatus: string) => {
    socketService.moveTask(taskId, newStatus);
  };

  const handleUpdateUserStatus = (newStatus: UserStatusEnum) => {
    socketService.updateStatus(newStatus);
  };

  return {
    isConnected,
    handleDisconnect,
    handleConnectToServer,
    handleJoinWorkspace,
    hasJoinedWorkspace,
    handleUpdateTaskStatus,
    handleUpdateUserStatus,
  };
}
