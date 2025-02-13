import { Satellite } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/onSAT Logo 1024 x 500.png'

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const location = useLocation();
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            {/* <Satellite className="h-8 w-8 text-blue-600" /> */}
            <img src={logo} className='h-10 w-20 text-blue-600'/>
            {/* <span className="ml-2 text-2xl font-bold text-blue-600">ONSAT</span> */}
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}