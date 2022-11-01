import { ChangeEvent, useCallback } from "react";
import "./TextArea.css";

interface Props {
  className?: string;
  text?: string;
  onChange?: (text: string) => void;
}

export function TextArea(props: Props) {

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(event.target.value);
  }, [props.onChange]);

  return (
    <div className={props.className}>
      <textarea
        placeholder="Write the people here..."
        value={props.text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
