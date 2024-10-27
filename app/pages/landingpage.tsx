import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      {/* About Section */}
      <section id="about" className="my-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">We are a team of passionate developers working to make a difference in the tech world.</p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-200 p-4 rounded-lg">Project 1</div>
          <div className="bg-blue-200 p-4 rounded-lg">Project 2</div>
          <div className="bg-blue-200 p-4 rounded-lg">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">Get in touch with us via email at contact@mywebsite.com</p>
      </section>
    </main>
  );
};

export default LandingPage;
