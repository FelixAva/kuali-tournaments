import { FloatingLabel, HelperText } from 'flowbite-react';

interface Props {
  label: string;
  placeholder: string;
  error?: string;
}

const Input = ({
  label,
  placeholder,
  error
}: Props) => {
  return (
    <div>
      <FloatingLabel
        label={label}
        variant='outlined'
        placeholder={placeholder}
        color={error ? "error" : "default"}
      />
      {
        error && (
          <HelperText>
            {error}
          </HelperText>
        )
      }
    </div>
  );
};

export default Input;
