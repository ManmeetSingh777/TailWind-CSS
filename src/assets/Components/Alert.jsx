import React from "react";

const Alert = () => {
  return (

    
    <div className="flex flex-col items-center">
      <button className="bg-blue-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 m-8 float-left">
        Button One
      </button>
      <div className="border border-red-500 bg-red-100 text-red-900 px-4 py-3 rounded-md w-3/4 m-20">
        <p >
            <strong className="text-red-900">ALERT!!  </strong>
            <span>This is Awesome!</span>
        </p>
      </div>
      <div className="flex items-center mt-4 border border-gray-300 rounded-lg p-4 shadow-md">
        <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" alt="" className="w-20 h-12 mr-14"/>
        <div>
        <h2 >Kalvium Course</h2>
        <p>You have a new course</p>
        </div>
      </div>
      <footer className=" bg-gray-300 mt-8 w-full text-center h-9">&#169; 2021 Copyright: Kalvium</footer>        
    </div>
  );
}

export default Alert;