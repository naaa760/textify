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
          className="w-72 h-screen sticky top-0 p-6 backdrop-blur-md bg-black/10"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 mb-12">
            <span className="text-2xl font-semibold text-white">TextiFy</span>
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
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
                <p className="text-[#D1C0B6]">Welcome back, User!</p>
              </div>

              {/* Profile Section */}
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-white">John Doe</p>
                  <p className="text-sm text-[#D1C0B6]">Admin</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stats Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white mb-4">
                  Statistics
                </h3>
                {/* Add your stats content here */}
              </motion.div>

              {/* Activity Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white mb-4">
                  Recent Activity
                </h3>
                {/* Add your activity content here */}
              </motion.div>

              {/* Tasks Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white mb-4">Tasks</h3>
                {/* Add your tasks content here */}
              </motion.div>
            </div>

            {/* Recent Projects Section */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Recent Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Cards */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-white/10 backdrop-blur-sm"
                >
                  {/* Add project content */}
                </motion.div>
                {/* Add more project cards as needed */}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
