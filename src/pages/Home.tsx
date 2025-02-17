import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Shield, 
  Bell, 
  BarChart3, 
  Smartphone, 
  Car, 
  Gauge,
  Clock,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-icons" />,
      title: "Real-Time Tracking",
      description: "Monitor your vehicles 24/7 with precise GPS location updates every 30 seconds"
    },
    {
      icon: <Shield className="h-8 w-8 text-icons" />,
      title: "Anti-Theft Protection",
      description: "Instant alerts for unauthorized movement and remote engine immobilization"
    },
    {
      icon: <Bell className="h-8 w-8 text-icons" />,
      title: "Smart Notifications",
      description: "Customizable alerts for speed, geofencing, and maintenance schedules"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-icons" />,
      title: "Advanced Analytics",
      description: "Comprehensive reports on fuel consumption, driver behavior, and route optimization"
    }
  ];

  const stats = [
    { icon: <Car />, value: "5,000+", label: "Vehicles Tracked" },
    { icon: <Users />, value: "1,500+", label: "Happy Customers" },
    { icon: <Clock />, value: "99.9%", label: "Uptime" },
    { icon: <Gauge />, value: "30sec", label: "Update Frequency" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-bold mb-4 text-white"
              >
                Advanced Vehicle Tracking Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl mb-8"
              >
                Keep your fleet secure and efficient with our state-of-the-art satellite tracking technology. Real-time monitoring, advanced analytics, and comprehensive reporting.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-x-4"
              >
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-full hover:bg-hover transition-colors inline-block"
                >
                  Get Started
                </Link>
                <button 
                  className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-hover hover:text-white transition-colors"
                  onClick={() => document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Demo
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-headerText mb-4">Advanced Tracking Features</h2>
            <p className="text-xl text-headerText">Everything you need to manage your fleet effectively</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-headerText">{feature.title}</h3>
                <p className="text-text">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-2 text-headerText">Comming Soon.</h2>
              <h2 className="text-4xl font-bold mb-6 text-headerText">Experience Real-Time Tracking</h2>
              <p className="text-xl text-text mb-8">
                Our advanced tracking system provides real-time updates every 30 seconds, ensuring you always know where your vehicles are and how they're performing.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Smartphone className="h-6 w-6 text-text mr-3" />
                  <span>Mobile app for iOS and Android</span>
                </div>
                <div className="flex items-center">
                  <Bell className="h-6 w-6 text-text mr-3" />
                  <span>Instant notifications</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-text mr-3" />
                  <span>Advanced security features</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Live tracking dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Stats Section */}
      <section className="py-20 bg-primary">
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-headerText">Ready to Get Started?</h2>
            <p className="text-xl text-text mb-8">Join thousands of satisfied customers who trust ONSAT for their vehicle tracking needs</p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-hover transition-colors inline-block"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}