"use client";
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { initializeContract } from '../api/contract/route';
import { useTheme } from 'next-themes';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { TicketIcon, ArrowRight, Award, CheckCircle2, CreditCard, DollarSign, RefreshCw, Users } from 'lucide-react';

const DisplayStoredData = () => {
  const { setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  const [lotteryData, setLotteryData] = useState({
    ticketsCount: 0,
    prizePool: "0.00 ETH",
    lotteryRound: 0,
    lotteryActive: false,
    isOwner: false,
    ticketPrice: "0.01 ETH",
    recentWinner: "",
    owner: "",
    transactions: [] as any[],
    previousRounds: [] as any[],
    userAddress: ""
  });

  useEffect(() => {
    setTheme("light");
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setUserAddress(accounts[0]);
        } catch (error) {
          console.error('User rejected request');
        }
      }
    };
    checkWallet();
  }, [setTheme]);

  const fetchContractData = async () => {
    try {
      const contractInstance = await initializeContract();
      if (!contractInstance) return;
      setContract(contractInstance);

      const [
        ticketsCount, 
        prizePool, 
        lotteryRound, 
        lotteryActive, 
        ticketPrice, 
        owner,
        recentWinner
      ] = await Promise.all([
        contractInstance.getTicketsCount(),
        contractInstance.getPrizePool(),
        contractInstance.lotteryRound(),
        contractInstance.lotteryActive(),
        contractInstance.ticketPrice(),
        contractInstance.owner(),
        contractInstance.recentWinner()
      ]);

      setLotteryData(prev => ({
        ...prev,
        ticketsCount: Number(ticketsCount),
        prizePool: `${ethers.formatEther(prizePool)} ETH`,
        lotteryRound: Number(lotteryRound),
        lotteryActive,
        ticketPrice: `${ethers.formatEther(ticketPrice)} ETH`,
        owner: `${owner?.slice(0, 6) || ''}...${owner?.slice(-4) || ''}`,
        recentWinner: `${recentWinner?.slice(0, 6) || ''}...${recentWinner?.slice(-4) || ''}`,
        isOwner: userAddress.toLowerCase() === owner?.toLowerCase(),
        userAddress: `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`
      }));
    } catch (error) {
      console.error('Contract error:', error);
      toast.error('Failed to load contract data');
    }
  };

  useEffect(() => {
    if (userAddress) {
      fetchContractData();
    }
  }, [userAddress]);

  const startLottery = async () => {
    if (!contract) return;
    setIsLoading(true);
    try {
      const tx = await contract.startLottery();
      await tx.wait();
      await fetchContractData();
      toast.success("Lottery started!");
    } catch (error: any) {
      toast.error(error.reason || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const endLottery = async () => {
    if (!contract) return;
    setIsLoading(true);
    try {
      const tx = await contract.endLottery();
      await tx.wait();
      await fetchContractData();
      toast.success("Lottery ended!");
    } catch (error: any) {
      toast.error(error.reason || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const buyTicket = async () => {
    if (!contract || !userAddress) {
      toast.error("Please connect your wallet first");
      return;
    }

    setIsLoading(true);
    try {
      const tx = await contract.buyTicket({
        value: ethers.parseEther('0.01')
      });
      await tx.wait();
      await fetchContractData();
      toast.success("Ticket purchased successfully!");
    } catch (error: any) {
      toast.error(error.reason || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TicketIcon className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">BlockLottery</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="px-3 py-1">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Connected: {lotteryData.userAddress}
              </span>
            </Badge>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Lottery Dashboard</h1>
            <p className="text-muted-foreground">Manage and participate in the decentralized lottery</p>
          </div>
          <div className="flex items-center gap-2">
            {lotteryData.isOwner && (
              <>
                {lotteryData.lotteryActive ? (
                  <Button
                    variant="destructive"
                    onClick={endLottery}
                    disabled={isLoading || lotteryData.ticketsCount === 0}
                  >
                    {isLoading ? "Processing..." : "End Lottery"}
                  </Button>
                ) : (
                  <Button variant="default" onClick={startLottery} disabled={isLoading}>
                    {isLoading ? "Processing..." : "Start Lottery"}
                  </Button>
                )}
              </>
            )}
            <Button 
              variant="outline" 
              onClick={buyTicket} 
              disabled={isLoading || !lotteryData.lotteryActive}
            >
              {isLoading ? "Processing..." : "Buy Ticket"}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Lottery Status</CardTitle>
              {lotteryData.lotteryActive ? (
                <Badge className="bg-green-500">Active</Badge>
              ) : (
                <Badge variant="outline" className="text-gray-500 border-gray-300">
                  Inactive
                </Badge>
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Round #{lotteryData.lotteryRound}</div>
              <p className="text-xs text-muted-foreground">
                {lotteryData.lotteryActive
                  ? "Lottery is currently active and accepting tickets"
                  : "Waiting for the owner to start the next round"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Prize Pool</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lotteryData.prizePool}</div>
              <p className="text-xs text-muted-foreground">Total value of the current lottery round</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ticket Price</CardTitle>
              <CreditCard className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lotteryData.ticketPrice}</div>
              <p className="text-xs text-muted-foreground">Fixed price per lottery ticket</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lotteryData.ticketsCount}</div>
              <p className="text-xs text-muted-foreground">Number of participants in current round</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-7">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Lottery Activity</CardTitle>
              <CardDescription>Recent transactions and events from the lottery contract</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lotteryData.transactions?.slice(0, 5).map((tx, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {tx.status === "success" ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <RefreshCw className="h-4 w-4 text-blue-500" />
                          )}
                          {tx.type}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs">{tx.userAddress}</TableCell>
                      <TableCell>{tx.ticketPrice}</TableCell>
                      <TableCell className="text-right">{tx.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="ghost" size="sm" className="gap-1">
                View all transactions <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Lottery Details</CardTitle>
              <CardDescription>Current lottery information and statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {lotteryData.lotteryActive && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Target</span>
                    <span className="font-medium">200 tickets</span>
                  </div>
                  <Progress value={(lotteryData.ticketsCount / 200) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {lotteryData.ticketsCount} tickets sold out of target 200
                  </p>
                </div>
              )}

              <div className="rounded-lg border p-3">
                <h3 className="mb-2 font-semibold">Recent Winner</h3>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="font-mono text-sm">{lotteryData.recentWinner}</p>
                    <p className="text-xs text-muted-foreground">
                      Won {lotteryData.prizePool} in round #{lotteryData.lotteryRound}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <h3 className="mb-2 font-semibold">Contract Owner</h3>
                <p className="font-mono text-sm">{lotteryData.owner}</p>
                <p className="text-xs text-muted-foreground">Can start and end lottery rounds</p>
              </div>

              <div className="rounded-lg border p-3">
                <h3 className="mb-2 font-semibold">Your Tickets</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">Tickets in current round</p>
                  </div>
                  <div>
                    <p className="text-right text-sm font-medium">
                      {lotteryData.ticketsCount > 0 
                        ? `${((0 / lotteryData.ticketsCount) * 100).toFixed(1)}%`
                        : "0%"}
                    </p>
                    <p className="text-xs text-muted-foreground">Winning chance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Previous Rounds</CardTitle>
              <CardDescription>History of completed lottery rounds and their winners</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Round</TableHead>
                    <TableHead>Tickets Sold</TableHead>
                    <TableHead>Prize Pool</TableHead>
                    <TableHead>Winner</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lotteryData.previousRounds?.map((round, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">#{round.round}</TableCell>
                      <TableCell>{round.tickets}</TableCell>
                      <TableCell>{round.prizePool}</TableCell>
                      <TableCell className="font-mono text-xs">{round.winner}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="mt-12 border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <TicketIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold">BlockLottery</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Smart Contract Address: <span className="font-mono">0x1234...5678</span>
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              View on Etherscan
            </Button>
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DisplayStoredData;