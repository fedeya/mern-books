import React, { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-gray-800 w-screen h-screen">
      <div className="container h-screen flex justify-center items-center bg-gray-800">
        <div className="bg-white flex flex-col h-auto rounded md:w-1/3 px-6 pt-6 pb-8">
          <h1 className="text-3xl text-center mb-3">Login</h1>
          <input
            type="text"
            className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
            placeholder="*********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 border-b-4 border-blue-700 hover:bg-blue-400 w-20 font-bold rounded text-white px-3 py-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;