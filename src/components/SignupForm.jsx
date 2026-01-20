import { Link } from "react-router-dom";
import { useState } from "react";
import google from "../assets/google.png";
import image from "../assets/Hotel.jpg";
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    const errors = {};
    if (!name.trim()) errors.name = "This field is required";
    if (!email.trim()) errors.email = "This field is required";
    if (!phone.trim()) errors.phone = "This field is required";
    if (!address.trim()) errors.address = "This field is required";
    if (!password) errors.password = "This field is required";
    if (!confirmPassword) errors.confirmPassword = "This field is required";
    if (password && confirmPassword && password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    // If there are errors, show them and stop submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // If no errors, clear errors and continue
    setFormErrors({});
    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone_number: phone.trim(),
      address: address.trim(),
      password,
      // createdAt: new Date().toISOString(),
    };
    console.log("Sign-up form submitted:", payload);

    const url = " http://127.0.0.1:8000/api/register/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    //   try {
    //     localStorage.setItem("clozzet_signup", JSON.stringify(payload));
    //     const raw = localStorage.getItem("clozzet_signups");
    //     const signups = raw ? JSON.parse(raw) : [];
    //     signups.push(payload);
    //     localStorage.setItem("clozzet_signups", JSON.stringify(signups));
    //   } catch (err) {
    //     console.error("Failed to save sign-up to localStorage:", err);
    //   }
    // Clear password fields
    setPassword("");
    setConfirmPassword("");
  };
  // Common input style
  const inputStyle = "flex-1 border-0 py-1 px-4 outline-0 ml-4";
  // Error text style
  const errorStyle = "text-red-500 text-sm pl-6 mt-1";
  return (
    <div className="flex object-cover">
      <div className="ml-20 flex-col">
        <div className="text-2xl font-bold mt-8 pl-8 pb-4 ml-20">
          <p>Create An Account</p>
        </div>
        <form onSubmit={handleSubmit} className="mr-6">
          <div className="container flex items-center rounded-full border-2 border-[#f0efef] mt-6 h-15 w-130">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputStyle}
              type="text"
              placeholder="Full Name"
            />
          </div>
          {formErrors.name && <p className={errorStyle}>{formErrors.name}</p>}
          <div className="container flex items-center rounded-full border-2 border-[#f0efef] mt-6 h-15 w-130">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              type="email"
              placeholder="Email"
            />
          </div>
          {formErrors.email && <p className={errorStyle}>{formErrors.email}</p>}
          <div className="container flex items-center rounded-full border-2  border-[#f0efef] mt-6 h-15 w-130">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputStyle}
              type="tel"
              placeholder="Phone"
            />
          </div>
          {formErrors.phone && <p className={errorStyle}>{formErrors.phone}</p>}
          <div className="container flex items-center rounded-full border-2  border-[#f0efef] mt-6 h-15 w-130">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={inputStyle}
              type="text"
              placeholder="Address"
            />
          </div>
          {formErrors.address && (
            <p className={errorStyle}>{formErrors.address}</p>
          )}
          <div className="container flex items-center rounded-full  border-[#f0efef] border-2 mt-6 h-15 w-130">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              type="password"
              placeholder="Password"
            />
          </div>
          {formErrors.password && (
            <p className={errorStyle}>{formErrors.password}</p>
          )}
          <div className="container flex items-center rounded-full border-2 border-[#f0efef] mt-6 h-15 w-130">
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputStyle}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          {formErrors.confirmPassword && (
            <p className={errorStyle}>{formErrors.confirmPassword}</p>
          )}
          <button
            type="submit"
            className="flex items-center justify-center rounded-full  mt-12 h-15 w-130 bg-gray-200"
          >
            Create Account
          </button>
        </form>

        <button
          type="button"
          className="flex items-center gap-2 justify-center rounded-full border-2  border-[#f0efef] mt-12 h-15 w-130 text-blue-500"
          onClick={() =>
            console.log("Sign up with Google clicked (not implemented)")
          }
        >
          <img src={google} alt={google} className="w-6 " />
          Sign Up With Google
        </button>
        <div className="flex mt-8 ml-6  gap-4 pb-4">
          <p>Already Have An Account?</p>
          <Link to="/login" className="text-[#45c9a1]">
            Log In
          </Link>
        </div>
      </div>
      <img
        className="w-270 h-200 mt-10 rounded-xl object-cover"
        src={image}
        alt={image}
      />
    </div>
  );
}
export default SignupForm;
