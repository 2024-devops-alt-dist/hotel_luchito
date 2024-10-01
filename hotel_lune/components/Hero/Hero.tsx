import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/img/Edit 11.JPG")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to our syte</h1>
          <p className="mb-5">
            Claro de Luna is a chain of well know hotels that offer a relaxing
            expierence with a nature approach
          </p>
          <Link href="../hotels">
            <button className="btn btn-primary">Book a room now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
