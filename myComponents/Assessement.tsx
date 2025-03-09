import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function Assessment() {
  return (
    <>
      {/* Header Section with similar background and fonts */}
      <div className="w-full bg-blue-100 flex flex-col items-center justify-center rounded-3xl overflow-hidden p-8 mt-16">
        <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-2xl">
          <h2 className="text-4xl font-bold           font-valueSerif
 text-slate-800 text-center tracking-tighter">
            How Our Decentralized Lottery Works
          </h2>
          <p className="max-w-[900px] text-md  text-slate-600 text-center   font-valueSerif ">
            A transparent and secure lottery process powered by blockchain technology and smart contracts.
          </p>
        </div>
      </div>

      {/* Tabs Section with updated tab trigger and content typography */}
      <div className="mx-auto max-w-3xl py-12">
        <Tabs defaultValue="participate" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger 
              value="participate" 
              className="text-md  bg-pink-200 font-valueSerif font-bold text-slate-600 hover:text-slate-800 transition-colors duration-200">
              Participate
            </TabsTrigger>
            <TabsTrigger 
              value="drawing" 
              className="text-md   bg-blue-100 font-valueSerif font-bold text-slate-600 hover:text-slate-800 transition-colors duration-200">
              Drawing Process
            </TabsTrigger>
            <TabsTrigger 
              value="winning" 
              className="text-md bg-purple-200  font-valueSerif  font-bold text-slate-600 hover:text-slate-800 transition-colors duration-200">
              Winning & Payouts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="participate" className="p-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-valueSerif text-slate-800">
                How to Participate
              </h3>
              <ol className="space-y-4 text-left">
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Connect Your Wallet
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      Use MetaMask or any Web3 wallet to connect to our dApp.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Purchase Tickets
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      Buy one or more lottery tickets using cryptocurrency. Each ticket has a unique identifier.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Wait for the Draw
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      A countdown timer shows when the next draw will occur. All participants can see this.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </TabsContent>
          <TabsContent value="drawing" className="p-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-copernicusMedium text-slate-800">
                Verifiable Drawing Process
              </h3>
              <ol className="space-y-4 text-left">
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Random Number Generation
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      Our smart contract uses Chainlink VRF (Verifiable Random Function) to generate provably fair random numbers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Winner Selection
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      The smart contract uses the random number to select the winning ticket from all participants.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Verification
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      The entire process is recorded on the blockchain and can be verified by anyone.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </TabsContent>
          <TabsContent value="winning" className="p-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-copernicusMedium text-slate-800">
                Winning & Payouts
              </h3>
              <ol className="space-y-4 text-left">
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Winner Announcement
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      The winning ticket is announced immediately after the draw and recorded on the blockchain.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      Automatic Payout
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      The smart contract automatically transfers the prize pool to the winner's wallet address.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium font-copernicusMedium text-slate-800">
                      New Round Begins
                    </p>
                    <p className="text-sm font-outfitRegular text-slate-600">
                      A new lottery round begins immediately, with a fresh prize pool and countdown.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Assessment;
