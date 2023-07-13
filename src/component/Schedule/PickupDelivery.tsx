import React from "react";

type PickupDeliveryProps = {};

const PickupDelivery: React.FC<PickupDeliveryProps> = () => {
  return (
    <div className="w-full mt-3">
      <div className="flex justify-between md:w-[100%]">
        <p className="font-semibold text-neutral-400">Pickup Date</p>
      </div>
    </div>
  );
};
export default PickupDelivery;
