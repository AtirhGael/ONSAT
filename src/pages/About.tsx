import { motion } from 'framer-motion';
import { Users, Target, Car, Clock, Gauge } from 'lucide-react';
import React from 'react';

export default function About() {

  const stats = [
    { icon: <Car />, value: "Simple", label: "Vehicles Tracked" },
    { icon: <Users />, value: "Collaborative", label: "Working together as a team is the best way to manage the fleet." },
    { icon: <Clock />, value: "Comprehensive", label: "A central location for all fleet data is key to staying organized." },
    { icon: <Gauge />, value: "Informative", label: "Fleet data is useless unless it helps you make better decisions" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Five years of innovation in vehicle tracking technology
            </p>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2019, ONSAT emerged from a vision to revolutionize vehicle tracking technology.
              Our CEO, Sarah Chen, recognized the need for more reliable and sophisticated tracking solutions
              in an increasingly mobile world.
            </p>
            <p className="text-gray-600 mb-6">
              What started as a small team of innovative engineers has grown into a global company serving
              thousands of clients across multiple industries. Our commitment to cutting-edge technology
              and exceptional service has made us a leader in the vehicle tracking industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy & People Sections */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1609647532555-f5c1fa146eea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Strategy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-white"
            >
              <Target className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Strategy</h3>
              <p className="mb-6">
                We focus on three core principles: innovation, reliability, and customer success.
                Our strategy involves continuous investment in R&D, maintaining the highest standards
                of service quality, and fostering long-term partnerships with our clients.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                  Continuous Innovation
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                  Quality First Approach
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                  Customer-Centric Solutions
                </li>
              </ul>
            </motion.div>

            {/* Our People */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl text-white"
            >
              <Users className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our People</h3>
              <p className="mb-6">
                Our team consists of passionate professionals from diverse backgrounds, united by
                the goal of creating the best vehicle tracking solutions. We foster a culture of
                innovation, collaboration, and continuous learning.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                  Expert Engineering Team
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                  24/7 Support Staff
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                  Dedicated Account Managers
                </li>
              </ul>
            </motion.div>


          </div>

        </div>
      </section>
      {/* Stats Section */}
      <h3 className="text-center text-5xl font-bold mb-4 py-10">Our Philosophy</h3>
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  {React.cloneElement(stat.icon, { className: "h-10 w-10" })}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}