import React, { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!paymentMethod || !amount) {
      setStatus("Please fill all fields.");
      return;
    }

    if (paymentMethod === "Mpesa" && !phone) {
      setStatus("Please enter your phone number for M-Pesa.");
      return;
    }

    setLoading(true);
    setStatus("Initiating payment...");

    try {
      const res = await fetch("http://localhost:8000/payments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method: paymentMethod.toLowerCase(), // mpesa | paypal | card
          amount: Number(amount),
          phone: phone || null,
          booking_id: 1, // TEMP: replace with real booking ID
        }),
      });

      const data = await res.json();

      if (data.status === "pending") {
        setStatus(
          "📲 M-Pesa prompt sent to your phone. Please complete payment."
        );
      } else if (data.status === "redirect") {
        setStatus("Redirecting to PayPal...");
        const approvalLink = data.data.links.find((l) => l.rel === "approve");
        window.location.href = approvalLink.href;
      } else if (data.status === "success") {
        setStatus("✅ Payment successful!");
      } else {
        setStatus("❌ Payment failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error connecting to payment server.");
    } finally {
      setLoading(false);
    }
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
              <option value="Card">Credit Card</option>
            </select>
          </div>

          {paymentMethod === "Mpesa" && (
            <div>
              <label className="block font-medium mb-2">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="2547XXXXXXXX"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Pay Now"}
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
