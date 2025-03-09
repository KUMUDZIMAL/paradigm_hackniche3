"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <div className="flex h-[75vh] w-full rounded-3xl relative overflow-hidden bg-violet-50 shadow-inner">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl top-40 left-60"></div>
        <div className="absolute w-80 h-80 bg-blue-500/30 rounded-full blur-3xl bottom-0 right-20"></div>
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -right-20 top-10"></div>
        <div className="absolute w-80 h-80 bg-orange-300/30 rounded-full blur-3xl top-0 right-60"></div>
        <div className="absolute w-80 h-80 bg-orange-300/30 rounded-full blur-3xl top-20 left-20"></div>
      </div>

      {/* Hero Content */}
      <div className="w-full h-full flex items-center pl-12 relative z-10 justify-between">
        {/* Text Section */}
        <div className="flex flex-col">
          <div className="text-6xl font-bold drop-shadow-xl text-slate-800 font-valueSerif">
          Decentralized Lottery 
          </div>
          <div className="text-6xl font-bold drop-shadow-xl text-slate-800 font-valueSerif">
          with Verifiable Fairness
          </div>
          <div className="text-2xl  drop-shadow-xl text-slate-600 font-valueSerif mt-5">
          A trustworthy lottery system built on blockchain technology <br></br> that guarantees transparency, fairness, <br></br> and instant payouts without intermediaries.
          </div>
          <div className="mt-8">
  <Button
    className="ml-4 px-8 py-6 text-lg rounded-full mr-12  bg-slate-700 text-white hover:text-black hover:bg-white font-outfitRegular"
  >
    Play Now
  </Button>
</div>

        </div>

        {/* Spline 3D Model */}
        <div className="w-[700px] h-[700px] mb-8">
        <Spline
        scene="https://prod.spline.design/A6FfLhx5V-P-JQMS/scene.splinecode"
      />
        </div>
      </div>
    </div>
  );
};

export default Hero;
