interface Props {
  title: string;
  action: () => void;
  variant?: "default" | "ghost";
  type?: "submit" | "button"; // Specify type of use
}

const Button = ({
  title,
  action,
  variant = "default",
  type = "button"
}: Props) => {
  return (
    <button
      onClick={action}
      type={type}
    >
      <p>{title}</p>
      <p>{variant}</p>
    </button>
  );
};

export default Button;
