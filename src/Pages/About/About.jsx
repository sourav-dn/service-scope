import React from 'react';
import { FaUsers, FaTasks, FaAward, FaTools } from 'react-icons/fa';

const App = () => {
  return (
    <div className="bg-gray-50 font-sans p-8 md:p-16 antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Image and Content */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden p-6 md:p-12">
          {/* Image Container with Yellow Shape */}
          <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden mb-8 md:mb-0 md:mr-10">
            {/* Background decorative shape */}
            <div className="absolute top-0 left-0 w-full h-full transform -skew-y-6 -skew-x-12 origin-top-left z-0">
              <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 opacity-60"></div>
              <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-yellow-400 rounded-bl-full blur-3xl opacity-20"></div>
            </div>
            <img
              src="/service-related-img.png"
              alt="A business team working together"
              className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl"
              style={{ minHeight: '300px' }}
            />
            {/* Decorative white circles */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full z-20 shadow-md border border-gray-100"></div>
            <div className="absolute -left-8 top-1/4 transform -translate-y-1/2 w-2 h-2 bg-gray-200 rounded-full z-20"></div>
            <div className="absolute -right-4 top-3/4 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full z-20 shadow-md border border-gray-100"></div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-gray-200 rounded-full z-20"></div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <p className="text-yellow-500 uppercase tracking-widest font-semibold text-sm mb-2">
              Company Benefits
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              Get to Know About Our Brote Company
            </h1>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Lorem ipsum is,simply free text dolor sit am adipi we help you ensure everyone. Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet dolores sit ipsum velit purus aliq massa fringilla leo.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <div className="text-blue-600 font-semibold text-lg">We are Committed</div>
              <div className="text-blue-600 font-semibold text-lg">Insured & Bonded</div>
              <div className="text-blue-600 font-semibold text-lg">Highly Rated Cleaning</div>
              <div className="text-blue-600 font-semibold text-lg">Trusted Professionals</div>
            </div>
            
            {/* Discover More Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              DISCOVER MORE <span className="ml-2">&gt;</span>
            </button>
          </div>
        </div>

        {/* Bottom Section: Statistics */}
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center md:justify-around gap-8 md:gap-0 text-center">
          {/* Satisfied Clients */}
          <div className="w-1/2 md:w-auto px-4">
            <FaUsers className="text-blue-500 mx-auto" size={48} />
            <div className="mt-2 text-3xl font-extrabold text-gray-800">2,562+</div>
            <p className="text-gray-500">Satisfied Clients</p>
          </div>
          
          {/* Active Projects */}
          <div className="w-1/2 md:w-auto px-4">
            <FaTasks className="text-blue-500 mx-auto" size={48} />
            <div className="mt-2 text-3xl font-extrabold text-gray-800">562+</div>
            <p className="text-gray-500">Active Projects</p>
          </div>
          
          {/* Winning Award */}
          <div className="w-1/2 md:w-auto px-4 mt-8 md:mt-0">
            <FaAward className="text-blue-500 mx-auto" size={48} />
            <div className="mt-2 text-3xl font-extrabold text-gray-800">33+</div>
            <p className="text-gray-500">Winning Award</p>
          </div>
          
          {/* Expert Teams */}
          <div className="w-1/2 md:w-auto px-4 mt-8 md:mt-0">
            <FaTools className="text-blue-500 mx-auto" size={48} />
            <div className="mt-2 text-3xl font-extrabold text-gray-800">252+</div>
            <p className="text-gray-500">Expert Teams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
