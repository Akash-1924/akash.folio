import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="bg-black text-white fixed w-full">
        <div className="container mx-auto  py-4 flex items-center">
          <img
            src="/src/assests/icon.jpg"
            alt="logo"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-xl font-bold">Akash.folio</h1>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
