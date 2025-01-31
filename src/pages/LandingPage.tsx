import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-8">
            The HR platform
            <br />
            people love
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Now with HRIS, Lattice empowers 5,000+ strategic HR teams to manage
            employee information, drive performance, capture team sentiment, and
            report key insights - all in one place.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <button className="bg-teal-700 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-teal-800 transition-colors">
              Get started
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <img
            src={HeroImage}
            alt="Platform Preview"
            className="max-w-6xl mx-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              More productive managers,
              <br />
              higher performing teams
            </h2>
            <p className="text-xl text-gray-600">
              Make managers your highest point of leverage with productive
              meetings, clear expectations, and accountability.
            </p>
          </motion.div>

          {/* Add feature cards here */}
        </div>
      </section>

      {/* Additional sections can be added following similar pattern */}
    </div>
  );
};

export default LandingPage;
