import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { IMessage } from "@/redux/slices/messages";
import { SuccessToast } from "./Success";

const ToastMessages: FC = () => {
  const { messages } = useSelector((state: RootState) => state);

  const renderMessages = (messages: IMessage[]) => {
    const output = [];

    let position = 0;

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];

      output.push(
        <SuccessToast
          key={message.id}
          id={message.id}
          top={`${20 + position * 62}px`}
          display={message.display}
          message={message.value}
        />
      );

      if (message.display) {
        position += 1;
      }
    }

    return output;
  };

  return <>{renderMessages(messages)}</>;
};

export default ToastMessages;
