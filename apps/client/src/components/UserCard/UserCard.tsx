import React from "react";
import { User } from "../../stores/Workspace";
import { CardWrapper } from "./style";
import { Avatar } from "../Avatar/Avatar";
type Props = {
  user: User;
};
export function UserCard(props: Props) {
  return (
    <CardWrapper>
      <Avatar fileUrl={props.user.avatar} />
      <p>{props.user.name}</p>
      <p>{props.user.status}</p>
    </CardWrapper>
  );
}
