"use client"

import type React from "react"
import Image from "next/image"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { TrendingUp, Shield, Zap, Star, MessageCircle, Send } from "lucide-react"

export default function LandingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupFormSubmitted, setPopupFormSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log("Form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    })
    setFormSubmitted(true)
  }

  const handlePopupFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log("Popup form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    })
    setPopupFormSubmitted(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground">
                SB
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Bet Smarter, Not Harder
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Download our betting app and start winning with ease.<br />
              Simple, fast, and profitable betting at your fingertips.
            </p>

            {/* Hero Image */}
            <div className="mb-10 overflow-hidden rounded-2xl border bg-muted/50">
              <Image 
                src="/hero-audience.png" 
                alt="Sports betting excitement" 
                width={1200}
                height={800}
                className="h-auto w-full transition-opacity duration-300" 
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>

            <Button
              size="lg"
              className="h-12 px-8 text-base"
              onClick={() => {
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Advice</h3>
              <p className="text-muted-foreground">
                Get insights from professional analysts with years of experience in sports betting.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Special Deals</h3>
              <p className="text-muted-foreground">
                Access exclusive bonuses and promotions from top-rated sportsbooks.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Beginner Guides</h3>
              <p className="text-muted-foreground">
                Learn the fundamentals with our comprehensive guides designed for newcomers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <div className="mb-4 overflow-hidden rounded-lg border bg-muted/50">
                <Image 
                  src="/person-signing-up-on-mobile-device.jpg" 
                  alt="Sign up" 
                  width={600}
                  height={400}
                  className="h-auto w-full transition-opacity duration-300" 
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Download Our App</h3>
              <p className="text-muted-foreground">
                Get our user-friendly betting app<br />
                and start placing bets in minutes.<br />
                No complicated setup required.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
              </div>
              <div className="mb-4 overflow-hidden rounded-lg border bg-muted/50">
                <Image 
                  src="/receiving-expert-betting-tips-notification.jpg" 
                  alt="Get tips" 
                  width={600}
                  height={400}
                  className="h-auto w-full transition-opacity duration-300" 
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Get Smart Insights</h3>
              <p className="text-muted-foreground">
                Real-time odds and expert analysis<br />
                right in your mobile app.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <div className="mb-4 overflow-hidden rounded-lg border bg-muted/50">
                <Image 
                  src="/placing-sports-bet-with-confidence.jpg" 
                  alt="Place bets" 
                  width={600}
                  height={400}
                  className="h-auto w-full transition-opacity duration-300" 
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Win Big, Bet Easy</h3>
              <p className="text-muted-foreground">
                Place bets with just a few taps.<br />
                Our intuitive interface makes<br />
                betting simple and profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="border-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Get Your Free Tips</h2>
              <p className="text-muted-foreground">
                Sign up now and receive a complimentary betting guide plus exclusive bonus offers.
              </p>
            </div>

            {!formSubmitted ? (
              <Card className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to receive promotional emails.<br />
                    Unsubscribe anytime.
                  </p>
                </form>
              </Card>
            ) : (
              <Card className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
                <p className="text-muted-foreground">Check your email for your free betting guide and bonus offers.</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold md:text-4xl">What Our Users Say</h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                "The expert tips have completely changed my betting strategy. I'm making smarter decisions and seeing
                better results."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                  MJ
                </div>
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-sm text-muted-foreground">Sports Enthusiast</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                "As a beginner, the guides were invaluable. I learned the basics quickly and felt confident placing my
                first bets."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                  SC
                </div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">New Bettor</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                "The exclusive deals saved me money and the daily picks are consistently accurate. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                  DW
                </div>
                <div>
                  <p className="font-semibold">David Williams</p>
                  <p className="text-sm text-muted-foreground">Regular User</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
              SB
            </div>

            <p className="max-w-md text-sm text-muted-foreground">© 2025 SportsBet. All rights reserved.</p>

          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="p-6">
              <div className="mb-6 text-center">
                <h2 className="mb-4 text-balance text-2xl font-bold md:text-3xl">Don't Miss Out!</h2>
                <p className="text-muted-foreground">
                  You're missing out on exclusive betting opportunities!<br />
                  Join thousands of winners who are already profiting.
                </p>
              </div>

              {!popupFormSubmitted ? (
                <form onSubmit={handlePopupFormSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="popup-name">Name</Label>
                    <Input id="popup-name" name="name" type="text" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="popup-email">Email</Label>
                    <Input id="popup-email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="popup-phone">Phone</Label>
                    <Input id="popup-phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Claim My Free Tips
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to receive promotional emails.<br />
                    Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="p-4 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-8 w-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Success!</h3>
                  <p className="text-muted-foreground">Check your email for your free betting guide and bonus offers.</p>
                </div>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2"
                onClick={() => setShowPopup(false)}
              >
                ✕
              </Button>
            </Card>
          </div>
        </div>
      )}

      {/* Messenger Widgets */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Widget */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          title="Contact us on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>

        {/* Telegram Widget */}
        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          title="Contact us on Telegram"
        >
          <Send className="h-7 w-7" />
        </a>
      </div>
    </div>
  )
}
