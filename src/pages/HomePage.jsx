// src/pages/HomePage.jsx
import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";
import CarouselComponent from "../components/CarouselComponent";
import InfoBox from "../components/InfoBox";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const HomePage = () => {
  const colleges = [
    {
      name: "IIT Bombay",
      imageSrc: "./images/IITb.jpg",
      description: "A premier engineering institution located in Mumbai.",
    },
    {
      name: "IIT Delhi",
      imageSrc: "./images/IITdel.jpg",
      description: "Renowned for its research and engineering excellence.",
    },
    {
      name: "IIM Ahmedabad",
      imageSrc: "./images/IIMahm.jpg",
      description: "One of the top B-schools in India with global acclaim.",
    },
    {
      name: "AIIMS Delhi",
      imageSrc: "./images/AIIMSdel.jpg",
      description:
        "India's top medical institution offering quality education.",
    },
    {
      name: "NIT Trichy",
      imageSrc: "./images/nitt.jpg",
      description: "Known for its excellent engineering programs and campus.",
    },
    {
      name: "Manipal University Jaipur",
      imageSrc: "./images/MUJ.jpg",
      description: "Offers multidisciplinary programs in a world-class campus.",
    },
    {
      name: "VIT Vellore",
      imageSrc: "./images/VIT.jpg",
      description:
        "One of India's leading engineering and research universities.",
    },
    {
      name: "Manipal Institute of Technology",
      imageSrc: "./images/MIT.jpg",
      description:
        "A reputed engineering college with a strong alumni network.",
    },
    {
      name: "BITS Pilani",
      imageSrc: "./images/bits.jpg",
      description:
        "An iconic institution excelling in science, engineering, and technology.",
    },
  ];

  return (
    <div className="min-h-screen animate-gradient-x bg-dark-red-blue bg-200% flex flex-col justify-center items-center">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-20 flex-grow">
        <section className="w-full mb-8 opacity-75">
          <CarouselComponent />
        </section>
        <h1 className="text-5xl font-extrabold text-white mb-10 tracking-wide">
          How can I help you?
        </h1>
        <Chatbox />

        {/* InfoBox Section */}
        <div className="container mx-auto mt-10 mb-10 px-6 opacity-80">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            Explore Colleges in India
          </h2>
          <div className="flex flex-wrap justify-center">
            {colleges.map((college, index) => (
              <InfoBox
                key={index}
                collegeName={college.name}
                imageSrc={college.imageSrc}
                description={college.description}
              />
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <Courses />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
