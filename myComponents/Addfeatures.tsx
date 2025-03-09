import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent,CardHeader,CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import Image from "next/image";

function Addfeatures() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8">
       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Current Lottery Stats</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real-time information about the current lottery round.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Prize Pool</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">10.5 ETH</div>
                  <p className="text-sm text-muted-foreground">Current jackpot amount</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Time Remaining</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">23:45:12</div>
                  <p className="text-sm text-muted-foreground">Until the next draw</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Participants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,245</div>
                  <p className="text-sm text-muted-foreground">Tickets purchased</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Addfeatures;

