import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { RiFlashlightFill } from "react-icons/ri";

const Levels = () => {
  const humidityData = [24, 33, 29, 35, 24, 40];

  return (
    <div className="flex flex-col gap-4 px-6">
      <h2 className="text-[24px] font-chivo text-[#2B2B2B]">Levels</h2>

      <div className="flex gap-6">
        {/* Humidity Card */}
        <div className="w-[320px] h-[180px] bg-[#DACCCC] rounded-2xl shadow-md p-5 relative">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#2892F0] rounded-xl flex items-center justify-center">
              <WiHumidity className="text-[#DACCCC] text-xl" />
            </div>
            <span className="text-[20px] font-chivo text-[#505050]">
              Humidity
            </span>
            <div className="ml-auto flex items-center gap-1">
              <span className="text-[14px] text-[#1D1D1D]">Today</span>
              <FaChevronDown className="text-black w-4 h-4" />
            </div>
          </div>

          {/* Graph */}
          <div className="mt-4 relative h-[80px]">
            <svg className="w-full h-full">
              <path
                d="M20,50 L80,25 L140,55 L200,15 L260,50 L320,8"
                fill="none"
                stroke="#2396EF"
                strokeWidth="1"
              />
              {humidityData.map((value, index) => (
                <circle
                  key={index}
                  cx={20 + index * 52}
                  cy={50 - value / 2}
                  r="3"
                  fill="#DACCCC"
                  stroke="#2396EF"
                />
              ))}
            </svg>
          </div>

          {/* Values */}
          <div className="flex justify-between px-4">
            {humidityData.map((value, index) => (
              <span
                key={index}
                className="text-[12px] text-[#454444] opacity-75"
              >
                {value}°
              </span>
            ))}
          </div>
        </div>

        {/* Energy Card */}
        <div className="w-[320px] h-[180px] bg-[#DACCCC] rounded-2xl shadow-md p-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#B16CFF] rounded-xl flex items-center justify-center">
              <RiFlashlightFill className="text-[#DACCCC] text-xl" />
            </div>
            <span className="text-[20px] font-chivo text-[#505050]">
              Energy
            </span>
            <div className="ml-auto flex items-center gap-1">
              <span className="text-[14px] text-[#1D1D1D]">Week</span>
              <FaChevronDown className="text-black w-4 h-4" />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="mt-6 relative h-[60px] flex justify-between px-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div key={day} className="relative">
                  <div
                    className="w-[20px]"
                    style={{
                      height: `${20 + Math.random() * 30}px`,
                      background: index === 5 ? "#2396EF" : "#E8F3FC",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[12px] text-[#454444]">
                    {day}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
