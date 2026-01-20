import pwani from "../assets/pwani.jpeg";
import heart from "../assets/heart.png";
import pin from "../assets/download.png";

function MombasaHotel() {
  return (
    <div className="">
      <div className="flex gap-6 border-gray-50 hover:bg-gray-300 p-4 rounded-lg w-3/4 mx-auto mt-8">
        <img src={pwani} alt="Mombasa Hotel" className="w-60" />
        <div>
          <img
            src={heart}
            alt="favorite"
            className="w-12 h-12 mb-4 mx-190 bg-white rounded-full p-2"
          />
          <h2 className="text-blue-800 font-bold text-2xl">
            Seaside Serenity Hotel
          </h2>
          <div className="flex">
            <img
              src={pin}
              alt="location pin"
              className="w-12 h-10 inline-block ml-2"
            />
            <h3 className="font-semibold text-lg pt-2">Mombasa, Kenya</h3>
          </div>
          <p className="pt-8">
            Experience the vibrant culture and stunning beaches
            <br /> of Mombasa while enjoying luxurious accommodations
            <br /> and world-class amenities at our top-rated hotels.
            <br /> Whether you're seeking a relaxing getaway or an
            <br /> adventurous escape, Mombasa has something for everyone.
          </p>
          <div className="mx-180">
            <p>price from</p>
            <h2 className=" text-green-700 font-bold text-2xl">$200/night</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MombasaHotel;
