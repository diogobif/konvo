import React, { useRef, useState } from "react";
import { Form, Container } from "./style";
import { BaseButton } from "../../components/button";
import { TextInputMethods } from "../../components/Input/types";
import { Input } from "../../components/Input";
import { H2 } from "../../components/Headers/style";
import { ALLOWED_AVATAR_FILE_TYPES } from "./constants";
import { Avatar } from "../../components/Avatar/Avatar";

export function Login() {
  const nameInputRef = useRef<TextInputMethods>(null);
  const avatarInputRef = useRef<TextInputMethods>(null);
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState<string | null>(null);

  const isSubmitButtonDisabled = (): boolean => {
    const currentNameInputValue: string | undefined =
      nameInputRef.current?.getValue();

    return !currentNameInputValue || !currentAvatarUrl;
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File | undefined = event.target.files?.[0];

    if (!file || !ALLOWED_AVATAR_FILE_TYPES.includes(file.type)) {
      avatarInputRef.current?.seValue("");
      setCurrentAvatarUrl(null);
      return;
    }

    setCurrentAvatarUrl(URL.createObjectURL(file));
  };

  return (
    <Container>
      <H2>Join Workspace</H2>
      <p>Enter your name and choose an avatar to get started</p>
      <Form>
        <Input type="text" ref={nameInputRef} placeholder="YOUR NAME" />
        <Input
          type="file"
          ref={avatarInputRef}
          placeholder="CHOOSE YOUR AVATAR"
          accept="image/jpeg"
          onChange={handleFileChange}
        />

        {!!currentAvatarUrl && <Avatar fileUrl={currentAvatarUrl} />}

        <BaseButton disabled={isSubmitButtonDisabled()} type="submit">
          JOIN WORKPACE
        </BaseButton>
      </Form>
    </Container>
  );
}
