import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Input from "../input/Input";
import Button from "../Utils/Button";
import { login } from "../../app/api/auth";
import useAuth from "../../hooks/useAuth";

type LoginProps = {};

const scheme = yup.object().shape({
  email: yup.string().required("please enter your email").email(),
  password: yup.string().required("please enter your password"),
});

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const { setCredential } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(scheme),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.isError) {
        toast.error(data?.message);
      } else {
        toast.success("Successful login");
        setCredential(data);
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
        <Button name="Log in" handleClick={() => handleSubmit(onSubmit)} />
      </div>
    </form>
  );
};
export default Login;
