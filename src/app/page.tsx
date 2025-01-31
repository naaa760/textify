"use client";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";

// Star component with the exact Portal animation
const Star = ({ position }: { position: "left" | "right" }) => (
  <motion.div
    className={`absolute ${
      position === "left" ? "left-0" : "right-0"
    } top-0 bottom-0 w-[400px]`}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.1, 0.5, 0.1],
      translateX: position === "left" ? [-267, -267] : [267, 267],
      translateY: [-267, -267],
      scale: [0.8215, 0.8215],
      rotate: [-226, -226],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='2' fill='white' /%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "blur(0.5px)",
      }}
    />
  </motion.div>
);

// Flickering stars background
const FlickeringStars = () => (
  <motion.div className="absolute inset-0 overflow-hidden">
    <div className="relative w-full h-full">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#4461F2] via-[#6B77E5] to-[#9D85D2]">
      <Navbar />

      {/* Stars Animation */}
      <FlickeringStars />
      <Star position="left" />
      <Star position="right" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-serif font-medium leading-tight mb-8">
              Your beautiful freelance toolkit.
              <br />
              From sending proposals to getting paid
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Make your services stand out by presenting them with finesse.
              Forget emailing PDFs, late payments, or not hearing back. Use
              Portal to send branded digital proposals, collect payments
              worldwide, run subscription-based services, transfer large
              deliverables, & more.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Join beta
            </motion.button>
          </motion.div>

          {/* Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 rounded-[32px] bg-white/10 backdrop-blur-lg p-8 shadow-2xl"
          >
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div className="text-left">
                    <h3 className="font-medium">Roman Tesiluk</h3>
                    <p className="text-sm text-white/60">
                      Creating digital experiences & building ideas
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm">
                  <span>Portfolio</span>
                  <span>Twitter</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-2xl font-medium mb-4">
                  0→1 Mobile App Design for a travel companion app
                </h2>
                {/* Add more content here */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 bg-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white mb-20"
          >
            <h2 className="text-5xl font-serif mb-6">
              Everything you need to run your business
            </h2>
            <p className="text-xl text-white/80">
              From proposals to payments, and everything in between
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add feature cards here */}
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
    </main>
  );
}
