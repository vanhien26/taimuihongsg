'use client'

import React, { useState } from 'react'
import { AlertTriangle, CheckCircle2, Zap, Search, ShieldAlert, Layers, ArrowUpRight } from 'lucide-react'

export default function StrategicAuditComparison() {
  const [activeTab, setActiveTab] = useState<'audit' | 'vitals' | 'schema'>('audit')

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xl shadow-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Dữ liệu Đối Soát & Kiểm Thử Live Ngày 31/10/2026
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
            Bảng Đối Chiếu Hiện Trạng Cũ vs. Giải Pháp Tối Ưu Mới
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'audit' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4 Lỗi Nghiêm Trọng
          </button>
          <button
            onClick={() => setActiveTab('vitals')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'vitals' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Core Web Vitals
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'schema' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Entity & Schema E-E-A-T
          </button>
        </div>
      </div>

      <div className="pt-6">
        {activeTab === 'audit' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Bug 1: Sitemap */}
              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-rose-700">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Lỗi 1: Sitemap XML Bị Chuyển Hướng 301
                  </span>
                  <span className="bg-rose-200/80 px-2 py-0.5 rounded text-[10px]">Cũ (WordPress)</span>
                </div>
                <p className="text-xs text-rose-900/80 leading-relaxed">
                  URL `/sitemap_index.xml` trong robots.txt chuyển hướng 301 về trang đặt hẹn. Google Bot không đọc được danh sách 2.212 trang.
                </p>
                <div className="mt-3 pt-3 border-t border-rose-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Khắc phục trên Next.js:
                  </span>
                  <span>Native Route `/sitemap.xml` trả HTTP 200 OK tự động</span>
                </div>
              </div>

              {/* Bug 2: 404 Wildcard */}
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-800">
                  <span className="flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    Lỗi 2: Lỗi Soft 404 Hàng Loạt
                  </span>
                  <span className="bg-amber-200/80 px-2 py-0.5 rounded text-[10px]">Cũ (WordPress)</span>
                </div>
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  53 link chết và bất kỳ URL sai nào đều redirect 301 về `/dat-hen-kham-benh/`. Google phạt Soft 404 và làm loãng page rank của trang đặt lịch.
                </p>
                <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Khắc phục trên Next.js:
                  </span>
                  <span>File `not-found.tsx` chuẩn HTTP 404 Not Found & gợi ý trang tương đương</span>
                </div>
              </div>

              {/* Bug 3: Schema Brand Mismatch */}
              <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-purple-800">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-600" />
                    Lỗi 3: Xung Đột Thực Thể Đa Khoa
                  </span>
                  <span className="bg-purple-200/80 px-2 py-0.5 rounded text-[10px]">Cũ (WordPress)</span>
                </div>
                <p className="text-xs text-purple-900/80 leading-relaxed">
                  Schema và 1.269/2.212 thẻ title ghi *"Bệnh viện Đa khoa Quốc tế Sài Gòn"*, Facebook link về phòng khám đa khoa, gây mâu thuẫn chuyên môn ENT trên Google.
                </p>
                <div className="mt-3 pt-3 border-t border-purple-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Khắc phục trên Next.js:
                  </span>
                  <span>Định danh thực thể duy nhất: Bệnh Viện Tai Mũi Họng Sài Gòn</span>
                </div>
              </div>

              {/* Bug 4: Canonical Mismatch */}
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-blue-800">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                    Lỗi 4: Canonical Hồ Sơ Bác Sĩ Trỏ Nhầm
                  </span>
                  <span className="bg-blue-200/80 px-2 py-0.5 rounded text-[10px]">Cũ (WordPress)</span>
                </div>
                <p className="text-xs text-blue-900/80 leading-relaxed">
                  Hồ sơ BS. Bùi Nguyên Thống, BS. Từ Thị Thu Hà canonical sang BS. Ngô Thanh Thúy; các bác sĩ khác trỏ sang BS. Nguyễn Hoàng Gia.
                </p>
                <div className="mt-3 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Khắc phục trên Next.js:
                  </span>
                  <span>Mỗi hồ sơ bác sĩ tự trỏ canonical về chính mình kèm Physician Schema</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">LCP (Largest Contentful Paint)</span>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-2xl font-black text-rose-600 line-through">3.1s</span>
                <span className="text-3xl font-black text-emerald-600">0.7s</span>
              </div>
              <p className="text-xs text-slate-600">
                Loại bỏ 34 file CSS chặn render, tự động nén Next/Image WebP/AVIF.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">CLS (Cumulative Layout Shift)</span>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-2xl font-black text-rose-600 line-through">0.21</span>
                <span className="text-3xl font-black text-emerald-600">0.00</span>
              </div>
              <p className="text-xs text-slate-600">
                Bỏ Slider Revolution giật khung, thiết lập kích thước cố định theo tỷ lệ cho mọi khung hình.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">TTFB (Time to First Byte)</span>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-2xl font-black text-rose-600 line-through">1.5s</span>
                <span className="text-3xl font-black text-emerald-600">&lt; 0.2s</span>
              </div>
              <p className="text-xs text-slate-600">
                Tạo HTML tĩnh tại Edge CDN (Vercel / Cloudflare Workers) thay vì máy chủ PHP MySQL render lại từng trang.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="p-5 rounded-2xl bg-slate-900 text-emerald-300 font-mono text-xs overflow-x-auto space-y-2">
            <div className="text-slate-400 font-bold">// Schema JSON-LD Chuẩn Mới: Khắc phục triệt để lỗi phân loại Đa khoa</div>
            <pre className="text-slate-200 leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": ["Hospital", "MedicalOrganization"],
  "name": "Bệnh Viện Tai Mũi Họng Sài Gòn",
  "url": "https://taimuihongsg.com/",
  "medicalSpecialty": "Otolaryngologic",
  "telephone": "(028) 38.213.456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 - 3 Trịnh Văn Cấn",
    "addressLocality": "Quận 1",
    "addressRegion": "TP. Hồ Chí Minh",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.7686,
    "longitude": 106.6970
  }
}`}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
