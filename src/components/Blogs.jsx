import React from "react";

import india from "../assests/india.jpg";
import lasvega from "../assests/lasvega.jpg";
import London from "../assests/London.jpg";
import ny from "../assests/ny.jpg";
import paris from "../assests/paris.jpg";
import rome from "../assests/rome.jpg";
import sanfran from "../assests/sanfran.jpg";

const Blogs = () => {

  const blogs = [
    {
      id: 1,
      src: india,
      title: "India",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: lasvega,
      title: "LasVegas",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: London,
      title: "London",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: ny,
      title: "New-York",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: paris,
      title: "Paris",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: rome,
      title: "Rome",
      style: "shadow-pink-400",
    },
    {
        id: 7,
        src: sanfran,
        title: "Sanfrancisco",
        style: "shadow-gray-400",
      },
  ];
  return (
    <div
      name="blogs"
      className="bg-gradient-to-b from-black via-black to-stone-500 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Blogs
          </p>
          <p className="py-6">These are the blogs written by some famous people who have experienced our services. </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {blogs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-125 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
