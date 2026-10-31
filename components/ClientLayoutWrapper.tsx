'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'
import { ArrowUp, Calendar, Phone } from 'lucide-react'

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
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2 sm:right-6" aria-label="Liên hệ nhanh">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-colors hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => openBookingWithSpecialty()}
          aria-label="Đặt lịch khám"
          title="Đặt lịch khám"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition-colors hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <Calendar className="h-5 w-5" />
        </button>
        <a
          href="tel:02838213456"
          aria-label="Gọi tổng đài (028) 38.213.456"
          title="Gọi tổng đài"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </>
  )
}
