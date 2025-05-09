import React, { useRef, useState } from "react";
import { TextInputMethods } from "../Input/types";
import { ALLOWED_AVATAR_FILE_TYPES } from "./constants";
import { Form } from "./style";
import { Input } from "../Input";
import { Avatar } from "../Avatar/Avatar";
import { BaseButton } from "../button";
import { UserDTO } from "../../stores/User/types";

type Props = {
  handleSubmitData(data: UserDTO): void;
};

export function LoginForm(props: Props) {
  const nameInputRef = useRef<TextInputMethods>(null);
  const avatarInputRef = useRef<TextInputMethods>(null);
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState<string | null>(null);

  const isSubmitButtonDisabled = (): boolean => {
    const currentNameInputValue: string | undefined =
      nameInputRef.current?.getValue();

    return !currentNameInputValue || !currentAvatarUrl;
  };

  const converFileToBase64 = (file: File): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setCurrentAvatarUrl(reader.result as string);
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
    converFileToBase64(file);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    props.handleSubmitData({
      name: nameInputRef.current?.getValue()!,
      avatarSrc: currentAvatarUrl!,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
}
