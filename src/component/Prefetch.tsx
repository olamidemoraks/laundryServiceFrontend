import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type PrefetchProps = {};

const Prefetch: React.FC<PrefetchProps> = () => {
  const { profile } = useAuth();
  return <>{profile?.token ? <Outlet /> : <Navigate to={"/authenticate"} />}</>;
};
export default Prefetch;
