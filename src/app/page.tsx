"use client";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 opacity-30 h-full w-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[64px] font-bold leading-tight mb-6">
              The HR platform
              <br />
              people love
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Now with HRIS, Lattice empowers 5,000+ strategic HR teams to
              manage employee information, drive performance, capture team
              sentiment, and report key insights - all in one place.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <button className="bg-teal-700 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-teal-800 transition-colors">
                Get started
              </button>
            </motion.div>
          </motion.div>

          {/* Platform Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-semibold">Mel Miller</h3>
                  <p className="text-sm text-gray-600">Account Manager</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">Contact Information</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm">123 Main St</p>
                  <p className="text-sm">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            {/* Agenda Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-semibold">Ruby Gu</h3>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">Agenda</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">3.4</span>
                  <div className="w-24 h-8 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              You can't afford underperformance
              <br />
              or inefficiency — we built Lattice to
              <br />
              help you achieve operational
              <br />
              excellence across your business.
            </h2>
            <div className="mt-8">
              <h3 className="text-3xl mb-4">
                Our <span className="text-teal-600">AI-powered</span> people
                platform
              </h3>
              <p className="text-xl text-gray-600">
                transforms company leaders and HR teams into stewards of high
                <br />
                performance, data-driven decision making, and meaningful work
                for
                <br />
                every employee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional sections for OKRs, 1:1s, etc. */}
    </main>
  );
}
