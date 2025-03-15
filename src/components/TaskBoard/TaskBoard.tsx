import React from "react";
import { Task, TaskStatusEnum } from "../../stores/Workspace";
import { useWorkspaceTasks } from "../../stores/Workspace/useWorkspaceStore";
import { Container } from "./style";
import { TaskBoardColumn } from "./TaskBoardColumn";
export function TaskBoard() {
  const taskList: Task[] = useWorkspaceTasks();
  return (
    <Container>
      <TaskBoardColumn
        label="To Do"
        taskList={taskList.filter(
          (task: Task) => task.status === TaskStatusEnum.TODO
        )}
      />

      <TaskBoardColumn
        label="In Progress"
        taskList={taskList.filter(
          (task: Task) => task.status === TaskStatusEnum.INPROGRESS
        )}
      />

      <TaskBoardColumn
        label="Done"
        taskList={taskList.filter(
          (task: Task) => task.status === TaskStatusEnum.DONE
        )}
      />
    </Container>
  );
}
