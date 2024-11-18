import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For Register

const handleSubmit = (e) => {
  e.preventDefault();
  if (isLogin) {
    // Call login API
    console.log('Logging in:', { email, password });
  } else {
    // Validate passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Call register API
    console.log('Registering:', { email, password });
  }
}
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
