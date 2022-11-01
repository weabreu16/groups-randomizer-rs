import React, { useCallback } from "react";
import "./Button.css";

interface Props {
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: Props) {

  const handleClick = useCallback(() => {
    props.onClick && props.onClick();
  }, [props.onClick]);

  return (
    <div 
      className={`btn-wrapper ${props.className}`}
      onClick={handleClick}
    >
      <div className="btn">
        {props.icon &&
          <div className="btn-icon">
            {props.icon}
          </div>
        }
        {props.children}
      </div>
    </div>
  );
}
