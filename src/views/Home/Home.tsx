import React from "react";
import { Container } from "./style";
import { WorkspaceInfo } from "../../components/WorkspaceInfo";
import { TaskBoard } from "../../components/TaskBoard";

export function Home() {
  return (
    <Container>
      <WorkspaceInfo />
      <TaskBoard />
    </Container>
  );
}
