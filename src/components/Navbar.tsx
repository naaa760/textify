"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center text-white text-2xl font-medium"
          >
            <span className="mr-2">🚀</span> Lattice
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/product"
              className="text-white/80 hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
