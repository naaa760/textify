"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
        isActive ? "bg-white/10 text-white" : "text-[#D1C0B6] hover:bg-white/5"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.div>
  </Link>
);

// Dashboard Layout
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#8A6B55]">
      {/* Background Gradient */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#D1C0B6] via-[#8A6B55] to-[rgba(33,33,37,0.7)]"
        style={{ borderRadius: "40px" }}
      />

      <div className="relative flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-72 h-screen sticky top-0 p-6"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #8A7455 100%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 mb-12">
            <span className="text-2xl font-semibold text-[#8A6B55]">
              TextiFy
            </span>
          </Link>

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
          <div className="mt-8 pt-8 border-t border-white/10">
            <nav className="space-y-2">
              <NavItem icon="⚙️" label="Settings" href="/dashboard/settings" />
              <NavItem icon="👤" label="Profile" href="/dashboard/profile" />
              <NavItem icon="❓" label="FAQ's" href="/dashboard/faqs" />
              <NavItem icon="📞" label="Contact us" href="/dashboard/contact" />
              <NavItem icon="🚪" label="Logout" href="/logout" />
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Anything Here..."
                  className="w-full px-4 py-2 pl-10 rounded-xl bg-white/80 backdrop-blur-sm"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  🔍
                </span>
              </div>
            </div>

            {/* Rooms Section */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-normal text-[#2B2B2B]">Rooms</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Anything Here..."
                    className="w-[300px] h-[40px] px-10 rounded-full bg-white shadow-sm"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="#6C7894"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M22 22L20 20"
                        stroke="#6C7894"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  {
                    name: "Kitchen",
                    devices: "8 Devices",
                    icon: "🏠",
                    bgColor: "from-[#E3F17C] to-[#795959]",
                  },
                  {
                    name: "Living Room",
                    devices: "12 Devices",
                    icon: "🛋️",
                    bgColor: "from-[#E3F17C] to-[#795959]",
                  },
                  {
                    name: "Bedroom",
                    devices: "4 Devices",
                    icon: "🛏️",
                    bgColor: "from-[#E3F17C] to-[#795959]",
                  },
                  {
                    name: "Bathroom",
                    devices: "3 Devices",
                    icon: "🚿",
                    bgColor: "from-[#E3F17C] to-[#795959]",
                  },
                ].map((room) => (
                  <div
                    key={room.name}
                    className={`relative h-[120px] rounded-[20px] bg-gradient-to-br ${room.bgColor} p-4 shadow-sm`}
                  >
                    <div className="absolute top-4 left-4 w-10 h-10 bg-[#CCE6FB]/60 rounded-xl flex items-center justify-center">
                      <span className="text-xl">{room.icon}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-lg font-normal mb-1">
                        {room.name}
                      </h3>
                      <p className="text-white/75 text-sm">{room.devices}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Levels Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#8A6B55] mb-4">
                Levels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Humidity Chart */}
                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <span className="text-white">💧</span>
                      </div>
                      <span className="font-medium">Humidity</span>
                    </div>
                    <select className="bg-transparent">
                      <option>Today</option>
                      <option>Week</option>
                      <option>Month</option>
                    </select>
                  </div>
                  {/* Add your humidity chart here */}
                </div>

                {/* Energy Chart */}
                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-500 p-2 rounded-lg">
                        <span className="text-white">⚡</span>
                      </div>
                      <span className="font-medium">Energy</span>
                    </div>
                    <select className="bg-transparent">
                      <option>Week</option>
                      <option>Month</option>
                      <option>Year</option>
                    </select>
                  </div>
                  {/* Add your energy chart here */}
                </div>
              </div>
            </section>

            {/* Devices Section */}
            <section>
              <h2 className="text-xl font-semibold text-[#8A6B55] mb-4">
                Devices
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Air Conditioner", icon: "❄️", status: "Off" },
                  { name: "Smart TV", icon: "📺", status: "On" },
                  { name: "Coffee Machine", icon: "☕", status: "Off" },
                  { name: "Refrigerator", icon: "🧊", status: "On" },
                ].map((device) => (
                  <div
                    key={device.name}
                    className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <span className="text-2xl">{device.icon}</span>
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
                    <h3 className="font-medium text-[#8A6B55]">
                      {device.name}
                    </h3>
                    <p className="text-sm text-[#8A6B55]/70">{device.status}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
