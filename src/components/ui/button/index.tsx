import styles from "./SpaceButton.module.css";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button className={`${styles.button} ${className}`} ref={ref} {...props}>
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
