import { useState } from 'react';
import { Search, MapPin, Filter, Star, Phone, Clock } from 'lucide-react';

const SearchView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock clinic data
  const clinics = [
    {
      id: 1,
      name: 'City Health Clinic',
      specialty: 'General Practice',
      address: '123 Main St, New York, NY 10001',
      phone: '(555) 123-4567',
      rating: 4.8,
      reviews: 234,
      hours: 'Mon-Fri 8AM-6PM',
      distance: '0.5 miles',
    },
    {
      id: 2,
      name: 'Heart Care Center',
      specialty: 'Cardiology',
      address: '456 Oak Ave, New York, NY 10002',
      phone: '(555) 234-5678',
      rating: 4.9,
      reviews: 189,
      hours: 'Mon-Fri 9AM-5PM',
      distance: '1.2 miles',
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
    },
    {
      id: 4,
      name: 'Pediatric Care Associates',
      specialty: 'Pediatrics',
      address: '321 Pine Rd, New York, NY 10004',
      phone: '(555) 456-7890',
      rating: 4.9,
      reviews: 456,
      hours: 'Mon-Fri 8AM-6PM',
      distance: '2.8 miles',
    },
  ];

  const specialties = [
    'all',
    'General Practice',
    'Cardiology',
    'Family Medicine',
    'Pediatrics',
    'Dermatology',
    'Orthopedics',
  ];

  const filteredClinics = clinics.filter((clinic) => {
    const matchesSearch = 
      searchQuery === '' ||
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = 
      specialty === 'all' || clinic.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="flex-1 bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find a Clinic</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by clinic name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-verde-matcha focus:border-verde-matcha"
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Location (City, ZIP)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-verde-matcha focus:border-verde-matcha"
              />
            </div>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-verde-matcha hover:text-green-600 font-medium"
          >
            <Filter className="h-5 w-5 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialty
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-verde-matcha focus:border-verde-matcha"
                  >
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>
                        {spec === 'all' ? 'All Specialties' : spec}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4">
          <p className="text-gray-600">
            Found {filteredClinics.length} clinic{filteredClinics.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="space-y-4">
          {filteredClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {clinic.name}
                  </h3>
                  <p className="text-verde-matcha font-medium mb-3">{clinic.specialty}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{clinic.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-start md:items-end">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-lg font-semibold">{clinic.rating}</span>
                    <span className="ml-1 text-sm text-gray-600">({clinic.reviews})</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{clinic.distance} away</p>
                  <button className="px-6 py-2 bg-verde-matcha text-white rounded-lg hover:bg-green-600 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClinics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No clinics found matching your criteria. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
