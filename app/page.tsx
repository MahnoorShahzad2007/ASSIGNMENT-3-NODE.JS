import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './pages/landingpage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
