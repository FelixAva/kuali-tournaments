type InputProps = {
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
}: Props ) => {
  return (
    <>
      <div className="relative mb-0.5">
        <input
          type={type}
          id={label.toLowerCase()}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="  "
        />
        <label
          htmlFor={label.toLowerCase()}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          { label }
        </label>
      </div>

      {
        error && (
          <p className="mx-2.5 text-sm text-red-600">{ error }</p>
        )
      }
    </>
  );
};

export default Input;
