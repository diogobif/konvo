import React from "react";
import { Task } from "../../../stores/Workspace";
import { ColumnLabel, Container, MessagesWrapper } from "./style";
import { TaskCard } from "../../TaskCard";
import { useDrop } from "react-dnd";
import { DRAGGABLE_ITEM_TYPE } from "../types";

type Props = {
  taskList: Task[];
  label: string;
  handleTaskDrop(task: Task): void;
};

export function TaskBoardColumn(props: Props) {
  const [, drop] = useDrop({
    accept: DRAGGABLE_ITEM_TYPE,
    drop: (task: Task) => props.handleTaskDrop(task),
  });

  return (
    <Container ref={drop}>
      <ColumnLabel>{props.label}</ColumnLabel>
      <MessagesWrapper>
        {props.taskList.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </MessagesWrapper>
    </Container>
  );
}
