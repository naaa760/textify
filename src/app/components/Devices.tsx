import React from "react";
import {
  FaSnowflake,
  FaTv,
  FaCoffee,
  FaRegSnowflake,
  FaChevronRight,
} from "react-icons/fa";

const Devices = () => {
  const devices = [
    {
      name: "Air Conditioner",
      icon: <FaSnowflake />,
      status: "off",
      bg: "white",
    },
    { name: "Smart TV", icon: <FaTv />, status: "on", bg: "#E9D4B6" },
    { name: "Coffee Machine", icon: <FaCoffee />, status: "off", bg: "white" },
    {
      name: "Refrigerator",
      icon: <FaRegSnowflake />,
      status: "on",
      bg: "#E9D4B6",
    },
  ];

  return (
    <div className="flex flex-col gap-4 px-6">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-chivo text-[#2B2B2B]">Devices</h2>
        <FaChevronRight className="text-[#2B2B2B] w-5 h-5" />
      </div>

      <div className="flex gap-6">
        {devices.map((device) => (
          <div
            key={device.name}
            className="w-[150px] h-[150px] rounded-[20px] shadow-md p-4"
            style={{ background: device.bg }}
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-[16px] text-[#5C5C5C]">
                {device.status === "on" ? "On" : "Off"}
              </span>
              <div
                className={`w-8 h-4 rounded-full relative ${
                  device.status === "on" ? "bg-[#3E7EF7]" : "bg-[#929BA3]"
                }`}
              >
                <div
                  className={`absolute w-3 h-3 bg-white rounded-full top-[2px] transition-all ${
                    device.status === "on" ? "right-[2px]" : "left-[2px]"
                  }`}
                />
              </div>
            </div>

            <div className="w-[40px] h-[40px] bg-[#3E7EF7] rounded-xl flex items-center justify-center mb-3">
              <div className="text-white/80 text-lg">{device.icon}</div>
            </div>

            <span className="text-[14px] font-chivo text-[#284680]">
              {device.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;
