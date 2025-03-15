import React from "react";
import { Task as TaskType } from "../../stores/Workspace";
import { Container, TaskLabel, TaskTitle, TaskValue } from "./style";
import { formatDate } from "../../utils/dateUtils";

type Props = {
  task: TaskType;
};

export function TaskCard(props: Props) {
  return (
    <Container>
      <TaskTitle>{props.task.title}</TaskTitle>
      <p>
        <TaskLabel>Author: </TaskLabel>
        <TaskValue>{props.task.createdBy}</TaskValue>
      </p>
      <p>
        <TaskLabel>Created at: </TaskLabel>
        <TaskValue>{formatDate(props.task.createdAt)}</TaskValue>
      </p>
      <p>
        <TaskLabel>Updated at: </TaskLabel>
        <TaskValue>{formatDate(props.task.updatedAt)}</TaskValue>
      </p>
      <p>
        <TaskValue>{props.task.description}</TaskValue>
      </p>
    </Container>
  );
}
