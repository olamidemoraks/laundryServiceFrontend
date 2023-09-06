import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import {
  createSearchParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { FaChevronDown, FaSearch } from "react-icons/fa";

import { allUsers } from "../../app/api/userApi";
import UserCard from "../../component/Admin/User/UserCard";
import { MdArrowDownward, MdArrowUpward, MdSort } from "react-icons/md";
import Loader from "../../component/Utils/Loader";
type UsersProps = {};

const Users: React.FC<UsersProps> = () => {
  const navigate = useNavigate();
  const router = useLocation();
  const [searchParams] = useSearchParams();
  const searchNameRef = useRef<HTMLInputElement>(null);
  const [isFilter, setIsFilter] = useState(false);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery<Profile[]>("users", {
    queryFn: () => {
      return allUsers(router.search);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  let params: any = {};

  useEffect(() => {
    //convert the array to object
    // const currentParams = Object.fromEntries([...searchParams])
    refetch();
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(router.search);

    const name = searchNameRef.current?.value;
    params["name"] = name ?? "";
    const filter = searchParams.get("filter");
    if (filter) {
      params["filter"] = filter;
    }
    navigate({ search: `?${createSearchParams(params)}` });
  };

  const handleFilter = (filter: string) => {
    params["filter"] = filter;
    console.log(router.search);

    const search = searchParams.get("name");
    if (search) {
      params["name"] = search;
    }

    navigate({ search: `?${createSearchParams(params)}` });
  };

  if (!users && isLoading) {
    return (
      <div className=" h-[70vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  // let users: Profile[] = [
  //   // ...(data as Profile[]),
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  //   {
  //     address: "Behind modern market, first bank",

  //     email: "shiloh@gmail.com",

  //     name: "francis john",
  //     phonenumber: "09039287777",
  //   },
  // ];

  return (
    <div className="md:px-[4rem] px-[1rem] mt-4 w-full">
      <div className="flex justify-between items-start gap-3 mb-7">
        <div className=" text-[1.4rem] font-semibold">
          Customers <span className=" text-neutral-400"> {users?.length}</span>
        </div>
        <div className="flex md:flex-row  items-end flex-col-reverse gap-3">
          <div
            className="flex  gap-1 items-center cursor-pointer relative"
            onClick={() => setIsFilter((prev) => !prev)}
          >
            <MdSort className=" text-[1.2rem] text-light-gold" />
            <p className="text-[.9rem]">Sort by</p>
            <FaChevronDown className=" text-[.7rem] pt-1" />

            <div
              className={`${
                isFilter ? "scale-100" : "scale-0"
              } flex flex-col  bg-mid-black py-2 rounded-[.34rem] absolute z-50 top-6 -right-2 shadow-md ease-out duration-150`}
            >
              <div
                className="text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1 flex"
                onClick={() => handleFilter("")}
              >
                {"  "}
                None
              </div>
              <div
                className="flex items-center gap-1 text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1"
                onClick={() => handleFilter("asc")}
              >
                <MdArrowUpward />
                Asc
              </div>
              <div
                className="flex items-center gap-1 text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1"
                onClick={() => handleFilter("desc")}
              >
                <MdArrowDownward />
                Desc
              </div>
            </div>
          </div>
          {/* <select name="" className=" outline-none bg-transparent" id="filter">
          <option value="">Filter</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select> */}
          {/* <div className="flex gap-1 items-center cursor-pointer">
          <MdSort className=" text-[1.2rem] text-light-gold" />
          <p className="text-[.9rem]">Sort By</p>
          <FaChevronDown className=" text-[.7rem] pt-1" />
        </div> */}
          <form
            className="flex gap-2 items-center cursor-pointer rounded-[.4rem] bg-dark-gold/10 border border-light-gold/70 px-2 p-1 w-[14rem]"
            onSubmit={handleSearch}
          >
            <button>
              <FaSearch className=" text-[.7rem] text-neutral-300" />
            </button>
            <input
              type="text "
              name="name"
              className=" outline-none border-none bg-transparent placeholder:italic placeholder:capitalize text-[.8rem]"
              placeholder="Search a name"
              ref={searchNameRef}
            />
          </form>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3  min-[500px]:grid-cols-2 gap-x-5 gap-y-6">
        {users?.map((user) => (
          <UserCard users={user} />
        ))}
      </div>
    </div>
  );
};
export default Users;
