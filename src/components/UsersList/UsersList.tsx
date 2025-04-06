import React from "react";
import { Container, UserList } from "./style";
import { H2 } from "../Headers/style";
import { User } from "../../stores/Workspace";
import { useWorkspaceUsers } from "../../stores/Workspace/useWorkspaceStore";
import { UserCard } from "../UserCard/UserCard";

export function UsersList() {
  const usersList: User[] = useWorkspaceUsers();

  return (
    <Container>
      <H2>Users Online</H2>
      <UserList>
        {usersList.map((user: User) => (
          <UserCard user={user} key={user.id} />
        ))}
      </UserList>
    </Container>
  );
}
