import React from "react";
import { FaUtensils, FaCouch, FaBed, FaBath } from "react-icons/fa";
import Levels from "./Levels";
import Devices from "./Devices";

const Rooms = () => {
  const rooms = [
    {
      name: "Kitchen",
      devices: "8 Devices",
      icon: <FaUtensils />,
      iconBg: "#CCE6FB",
    },
    {
      name: "Living Room",
      devices: "12 Devices",
      icon: <FaCouch />,
      iconBg: "rgba(35, 150, 239, 0.41)",
    },
    {
      name: "Bedroom",
      devices: "4 Devices",
      icon: <FaBed />,
      iconBg: "rgba(35, 150, 239, 0.41)",
    },
    {
      name: "Bathroom",
      devices: "3 Devices",
      icon: <FaBath />,
      iconBg: "#CCE6FB",
    },
  ];

  return (
    <div className="flex flex-col gap-5 px-6">
      {/* Header with Search */}
      <div className="flex justify-between items-end">
        <h2 className="text-[24px] font-chivo text-[#2B2B2B]">Rooms</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Anything Here..."
            className="w-[400px] h-[45px] px-12 bg-white rounded-xl shadow-[0px_2px_5px_rgba(0,0,0,0.25)]"
          />
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2">
            <svg
              className="w-5 h-5 text-[#6C7894]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <div className="flex gap-5">
        {rooms.map((room) => (
          <div
            key={room.name}
            className="w-[150px] h-[150px] rounded-[20px] p-4 relative"
            style={{
              background:
                "linear-gradient(225deg, rgba(227, 241, 124, 0.99) 0%, #795959 100%)",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Icon Box */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
              style={{ background: room.iconBg, opacity: 0.57 }}
            >
              <div className="text-[#2396EF] text-xl">{room.icon}</div>
            </div>

            {/* Room Info */}
            <h3 className="text-[18px] font-chivo text-white">{room.name}</h3>
            <p className="text-[14px] font-chivo text-white opacity-75">
              {room.devices}
            </p>
          </div>
        ))}
      </div>

      {/* New sections */}
      <Levels />
      <Devices />
    </div>
  );
};

export default Rooms;
