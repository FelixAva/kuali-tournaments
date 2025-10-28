type InputProps = {
  placeholder: string;
  type: "email" | "text" | "number" | "password";
}

interface Props extends InputProps {
  label: string;
  error?: string;
}

const Input = ({
  label,
  error,
  type,
  placeholder
}: Props ) => {
  return (
    <div>
      <label
        htmlFor={label.toLowerCase()}
      >
        { label }
      </label>

      <input
        id={label.toLowerCase()}
        type={type}
        placeholder={placeholder}
      />

      {
        error && (
          <p>{ error }</p>
        )
      }
    </div>
  );
};

export default Input;
