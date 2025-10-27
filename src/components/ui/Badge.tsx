import clsx from 'clsx';

interface Props {
  title: string;
  variant?: "default" | "ghost";
}

const Badge = ({
  title,
  variant = "default",
}: Props) => {
  return (
    <div className={clsx("w-fit px-2.5 border rounded-full",
      variant === "default"
      ? `border-solid border-[#843CFF] text-[#843CFF]`
      : ""
    )}>
      <p className="text-lg">
        { title }
      </p>
    </div>
  )
}

export default Badge;
