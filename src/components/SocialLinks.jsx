import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/manoj-kumar-h-s-4306b2235/",
      style: "rouned-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Twitter <FaTwitter size={25} />
        </>
      ),
      href: "https://twitter.com/ManojKumarHS9",
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/Manoj-2702",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Manoj_Resume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:hsmanojkumar2003@gmail.com/",
      style: "rouned-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rouned-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
