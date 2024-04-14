import land from "../assets/landing.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Welcome to CaféFlow
        </h1>
        <span className="text-xl">
          A online hub to discover our artisanal coffee, delectable eats
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={land} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Real-time Order Tracking
          </span>
          <span>
            With Cafeflow, experience seamless canteen operations with
            effortless order management, faster billing, and tailored customer
            experiences.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
