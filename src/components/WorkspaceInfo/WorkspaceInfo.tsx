import React from "react";
import { Message, Task } from "../../stores/Workspace";
import {
  useWorkspaceMessages,
  useWorkspaceTasks,
} from "../../stores/Workspace/useWorkspaceStore";
import { useUserName } from "../../stores/User/useUserStore";
import { Container } from "./style";
export function WorkspaceInfo() {
  const taskList: Task[] = useWorkspaceTasks();
  const messagesList: Message[] = useWorkspaceMessages();
  const userName: string | null = useUserName();

  return (
    <Container>
      <p>
        Hello {userName ?? ""} you have, {taskList.length} tasks,{" "}
        {messagesList.length} messages
      </p>
    </Container>
  );
}
