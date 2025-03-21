
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Wisdmway. All Rights Reserved.
        </p>
        <p className="text-xs">Made with ❤️ by Wisdmway Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
