import React from "react";
import hero from "../assets/Hero.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <img src={hero} alt="" className="w-full h-auto object-cover" />

        <div className="absolute top-0 left-0 p-4 text-xl md:p-8 md:text-2xl lg:p-12 lg:text-3xl">
          LOGO
        </div>

        <div className="absolute top-0 right-0 flex flex-col items-end md:flex-row md:items-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-cyan-600 text-white px-4 py-2 m-2 rounded-br-xl rounded-tl-xl md:mx-4 md:my-8 lg:mx-8 lg:my-12 lg:px-6 lg:py-3 lg:text-xl"
          >
            Login
          </button>
          <button className="bg-rose-600 text-white px-4 py-2 m-2 rounded-br-xl rounded-tl-xl md:mx-4 md:my-8 lg:mx-8 lg:my-12 lg:px-6 lg:py-3 lg:text-xl">
            Help
          </button>
        </div>

        <div className="absolute top-1/3 left-0 p-4 text-2xl bg-gradient-to-r from-gray-500 to-transparent rounded-xl md:top-1/2 md:p-8 md:text-3xl lg:p-12 lg:text-4xl">
          <h1 className="text-white">Trusted Matrimony and</h1>
          <h1 className="text-rose-600">Matchmaking Service.....</h1>
        </div>
      </div>
    </div>
  );
}
