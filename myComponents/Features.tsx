import React from "react";
import { ArrowDiagonal } from "./Icons";

const Features = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-pink-100 rounded-3xl p-4 shadow-inner h-auto px-12 hover:scale-[1.03] transition-all duration-300">
        <h1 className="text-2xl font-bold font-copernicusMedium text-slate-800 text-center pt-4">
        Verifiable Fairness
        </h1>
        <p className="text-sm font-outfitRegular text-slate-600 justify-center text-center pt-4">
        
        Cryptographically proven random number generation ensures that draws cannot be manipulated or predicted by anyone, including the developers.
        </p>
        <div className="flex justify-center items-center gap-2 pt-6 ">
          <p className="text-sm font-outfitRegular font-bold text-slate-600 hover:text-slate-800 transition-colors duration-200">
            Learn more
          </p>
          <ArrowDiagonal className="text-slate-600" />
        </div>
      </div>
      <div className="bg-blue-100 rounded-3xl p-4 shadow-inner h-auto px-12 hover:scale-[1.03] transition-all duration-300">
        <h1 className="text-2xl font-bold font-copernicusMedium text-slate-800 text-center pt-4">
        Transparent Code
       
        </h1>
        <p className="text-sm font-outfitRegular text-slate-600 justify-center text-center pt-4">
        All smart contracts are open-source and verified on the blockchain, allowing anyone to audit the code and verify its integrity.
        </p>
        <div className="flex justify-center items-center gap-2 pt-6">
          <p className="text-sm font-outfitRegular font-bold text-slate-600 hover:text-slate-800 transition-colors duration-200">
            Learn more
          </p>
          <ArrowDiagonal className="text-slate-600" />
        </div>
      </div>
      <div className="bg-purple-200 rounded-3xl p-4 shadow-inner h-auto px-12 hover:scale-[1.03] transition-all duration-300">
        <h1 className="text-2xl font-bold font-copernicusMedium text-slate-800 text-center pt-4">
        Instant Payouts
        </h1>
        <p className="text-sm font-outfitRegular text-slate-600 justify-center text-center pt-4">

        Winners receive their prizes automatically through smart contracts, eliminating delays and the need for manual processing.
        </p>
        <div className="flex justify-center items-center gap-2 pt-6">
          <p className="text-sm font-outfitRegular font-bold text-slate-600 hover:text-slate-800 transition-colors duration-200">
            Learn more
          </p>
          <ArrowDiagonal className="text-slate-600" />
        </div>
      </div>
    </div>
  );
};

export default Features;
