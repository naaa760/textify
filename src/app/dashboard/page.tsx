"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import RightSidebar from "@/components/RightSidebar";

// Sidebar Navigation Item Component
const NavItem = ({
  icon,
  label,
  href,
  isActive = false,
}: {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
        isActive ? "bg-white/10 text-white" : "text-[#D1C0B6] hover:bg-white/5"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  </Link>
);

// Add this data outside the component
const humidityData = [
  { time: "24°", value: 24 },
  { time: "33°", value: 33 },
  { time: "29°", value: 29 },
  { time: "35°", value: 35 },
  { time: "24°", value: 24 },
  { time: "40°", value: 40 },
];

const energyData = [
  { day: "Sun", value: 30 },
  { day: "Mon", value: 52 },
  { day: "Tue", value: 34 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 48 },
  { day: "Fri", value: 23 },
  { day: "Sat", value: 67 },
];

// Dashboard Layout
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#8A6B55]">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#D1C0B6] via-[#8A6B55] to-[rgba(33,33,37,0.7)]" />

      <div className="relative flex">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-[240px] min-h-screen p-6"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #8A7455 100%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Logo */}
          <div className="mb-8">
            <span className="text-2xl font-semibold text-[#8A6B55]">
              TextiFy
            </span>
          </div>

          <div className="text-sm text-[#8A6B55] mb-4">Menu</div>

          {/* Navigation */}
          <nav className="space-y-2">
            <NavItem icon="🏠" label="Home" href="/dashboard" isActive />
            <NavItem icon="📊" label="Insights" href="/dashboard/insights" />
            <NavItem
              icon="👥"
              label="Recommends"
              href="/dashboard/recommends"
            />
            <NavItem icon="✉️" label="Messages" href="/dashboard/messages" />
          </nav>

          {/* Settings Section */}
          <div className="mt-8">
            <div className="text-sm text-[#8A6B55] mb-4">Settings</div>
            <nav className="space-y-2">
              <NavItem icon="👤" label="Profile" href="/dashboard/profile" />
              <NavItem icon="❓" label="FAQ's" href="/dashboard/faqs" />
              <NavItem icon="📞" label="Contact us" href="/dashboard/contact" />
              <NavItem icon="🚪" label="Logout" href="/logout" />
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header with Search and Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Anything Here..."
                  className="w-full px-4 py-2 pl-10 rounded-full bg-white shadow-sm"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  🔍
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-6 bg-[rgba(155,247,25,0.63)] rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg border border-[#4B65A2] flex items-center justify-center">
                  <span>🔔</span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-white">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* Rooms Section */}
              <section>
                <h2 className="text-[16px] font-['Chivo'] text-[#2B2B2B] mb-4">
                  Rooms
                </h2>
                <div className="grid grid-cols-4 gap-4 max-w-[800px]">
                  {[
                    {
                      name: "Kitchen",
                      devices: "8 Devices",
                      icon: "🏠",
                      color: "from-[#E3F17C] to-[#795959]",
                    },
                    {
                      name: "Living Room",
                      devices: "12 Devices",
                      icon: "🛋️",
                      color: "from-[#E3F17C] to-[#795959]",
                    },
                    {
                      name: "Bedroom",
                      devices: "4 Devices",
                      icon: "🛏️",
                      color: "from-[#E3F17C] to-[#795959]",
                    },
                    {
                      name: "Bathroom",
                      devices: "3 Devices",
                      icon: "🚿",
                      color: "from-[#E3F17C] to-[#795959]",
                    },
                  ].map((room) => (
                    <div
                      key={room.name}
                      className="w-[160px] h-[100px] rounded-2xl bg-gradient-to-br p-4 cursor-pointer 
                        hover:shadow-lg transition-all flex flex-col justify-between"
                      style={{
                        background:
                          "linear-gradient(135deg, #E3F17C 0%, #795959 100%)",
                      }}
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{room.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-white text-sm font-medium">
                          {room.name}
                        </h3>
                        <p className="text-white/80 text-xs">{room.devices}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Levels Section */}
              <section className="flex flex-col gap-4 w-[680px] h-[220px]">
                <h2 className="text-xl font-normal text-[#2B2B2B]">Levels</h2>
                <div className="flex gap-4">
                  {/* Humidity Card */}
                  <div
                    className="relative w-[330px] h-[180px] bg-[#DACCCC] rounded-xl shadow-[0px_2px_6px_rgba(0,0,0,0.25)]
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Icon and Title */}
                    <div
                      className="absolute left-4 top-4 w-10 h-10 bg-[#2892F0] rounded-lg flex items-center justify-center
                      transition-all duration-300 hover:bg-[#1a7fd9]"
                    >
                      <svg
                        width="25"
                        height="28"
                        viewBox="0 0 25 28"
                        fill="#DACCCC"
                      >
                        <path d="M12.5 0L25 12.5L12.5 28L0 12.5L12.5 0Z" />
                      </svg>
                    </div>
                    <span className="absolute left-[70px] top-[28px] text-xl text-[#505050]">
                      Humidity
                    </span>

                    {/* Dropdown button with hover effect */}
                    <div className="absolute right-5 top-[42px] flex items-center">
                      <button className="flex items-center gap-1 text-[16px] text-[#1D1D1D] transition-colors hover:text-[#2396EF]">
                        <span>Today</span>
                        <svg
                          className="ml-1 transition-transform group-hover:rotate-180"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5 8L10 13L15 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Graph Container */}
                    <div className="absolute left-5 right-5 bottom-10 h-[100px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={humidityData}>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#2396EF"
                            strokeWidth={1.5}
                            dot={(props) => {
                              const { cx, cy, index } = props;
                              return (
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={4}
                                  fill={index === 5 ? "#2396EF" : "#DACCCC"}
                                  stroke="#2396EF"
                                  className={
                                    index === 5
                                      ? "filter drop-shadow-[0px_0px_7px_#299FBA]"
                                      : ""
                                  }
                                />
                              );
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>

                      {/* Temperature Labels */}
                      <div className="flex justify-between mt-2">
                        {humidityData.map((item, index) => (
                          <span
                            key={index}
                            className="text-[14px] text-[#454444] opacity-75 font-['Chivo']"
                          >
                            {item.time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Energy Card */}
                  <div
                    className="relative w-[330px] h-[180px] bg-[#DACCCC] rounded-xl shadow-[0px_2px_6px_rgba(0,0,0,0.25)]
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Icon and Title */}
                    <div
                      className="absolute left-4 top-4 w-10 h-10 bg-[#B16CFF] rounded-lg flex items-center justify-center
                      transition-all duration-300 hover:bg-[#9f52f4]"
                    >
                      <svg
                        width="25"
                        height="28"
                        viewBox="0 0 25 28"
                        fill="#DACCCC"
                      >
                        <path d="M12.5 2L8 12H17L12.5 26L17 16H8L12.5 2Z" />
                      </svg>
                    </div>
                    <span className="absolute left-[70px] top-[28px] text-xl text-[#505050]">
                      Energy
                    </span>

                    {/* Dropdown button with hover effect */}
                    <div className="absolute right-5 top-[42px] flex items-center">
                      <button className="flex items-center gap-1 text-[16px] text-[#1D1D1D] transition-colors hover:text-[#B16CFF]">
                        <span>Week</span>
                        <svg
                          className="ml-1 transition-transform group-hover:rotate-180"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5 8L10 13L15 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Chart Container */}
                    <div className="absolute left-5 right-5 bottom-10 h-[100px]">
                      {/* Dashed Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="border-t border-dashed border-[#C8C8C8]"
                          />
                        ))}
                      </div>

                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={energyData} barGap={0}>
                          <Bar
                            dataKey="value"
                            fill="#E8F3FC"
                            radius={[2, 2, 0, 0]}
                            shape={(props) => {
                              const { x, y, width, height, index } = props;
                              return (
                                <g>
                                  <rect
                                    x={x}
                                    y={y}
                                    width={width}
                                    height={height}
                                    fill={index === 5 ? "#2396EF" : "#E8F3FC"}
                                    rx={2}
                                    ry={2}
                                  />
                                  {index === 5 && (
                                    <text
                                      x={x + width / 2}
                                      y={y - 8}
                                      textAnchor="middle"
                                      fill="#2396EF"
                                      className="text-[10px] font-['Chivo']"
                                    >
                                      20.6 kWh
                                    </text>
                                  )}
                                </g>
                              );
                            }}
                          />
                        </BarChart>
                      </ResponsiveContainer>

                      {/* Day Labels */}
                      <div className="flex justify-between mt-2">
                        {energyData.map((item, index) => (
                          <span
                            key={index}
                            className="text-[14px] text-[#454444] font-['Chivo']"
                          >
                            {item.day}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Devices Section */}
              <section>
                <h2 className="text-lg font-semibold text-[#8A6B55] mb-3">
                  Devices
                </h2>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: "Air Conditioner", icon: "❄️", status: "Off" },
                    { name: "Smart TV", icon: "📺", status: "On" },
                    { name: "Coffee Machine", icon: "☕", status: "Off" },
                    { name: "Refrigerator", icon: "��", status: "On" },
                  ].map((device) => (
                    <div
                      key={device.name}
                      className="p-3 rounded-xl bg-white/80 backdrop-blur-sm
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="bg-blue-500 p-1.5 rounded-lg transition-colors hover:bg-blue-600">
                          <span className="text-lg">{device.icon}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={device.status === "On"}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <h3 className="text-sm font-medium text-[#8A6B55]">
                        {device.name}
                      </h3>
                      <p className="text-xs text-[#8A6B55]/70">
                        {device.status}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <RightSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
