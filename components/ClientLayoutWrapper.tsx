'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string | undefined>()

  const openBookingWithSpecialty = (specialty?: string) => {
    setPreselectedSpecialty(specialty)
    setBookingOpen(true)
  }

  return (
    <>
      <Navbar onOpenBooking={() => openBookingWithSpecialty()} />
      <main className="flex-1">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as any, {
              onOpenBooking: openBookingWithSpecialty,
            })
          }
          return child
        })}
      </main>
      <Footer />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedSpecialty={preselectedSpecialty}
      />
    </>
  )
}
