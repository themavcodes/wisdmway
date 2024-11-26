import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const CarouselComponent = () => {
  return (
    <div className="w-full max-w-sm mx-auto h-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="rounded-md shadow-lg"
      >
        <div>
          <img
            src="./images/career3.png"
            alt="Welcome Slide"
            className="object-cover"
          />
          <p className="legend">Welcome to Wisdmway!</p>
        </div>
        <div>
          <img
            src="./images/career2.png"
            alt="Explore Slide"
            className="object-cover"
          />
          <p className="legend">Explore Your Future</p>
        </div>
        <div>
          <img
            src="./images/career1.png"
            alt="Path Slide"
            className="object-cover"
          />
          <p className="legend">Find Your Path</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
