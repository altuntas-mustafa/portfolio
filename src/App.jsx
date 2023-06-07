import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "./styles.css";

function App() {
  return (
    <div
      className="relative h-screen w-screen"
    >
      <video
        className="hidden md:block fixed inset-0 h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/assets/fade_in_out.mp4" type="video/mp4" />
      </video>
      <div className="md:hidden absolute inset-0">
        <img
          className="fixed h-full w-full object-cover"
          src="./assets/stars_img2.jpg"
          alt=""
          // style={{ position: "fixed" }}
        />
      </div>

      <div className="relative z-1 h-full w-full">
        <Header className="relative flex items-center justify-center h-screen w-screen overflow-hidden" />
        <div className="route--container">
          <AnimatedRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
