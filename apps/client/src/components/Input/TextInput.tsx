import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { TextInputMethods } from "./types";
import { CustomInput } from "./style";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef<TextInputMethods, Props>(
  (props: Props, ref) => {
    const refElement = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getValue() {
        return refElement.current?.value;
      },
      seValue(newValue: string) {
        if (refElement.current) {
          refElement.current.value = newValue;
        }
      },
    }));

    return <CustomInput ref={refElement} {...props} />;
  }
);
