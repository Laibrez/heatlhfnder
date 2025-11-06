import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-verde-matcha" fill="currentColor" />
              <span className="text-xl font-bold text-white">Health Finder</span>
            </div>
            <p className="text-sm">
              Your trusted source for reliable health information and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-verde-matcha transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-verde-matcha transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-verde-matcha transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Disclaimer</h4>
            <p className="text-sm">
              This information is for educational purposes only and should not replace
              professional medical advice.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2025 Health Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
