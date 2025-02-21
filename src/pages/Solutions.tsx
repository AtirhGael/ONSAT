import { ArrowRight, SatelliteDish, Car as SimCard } from 'lucide-react';
import simCard from '../assets/iot-sim.jpg';
import { useState } from 'react';
import vid from '../assets/invideo-ai-1080 OnSAT_ Revolutionizing Car Tracking with 2025-02-03.mp4';

function Solutions() {
  return (
    <div className="min-h-screen bg-white ">
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0 "
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Always in contact,<br />always in control
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up">
            Your complete fleet management solution
          </p>
          <div className="mt-8">
            <h2 className="text-4xl font-bold text-white mb-8 animate-slide-up delay-200">
              Mission critical<br />fleet management
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-xl text-white/90">
                Get started with mission critical fleet management
              </p>
              <button className="px-8 py-3 bg-primary hover:bg-hover text-white rounded-full transition-all transform hover:scale-105 flex items-center gap-2">
                Contact Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4 text-headerText">Step 1: Contact ONSAT</h3>
              <p className="text-text ">
                Communicate your business requirements and receive draft proposal and quote, see if you qualify for financing
              </p>
            </div>
            <div className="bg-primary text-white p-8 rounded-xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4 ">Step 2: Installation and Training</h3>
              <p className="text-white/90">
                Specialists performs hardware install, software set-up and provide comprehensive onsite and online training and onboarding
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4 text-headerText">Step 3: Support Commitment</h3>
              <p className="text-text">
                As a Tramigo customer, you are our partner with access to technical support and new solution development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <SimCard className="w-8 h-8 text-icons flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Advanced SIM Technology</h3>
                  <p className="text-text">
                    Multi-network SIM cards ensure your fleet stays connected across all territories
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SatelliteDish className="w-8 h-8 text-icons flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Satellite Tracking</h3>
                  <p className="text-text">
                    Real-time satellite tracking provides accurate location data anywhere in the world
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={simCard}
                alt="Satellite Technology"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="">
          <div className="flex flex-col items-center">

              <div className="w-full flex justify-center">
                <video
                  controls
                  className="w-full max-w-6xl rounded-lg"
                  src={vid}
                />
              </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How does the tracking system work?</h3>
              <p className="text-gray-600">
                Our system combines GPS, cellular, and satellite technology to provide real-time tracking and monitoring of your fleet vehicles.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">What kind of support do you offer?</h3>
              <p className="text-gray-600">
                We provide 24/7 technical support, regular software updates, and dedicated account management for all our clients.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Is training included?</h3>
              <p className="text-gray-600">
                Yes, comprehensive training is included for all users, covering system operation, maintenance, and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;