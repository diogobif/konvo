import React from "react";
import { Task as TaskType } from "../../stores/Workspace";
import { Container, TaskLabel, TaskTitle, TaskValue } from "./style";
import { formatDate } from "../../utils/dateUtils";
import { useDrag } from "react-dnd";
import { DRAGGABLE_ITEM_TYPE } from "../TaskBoard/types";

type Props = {
  task: TaskType;
};

export function TaskCard(props: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DRAGGABLE_ITEM_TYPE,
    item: props.task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Container ref={drag}>
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
