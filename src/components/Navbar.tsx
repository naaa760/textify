"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center"></Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900">
                Platform
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900">
                Solutions
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900">
                Resources
              </button>
            </div>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
              Log in
            </Link>
            <Link
              href="/demo"
              className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
