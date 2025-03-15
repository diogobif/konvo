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
      console.log("onConnect");
      setIsConnected(true);
      if (!!socketService.getSocketId()) {
        setUserId(socketService.getSocketId()!);
      }
    });

    socketService.onWorkspaceUpdate((data: WorkspaceData) => {
      console.log("onWorkspaceUpdate", data);
      setTasks(data.tasks);
      setMessages(data.messages);
      setUsers(data.users);
      setHasJoinedWorkspace(true);
    });

    socketService.onDisconnect(() => {
      console.log("onDisconnect");
      setIsConnected(false);
      setHasJoinedWorkspace(false);
      setUserId(null);
    });
  }, []);

  const handleConnectToServer = () => {
    console.log("handleConnectToServer");
    socketService.connect();
  };

  const handleJoinWorkspace = (data: JoinWorkspaceData) => {
    console.log("handleJoinWorkspace");
    if (userId) {
      socketService.joinWorkspace(data);
    }
  };

  const handleDisconnect = () => {
    console.log("handleDisconnect");
    if (isConnected) {
      socketService.disconnect();
    }
  };

  const handleUpdateTaskStatus = (taskId: string, newStatus: string) => {
    console.log("handleDisconnect");
    socketService.moveTask(taskId, newStatus);
  };

  const handleUpdateUserStatus = (newStatus: UserStatusEnum) => {
    console.log("handleUpdateUserStatus");
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
