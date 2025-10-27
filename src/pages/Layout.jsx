// ...existing code...
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// ...existing code...
function Layout({ children, cart = [] }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav cart={cart} />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
// ...existing code...
