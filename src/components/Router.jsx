import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import BookHotel from "../pages/BookHotel";
import AboutUs from "../pages/AboutUs";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import PaymentPage from "../pages/PaymentPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="bookhotel"
            element={
              <Layout>
                <BookHotel />
              </Layout>
            }
          ></Route>
          <Route
            path="aboutus"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          ></Route>
          <Route
            path="login"
            element={
              <Layout>
                <LogIn />
              </Layout>
            }
          ></Route>
          <Route
            path="payment"
            element={
              <Layout>
                <PaymentPage />
              </Layout>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;
