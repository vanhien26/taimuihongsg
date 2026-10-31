'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Calendar, Clock, MapPin, Activity, Menu, X } from 'lucide-react'

interface NavbarProps {
  onOpenBooking: () => void
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top emergency & info bar */}
      <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Khám Tai Mũi Họng chuyên khoa
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              1 - 3 Trịnh Văn Cấn, P. Bến Thành, Quận 1, TP.HCM
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              T2 - T7: 07:30 - 20:00 • CN: 08:00 - 12:00
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:02838213456" 
              className="font-bold text-white hover:text-emerald-400 flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              (028) 38.213.456
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
              BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN
            </div>
            <div className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Saigon ENT Specialist Hospital • Est. 2007
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-brand-700 transition-colors">Giới thiệu</Link>
          <Link href="/bac-si" className="hover:text-brand-700 transition-colors">Bác sĩ</Link>
          <Link href="/chuyen-khoa" className="hover:text-brand-700 transition-colors">Chuyên khoa</Link>
          <Link href="/kien-thuc" className="hover:text-brand-700 transition-colors">Kiến thức</Link>
          <Link 
            href="/tac-hai-khong-danh-rang-ban-dem" 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-all text-xs font-bold"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            Chuyên Đề Scrollytelling
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            Đặt Lịch Khám Ngay
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 font-medium text-slate-800 hover:text-brand-700"
          >
            Giới thiệu
          </Link>
          <Link 
            href="/chuyen-khoa" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 font-medium text-slate-800 hover:text-brand-700"
          >
            Chuyên khoa
          </Link>
          <Link 
            href="/bac-si" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 font-medium text-slate-800 hover:text-brand-700"
          >
            Bác sĩ
          </Link>
          <Link 
            href="/kien-thuc" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 font-medium text-slate-800 hover:text-brand-700"
          >
            Kiến thức
          </Link>
          <Link 
            href="/tac-hai-khong-danh-rang-ban-dem" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center gap-2 py-2 font-bold text-emerald-700 hover:text-emerald-800"
          >
            <Activity className="w-4 h-4 text-emerald-600" />
            Chuyên Đề Scrollytelling
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenBooking()
            }}
            className="w-full mt-2 py-3 rounded-xl bg-brand-700 text-white font-bold text-center flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Đặt Lịch Khám Ngay
          </button>
        </div>
      )}
    </header>
  )
}
