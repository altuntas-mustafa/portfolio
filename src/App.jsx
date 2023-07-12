import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";
import videoFile from "/assets/sun_rays.mp4";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <video className="hidden md:block fixed inset-0 h-full w-full object-cover z-0" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="md:hidden absolute inset-0">
        <video className="fixed h-full w-full object-cover" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
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
