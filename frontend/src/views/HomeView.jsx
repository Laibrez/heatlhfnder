import { Heart, Activity, Brain, Shield, Pill, Sparkles, Search } from 'lucide-react';

const HomeView = ({ onNavigate }) => {
  const features = [
    {
      icon: Activity,
      title: 'Nutrition & Diet',
      description: 'Healthy eating guidelines, meal planning, and nutritional advice',
      color: 'text-verde-matcha',
    },
    {
      icon: Heart,
      title: 'Exercise & Fitness',
      description: 'Workout routines, fitness tips, and physical activity guidelines',
      color: 'text-azul-cielo',
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Stress management, mental wellness, and emotional support',
      color: 'text-verde-matcha',
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Screenings, vaccinations, and preventive health measures',
      color: 'text-azul-cielo',
    },
    {
      icon: Pill,
      title: 'Chronic Conditions',
      description: 'Managing diabetes, heart disease, and other chronic illnesses',
      color: 'text-verde-matcha',
    },
    {
      icon: Sparkles,
      title: 'General Wellness',
      description: 'Sleep, hydration, lifestyle habits, and overall wellbeing',
      color: 'text-azul-cielo',
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-verde-matcha to-azul-cielo text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Trusted Health Information
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Search thousands of health topics, treatments, and wellness resources
          </p>
          <button
            onClick={() => onNavigate('search')}
            className="inline-flex items-center px-8 py-4 bg-white text-verde-matcha rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Search className="w-6 h-6 mr-2" />
            Start Searching
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Health Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => onNavigate('search')}
                >
                  <Icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Resources Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Quick Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-verde-matcha to-green-600 text-white rounded-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-2xl font-bold mb-4">Find a Clinic</h3>
              <p className="mb-6 opacity-90">
                Search for healthcare providers in your area
              </p>
              <button
                onClick={() => onNavigate('search')}
                className="text-white font-semibold hover:underline"
              >
                Get Started →
              </button>
            </div>
            <div className="bg-gradient-to-br from-azul-cielo to-blue-600 text-white rounded-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-2xl font-bold mb-4">Health Chat</h3>
              <p className="mb-6 opacity-90">
                Interactive chat to help you find the right clinic
              </p>
              <button
                onClick={() => onNavigate('chat')}
                className="text-white font-semibold hover:underline"
              >
                Start Chat →
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-2xl font-bold mb-4">Get Recommendations</h3>
              <p className="mb-6 opacity-90">
                Personalized clinic recommendations based on your needs
              </p>
              <button
                onClick={() => onNavigate('recommendations')}
                className="text-white font-semibold hover:underline"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
