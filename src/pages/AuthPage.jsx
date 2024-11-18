// src/pages/AuthPage.jsx
import AuthForm from '../components/AuthForm';

export function Auth () {
  return (
    <div className="min-h-screen  flex flex-col  justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="flex flex-col items-center w-full px-4 max-w-lg"></div>
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-white mb-8 ml-10 mt-20">
        Welcome to Wisdmway!
      </h1>
      <div className="max-w-md flex m-auto w-full justify-center items-center">
        <AuthForm />
      </div>
    </div>
  );
};

