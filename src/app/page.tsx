"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Navbar from "../components/Navbar";

// Updated Star animation variants
const starVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0.3, 1, 0.3],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Improved Star component with better visibility
const Star = ({ position }: { position: "left" | "right" }) => (
  <motion.div
    className={`absolute ${
      position === "left" ? "-left-20" : "-right-20"
    } top-40 w-80 h-80`}
    initial="initial"
    animate="animate"
    variants={starVariants}
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)",
        filter: "blur(2px)",
      }}
    />
  </motion.div>
);

// Enhanced Flickering Stars with better visibility
const FlickeringStars = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => {
      const size = Math.random() * 4 + 2;
      return (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      );
    })}
  </div>
);

// Additional shimmer effect
const ShimmerEffect = () => (
  <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0, x: -100 }}
    animate={{
      opacity: [0, 0.5, 0],
      x: ["-100%", "100%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      background:
        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
    }}
  />
);

// Add this new component for the feature cards
const FeatureCard = ({
  icon,
  title,
  description,
  link,
  bgClass,
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
  bgClass: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`rounded-2xl p-8 ${bgClass} backdrop-blur-sm`}
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <Link
      href={link}
      className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"
    >
      Learn more
      <span className="text-lg">→</span>
    </Link>
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0B]">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0B] via-[#1A1A1D] to-[#2C2C35]" />

      {/* Stars Layer */}
      <div className="absolute inset-0">
        <FlickeringStars />
        <Star position="left" />
        <Star position="right" />
      </div>

      {/* Accent Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />

        <section className="container mx-auto px-4 pt-32">
          <div className="max-w-[920px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-[64px] leading-[1.1] font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Empower developers.
                <br />
                Engineer excellence.
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                We help technology companies provide exceptional developer
                experiences. We make developer tools, SDKs, and libraries for
                the open-source ecosystem.
              </p>

              <div className="flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-black font-medium hover:from-teal-400 hover:to-teal-300 transition-all duration-300"
                >
                  Book a consultation
                </motion.button>
                <Link
                  href="/services"
                  className="px-6 py-3 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  Explore our services
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-24 text-center"
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
                TRUSTED BY INDUSTRY LEADERS
              </p>
              <div className="flex justify-center items-center gap-12 grayscale opacity-50">
                <img src="/google.svg" alt="Google" className="h-8" />
                <img src="/amazon.svg" alt="Amazon" className="h-8" />
                <img src="/canonical.svg" alt="Canonical" className="h-8" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3D Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-1/2 right-[10%] -translate-y-1/2"
        >
          <div className="w-[400px] h-[400px] relative">
            {/* Add your 3D object/image here */}
          </div>
        </motion.div>

        {/* Community Section */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-medium text-white mb-4">
                Join the Invertase community
              </h2>
              <p className="text-gray-400 text-lg">
                Engage with developers, share insights, and stay up-to-date.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon="𝕏"
                title="Stay informed"
                description="Get the latest news, updates and announcements."
                link="/twitter"
                bgClass="bg-black/40"
              />
              <FeatureCard
                icon="▶️"
                title="Learn and discover"
                description="Watch tutorials, demos, and deep dives."
                link="/youtube"
                bgClass="bg-[#3E2A2A]/40"
              />
              <FeatureCard
                icon="👾"
                title="Connect with developers"
                description="Get real-time support, discuss ideas, and connect with fellow developers."
                link="/discord"
                bgClass="bg-[#2A2D3E]/40"
              />
              <FeatureCard
                icon="🐙"
                title="Contribute to open source"
                description="Access our open-source resources and give back to the community."
                link="/github"
                bgClass="bg-[#2A3E2E]/40"
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-medium text-white mb-4">
                Build Better Software, Faster
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Our suite of developer tools and services helps you build, test,
                and deploy with confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-medium text-white mb-4">
                  Zapp.run
                </h3>
                <p className="text-gray-400 mb-4">
                  Learn, build & share Flutter applications
                </p>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  {/* Add product screenshot/demo here */}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-medium text-white mb-4">
                  Docs.page
                </h3>
                <p className="text-gray-400 mb-4">
                  Beautiful documentation that scales with your project
                </p>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  {/* Add product screenshot/demo here */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <Link
                  href="/"
                  className="text-2xl font-medium text-white flex items-center"
                >
                  <span className="text-teal-400 mr-2">●</span> DevTools
                </Link>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services/sdk"
                      className="text-gray-400 hover:text-white"
                    >
                      SDK development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cross-platform"
                      className="text-gray-400 hover:text-white"
                    >
                      Cross-platform development
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/products/globe"
                      className="text-gray-400 hover:text-white"
                    >
                      Globe.dev
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/zapp"
                      className="text-gray-400 hover:text-white"
                    >
                      Zapp.run
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/docs"
                      className="text-gray-400 hover:text-white"
                    >
                      Docs.page
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/opensource"
                      className="text-gray-400 hover:text-white"
                    >
                      Open source
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
