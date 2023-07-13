import React, { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "../input/Input";
import Button from "../Utils/Button";
import { useMutation, useQueryClient } from "react-query";
import { updateAddress } from "../../app/api/userApi";
import { toast } from "react-hot-toast";
import { BsCheckCircle, BsXCircleFill, BsPencilFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

type UserFormProps = {
  profile: Profile;
  isLoading: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
};

const UserForm: React.FC<UserFormProps> = ({
  profile,
  isLoading,
  isEditing,
  setIsEditing,
}) => {
  const queryClient = useQueryClient();
  const { setCredential, profile: storeProfile } = useAuth();
  const mutation = useMutation({
    mutationFn: updateAddress,
    onSuccess: (data) => {
      console.log(data);
      if (data?.isError) {
        toast(data?.message, {
          style: { background: "#1e1e1e", color: "#fff" },
          icon: <BsXCircleFill className="text-rose-400" />,
        });
      }
    },
  });

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      name: profile?.name ?? "",
      email: profile?.email ?? "",
      phonenumber: profile?.phonenumber ?? "",
    },
  });

  useEffect(() => {
    if (!isLoading || profile) {
      setValue("name", profile.name ?? "");
      setValue("email", profile.email ?? "");
      setValue("phonenumber", profile.phonenumber ?? "");
    }
  }, [isLoading]);

  const handleSaveAddress = (value: any) => {
    mutation.mutate({ values: value });
    setIsEditing(false);

    // if (mutation.isSuccess) {
    toast("User profile updated", {
      style: { background: "#1e1e1e", color: "#fff" },
      icon: <BsCheckCircle className="text-green-400" />,
    });
    queryClient.invalidateQueries("profile");
    setCredential({
      email: value?.email,
      name: value?.name,
      token: storeProfile.token,
    });
    // }
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <Input
        id="name"
        register={register}
        label="Full Name"
        errors={errors}
        placaholder="Enter Your Name"
        readonly={!isEditing}
      />
      <Input
        id="email"
        register={register}
        label="Email"
        errors={errors}
        placaholder="laundary@mail.com"
        readonly={true}
      />
      <Input
        id="phonenumber"
        register={register}
        label="Phone Number"
        errors={errors}
        placaholder="Enter Your Phone Number"
        readonly={!isEditing}
      />

      <div className=" mt-3">
        <Button
          name="Save"
          handleClick={handleSubmit((value) => handleSaveAddress(value))}
        />
      </div>
    </div>
  );
};
export default UserForm;
