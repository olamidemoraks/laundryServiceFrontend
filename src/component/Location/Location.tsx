import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCheckCircle, BsChevronDown, BsXCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { showMe, updateAddress } from "../../app/api/userApi";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

type LocationProps = {};

const Location: React.FC<LocationProps> = () => {
  const queryClient = useQueryClient();
  const {
    profile: { token },
  } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const { data: profile } = useQuery({
    queryKey: "profile",
    queryFn: () => showMe(token),
    enabled: !!token,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: updateAddress,
    onSuccess: (data) => {
      console.log(data);
      if (data?.isError) {
        toast(data?.message, {
          style: { background: "#1e1e1e", color: "#fff" },
          icon: <BsXCircleFill className="text-rose-400" />,
        });
      } else {
        toast("User profile updated", {
          style: { background: "#1e1e1e", color: "#fff" },
          icon: <BsCheckCircle className="text-green-400" />,
        });
        queryClient.invalidateQueries("profile");
        resetField("address");
        setIsOpen(false);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    defaultValues: {
      address: "",
    },
  });

  const handleSaveAddress = (value: any) => {
    mutation.mutate({ values: value });
  };
  return (
    <div className="bg-mid-black rounded-[.8rem]">
      <div
        className="w-full bg-mid-black flex justify-between items-center rounded-[.8rem]  p-3 mt-3 transition hover:bg-dark-gold/10 cursor-pointer group"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex gap-2 items-center">
          <div className="w-[1.4rem] h-[1.4rem] flex justify-center items-center bg-rose-500 rounded-full">
            <MdLocationOn />
          </div>
          <div className="flex flex-col leading-4">
            <p className=" text-[.7rem] text-neutral-400">Collection Point</p>
            <p className="text-[.8rem]">
              {profile?.address ?? "Add your location"}
            </p>
          </div>
        </div>
        <BsChevronDown className="text-[.7rem] group-hover:animate-bounce group-hover:text-[.78rem]" />
      </div>
      {isOpen && (
        <div className="p-3 flex flex-col gap-1">
          <label htmlFor="location" className=" text-[.7rem]">
            New Collection Point
          </label>
          <div className="flex gap-1 items-center border border-neutral-400 pl-2 rounded-[.4rem] w-full">
            <MdLocationOn className=" text-[1rem]" />

            <input
              className="bg-transparent outline-none w-full h-full px-2 py-2 placeholder:text-neutral-600 placeholder:text-sm rounded-[.4rem] placeholder:italic"
              type="text"
              {...register("address", { required: true })}
              id="location"
              placeholder="Please enter your correct address"
            />
          </div>
          {errors.address && (
            <p className=" text-sm text-rose-400">
              Please enter your pickup address
            </p>
          )}
          <button
            className=" bg-white text-black font-semibold text-sm rounded-[.4rem] py-1 mt-2"
            type="button"
            onClick={handleSubmit((value) => handleSaveAddress(value))}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};
export default Location;
