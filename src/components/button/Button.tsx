import { ReactNode } from "react";
import ButtonLoader from "@/components/loader/ButtonLoader";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  action: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  text,
  icon,
  action,
  disabled,
  isLoading,
  className,
  type = "button"
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={action}
      disabled={disabled}
      className={`${"app-button"} ${className ? className : ""}`}
    >
      {!isLoading ?
        <div className="btn-content">
          {icon}
          <div>{text}</div>
        </div> :
        <ButtonLoader />
      }
    </button>
  );
};

export default Button;
