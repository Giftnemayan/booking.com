import Hero from "../components/Hero";
import HotelsPage from "../components/HotelsPage";
import Testimonies from "../components/Testimonies";
import HotelPages from "../components/HotelPages";
function Home() {
  return (
    <div className=" mt-6">
      <header className="bg-blue-800 h-80">
        <Hero />
      </header>
      <main>
        <Testimonies />
        <HotelPages />
      </main>
      <footer></footer>
    </div>
  );
}
export default Home;
