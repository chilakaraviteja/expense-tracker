import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen bg-red-400">
      <div className="w-[50%] border-2 p-3">
        <div className="mb-8 text-center">
          <h1 className="md:text-3xl text-xl"> Expense Tracker</h1>
        </div>
        <div className="mb-3">
          <h2 className="text-lg uppercase font-semibold">Your balance</h2>
          <p className="text-4xl font-bold">£260.00</p>
        </div>
        <div className="flex justify-around items-center bg-white p-1">
          <div>
            <h2 className="text-lg uppercase font-semibold">Your balance</h2>
            <p className="text-2xl font-bold text-green-600">£260.00</p>
          </div>
          <div>
            <h2 className="text-lg uppercase font-semibold">Your balance</h2>
            <p className="text-2xl font-bold text-red-700">£260.00</p>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h2 className="text-lg uppercase font-semibold mb-1">History</h2>
            <hr className="mb-1" />
            <p className="text-4xl font-bold bg-gray-700">cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
