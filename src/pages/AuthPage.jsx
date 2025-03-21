import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer";

export function Auth() {
  return (
    <div className="min-h-screen animate-gradient-x bg-dark-red-blue bg-200% flex flex-col justify-center items-center">
      {/* Welcome Message */}
      <h1 className="text-5xl font-extrabold text-white mb-10 tracking-wide">
        Welcome to Wisdmway!
      </h1>
      <div className="max-w-md flex justify-center items-center w-full opacity-65">
        <AuthForm />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
