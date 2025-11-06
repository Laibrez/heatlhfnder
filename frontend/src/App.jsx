import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import SearchView from './views/SearchView';
import ChatView from './views/ChatView';
import RecommendationsView from './views/RecommendationsView';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'login':
        return <LoginView onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterView onNavigate={handleNavigate} />;
      case 'search':
        return <SearchView onNavigate={handleNavigate} />;
      case 'chat':
        return <ChatView onNavigate={handleNavigate} />;
      case 'recommendations':
        return <RecommendationsView onNavigate={handleNavigate} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      <main className="flex-1 flex flex-col">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
