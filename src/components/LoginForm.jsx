import { Link } from "react-router-dom";
import { useState } from "react";
import google from "../assets/google.png";
function LoginForm() {
  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  // error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error messages
    setEmailError("");
    setPasswordError("");
    // Validate fields
    let valid = true;
    if (!email.trim()) {
      setEmailError("This field is required");
      valid = false;
    }
    if (!password.trim()) {
      setPasswordError("This field is required");
      valid = false;
    }
    // If any field is empty, stop submission
    if (!valid) return;
    const payload = {
      email: email.trim(),
      password,
      remember,
      submittedAt: new Date().toISOString(),
    };

    const url = " http://127.0.0.1:8000/api/login/";
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
        if (data.access_token) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              access: data.access_token,
              refresh_token: data.refresh_token,
              // message:data.message,
            })
          );
        }
        if (data.userDetails) {
          window.location.href = "/admindashboard";
        }
      })
      .catch((err) => console.log(err));

    // 1) Log to console
    // console.log("Login form submitted:", payload);
    // 2) Save the latest single user object
    // try {
    //   localStorage.setItem("clozzet_user", JSON.stringify(payload));
    //   // 3) Also append to an array of saved users (history)
    //   const raw = localStorage.getItem("clozzet_users");
    //   const users = raw ? JSON.parse(raw) : [];
    //   users.push(payload);
    //   localStorage.setItem("clozzet_users", JSON.stringify(users));
    // } catch (err) {
    //   console.error("Failed to save to localStorage:", err);
    // }

    // optional: clear password field after submit for security
    // setPassword("");
  };
  return (
    <div className=" object-cover">
      <div className="flex-col ml-20">
        <div className="text-2xl font-bold mt-4 pl-4 pb-4 ml-12">
          <p>Login To Your Account</p>
        </div>
        <form onSubmit={handleSubmit} className="mr-8">
          {/* Email input */}
          <div className="container flex items-center rounded-full border-3 border-[#f0efef] mt-6 h-15 w-130">
            <div className="ml-6"></div>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 py-1 px-4 outline-0 ml-4"
              type="email"
              placeholder="Email Address"
            />
          </div>
          {/* Email error message */}
          {emailError && (
            <div className="text-red-500 mt-2 ml-6">{emailError}</div>
          )}
          {/* Password input */}
          <div className="container flex items-center rounded-full border-3 mt-12 h-15 border-[#f0efef] w-130">
            <div className="ml-6"></div>
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 border-0 py-1 px-4 outline-0 ml-4 "
              type="password"
              placeholder="Password"
            />
          </div>
          {/* Password error message */}
          {passwordError && (
            <div className="text-red-500 mt-2 ml-6 text-xl">
              {passwordError}
            </div>
          )}
          {/* Remember me checkbox */}
          <div className="flex mt-8 ml-6">
            <div className="flex mt-8 ml-6 items-center">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 mr-2"
              />
              <label htmlFor="remember" className="mr-8">
                Remember Me
              </label>
              <a href="#" className="ml-30 text-[#45C9A1]">
                Forgot Password?
              </a>
            </div>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="flex items-center justify-center rounded-full  mt-12 h-15 w-130 bg-gray-200"
          >
            Log In
          </button>
        </form>

        {/* Google login button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-full gap-2 border mt-12 h-15 w-130 text-blue-500"
          onClick={() => console.log("Google login clicked (not implemented)")}
        >
          <img src={google} alt={google} className="w-6" />
          Log In With Google
        </button>
        {/* Sign-up link */}
        <div className="flex mt-8 ml-6  gap-4">
          <p>Don't Have An Account Yet?</p>
          <Link to="/sign" className="text-[#45C9A1]">
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
