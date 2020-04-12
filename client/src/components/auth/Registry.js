import React, { useState } from 'react';
import Background from '../../assets/images/books-pile.jpg';

function Registry() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [sex, setSex] = useState('');

  return (
    <div className="w-screen h-screen bg-cover" style={{ backgroundImage: `url(${Background})` }} >
      <div className="container mx-auto h-screen z-10 flex justify-center items-center bg-transparent">
        <form className="bg-white flex flex-col h-auto rounded w-full lg:w-1/3 px-6 pt-6 pb-8">
          <h1 className="text-3xl text-center mb-3">Sign Up</h1>
          <input
            type="text"
            className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            className="focus:bg-white w-full py-2 px-3 bg-gray-200 border-2 border-gray-200 focus:border-blue-400 rounded focus:outline-none mb-3"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label className="bg-gray-200 rounded px-3 py-2 mb-3 cursor-pointer text-gray-600">
            <span>{ avatar === '' ? 'Select Image' : avatar.split('\\')[avatar.split('\\').length - 1] }</span>
            <input
              type="file"
              className="hidden"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
          </label>
          <select
            className="mb-3 bg-gray-200 rounded px-3 py-2"
            value={sex}
            onChange={e => setSex(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registry;