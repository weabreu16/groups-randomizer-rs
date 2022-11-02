import { ChangeEvent, useCallback } from "react";
import { makeStyledComponent } from "../../helpers";
import "./TextArea.css";

interface Props {
  className?: string;
  text?: string;
  style?: any;
  placeholder?: string;
  onChange?: (text: string) => void;
}

function TextAreaBase(props: Props) {

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(event.target.value);
  }, [props.onChange]);

  return (
    <textarea
      className={props.className}
      placeholder={props.placeholder}
      value={props.text}
      style={props.style}
      onChange={handleChange}
    />
  );
}

export const TextArea = makeStyledComponent(TextAreaBase);
