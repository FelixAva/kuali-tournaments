import clsx from 'clsx';

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
      className={clsx(
        "w-auto h-min px-5 py-2 rounded-md md:text-lg transition-colors duration-200 border hover:cursor-pointer",
        variant === "default"
        ? "bg-[#843CFF] text-white border-transparent hover:bg-transparent hover:text-[#843CFF] hover:border-[#843CFF]"
        : "bg-transparent text-[#843CFF] border-[#843CFF] hover:bg-[#843CFF] hover:text-white"
      )}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
