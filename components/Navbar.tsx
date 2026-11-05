'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Calendar, Clock, MapPin, Menu, X, Activity, ChevronDown, Globe } from 'lucide-react'

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
        ['Sứ mệnh và tầm nhìn', 'https://taimuihongsg.com/gioi-thieu/tam-nhin-su-menh-gia-tri/'],
        ['Văn hóa doanh nghiệp', 'https://taimuihongsg.com/van-hoa-tmh-sai-gon/'],
        ['Trách nhiệm cộng đồng', 'https://taimuihongsg.com/trach-nhiem-xa-hoi/'],
        ['Bệnh viện Tai Mũi Họng Sài Gòn', 'https://taimuihongsg.com/gioi-thieu/benh-vien-tai-mui-hong-sai-gon/'],
        ['Trung tâm Tai Mũi Họng trẻ em', 'https://taimuihongsg.com/gioi-thieu/he-thong-cac-co-so/trung-tam-tai-mui-hong-tre-em/'],
      ],
    },
    {
      label: 'Bác sĩ',
      items: [
        ['Đội ngũ bác sĩ', '/doi-ngu-bac-si'],
        ['Lịch làm việc', 'https://taimuihongsg.com/lich-lam-viec/'],
      ],
    },
    {
      label: 'Chuyên khoa',
      items: [
        ['Tổng quan chuyên khoa', '/chuyen-khoa'],
        ['Khoa khám nội soi', '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong'],
        ['Khoa phẫu thuật Tai Mũi Họng', '/chuyen-khoa/khoa-phau-thuat-tai-mui-hong'],
        ['Khoa nội trú Tai Mũi Họng', '/chuyen-khoa/khoa-noi-tru'],
      ],
    },
    {
      label: 'Dịch vụ',
      items: [
        ['Đặt hẹn khám bệnh', '/dat-hen-kham-benh'],
        ['Dịch vụ khám nội soi', '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong'],
        ['Đo đa ký giấc ngủ', '/do-da-ki-giac-ngu'],
        ['Dịch vụ nội trú', 'https://taimuihongsg.com/dich-vu-noi-tru/'],
        ['Bảng giá dịch vụ', 'https://taimuihongsg.com/bang-gia-dich-vu/'],
        ['Bảo lãnh viện phí', 'https://taimuihongsg.com/bao-hiem-bao-lanh-vien-phi/'],
      ],
    },
    {
      label: 'Kiến thức',
      items: [
        ['Thư viện kiến thức y học', '/thu-vien-kien-thuc-y-hoc'],
        ['Bệnh về Tai', 'https://taimuihongsg.com/thuong-thuc-benh-hoc/benh-ve-tai/'],
        ['Bệnh về Mũi xoang', 'https://taimuihongsg.com/thuong-thuc-benh-hoc/benh-ve-mui-xoang/'],
        ['Bệnh về Họng và thanh quản', 'https://taimuihongsg.com/thuong-thuc-benh-hoc/benh-ve-hong-thanh-quan/'],
        ['Tư vấn chuyên gia', 'https://taimuihongsg.com/tu-van/'],
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top emergency & info bar */}
      <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-left md:gap-4">
            <span className="flex items-start gap-1 leading-4">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              1 - 3 Trịnh Văn Cấn, P. Bến Thành, Quận 1, TP.HCM
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              T2 - T7: 07:30 - 20:00 • CN: 08:00 - 12:00
            </span>
          </div>

          <div className="flex items-center justify-start gap-3 md:justify-end">
            <Link
              href="/english"
              hrefLang="en"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              English
            </Link>
            <span className="hidden sm:inline text-slate-500">•</span>
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
          <div className="w-11 h-11 xl:w-12 xl:h-12 shrink-0 overflow-hidden rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-600 transition-colors">
            <img src="https://taimuihongsg.com/wp-content/uploads/2018/06/logo-taimuihongsg.jpg" alt="Logo Bệnh Viện Tai Mũi Họng Sài Gòn" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-extrabold leading-snug tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors sm:text-base xl:text-lg whitespace-nowrap">
              BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN
            </div>
            <div className="text-[9px] font-semibold leading-tight tracking-[0.08em] text-slate-500 uppercase xl:text-[10px]">
              Saigon ENT Specialist Hospital • Est. 2007
            </div>
          </div>
        </Link>

        {/* Desktop links & CTA cluster */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-3 shrink-0">
          <nav className="flex items-center text-xs xl:text-sm font-semibold text-slate-700" aria-label="Điều hướng chính">
            {navGroups.map((group) => (
              <div key={group.label} className="relative" onMouseEnter={() => setOpenMenu(group.label)} onMouseLeave={() => setOpenMenu(null)}>
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}
                  aria-expanded={openMenu === group.label}
                  aria-haspopup="menu"
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 hover:bg-slate-50 hover:text-brand-700 xl:px-2.5"
                >
                  {group.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === group.label ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === group.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-64 border border-slate-200 bg-white p-2 shadow-xl rounded-xl" role="menu">
                    {group.items.map(([label, href]) => (
                      <Link key={label} href={href} onClick={() => setOpenMenu(null)} className="block px-3 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-800 rounded-lg" role="menuitem">
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/tac-hai-khong-danh-rang-ban-dem" 
              className="hidden 2xl:inline-flex whitespace-nowrap items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800 transition-all hover:bg-emerald-100 ml-1"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              Chuyên Đề Scrollytelling
            </Link>
          </nav>

          <button
            onClick={onOpenBooking}
            className="inline-flex whitespace-nowrap items-center gap-1.5 xl:gap-2 rounded-xl bg-brand-700 px-3 py-2 xl:px-4 xl:py-2.5 text-xs xl:text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md active:scale-95 ml-1"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Đặt Lịch Khám</span>
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
          <Link 
            href="/english" 
            onClick={() => setMobileMenuOpen(false)} 
            className="flex items-center justify-between py-2 font-bold text-brand-800 hover:text-brand-900 border-t border-slate-100"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-700" />
              English Version (For Expats)
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-brand-50 text-brand-800 font-semibold">EN</span>
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
