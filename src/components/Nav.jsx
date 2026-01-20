import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className=" bg-blue-800 h-[80px]">
        <div className="flex place-content-between gap-4">
          <div className="flex gap-8">
            <div>
              <h1 className="text-white font-extrabold pt-6">BOOKING.COM</h1>
            </div>
            <ul className="text-white flex gap-12 place-content-between ml-190 pt-6">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/aboutus">
                <li>About Us</li>
              </Link>
              <Link to="/signup">
                <li>
                  <button>Sign Up</button>
                </li>
              </Link>
              <Link to="/login">
                <button>Log In</button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
