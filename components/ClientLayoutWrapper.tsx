'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'
import Link from 'next/link'
import { ArrowUp, Calendar, Phone, TrendingUp, Presentation } from 'lucide-react'

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
      <div className="fixed bottom-5 right-4 z-40 flex items-center gap-2 sm:right-6" aria-label="Điều hướng nhanh">
        {/* Nút Báo Cáo Chiến Lược Tăng Trưởng & Bảng Đối Chiếu Audit */}
        <Link
          href="/chien-luoc-tang-truong"
          aria-label="Chiến lược tăng trưởng & Audit"
          title="Báo cáo Chiến lược Tăng trưởng & Audit kỹ thuật"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-700 shadow-lg transition-all hover:scale-105 hover:bg-teal-50 hover:text-teal-900 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          <TrendingUp className="h-5 w-5" />
          <span className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white shadow-md group-hover:block">
            Chiến Lược & Audit
          </span>
        </Link>

        {/* Nút Báo Cáo Business Impact Cho Bác Sĩ (Chủ Viện) */}
        <Link
          href="/web-plan"
          aria-label="Kế hoạch Web Plan cho Bác Sĩ"
          title="Báo cáo Business Impact cho Bác Sĩ (Chủ Viện)"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-300 bg-white text-brand-800 shadow-lg transition-all hover:scale-105 hover:bg-brand-50 hover:text-brand-950 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <Presentation className="h-5 w-5" />
          <span className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-bold text-white shadow-md group-hover:block">
            Web Plan Bác Sĩ
          </span>
        </Link>

        {/* Cụm nút liên hệ & On Top */}
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Lên đầu trang"
            title="Lên đầu trang"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition-all hover:scale-105 hover:border-brand-600 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => openBookingWithSpecialty()}
            aria-label="Đặt lịch khám"
            title="Đặt lịch khám"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition-all hover:scale-105 hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            <Calendar className="h-5 w-5" />
          </button>
          <a
            href="tel:02838213456"
            aria-label="Gọi tổng đài (028) 38.213.456"
            title="Gọi tổng đài"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition-all hover:scale-105 hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  )
}
