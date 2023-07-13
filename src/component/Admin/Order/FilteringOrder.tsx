import React, { useRef, useState } from "react";
import { FaChevronDown, FaFilter, FaSearch } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import { deliveryStatus } from "../../../utils/date";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
type FilteringOrderProps = {};

const FilteringOrder: React.FC<FilteringOrderProps> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchRef = useRef<HTMLInputElement>(null);
  const [isFilter, setIsFilter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  let params: any = Object.fromEntries(searchParams);

  const handleFilter = (filter: string) => {
    params["filter"] = filter;
    navigate({ search: `?${createSearchParams(params)}` });
  };

  const handleSorting = (sort: string) => {
    //sorting by asc and desc order by removing the '-' sign from the sort value
    if ((params["sort"] as string)?.includes(sort)) {
      if ((params["sort"] as string)?.includes("-")) {
        params["sort"] = sort.split("-")[1];
      } else {
        params["sort"] = sort;
      }
    } else {
      params["sort"] = sort;
    }
    navigate({ search: `?${createSearchParams(params)}` });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = searchRef.current?.value;
    params["receipt"] = name ?? "";
    navigate({ search: `?${createSearchParams(params)}` });
  };

  return (
    <div className="flex md:flex-row items-end flex-col-reverse gap-3">
      <div className="flex items-center gap-3">
        <div
          className="flex  gap-1 items-center cursor-pointer relative"
          onClick={() => setIsFilter((prev) => !prev)}
        >
          <FaFilter className=" text-[.8rem] text-light-gold" />
          <p className="text-[.9rem]">Filter</p>
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
              className={` ${deliveryStatus.pending} flex items-center gap-1 text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1`}
              onClick={() => handleFilter("pending")}
            >
              Pending
            </div>
            <div
              className={` ${deliveryStatus.ongoing} flex items-center gap-1 text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1`}
              onClick={() => handleFilter("ongoing")}
            >
              Ongoing
            </div>
            <div
              className={` ${deliveryStatus.rejected} flex items-center gap-1 text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1`}
              onClick={() => handleFilter("rejected")}
            >
              Rejected
            </div>
            <div
              className={` ${deliveryStatus.delivered} flex items-center gap-1 text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1`}
              onClick={() => handleFilter("delivered")}
            >
              Delivered
            </div>
          </div>
        </div>

        <div
          className="flex gap-1 items-center cursor-pointer relative"
          onClick={() => setIsSort((prev) => !prev)}
        >
          <MdSort className=" text-[1.2rem] text-light-gold" />
          <p className="text-[.9rem]">Sort By</p>
          <FaChevronDown className=" text-[.7rem] pt-1" />

          <div
            className={`${
              isSort ? "scale-100" : "scale-0"
            } flex flex-col w-[10rem]  bg-mid-black py-2 rounded-[.34rem] absolute z-50 top-6 -right-2 shadow-md ease-out duration-150`}
          >
            <div
              className="text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1 flex"
              onClick={() => handleSorting("")}
            >
              None
            </div>
            <div
              className="text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1 flex "
              onClick={() => handleSorting("-createdAt")}
            >
              Date Created
            </div>
            <div
              className="text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1 flex "
              onClick={() => handleSorting("-pickupDate")}
            >
              Pickup Date
            </div>
            <div
              className="text-sm hover:text-light-gold px-3 hover:bg-dark-gold/10 py-1 flex "
              onClick={() => handleSorting("-receipt")}
            >
              #Booking Id
            </div>
          </div>
        </div>
      </div>
      <form
        className="flex gap-2 items-center cursor-pointer rounded-[.4rem] bg-dark-gold/10 border border-light-gold/70 px-2 p-1 w-[14rem]"
        onSubmit={handleSearch}
      >
        <button>
          <FaSearch className=" text-[.7rem] text-neutral-300" />
        </button>
        <input
          type="number"
          name="name"
          className=" outline-none border-none bg-transparent placeholder:italic placeholder:capitalize text-[.8rem]"
          placeholder="Search Booking ID"
          ref={searchRef}
        />
      </form>
    </div>
  );
};
export default FilteringOrder;
