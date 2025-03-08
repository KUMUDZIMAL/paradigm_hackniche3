import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Clock, Code, CreditCard, Lock, Shield, Ticket, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Ticket className="h-6 w-6" />
              <span className="inline-block font-bold">BlockLottery</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Connect Wallet
              </Button>
              <Button size="sm">Enter Lottery</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-block" variant="outline">
                    Blockchain-Powered
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Decentralized Lottery with Verifiable Fairness
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A trustless lottery system built on blockchain technology that guarantees transparency, fairness,
                    and instant payouts without intermediaries.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Play Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-square rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-primary/5 p-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4 rounded-full bg-background shadow-lg flex items-center justify-center overflow-hidden border border-primary/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background"></div>
                      <Ticket className="h-20 w-20 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-1/4 right-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute bottom-1/4 left-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-block" variant="outline">
                  Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Why Choose Our Decentralized Lottery?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our blockchain-based lottery system solves the problems of traditional lotteries through cutting-edge
                  technology and smart contracts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Verifiable Fairness</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Cryptographically proven random number generation ensures that draws cannot be manipulated or
                    predicted by anyone, including the developers.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Code className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Transparent Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    All smart contracts are open-source and verified on the blockchain, allowing anyone to audit the
                    code and verify its integrity.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Instant Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Winners receive their prizes automatically through smart contracts, eliminating delays and the need
                    for manual processing.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Lock className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Trustless System</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    No central authority controls the lottery. The entire process is governed by immutable smart
                    contracts that execute exactly as programmed.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Low Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Elimination of intermediaries means more of the pool goes to winners. Only minimal network fees
                    apply for blockchain transactions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Predictable Draws</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Lottery draws occur at predetermined intervals, with countdowns visible to all participants. No
                    delays or unexpected changes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-block" variant="outline">
                  Process
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  How Our Decentralized Lottery Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A transparent and secure lottery process powered by blockchain technology and smart contracts.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="participate" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="participate">Participate</TabsTrigger>
                  <TabsTrigger value="drawing">Drawing Process</TabsTrigger>
                  <TabsTrigger value="winning">Winning & Payouts</TabsTrigger>
                </TabsList>
                <TabsContent value="participate" className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">How to Participate</h3>
                    <ol className="space-y-4 text-left">
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          1
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Connect Your Wallet</p>
                          <p className="text-sm text-muted-foreground">
                            Use MetaMask or any Web3 wallet to connect to our dApp.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          2
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Purchase Tickets</p>
                          <p className="text-sm text-muted-foreground">
                            Buy one or more lottery tickets using cryptocurrency. Each ticket has a unique identifier.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          3
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Wait for the Draw</p>
                          <p className="text-sm text-muted-foreground">
                            A countdown timer shows when the next draw will occur. All participants can see this.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </TabsContent>
                <TabsContent value="drawing" className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Verifiable Drawing Process</h3>
                    <ol className="space-y-4 text-left">
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          1
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Random Number Generation</p>
                          <p className="text-sm text-muted-foreground">
                            Our smart contract uses Chainlink VRF (Verifiable Random Function) to generate provably fair
                            random numbers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          2
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Winner Selection</p>
                          <p className="text-sm text-muted-foreground">
                            The smart contract uses the random number to select the winning ticket from all
                            participants.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          3
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Verification</p>
                          <p className="text-sm text-muted-foreground">
                            The entire process is recorded on the blockchain and can be verified by anyone.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </TabsContent>
                <TabsContent value="winning" className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Winning & Payouts</h3>
                    <ol className="space-y-4 text-left">
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          1
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Winner Announcement</p>
                          <p className="text-sm text-muted-foreground">
                            The winning ticket is announced immediately after the draw and recorded on the blockchain.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          2
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Automatic Payout</p>
                          <p className="text-sm text-muted-foreground">
                            The smart contract automatically transfers the prize pool to the winner's wallet address.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          3
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">New Round Begins</p>
                          <p className="text-sm text-muted-foreground">
                            A new lottery round begins immediately, with a fresh prize pool and countdown.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

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

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-block" variant="outline">
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about our decentralized lottery system.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>How is the randomness generated?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We use Chainlink VRF (Verifiable Random Function), which is a provably fair and verifiable source
                      of randomness designed for smart contracts. This ensures that no one, including the developers,
                      can manipulate the lottery results.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What happens if no one wins?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our lottery is designed to always have a winner. The smart contract selects a winning ticket from
                      all participants. In the extremely unlikely event of a technical issue, the prize pool would roll
                      over to the next round.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How are the fees distributed?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      90% of all ticket purchases go directly to the prize pool. The remaining 10% is allocated as
                      follows: 5% for development and maintenance of the platform, 3% for the Chainlink VRF fees, and 2%
                      for a community treasury that funds future improvements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Is the smart contract audited?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, our smart contracts have been audited by leading blockchain security firms. The audit reports
                      are publicly available on our GitHub repository, ensuring complete transparency.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Which blockchains do you support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Currently, our lottery runs on Ethereum and Polygon. We plan to expand to other EVM-compatible
                      chains in the future based on community demand and gas efficiency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Try Your Luck?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of players in the world's most transparent lottery system.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Enter Lottery <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  View Smart Contract
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Ticket className="h-6 w-6" />
              <span className="font-bold">BlockLottery</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BlockLottery. All rights reserved. Powered by blockchain technology.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

