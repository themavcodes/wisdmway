import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function InfoBox({ collegeName, imageSrc, description }) {
  const navigate = useNavigate();

  // Format college name to a URL-friendly string (removing spaces)
  const handleClick = () => {
    const formattedName = collegeName.toLowerCase().replace(/\s+/g, "");
    navigate(`/home/${formattedName}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative group w-full sm:w-[200px] md:w-[250px] lg:w-[300px] bg-white shadow-lg rounded-lg overflow-hidden m-4 cursor-pointer"
    >
      <img
        src={imageSrc}
        alt={`${collegeName} campus`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{collegeName}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
          Click for More
        </button>
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  collegeName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
