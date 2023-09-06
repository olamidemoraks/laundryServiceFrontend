import { GoogleLogin } from "@react-oauth/google";
import decode from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import { externalSignin } from "../app/api/auth";
import Login from "../component/Authenticate/Login";
import Register from "../component/Authenticate/Register";
import PageTemplate from "../component/Layout/PageTemplate";
import NavLink from "../component/Utils/NavLink";
import useAuth from "../hooks/useAuth";
import { fadeIn } from "../utils/motion";

type AuthenticationProps = {};

const Authentication: React.FC<AuthenticationProps> = () => {
  let googleToken = "";
  const { setCredential } = useAuth();
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("login");
  const isLogin = authMode === "login" ? true : false;
  const mutation = useMutation({
    mutationFn: externalSignin,
    onSuccess: async (data) => {
      console.log("data", data);
      if (!data?.isError) {
        setCredential({
          email: data.email,
          name: data.name,
          token: googleToken,
        });
        toast.success("Successful login");
        navigate("/home");
      } else {
        toast.error(data?.message ?? "Something went wrong, try again");
      }
    },
  });

  const changeAuthMode = (value: string) => {
    setAuthMode(value);
  };

  const handleSuccess = (response: any) => {
    googleToken = response.credential;
    const decodedData: any = decode(response.credential);
    const { email, name, sub } = decodedData;
    mutation.mutate({ values: { email, name, sub } });
  };
  return (
    <PageTemplate>
      <motion.div
        variants={fadeIn("right", "tween", 0.4, 1.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.23 }}
        className="w-full"
      >
        <NavLink to={"/"} label={isLogin ? "Log in" : "Sign up"} />
        <div className=" w-full flex gap-2 flex-col mt-12">
          <p className=" text-neutral-500 text-sm">
            Sign up with one of the following
          </p>
          <div className="flex gap-6 w-full">
            <GoogleLogin
              onSuccess={(data) => handleSuccess(data)}
              theme="filled_black"
              shape="rectangular"
            />
            {/* <div
              onClick={googleLogin}
              className="flex items-center justify-center bg-mid-black w-full h-[2.6rem] rounded-md border border-secondary-black/80 text-[1.3rem] hover:bg-mid-black/60 transition cursor-pointer"
            >
              <AiFillGoogleCircle />{" "}
            </div> */}
            {/* <div className="flex items-center justify-center bg-mid-black w-full h-[2.6rem] rounded-md border border-secondary-black/80 text-[1.3rem] hover:bg-mid-black/60 transition cursor-pointer">
              <AiFillApple />
            </div> */}
          </div>
        </div>
        <div className="relative  after:w-full after:h-[1px] after:bg-neutral-500 before:w-full before:h-[1px] before:bg-neutral-500 flex items-center gap-2">
          OR
        </div>
        <div className="mt-5">{isLogin ? <Login /> : <Register />}</div>
        <div className="text-sm text-center mt-3">
          {!isLogin ? (
            <p className=" text-neutral-400">
              Already have an account?{" "}
              <strong
                className="text-neutral-200 cursor-pointer"
                onClick={() => changeAuthMode("login")}
              >
                Log in
              </strong>
            </p>
          ) : (
            <p className=" text-neutral-400">
              Don't have an account?{" "}
              <strong
                className="text-neutral-200 cursor-pointer"
                onClick={() => changeAuthMode("register")}
              >
                Sign up
              </strong>
            </p>
          )}
        </div>
      </motion.div>
    </PageTemplate>
  );
};
export default Authentication;
