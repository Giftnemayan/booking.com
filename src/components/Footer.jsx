import email from "../assets/email.png";
import contact from "../assets/phone.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
function Footer() {
  return (
    <div className="bg-[#f1f1f1]">
      <h1 className="text-4xl flex justify-center pt-8 font-normal">
        Subscribe & get up to30% OFF
      </h1>
      <div className="flex gap-8 justify-center pt-8">
        <div className="border-white border rounded-full w-100 h-15  py-2">
          <input
            className="  flex-1 border-white rounded-full py-2 px-8 outline-0 cursor-pointer"
            type="text"
            placeholder="Enter your Email"
          ></input>
        </div>
        <div>
          <div>
            <button className=" border rounded-full w-48 h-15   cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-12 container mx-auto pt-12 justify-between">
        <div className="ml-12">
          <h2 className=" text-2xl font-bold pt-4">BOOKING.COM</h2>
          <p className="text-2 font-medium mt-2 pt-6 ">
            Offering a unique and <br />
            best services on
            <br /> Tourists and guests is our number <br />
            one priority.Come and enjoy <br />
            the weekend and holidays in our <br />
            luxurious Hotels.
          </p>
        </div>
        <div className="py-4 ">
          <h2 className="font-bold">Hotels</h2>
          <ul className="mt-2">
            <li className="pt-4">The Grand Haven</li>
            <li className="pt-4">Velvet Orchid</li>
            <li className="pt-4">Azure Palace</li>
            <li className="pt-4">Seabreeze Villas</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold ">Help</h2>
          <ul className="mt-2">
            <li className="pt-4">Customer Support</li>
            <li className="pt-4">Terms & Conditions</li>
            <li className="pt-4">Privacy Policy</li>
            <li className="pt-4">Follow up on your Hotel</li>
          </ul>
        </div>
        <div className="mr-12">
          <h2 className="font-bold">Contact Us</h2>
          <div className="flex gap-1 mt-2 pt-4">
            <img className="w-[30px]" src={email} alt={email} />
            <p>contact@booking.com</p>
          </div>
          <div className="flex py-4 gap-1">
            <img className="w-[30px]" src={contact} alt={contact} />
            <p>254-700-333-333</p>
          </div>
          <p className="pt-2">Follow Us</p>
          <div className="flex pt-3 gap-2">
            <img className="w-[40px]" src={facebook} alt={facebook} />
            <img className="w-[40px]" src={instagram} alt={instagram} />
            <img className="w-[40px]" src={twitter} alt={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
