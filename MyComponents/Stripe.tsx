"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const stripePromise = loadStripe("pk_test_placeholder")

interface StripeProps {
  options: {
    mode: string
    amount: number
    currency: string
  }
  className?: string
  children: React.ReactNode
}

export function Stripe({ options, className, children }: StripeProps) {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {

    setClientSecret("pi_placeholder_secret")
  }, [options])

  return (
    <div className={className}>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
            },
          }}
        >
          {children}
        </Elements>
      )}
    </div>
  )
}

