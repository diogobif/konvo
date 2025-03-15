import React from "react";
import { Container } from "./style";
import { H2 } from "../../components/Headers/style";
import { LoginForm } from "../../components/LoginForm";
import { UserDTO } from "../../stores/User/types";
import { useUserActions } from "../../stores/User/useUserStore";
import { useSocketService } from "../../hooks/useSocketService";

export function Login() {
  const { setUserData } = useUserActions();
  const { handleJoinWorkspace } = useSocketService();

  const handleOnSubmitData = (data: UserDTO) => {
    setUserData({
      avatarSrc: data.avatarSrc,
      name: data.name,
    });

    if (data.avatarSrc && data.name) {
      handleJoinWorkspace({ name: data.name, avatar: data.avatarSrc });
    }
  };

  return (
    <Container>
      <H2>Join Workspace</H2>
      <p>Enter your name and choose an avatar to get started</p>
      <LoginForm handleSubmitData={handleOnSubmitData} />
    </Container>
  );
}
