import React from "react";
import { FaUtensils, FaCouch, FaBed, FaBath } from "react-icons/fa";

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
    <div className="flex flex-col gap-7 p-7">
      {/* Header with Search */}
      <div className="flex justify-between items-end">
        <h2 className="text-[24px] font-chivo text-[#2B2B2B]">Rooms</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Anything Here..."
            className="w-[438px] h-[52px] px-14 bg-white rounded-xl shadow-[0px_2px_5px_rgba(0,0,0,0.25)]"
          />
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2">
            <svg
              className="w-6 h-6 text-[#6C7894]"
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
      <div className="flex gap-6">
        {rooms.map((room, index) => (
          <div
            key={room.name}
            className="w-[168px] h-[171px] rounded-[20px] p-5 relative"
            style={{
              background:
                "linear-gradient(225deg, rgba(227, 241, 124, 0.99) 0%, #795959 100%)",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Icon Box */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
              style={{ background: room.iconBg, opacity: 0.57 }}
            >
              <div className="text-[#2396EF] text-[28px]">{room.icon}</div>
            </div>

            {/* Room Info */}
            <h3 className="text-[20px] font-chivo text-white">{room.name}</h3>
            <p className="text-[16px] font-chivo text-white opacity-75">
              {room.devices}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
