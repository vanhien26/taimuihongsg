'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Calendar, Clock, MapPin, Menu, X, Activity, ChevronDown } from 'lucide-react'

interface NavbarProps {
  onOpenBooking: () => void
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const navGroups = [
    {
      label: 'Giới thiệu',
      items: [
        ['Tổng quan bệnh viện', '/'],
        ['Sứ mệnh và tầm nhìn', 'https://taimuihongsg.com/su-menh-tam-nhin/'],
        ['Văn hóa doanh nghiệp', 'https://taimuihongsg.com/van-hoa-doanh-nghiep/'],
        ['Trách nhiệm cộng đồng', 'https://taimuihongsg.com/trach-nhiem-cong-dong/'],
        ['Bệnh viện Tai Mũi Họng Sài Gòn', 'https://taimuihongsg.com/benh-vien-tai-mui-hong-sai-gon/'],
        ['Trung tâm Tai Mũi Họng trẻ em', 'https://taimuihongsg.com/trung-tam-tai-mui-hong-tre-em/'],
      ],
    },
    {
      label: 'Bác sĩ',
      items: [['Đội ngũ bác sĩ', '/bac-si'], ['Lịch làm việc', 'https://taimuihongsg.com/lich-lam-viec-bac-si/']],
    },
    {
      label: 'Chuyên khoa',
      items: [
        ['Tổng quan chuyên khoa', '/chuyen-khoa'],
        ['Tai Mũi Họng', 'https://taimuihongsg.com/chuyen-khoa/tai-mui-hong/'],
        ['Khoa phẫu thuật Tai Mũi Họng', '/chuyen-khoa/khoa-phau-thuat-tai-mui-hong'],
        ['Khoa nội trú Tai Mũi Họng', '/chuyen-khoa/khoa-noi-tru'],
      ],
    },
    {
      label: 'Dịch vụ',
      items: [
        ['Đặt hẹn khám bệnh', '/dat-hen-kham-benh'],
        ['Dịch vụ kiểm tra chuyên sâu', '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong'],
        ['Đo đa ký giấc ngủ', '/chuyen-khoa/do-da-ky-giac-ngu'],
        ['Dịch vụ nội trú VIP', 'https://taimuihongsg.com/dich-vu-noi-tru-vip/'],
        ['Bảng giá dịch vụ', 'https://taimuihongsg.com/bang-gia-dich-vu/'],
        ['Bảo lãnh viện phí', 'https://taimuihongsg.com/bao-lanh-vien-phi/'],
      ],
    },
    {
      label: 'Kiến thức',
      items: [
        ['Thư viện kiến thức y học', '/kien-thuc'],
        ['Bệnh về Tai', 'https://taimuihongsg.com/benh-ve-tai/'],
        ['Bệnh về Mũi xoang', 'https://taimuihongsg.com/benh-ve-mui-xoang/'],
        ['Bệnh về Họng và thanh quản', 'https://taimuihongsg.com/benh-ve-hong-thanh-quan/'],
        ['Hỏi đáp chuyên gia', 'https://taimuihongsg.com/hoi-dap-chuyen-gia/'],
      ],
    },
  ]

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
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3 group">
          <div className="w-12 h-12 shrink-0 overflow-hidden rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-600 transition-colors">
            <img src="https://taimuihongsg.com/wp-content/uploads/2018/06/logo-taimuihongsg.jpg" alt="Logo Bệnh Viện Tai Mũi Họng Sài Gòn" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="whitespace-nowrap text-base font-extrabold tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors xl:text-lg">
              BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN
            </div>
            <div className="whitespace-nowrap text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase xl:text-[11px]">
              Saigon ENT Specialist Hospital • Est. 2007
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-0 text-sm font-semibold text-slate-700" aria-label="Điều hướng chính">
          {navGroups.map((group) => (
            <div key={group.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}
                aria-expanded={openMenu === group.label}
                aria-haspopup="menu"
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-3 hover:bg-slate-50 hover:text-brand-700 xl:px-3"
              >
                {group.label}<ChevronDown className={`h-4 w-4 transition-transform ${openMenu === group.label ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === group.label && (
                <div className="absolute left-0 top-full z-50 mt-1 w-72 border border-slate-200 bg-white p-2 shadow-xl" role="menu">
                  {group.items.map(([label, href]) => (
                    <Link key={label} href={href} onClick={() => setOpenMenu(null)} className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-800" role="menuitem">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/tac-hai-khong-danh-rang-ban-dem" 
            className="inline-flex whitespace-nowrap items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-all text-xs font-bold xl:px-3"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            Chuyên Đề Scrollytelling
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex whitespace-nowrap items-center gap-2 px-3 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 xl:px-5"
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
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-slate-100 pb-2">
              <button type="button" onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)} aria-expanded={openMenu === group.label} className="flex w-full items-center justify-between py-2 font-semibold text-slate-900">
                {group.label}<ChevronDown className={`h-4 w-4 transition-transform ${openMenu === group.label ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === group.label && <div className="grid gap-1 pb-2 pl-3">
                {group.items.map(([label, href]) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-sm text-slate-600 hover:text-brand-700">{label}</Link>)}
              </div>}
            </div>
          ))}
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
