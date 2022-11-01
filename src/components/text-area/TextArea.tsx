import { ChangeEvent, useCallback } from "react";
import "./TextArea.css";

interface Props {
  className?: string;
  text?: string;
  placeholder?: string;
  onChange?: (text: string) => void;
}

export function TextArea(props: Props) {

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(event.target.value);
  }, [props.onChange]);

  return (
    <div className={props.className}>
      <textarea
        placeholder={props.placeholder}
        value={props.text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
