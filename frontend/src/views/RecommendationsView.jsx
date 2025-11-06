import { Star, MapPin, Phone, Clock, Award, ThumbsUp, TrendingUp } from 'lucide-react';

const RecommendationsView = ({ onNavigate }) => {
  const recommendations = [
    {
      id: 1,
      name: 'Heart Care Center',
      specialty: 'Cardiology',
      address: '456 Oak Ave, New York, NY 10002',
      phone: '(555) 234-5678',
      rating: 4.9,
      reviews: 189,
      hours: 'Mon-Fri 9AM-5PM',
      distance: '1.2 miles',
      matchScore: 98,
      reasons: [
        'Highly rated in your area',
        'Specializes in your needs',
        'Accepts most insurance plans',
      ],
      badge: 'Top Rated',
    },
    {
      id: 2,
      name: 'Pediatric Care Associates',
      specialty: 'Pediatrics',
      address: '321 Pine Rd, New York, NY 10004',
      phone: '(555) 456-7890',
      rating: 4.9,
      reviews: 456,
      hours: 'Mon-Fri 8AM-6PM',
      distance: '2.8 miles',
      matchScore: 95,
      reasons: [
        'Excellent patient reviews',
        'Short wait times',
        'Family-friendly environment',
      ],
      badge: 'Most Popular',
    },
    {
      id: 3,
      name: 'Wellness Family Clinic',
      specialty: 'Family Medicine',
      address: '789 Elm St, New York, NY 10003',
      phone: '(555) 345-6789',
      rating: 4.7,
      reviews: 312,
      hours: 'Mon-Sat 8AM-8PM',
      distance: '2.1 miles',
      matchScore: 92,
      reasons: [
        'Extended hours available',
        'Same-day appointments',
        'Comprehensive care services',
      ],
      badge: 'Trending',
    },
  ];

  const getMatchColor = (score) => {
    if (score >= 95) return 'text-verde-matcha';
    if (score >= 90) return 'text-azul-cielo';
    return 'text-yellow-500';
  };

  const getBadgeIcon = (badge) => {
    if (badge === 'Top Rated') return <Award className="w-4 h-4" />;
    if (badge === 'Most Popular') return <ThumbsUp className="w-4 h-4" />;
    if (badge === 'Trending') return <TrendingUp className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-verde-matcha to-azul-cielo text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Personalized Recommendations</h1>
          <p className="text-xl opacity-90">
            Based on your preferences and location, we've found the best clinics for you
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <div className="bg-blue-50 border-l-4 border-azul-cielo p-4 mb-8 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <Award className="h-5 w-5 text-azul-cielo" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                These recommendations are based on ratings, location, specialty match, and
                availability. Updated in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendation Cards */}
        <div className="space-y-6">
          {recommendations.map((clinic, index) => (
            <div
              key={clinic.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-verde-matcha to-azul-cielo text-white rounded-full font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{clinic.name}</h3>
                    </div>
                    <p className="text-verde-matcha font-semibold text-lg mb-2">
                      {clinic.specialty}
                    </p>
                  </div>

                  {/* Match Score */}
                  <div className="text-right ml-4">
                    <div
                      className={`text-3xl font-bold ${getMatchColor(clinic.matchScore)} mb-1`}
                    >
                      {clinic.matchScore}%
                    </div>
                    <p className="text-sm text-gray-500">Match Score</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-verde-matcha text-white mb-4">
                  {getBadgeIcon(clinic.badge)}
                  <span className="ml-1">{clinic.badge}</span>
                </div>

                {/* Reasons */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Why we recommend this clinic:
                  </h4>
                  <ul className="space-y-1">
                    {clinic.reasons.map((reason, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-verde-matcha mr-2">✓</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{clinic.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{clinic.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{clinic.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
                    <span className="font-semibold">{clinic.rating}</span>
                    <span className="ml-1">({clinic.reviews} reviews)</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  📍 {clinic.distance} from your location
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 px-6 py-3 bg-verde-matcha text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                    Book Appointment
                  </button>
                  <button className="flex-1 px-6 py-3 border-2 border-verde-matcha text-verde-matcha rounded-lg hover:bg-verde-matcha hover:text-white transition-colors font-medium">
                    View Details
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Actions */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Not finding what you need?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('search')}
              className="px-8 py-3 bg-azul-cielo text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
            >
              Browse All Clinics
            </button>
            <button
              onClick={() => onNavigate('chat')}
              className="px-8 py-3 border-2 border-azul-cielo text-azul-cielo rounded-lg hover:bg-azul-cielo hover:text-white transition-colors font-medium"
            >
              Talk to Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsView;
