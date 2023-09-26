import Header from './components/Header';
import About from './components/About';
import ServicesBox from './components/ServicesBox';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Add a light background */}
      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <About />

        <ServicesBox />
      </main>

      <Footer />
    </div>
  );
}
