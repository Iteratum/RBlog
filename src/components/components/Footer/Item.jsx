import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold md:text-xl lg:text-2xl">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-900 hover:text-teal-400 duration-300
          text-sm md:text-base lg:text-lg cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
