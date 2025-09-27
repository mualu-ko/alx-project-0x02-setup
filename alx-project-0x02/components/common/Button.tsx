// Button component
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', children }) => {
  const baseStyles = "px-4 py-2 font-semibold text-white";
  const sizeStyles = {
    small: "text-sm",
    medium: "text-md",
    large: "text-lg",
  }[size];
  const shapeStyles = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  }[shape];

  return (
    <button className={`${baseStyles} ${sizeStyles} ${shapeStyles} bg-blue-600 hover:bg-blue-700`}>
      {children}
    </button>
  );
}

export default Button;
