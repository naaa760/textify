"use client";

import React from "react";
import {
  FaHome,
  FaChartBar,
  FaComments,
  FaUser,
  FaQuestionCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Insights", icon: <FaChartBar /> },
    { name: "Recommands", icon: <FaComments /> },
    { name: "Messages", icon: <FaComments /> },
  ];

  const settingsItems = [
    { name: "Profile", icon: <FaUser /> },
    { name: "FAQ's", icon: <FaQuestionCircle /> },
    { name: "Contact us", icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="absolute left-[34px] top-[28px] flex flex-row items-start gap-[10px] isolate w-[250px] h-[862px]">
      {/* Background Rectangle */}
      <div className="w-[250px] h-[862px] bg-gradient-to-b from-white to-[#8A7455] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#795959] ml-[40px] mt-[40px]">
          TextiFy
        </h1>

        {/* Menu Section */}
        <div className="absolute left-[40px] top-[217px] flex flex-col gap-[56px]">
          <div className="flex flex-col gap-[39px]">
            <p className="text-[20px] font-chivo text-[#707582]">Menu</p>
            <ul className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 text-white cursor-pointer"
                >
                  <span className="text-[24px] text-[#6C7894]">
                    {item.icon}
                  </span>
                  <span className="font-chivo text-[20px]">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Settings Section */}
          <div className="flex flex-col gap-[39px]">
            <p className="text-[20px] font-chivo text-[#484E5B]">Settings</p>
            <ul className="flex flex-col gap-6">
              {settingsItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 text-white cursor-pointer"
                >
                  <span className="text-[24px] text-[#6C7894]">
                    {item.icon}
                  </span>
                  <span className="font-chivo text-[20px]">{item.name}</span>
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
