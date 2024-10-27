import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Mission from './components/mission';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <About />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
