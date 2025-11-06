import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Navigation = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'search', label: 'Search' },
    { id: 'chat', label: 'Chat' },
    { id: 'recommendations', label: 'Recommendations' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Heart className="w-8 h-8 text-verde-matcha" fill="currentColor" />
            <span className="text-xl font-bold text-gray-900">Health Finder</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === item.id
                    ? 'text-verde-matcha bg-green-50'
                    : 'text-gray-700 hover:text-verde-matcha hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('login')}
              className="px-4 py-2 text-sm font-medium text-white bg-verde-matcha rounded-md hover:bg-green-600 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="px-4 py-2 text-sm font-medium text-verde-matcha border-2 border-verde-matcha rounded-md hover:bg-verde-matcha hover:text-white transition-colors"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-verde-matcha hover:bg-green-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === item.id
                    ? 'text-verde-matcha bg-green-50'
                    : 'text-gray-700 hover:text-verde-matcha hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('login');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-verde-matcha hover:bg-green-50 rounded-md"
            >
              Login
            </button>
            <button
              onClick={() => {
                onNavigate('register');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-verde-matcha hover:bg-green-50 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
