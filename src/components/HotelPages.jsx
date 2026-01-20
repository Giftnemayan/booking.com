import HotelsPage from "./HotelsPage";
import coastal from "../assets/coastal.avif";
import grand from "../assets/grand.avif";
import Hotel from "../assets/Hotel.jpg";
// import { link } from "react-router-dom";
function HotelPages() {
  return (
    <div>
      <hi className="font-bold pb-12 text-2xl pt-4">
        This are some of our amazing Hotels and their prices,Welcome!!!
      </hi>
      <div className="flex gap-8">
        <HotelsPage
          img={coastal}
          name="Mombasa,Kenya"
          price={200}
          description=" Imagine stepping off the hustle of everyday life
          into the soothing rhythm of the waves—in a hotel
           perched right on the edge of land and sea.
          At such a coast-hotel, you wake up to salt-tinged 
          breezes slipping through open windows,
          enjoy your coffee with the horizon in plain view,
          and spend the afternoon wandering the shoreline 
          or simply lounging as the tide rises and falls.
          It’s the kind of place where your schedule fades
         into the background, replaced by the gentle
          soundtrack of the ocean and <strong>the promise of serenity."
        />

        <HotelsPage
          img={grand}
          name="Nairobi,Kenya"
          price={500}
          description="Imagine stepping off the hustle of everyday life 
          into the soothing rhythm of the waves—in a hotel
          perched right on the edge of land and sea.
          At such a coast-hotel, you wake up to salt-tinged
          breezes slipping through open windows,
          enjoy your coffee with the horizon in plain view,
          and spend the afternoon wandering the shoreline
          or simply lounging as the tide rises and falls.
          It’s the kind of place where your schedule fades
          into the background, replaced by the gentle
          soundtrack of the ocean and the promise of serenity."
        />
        <HotelsPage
          img={Hotel}
          name="Naivasha,Kenya"
          price={800}
          description="Imagine stepping off the hustle of everyday life 
          into the soothing rhythm of the waves—in a hotel
          perched right on the edge of land and sea.
          At such a coast-hotel, you wake up to salt-tinged 
          breezes slipping through open windows,
          enjoy your coffee with the horizon in plain view, 
          and spend the afternoon wandering the shoreline
          or simply lounging as the tide rises and falls.
          It’s the kind of place where your schedule fades
          into the background, replaced by the gentle
          soundtrack of the ocean and the promise of serenity."
        />
      </div>
    </div>
  );
}
export default HotelPages;
