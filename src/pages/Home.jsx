import Hero from "../components/Hero";
import HotelsPage from "../components/HotelsPage";
import Testimonies from "../components/Testimonies";
import HotelPages from "../components/HotelPages";
function Home() {
  return (
    <div className=" mt-6">
      <header className="bg-[url(/src/assets/Hotel.jpg)] bg-contain w-400 h-250 bg-no-repeat">
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
