"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/kipi.png"
            alt="Worldcoin Logo"
            width={50}
            height={50}
            className="rounded-sm"
          />
          <span className="text-lg font-bold">Kipi Market Place</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#customers" className="text-sm font-medium hover:text-primary transition-colors">
            Clientes
          </Link>
          <Link href="#businesses" className="text-sm font-medium hover:text-primary transition-colors">
            Negocios
          </Link>
          <Button asChild>
            <Link href="#register">Quiero unirme</Link>
          </Button>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="#customers"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                For Customers
              </Link>
              <Link
                href="#businesses"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                For Businesses
              </Link>
              <Button asChild>
                <Link href="#register" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

