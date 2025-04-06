import React from "react";
import { Message, Task, User } from "../../stores/Workspace";
import {
  useWorkspaceMessages,
  useWorkspaceTasks,
  useWorkspaceUsers,
} from "../../stores/Workspace/useWorkspaceStore";
import { useUserName } from "../../stores/User/useUserStore";
import { Container } from "./style";
export function WorkspaceInfo() {
  const taskList: Task[] = useWorkspaceTasks();
  const messagesList: Message[] = useWorkspaceMessages();
  const userList: User[] = useWorkspaceUsers();
  const userName: string | null = useUserName();

  return (
    <Container>
      <p>
        Hello {userName ?? ""} you have, {taskList.length} tasks,{" "}
        {messagesList.length} messages
      </p>
      <p>There are {userList.length} users online.</p>
    </Container>
  );
}
