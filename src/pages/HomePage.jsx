// src/pages/HomePage.jsx
import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";
import CarouselComponent from "../components/CarouselComponent";



const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <section className="w-full mb-8">
          <CarouselComponent />
        </section>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          How can I help you?
        </h1>
        <Chatbox />
      </div>
    </div>
  );
};
 


export default HomePage;
