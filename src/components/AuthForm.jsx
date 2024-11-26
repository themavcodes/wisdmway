import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For Register

const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:5000/api/auth"; // Base URL for backend

    if (isLogin) {
      try {
        const response = await fetch(`${apiUrl}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Login successful!");
          console.log("User data:", data); // Replace with navigation to dashboard
        } else {
          alert(`Login failed: ${data.message}`);
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login.");
      }
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const response = await fetch(`${apiUrl}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Registration successful!");
          console.log("Registered user:", data); // Replace with navigation to login
        } else {
          alert(`Registration failed: ${data.message}`);
        }
      } catch (error) {
        console.error("Registration error:", error);
        alert("An error occurred during registration.");
      }
    }
  };


return (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-2xl font-bold mb-6 text-center">
      {isLogin ? 'Login' : 'Register'}
    </h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      {!isLogin && (
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </div>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">
      {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-blue-500 hover:underline"
      >
        {isLogin ? 'Register here' : 'Login here'}
      </button>
    </p>
  </div>
);
};





export default AuthForm;
