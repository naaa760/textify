"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-medium text-white">
            <span className="text-teal-400">●</span> TextiFy
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/product"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/dashboard"
              className="text-sm px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
