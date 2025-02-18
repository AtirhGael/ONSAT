import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Phone, Mail, HeadphonesIcon, MapPin } from 'lucide-react';
import Globe from '../components/Globe';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function Contact() {
  
  const [loading, setLoading ] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "support@onsat.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Technical Support",
      details: "+1 (555) 987-6543",
      description: "24/7 Technical Assistance"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "New York, NY",
      description: "123 Tracking Avenue"
    }
  ];
const form = useRef<HTMLFormElement>(null); 

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    if (!form.current) {
      console.error('Form reference is not set');
      return;
    }

    emailjs
      .sendForm(
        'service_k8sde1k',
        'template_j4877md',
        form.current,
        {
          publicKey: '6L1q50wu2phEOf1PF',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast("Massage recieved. Thank you for contacting ONSAT we will be in touch");
          setLoading(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast("failed to send Email Please try again later");
          setLoading(false)
        }
      );
  };
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Let us know how we can help.</p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-icons mb-4">{info.icon}</div>
              <h3 className="text-lg text-headerText font-semibold mb-2">{info.title}</h3>
              <p className="text-text font-medium mb-2">{info.details}</p>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[600px] bg-gray-900 rounded-xl overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 2.5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Globe />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6" ref={form} onSubmit={sendEmail} >
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-primary text-white px-6 py-3 rounded-lg hover:from-hover hover:to-blue-600 transition-all shadow-md"
                >
                {loading ? 'Sending...': 'Send Message'}
                </motion.button>
              </motion.form>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}