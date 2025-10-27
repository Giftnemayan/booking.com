import free from "../assets/FreeCancellation.png";
import reviews from "../assets/Reviews.png";
import properties from "../assets/TripsGlobe.png";
import service from "../assets/CustomerSupport.png";
function Testimonies() {
  return (
    <div>
      <h1 className="font-bold pb-12 text-2xl">Why Booking.com???</h1>
      <div className="flex gap-12 pb-12 ">
        <div className="border border-gray-200 w-80 h-50 bg-gray-200 ">
          <img className="w-[60px] pt-4 ml-4" src={free} alt={free} />
          <p className="font-bold pt-6">Book Now,Pay at the hotel</p>
          <p>FREE cancellation om most rooms</p>
        </div>
        <div className="border border-gray-200 w-80 h-50 bg-gray-200 ">
          <img className="w-[60px] pt-4 ml-4" src={reviews} alt={reviews} />
          <p className="font-bold pt-6">300M+ reviews from fellow tourists</p>
          <p>Get trusted from guests like you</p>
        </div>
        <div className="border border-gray-200  w-80 h-50 bg-gray-200 ">
          <img
            className="w-[60px] pt-4 ml-4"
            src={properties}
            alt={properties}
          />
          <p className="font-bold pt-6">2+ million properties worldwide</p>
          <p>Hotels,guests,Apartments and more...</p>
        </div>
        <div className="border border-gray-200  w-80 h-50 bg-gray-200 ">
          <img className="w-[60px] pt-4 ml-4" src={service} alt={service} />
          <p className="font-bold pt-6">
            Trusted customer service you can rely on, 24/7
          </p>
          <p>We are always here to help</p>
        </div>
      </div>
    </div>
  );
}
export default Testimonies;
