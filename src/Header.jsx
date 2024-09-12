import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <img src="logo.png" alt="realme" className="h-8" />
      </div>
      
      {/* Center - Navigation */}
      <div className="flex justify-center flex-1">
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-800">Service</a></li>
            <li><a href="#" className="text-gray-800">Project</a></li>
            <li><a href="#" className="text-gray-800">About</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Right side - Login/Sign-in Profile */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-800">Login</a>
        <a href="#" className="text-gray-800">Sign Up</a>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div> {/* Profile icon placeholder */}
      </div>
    </header>
  );
};

export default Header;
