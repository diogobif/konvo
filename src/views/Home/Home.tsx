import React, { useState } from "react";
import { Container } from "./style";
import { WorkspaceInfo } from "../../components/WorkspaceInfo";
import { TaskBoard } from "../../components/TaskBoard";
import { TaskStatusEnum } from "../../stores/Workspace";
import { useWorkspaceActions } from "../../stores/Workspace/useWorkspaceStore";
import { useSocketService } from "../../hooks/useSocketService";

export function Home() {
  const { updateTaskStatus } = useWorkspaceActions();
  const { handleUpdateTaskStatus } = useSocketService();

  const handleTaskstatusUpdate = (
    taskId: string,
    newStatus: TaskStatusEnum
  ) => {
    updateTaskStatus(taskId, newStatus);
    handleUpdateTaskStatus(taskId, newStatus);
  };

  return (
    <Container>
      <WorkspaceInfo />
      <TaskBoard handleUpdateTaskStatus={handleTaskstatusUpdate} />
    </Container>
  );
}
