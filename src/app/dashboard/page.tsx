"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold text-teal-700">
            Lattice
          </Link>
        </div>
        <div className="px-4">
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm font-medium text-teal-700 bg-teal-50 rounded-md"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/employees"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Employees
            </Link>
            <Link
              href="/dashboard/performance"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Performance
            </Link>
            <Link
              href="/dashboard/engagement"
              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Engagement
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Notifications</span>
                🔔
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">User menu</span>
                👤
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500">
                Total Employees
              </h3>
              <p className="text-2xl font-semibold mt-2">2,420</p>
              <div className="mt-2 text-sm text-green-600">
                ↑ 12% from last month
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500">
                Average Performance
              </h3>
              <p className="text-2xl font-semibold mt-2">87%</p>
              <div className="mt-2 text-sm text-green-600">
                ↑ 4% from last quarter
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500">
                Engagement Score
              </h3>
              <p className="text-2xl font-semibold mt-2">92%</p>
              <div className="mt-2 text-sm text-green-600">
                ↑ 8% from last survey
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    📝
                  </div>
                  <div>
                    <p className="font-medium">Performance Review Started</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    👥
                  </div>
                  <div>
                    <p className="font-medium">New Employee Onboarded</p>
                    <p className="text-sm text-gray-500">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
