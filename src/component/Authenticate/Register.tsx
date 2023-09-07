import React from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Input from "../input/Input";
import Button from "../Utils/Button";
import { signup } from "../../app/api/auth";
import useAuth from "../../hooks/useAuth";

type RegisterProps = {};

const scheme = yup.object().shape({
  name: yup.string().required("please enter your name"),
  email: yup.string().required("please enter your email").email(),
  password: yup.string().min(6).required("please enter your password"),
});

const Register: React.FC<RegisterProps> = () => {
  const navigate = useNavigate();
  const { setCredential } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },

    resolver: yupResolver(scheme),
  });

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (!data?.sucess) {
        toast.error(data?.data.message);
      } else {
        toast.success("Success Registeration");
        setCredential(data.data);
        navigate({ pathname: "/home" });
      }
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    mutation.mutate({ values: data });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="flex flex-col gap-2"
    >
      <Input
        id="name"
        label="Name"
        placaholder="John Doe"
        register={register}
        required
        errors={errors}
      />
      <Input
        id="email"
        label="Email"
        placaholder="laundary@mail.com"
        register={register}
        required
        errors={errors}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placaholder="Pick a strong password"
        register={register}
        required
        errors={errors}
      />
      <div className="w-full mt-3">
        <Button
          name="Create Account"
          type={"submit"}
          handleClick={handleSubmit((data) => onSubmit(data))}
        />
      </div>
    </form>
  );
};
export default Register;

{
  /* <Input
            id="phonenumber"
            label="Phone Number"
            placaholder="1111111111"
            register={register}
            required
            errors={errors}
        />
        <div className="flex flex-col gap-1">
            <Input
            id="address"
            label="Pickup Address"
            placaholder="somewhere on earth"
            register={register}
            required
            errors={errors}
            />
            <div className=" flex gap-1 items-center ">
            <span>
                <AiFillInfoCircle className="text-[.8rem]" />
            </span>
            <span className="text-xs text-neutral-500">
                please provide your valid address
            </span>
            </div>
        </div> */
}
