import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsPenFill } from "react-icons/bs";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placaholder: string;
  readonly?: boolean;
};

const Input: React.FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
  type,
  required,
  placaholder,
  readonly,
}) => {
  return (
    <div className="flex gap-1 flex-col">
      <label htmlFor={id} className="text-neutral-300 cursor-pointer text-sm">
        {label}
      </label>
      <div
        className={`${
          readonly && "border-none"
        } w-full border border-secondary-black bg-mid-black rounded-[.4rem]  flex items-center justify-center focus:bg-light-gold`}
      >
        <input
          className="bg-transparent outline-none w-full h-full px-2 py-3 placeholder:text-neutral-600 placeholder:italic placeholder:text-sm rounded-[.4rem] read-only:text-neutral-300"
          type={type}
          {...register(id, { required })}
          id={id}
          disabled={disabled}
          placeholder={placaholder}
          readOnly={readonly}
        />
      </div>

      {(errors[id]?.message as string) && (
        <div className=" flex gap-1 items-center ">
          <span>
            <AiFillInfoCircle className="text-[.8rem]" />
          </span>
          <span className="text-xs text-light-gold">
            {errors[id]?.message as string}
          </span>
        </div>
      )}
    </div>
  );
};
export default Input;
