'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Search, Award, CheckCircle2, Stethoscope, ChevronRight, ArrowLeft } from 'lucide-react'
import { DOCTORS } from '@/data/doctors'

interface PageProps {
  onOpenBooking?: (doctorName?: string) => void
}

export default function DoctorsPage({ onOpenBooking }: PageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('all')

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.degree.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-800">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">Đội ngũ bác sĩ</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              18 Bác sĩ Chuyên khoa Tai Mũi Họng Đầu ngành
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Đội Ngũ Bác Sĩ Chuyên Khoa Tai Mũi Họng Sài Gòn
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Hội tụ các Tiến sĩ, Thạc sĩ, Bác sĩ Chuyên khoa II giàu kinh nghiệm từ Đại học Y Dược TP.HCM và các bệnh viện tuyến đầu, tận tâm chăm sóc sức khỏe thính học, mũi xoang, họng và thanh quản cho từng người bệnh.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm bác sĩ theo tên, học vị hoặc lĩnh vực điều trị..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:border-transparent text-sm"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Xóa tìm kiếm
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Doctor Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-semibold text-slate-600">
              Hiển thị <span className="text-brand-800 font-bold">{filteredDoctors.length}</span> bác sĩ chuyên khoa
            </p>
            <div className="text-xs text-slate-500">
              Chuẩn hóa theo danh mục chính thức <span className="font-mono text-slate-700">taimuihongsg.com/doi-ngu-bac-si/</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDoctors.map((doc) => {
              return (
                <div
                  key={doc.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-300 transition-all flex flex-col justify-between group"
                >
                  <div className="p-6">
                    {/* Portrait & Core Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-inner">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/bac-si/${doc.slug}`}
                          className="font-bold text-slate-900 text-lg hover:text-brand-800 transition-colors line-clamp-2"
                        >
                          {doc.name}
                        </Link>
                        <p className="text-xs font-semibold text-brand-700 mt-1 line-clamp-2">
                          {doc.role}
                        </p>
                        {doc.cchn && (
                          <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
                            {doc.cchn}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Degree & Specialty Highlights */}
                    <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div>
                        <span className="font-semibold text-slate-700 block mb-0.5">Lĩnh vực chuyên sâu:</span>
                        <p className="text-slate-800 font-medium leading-relaxed">
                          {doc.specialty}
                        </p>
                      </div>

                      <div>
                        <span className="font-semibold text-slate-700 block mb-0.5">Bằng cấp & Đào tạo:</span>
                        <p className="text-slate-600 line-clamp-2">
                          {doc.degree}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-auto flex flex-col gap-2">
                    <div className="pt-3 flex items-center gap-2">
                      <Link
                        href={`/bac-si/${doc.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-brand-800 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors"
                      >
                        <Stethoscope className="w-3.5 h-3.5" />
                        Xem hồ sơ
                      </Link>

                      <Link
                        href={`/dat-hen-kham-benh?bacsi=${encodeURIComponent(doc.name)}`}
                        onClick={(e) => {
                          if (onOpenBooking) {
                            e.preventDefault()
                            onOpenBooking(doc.name)
                          }
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl shadow-sm transition-colors"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        Đặt hẹn
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <Stethoscope className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-lg font-bold text-slate-800">Không tìm thấy bác sĩ phù hợp</p>
              <p className="text-sm text-slate-500 mt-1">Vui lòng thử tìm với từ khóa khác hoặc xóa bộ lọc tìm kiếm.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 text-sm font-semibold text-brand-800 bg-brand-50 rounded-xl hover:bg-brand-100"
              >
                Xem tất cả 18 bác sĩ
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-base">Học vị & Chứng chỉ chính quy</h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  100% bác sĩ có đầy đủ Chứng chỉ hành nghề do Bộ Y tế / Sở Y tế cấp, được đào tạo chuyên sâu trong nước và quốc tế.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-base">Trang thiết bị hiện đại</h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Đội ngũ bác sĩ thao tác trực tiếp với hệ thống nội soi NBI Karl Storz & Olympus, dao mổ Coblator II, máy đo đa ký giấc ngủ chuyên sâu.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-base">Đặt hẹn theo yêu cầu</h2>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Người bệnh chủ động chọn bác sĩ khám, giảm thiểu thời gian chờ đợi và được theo dõi hồ sơ liên tục qua mã y tế.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
