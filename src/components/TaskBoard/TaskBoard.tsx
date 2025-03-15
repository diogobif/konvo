import React from "react";
import { Task, TaskStatusEnum } from "../../stores/Workspace";
import {
  useWorkspaceisrequestInProgress,
  useWorkspaceTasks,
} from "../../stores/Workspace/useWorkspaceStore";
import { Container } from "./style";
import { TaskBoardColumn } from "./TaskBoardColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type Props = {
  handleUpdateTaskStatus(id: string, newstatus: TaskStatusEnum): void;
};

export function TaskBoard(props: Props) {
  const taskList: Task[] = useWorkspaceTasks();
  const isWorkspaceRequestInProgress: boolean =
    useWorkspaceisrequestInProgress();

  const handleTaskDrop = (task: Task, newStatus: TaskStatusEnum) => {
    props.handleUpdateTaskStatus(task.id, newStatus);
  };

  if (isWorkspaceRequestInProgress) {
    return <p>Loading tasks...</p>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <TaskBoardColumn
          label="To Do"
          taskList={taskList.filter(
            (task: Task) => task.status === TaskStatusEnum.TODO
          )}
          handleTaskDrop={(task: Task) =>
            handleTaskDrop(task, TaskStatusEnum.TODO)
          }
        />

        <TaskBoardColumn
          label="In Progress"
          taskList={taskList.filter(
            (task: Task) => task.status === TaskStatusEnum.INPROGRESS
          )}
          handleTaskDrop={(task: Task) =>
            handleTaskDrop(task, TaskStatusEnum.INPROGRESS)
          }
        />

        <TaskBoardColumn
          label="Done"
          taskList={taskList.filter(
            (task: Task) => task.status === TaskStatusEnum.DONE
          )}
          handleTaskDrop={(task: Task) =>
            handleTaskDrop(task, TaskStatusEnum.DONE)
          }
        />
      </Container>
    </DndProvider>
  );
}
