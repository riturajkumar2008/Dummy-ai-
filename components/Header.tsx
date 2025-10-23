
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center space-x-6">
      <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg">
        <span className="text-5xl font-bold text-white">D</span>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white tracking-tight">Dummy AI</h1>
        <p className="text-lg text-gray-400">Automate with Voice</p>
        <span className="mt-2 inline-block bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">Details</span>
      </div>
    </header>
  );
};

export default Header;
