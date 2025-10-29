import React, { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (!paymentMethod || !amount) {
      setStatus("Please fill all fields.");
      return;
    }

    // Simulate payment process
    setStatus(`Processing ${paymentMethod} payment of Ksh ${amount}...`);
    setTimeout(() => {
      setStatus(`Payment of Ksh ${amount} successful via ${paymentMethod}!`);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Hotel Payment Page
        </h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Amount (Ksh)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a method</option>
              <option value="Mpesa">Mpesa</option>
              <option value="PayPal">PayPal</option>
              <option value="Credit Card">Credit Card</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Pay Now
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-gray-700 font-medium">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
