import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
type ButtonProps = {
  name: string;
  handleClick: () => void;
  disabled?: boolean;
  type?: any;
  rounded?: string;
};

const Button: React.FC<ButtonProps> = ({
  handleClick,
  name,
  disabled,
  type,
  rounded = "rounded-[.4rem]",
}) => {
  const location = useLocation();
  const handleSubmit = useCallback(() => {
    handleClick();
  }, [handleClick, location]);
  return (
    <button
      onClick={handleSubmit}
      disabled={disabled}
      type={type}
      className={`w-full ${rounded} rounded-[.4rem] text-black bg-light-gold py-2 font-semibold hover:bg-dark-gold transition disabled:bg-dark-gold`}
    >
      {name}
    </button>
  );
};
export default Button;
