"use client";

import React from "react";
import {
  FaHome,
  FaChartBar,
  FaFileAlt,
  FaComments,
  FaUser,
  FaQuestionCircle,
  FaPhoneAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", icon: <FaHome />, color: "#777C81" },
    { name: "Insights", icon: <FaChartBar />, color: "#6C7894" },
    { name: "Recommends", icon: <FaFileAlt />, color: "#6C7894" },
    { name: "Messages", icon: <FaComments />, color: "#6C7894" },
  ];

  const settingsItems = [
    { name: "Profile", icon: <FaUser />, color: "#6C7894" },
    { name: "FAQ's", icon: <FaQuestionCircle />, color: "#6C7894" },
    { name: "Contact us", icon: <FaPhoneAlt />, color: "#D8FF7E" },
    { name: "Logout", icon: <FaSignOutAlt />, color: "#6C7894" },
  ];

  return (
    <div className="absolute left-[34px] top-[28px] flex flex-row items-start gap-[10px] isolate w-[200px] h-[700px]">
      <div className="w-full h-full bg-gradient-to-b from-[#FFFFFF] to-[#8A7455] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]">
        {/* Logo */}
        <h1 className="text-[18px] font-chivo text-black font-normal leading-6 ml-8 mt-8">
          TextiFy
        </h1>

        {/* Menu Section */}
        <div className="absolute left-[32px] top-[160px] flex flex-col gap-[40px] w-[140px]">
          <div className="flex flex-col gap-[32px]">
            <p className="text-[16px] font-chivo text-[#707582] leading-6">
              Menu
            </p>
            <ul className="flex flex-col gap-5">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className="flex items-start h-[20px] relative"
                >
                  <span
                    className="absolute left-0 top-0 w-5 h-5"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="absolute left-[32px] top-[1px] font-chivo text-[16px] leading-5 text-white">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Settings Section */}
          <div className="flex flex-col gap-[32px]">
            <p className="text-[16px] font-chivo text-[#484E5B] leading-6">
              Settings
            </p>
            <ul className="flex flex-col gap-5">
              {settingsItems.map((item, index) => (
                <li
                  key={item.name}
                  className="flex items-start h-[20px] relative"
                >
                  <span
                    className="absolute left-0 top-0 w-5 h-5"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="absolute left-[32px] top-[1px] font-chivo text-[16px] leading-5 text-white">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
