import React, { useState } from "react";
import PageTemplate from "../component/Layout/PageTemplate";
import Navbar from "../component/Home/Navbar";
import SideMenu from "../component/Layout/SideMenu";
import { useQuery } from "react-query";
import { showMe } from "../app/api/userApi";
import UserForm from "../component/Profile/UserForm";
import { BsPencilFill } from "react-icons/bs";
import UserChangePassword from "../component/Profile/UserChangePassword";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  const { data: profile, isLoading } = useQuery({
    queryFn: showMe,
    queryKey: "profile",
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  return (
    <PageTemplate>
      <SideMenu />
      <div className="flex flex-col gap-1 w-full mb-10">
        <Navbar />
        <div className=" flex justify-between items-center my-2">
          <p
            onClick={() => setChangePassword((prev) => !prev)}
            className="text-[.8rem]  cursor-pointer hover:bg-secondary-black bg-mid-black transition px-3 py-1 rounded-[.6rem]"
          >
            Change password
          </p>

          <p
            onClick={() => setIsEditing((prev) => !prev)}
            className={`${
              isEditing && "bg-mid-black"
            } cursor-pointer hover:bg-mid-black transition px-3 py-1 rounded-[.6rem] text-right text-[.9rem] flex items-center gap-1`}
          >
            Edit <BsPencilFill className="text-[.7rem]" />
          </p>
        </div>
        {changePassword ? (
          <UserChangePassword setChangePassword={setChangePassword} />
        ) : (
          <UserForm
            profile={profile}
            isLoading={isLoading}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </PageTemplate>
  );
};
export default Profile;
