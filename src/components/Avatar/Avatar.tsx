import React from "react";
import { Wrapper } from "./style";

type Props = {
  fileUrl: string;
};

export function Avatar(props: Props) {
  return (
    <Wrapper role="avatar">
      <img src={props.fileUrl} alt="Avatar" />
    </Wrapper>
  );
}
