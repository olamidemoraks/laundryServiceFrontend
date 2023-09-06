import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "../input/Input";
import Button from "../Utils/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { updatePassword } from "../../app/api/userApi";
import { toast } from "react-hot-toast";
import { BsCheckCircle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

type UserChangePasswordProps = {
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const scheme = yup.object().shape({
  oldPassword: yup.string().required("Please provide your previous password"),
  newPassword: yup
    .string()
    .min(6, "New password must be at least 6 characters")
    .required("Please provide your new password"),
  confirmPassword: yup.string().required("Please confirm your new password"),
});

const UserChangePassword: React.FC<UserChangePasswordProps> = ({
  setChangePassword,
}) => {
  console.log(setChangePassword);
  const { sendLogout } = useAuth();
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(scheme),
  });

  const mutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) => {
      if (data?.isError) {
        setError("oldPassword", { message: mutation.data?.message });
      } else {
        toast("Password succefully change", {
          style: { background: "#1e1e1e", color: "#fff" },
          icon: <BsCheckCircle className="text-green-400" />,
        });
        sendLogout();
      }
    },
  });

  const handlePasswordSubmit = (value: any) => {
    if (value.newPassword !== value.confirmPassword) {
      setError("confirmPassword", {
        message: "New password and confirm password are not same",
      });
      return;
    }
    mutation.mutate({ values: value });
    // if (mutation.data?.isError) {

    // }
    // if (mutation.isSuccess) {

    // }
  };
  return (
    <div className="flex flex-col gap-2 mt-2">
      <Input
        id="oldPassword"
        label="Old Password"
        placaholder="Previous password"
        errors={errors}
        register={register}
      />
      <Input
        id="newPassword"
        label="New Password"
        placaholder="New password"
        errors={errors}
        register={register}
      />
      <Input
        id="confirmPassword"
        label="Confirm Password"
        placaholder="Confirm password"
        errors={errors}
        register={register}
      />

      <div className=" mt-3">
        <Button
          name="Save"
          handleClick={handleSubmit((value) => handlePasswordSubmit(value))}
        />
      </div>
    </div>
  );
};
export default UserChangePassword;
