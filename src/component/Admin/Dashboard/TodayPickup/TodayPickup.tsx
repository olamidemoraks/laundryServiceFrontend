import React from "react";
import { HiClock } from "react-icons/hi";
import { Link } from "react-router-dom";

type TodayPickupProps = {
  delivery: Order[] | undefined;
};

const TodayPickup: React.FC<TodayPickupProps> = ({ delivery }) => {
  return (
    <div className="w-full">
      <table className=" w-full text-sm text-left">
        <thead className="text-[.8rem] bg-mid-black capitalize">
          <tr>
            <th scope="col" className="md:px-6 px-2  py-2">
              s/n
            </th>
            <th scope="col" className="md:px-6 px-2  py-2">
              #booking no
            </th>
            <th
              scope="col"
              className="md:px-6 px-2  py-2 flex items-center gap-1"
            >
              Time <HiClock />
            </th>
            <th scope="col" className="md:px-6 px-2  py-2 ">
              Total qty
            </th>
            <th scope="col" className="md:px-6 px-2 max-sm:hidden  ">
              Total Amount
            </th>
            {/* <th scope="col" className="md:px-6 px-2 max-sm:hidden  ">
              Email
            </th> */}
            <th scope="col" className="md:px-6 px-2  py-2 "></th>
          </tr>
        </thead>
        <tbody>
          {delivery?.map((item, idx) => (
            <tr
              className={`${
                idx % 2 == 1 ? "bg-mid-black/60" : ""
              }  whitespace-nowrap text-neutral-300 hover:bg-mid-black cursor-pointer`}
            >
              <td className="md:px-6 px-2  py-3">{idx + 1}</td>
              <td className="md:px-6 px-2  py-3">#{item.receipt}</td>
              <td className="md:px-6 px-2  py-3">{item.pickupTime}</td>
              <td className="md:px-6 px-2  py-3 ">
                {item.totalItems}/<small>items</small>{" "}
              </td>
              <td className="md:px-6 px-2 max-sm:hidden text-light-gold font-medium">
                ₦ {item.totalAmount.toLocaleString()}
              </td>
              {/* <td className="md:px-6 px-2 max-sm:hidden  ">{item.email}</td> */}
              <td className="md:px-6 px-2  py-3">
                <Link
                  className="bg-indigo-700/30 px-2 p-1 rounded-[.3rem] hover:border-[2px] hover:border-indigo-700/30 hover:bg-transparent ease-linear "
                  to={`order/${item._id}`}
                >
                  View More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TodayPickup;
