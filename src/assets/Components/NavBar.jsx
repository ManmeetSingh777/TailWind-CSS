import React from "react";

const Navbar = () => {
  return (
    <div   className="flex bg-red-500  h-30 items-center justify-between border-t-8 border-blue-900 w-screen">
    <div className="flex justify-around items-center  ">
      <strong className="text-white text-lg p-9 mt-0">Kalvium</strong>  
    </div>
    <div className="flex justify-between items-center pr-80">
      <h3 className="text-white pl-5 pr-5 mt-0 ">Contact</h3>
      <h3 className="text-white pl-5 pr-5 mt-0">Help</h3>
      <h3 className="text-white pl-5 pr-5 mt-0">Courses</h3>
    </div >
    <div className="flex ">
    <h3 className="text-white justify-end ml-96 mt-8 mr-6 mb-8 p-2 box-border border-2 rounded-lg ">Login</h3>
    </div>

   
    
  </div>
  );
};

export default Navbar;