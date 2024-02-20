import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { useResize } from "@/hooks";
import styles from "./styles.module.css";

interface Props {
  setValue: (newValue: string) => void;
  error: string;
}

export const OtpField: FC<Props> = ({ setValue, error }) => {
  const ref1 = useRef<HTMLInputElement | null>(null);
  const ref2 = useRef<HTMLInputElement | null>(null);
  const ref3 = useRef<HTMLInputElement | null>(null);
  const ref4 = useRef<HTMLInputElement | null>(null);
  const ref5 = useRef<HTMLInputElement | null>(null);
  const ref6 = useRef<HTMLInputElement | null>(null);

  const { width: viewportWidth } = useResize();
  const [height, setHeight] = useState<number>(0);
  const [values, setValues] = useState<string[]>(new Array(6).fill(""));

  const { theme } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    if (!ref1.current) {
      return;
    }

    setHeight(ref1.current.clientWidth);
  }, [viewportWidth]);

  const setNext = (current: string) => {
    setTimeout(() => {
      if (current === "0") {
        ref2.current?.select();
      } else if (current === "1") {
        ref3.current?.select();
      } else if (current === "2") {
        ref4.current?.select();
      } else if (current === "3") {
        ref5.current?.select();
      } else if (current === "4") {
        ref6.current?.select();
      }
    }, 0);
  };

  const setPrev = (current: string) => {
    setTimeout(() => {
      if (current === "1") {
        ref1.current?.select();
      } else if (current === "2") {
        ref2.current?.select();
      } else if (current === "3") {
        ref3.current?.select();
      } else if (current === "4") {
        ref4.current?.select();
      } else if (current === "5") {
        ref5.current?.select();
      }
    }, 0);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace" && !"0123456789".includes(e.key)) {
      return;
    }

    if (
      e.currentTarget.name === "5" &&
      e.key !== "Backspace" &&
      values[5] !== "" &&
      ref6.current?.selectionStart === ref6.current?.selectionEnd
    ) {
      return;
    }

    const updatedValues = values.map((value: string, index: number) => {
      if (index.toString() === e.currentTarget.name) {
        if (e.key === "Backspace") {
          return "";
        } else {
          return e.key;
        }
      }
      return value;
    });

    setValues(updatedValues);
    setValue(updatedValues.join(""));

    if (e.key === "Backspace") {
      setPrev(e.currentTarget.name);
    } else {
      setNext(e.currentTarget.name);
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const code = e.clipboardData.getData("text");

    if (code.length === 6 && !isNaN(+code)) {
      setValues([code[0], code[1], code[2], code[3], code[4], code[5]]);
      setValue(code);
    }
  };

  const hasError = error.trim() !== "";

  return (
    <div className={styles.container}>
      <div
        className={`${
          theme === "dark" ? styles.dark_theme : styles.light_theme
        } ${styles.otp_container}`}
      >
        <input
          ref={ref1}
          name="0"
          type="text"
          value={values[0]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`${styles.input} ${hasError && styles.error}`}
          style={{
            height: `${height}px`,
          }}
          autoComplete="off"
          onPaste={onPaste}
        />
        <input
          ref={ref2}
          name="1"
          type="text"
          value={values[1]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`${styles.input} ${hasError && styles.error}`}
          style={{
            height: `${height}px`,
          }}
          autoComplete="off"
          onPaste={onPaste}
        />
        <input
          ref={ref3}
          name="2"
          type="text"
          value={values[2]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`${styles.input} ${hasError && styles.error}`}
          style={{
            height: `${height}px`,
          }}
          autoComplete="off"
          onPaste={onPaste}
        />
        <input
          ref={ref4}
          name="3"
          type="text"
          value={values[3]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`${styles.input} ${hasError && styles.error}`}
          style={{
            height: `${height}px`,
          }}
          autoComplete="off"
          onPaste={onPaste}
        />
        <input
          ref={ref5}
          name="4"
          type="text"
          value={values[4]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`${styles.input} ${hasError && styles.error}`}
          style={{
            height: `${height}px`,
          }}
          autoComplete="off"
          onPaste={onPaste}
        />
        <input
          ref={ref6}
          name="5"
          type="text"
          value={values[5]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`${styles.input} ${hasError && styles.error}`}
          style={{
            height: `${height}px`,
          }}
          autoComplete="off"
          onPaste={onPaste}
        />
      </div>
      {hasError && <p className={styles.error_text}>{error}</p>}
    </div>
  );
};
