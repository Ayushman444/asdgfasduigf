import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

export const CreateRoom = () => {



    const [generatedCode, setGeneratedCode] = useState('');
    const [inputCode, setInputCode] = useState('');

    const userData = {

    }

    const generateCode = () => {
        // Generate a random 6-digit code
        const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedCode(randomCode);
    };


    const handleCreation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/create', userData);

        }
        catch {

        }
    }

    const handleJoin = async (e) => {
        e.preventDefault();
        try {
            // Use the input code for the request
            userData.code = inputCode;

            const response = await axios.post('http://localhost:5000/api/v1/join', userData);
            // Handle the response as needed
        } catch (error) {
            // Handle errors
        }
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Room Management</h1>
                <div className="flex space-x-8 ">
                    {/* Left Box */}
                    <div className="text-center bg-yellow-200 mx-2">
                        <h2 className="text-xl font-bold mb-4">Create Room</h2>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={generateCode}
                        >
                            Generate Code
                        </button>
                        <p className="mt-2 font-bold">{generatedCode}</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
                            onClick={handleCreation}
                        >
                            Create
                        </button>
                    </div>

                    {/* Right Box */}
                    <div className="text-center bg-blue-200">
                        <h2 className="text-xl font-bold mb-4">Join Room</h2>
                        <input
                            type="text"
                            placeholder="Enter Code"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                            className="border border-gray-400 px-3 py-2 rounded mb-2"
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={handleJoin}
                        >
                            Join Room
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
