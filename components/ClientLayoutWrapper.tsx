'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'
import Link from 'next/link'
import { ArrowUp, Calendar, Phone, Moon, Presentation } from 'lucide-react'

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
      {/* Floating Action Cluster */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 sm:right-6" aria-label="Hỗ trợ nhanh">
        {/* Nút Audit & Growth Plan (chỉ hiện trên màn hình lớn hoặc hover) */}
        <Link
          href="/web-plan"
          aria-label="Báo cáo Business Impact & Growth Plan"
          title="Báo cáo Business Impact & Growth Plan"
          className="group hidden sm:flex h-10 items-center gap-2 rounded-full border border-brand-200 bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-800 shadow-md backdrop-blur-sm transition-all hover:bg-brand-50 hover:shadow-lg"
        >
          <Presentation className="h-4 w-4 text-brand-600" />
          <span>Audit & Growth Plan</span>
        </Link>

        {/* Nút cuộn lên đầu trang */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:scale-105 hover:border-brand-600 hover:text-brand-700"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Nút gọi tổng đài */}
        <a
          href="tel:02838213456"
          aria-label="Gọi tổng đài (028) 38.213.456"
          title="Gọi tổng đài (028) 38.213.456"
          className="relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition-all hover:scale-105 hover:bg-emerald-700 active:scale-95"
        >
          <span className="absolute -inset-0.5 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>

        {/* Nút Đặt lịch khám nhanh */}
        <button
          type="button"
          onClick={() => openBookingWithSpecialty()}
          aria-label="Đặt lịch khám ngay"
          title="Đặt lịch khám ngay"
          className="group flex h-12 items-center gap-2 rounded-full bg-brand-700 px-4 text-white shadow-xl transition-all hover:scale-105 hover:bg-brand-800 active:scale-95"
        >
          <Calendar className="h-5 w-5" />
          <span className="hidden font-bold text-xs sm:inline">Đặt Lịch Khám</span>
        </button>
      </div>
    </>
  )
}
