import iphone16Pro from '../assets/iphone-16-pro.jpg';

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: `url(${iphone16Pro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text content on top of overlay */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">iPhone 16 Pro</h2>
        <p className="text-xl mb-6 drop-shadow-md">
          Titanium. So strong. So light. So Pro.
        </p>
        <div className="flex justify-center gap-6 text-blue-400 font-semibold">
          <a href="#" className="hover:underline">Learn more</a>
          <a href="#" className="hover:underline">Buy</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;