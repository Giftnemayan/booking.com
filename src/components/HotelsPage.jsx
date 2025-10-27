import coastal from "../assets/coastal.avif";
function HotelsPage({ img, name, price, description }) {
  return (
    <div className="pb-6">
      {/* <h1>This are some of our Hotels and prices </h1> */}
      <div className="border-gray-200 pb-2 bg-gray-200">
        <img className="h-[180px] w-[500px]" src={img} alt={img} />
        <p className="font-bold text-2xl">{name}</p>
        <p className="font-bold">USD.{price.toLocaleString()}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HotelsPage;
