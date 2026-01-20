import Router from "./components/Router";
function App() {
  return (
    <>
      <Router />
    </>
  );
}
fetch("http://127.0.0.1:8000/pay", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    method: "mpesa",
    amount: 1500,
    phone: "254712345678",
  }),
});

export default App;
