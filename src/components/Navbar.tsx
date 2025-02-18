import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu
import logo from '../assets/onSAT Logo 1024 x 500.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [loading, setloading] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false)

  const form = useRef<HTMLFormElement>(null); 

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true)

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
          setIsModalOpen(false)
          setloading(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast("failed to send Email Please try again later");
          setloading(false)
        }
      );
  };
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-10 w-20" alt="onSAT Logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-800 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/solutions" className="text-gray-800 hover:text-primary transition-colors">
                Solution
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors">
                Contact
              </Link>
              <button
                onClick={openModal}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover transition-colors"
              >
                Request Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-primary focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block text-gray-800 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block text-gray-800 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block text-gray-800 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <button
                  onClick={openModal}
                  className="w-full text-left block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal for Request Demo */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl text-headerText font-bold mb-4">Request a Demo</h2>
            <form ref={form} onSubmit={sendEmail} >
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your message"
                  rows={4}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-hover transition-colors"
                >
                  {loading ? 'Submiting...': 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}