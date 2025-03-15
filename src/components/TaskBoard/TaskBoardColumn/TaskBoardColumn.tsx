import React from "react";
import { Task } from "../../../stores/Workspace";
import { ColumnLabel, Container, MessagesWrapper } from "./style";
import { TaskCard } from "../../TaskCard";

type Props = {
  taskList: Task[];
  label: string;
};

export function TaskBoardColumn(props: Props) {
  return (
    <Container>
      <ColumnLabel>{props.label}</ColumnLabel>
      <MessagesWrapper>
        {props.taskList.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </MessagesWrapper>
    </Container>
  );
}
