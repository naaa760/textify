"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const RobotIllustration = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="absolute right-0 bottom-0 w-[600px] h-[600px] pointer-events-none"
  >
    <Image
      src="/robot.png" // You'll need to add this image to your public folder
      alt="Robot illustration"
      width={600}
      height={600}
      className="object-contain"
    />
  </motion.div>
);
