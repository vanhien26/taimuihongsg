'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Compass, Layers, ShieldCheck, Zap, Cpu, ArrowRight, FileText, CheckCircle2, 
  AlertTriangle, RefreshCw, BarChart3, Database, Globe
} from 'lucide-react'
import GeoFrameworkView from '../../components/GeoFrameworkView'
import StrategicAuditComparison from '../../components/StrategicAuditComparison'

export default function ChienLuocPage() {
  const [selectedWeek, setSelectedWeek] = useState(1)

  const ROADMAP = [
    {
      week: 1,
      title: 'Tuần 1-2: Xử Lý 4 Lỗi Kỹ Thuật Chặn Thu Thập (Critical Fixes)',
      tasks: [
        'Khôi phục XML Sitemap chuẩn 200 OK tại /sitemap.xml, gỡ bỏ redirect 301 sang trang đặt hẹn.',
        'Xóa wildcard redirect 404, trả mã HTTP 404/410 chuẩn mực để Google dọn dẹp các trang đã chết.',
        'Sửa Canonical cho 5 hồ sơ Bác sĩ (BS. Thống, BS. Hà, BS. Vân, BS. Hưng, BS. Nhàn) tự trỏ về chính mình.',
        'Cập nhật Title Template trên Rank Math: Loại bỏ đuôi "- PHÒNG KHÁM ĐA KHOA QUỐC TẾ SÀI GÒN", thay bằng "- BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN".'
      ],
      impact: 'Google Bot thu thập lại toàn bộ 2.212 trang, chấm dứt tình trạng bị phạt Soft 404.'
    },
    {
      week: 2,
      title: 'Tuần 3-4: Chuẩn Hóa Thực Thể Y Khoa (Medical Entity & E-E-A-T Schema)',
      tasks: [
        'Cập nhật Schema MedicalOrganization & Hospital: định danh chuyên khoa duy nhất Otolaryngologic.',
        'Thêm khối "Thẩm định y khoa bởi Bác sĩ" và trường reviewedBy (schema MedicalWebPage) cho 204 bài bệnh học.',
        'Tách bạch nội dung: Di dời 22 bài viết đa khoa (sởi, tay chân miệng, vú, gan) sang domain sighospital.vn bằng 301.',
        'Xóa hoặc đặt 410 cho các trang thử nghiệm lộ URL: /dat-hen-kham-benh-old/, /giao-dien-website-moi/.'
      ],
      impact: 'Định hình rõ nét Entity chuyên khoa Tai Mũi Họng trên Google Knowledge Graph.'
    },
    {
      week: 3,
      title: 'Tuần 5-6: Tối Ưu Tốc Độ Core Web Vitals Đạt Chuẩn Xanh',
      tasks: [
        'Bật nén tự động WebP/AVIF cho 9.198 ảnh media, giảm dung lượng ảnh bác sĩ từ 7.8MB xuống dưới 150KB.',
        'Loại bỏ các file CSS và JS không dùng, chuyển jQuery ra khỏi <head> để giảm FCP dưới 1.2s.',
        'Bật Cache Rules HTML trên Cloudflare Edge CDN để TTFB giảm từ 1.5s xuống dưới 0.2s.',
        'Khắc phục CLS trang chủ từ 0.21 xuống 0 bằng cách cố định tỷ lệ aspect-ratio cho toàn bộ khung slider.'
      ],
      impact: 'Trải nghiệm người dùng di động mượt mà, đạt chuẩn Google Core Web Vitals ngang tầm các bệnh viện hàng đầu.'
    },
    {
      week: 4,
      title: 'Tuần 7-8: Kích Hoạt Chiến Lược GEO (Generative Engine Optimization)',
      tasks: [
        'Gom 1.517 trang câu hỏi tư vấn ngắn thành 6 Topic Cluster Pillars chính kèm Accordion FAQ Schema.',
        'Bổ sung khối "Direct Answer" 50 từ đầu mỗi bài dịch vụ mũi nhọn để AI Engine (Google AI, ChatGPT, Perplexity) trích xuất.',
        'Tối ưu Local 3-Pack cho từ khóa khám tai mũi họng tại các quận trung tâm TP.HCM (Q1, Q3, Q4, Q7, Bình Thạnh).',
        'Mở rộng hệ thống bài viết chuyên sâu về Đo đa ký giấc ngủ và phẫu thuật nội soi xoang FESS.'
      ],
      impact: 'Tăng trưởng 45% lượng traffic tìm kiếm tự nhiên và trở thành nguồn tin số 1 cho các công cụ AI tìm kiếm.'
    }
  ]

  return (
    <div className="py-12 md:py-16 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-navy-900 via-brand-900 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              Chiến Lược Tái Cấu Trúc Toàn Diện & Thúc Đẩy Tăng Trưởng
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Kế Hoạch Nâng Cấp Kỹ Thuật & Tăng Trưởng SEO/GEO
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Dựa trên bản audit kỹ thuật 2.212 trang và kiểm tra live ngày 31/10/2026, đây là đề xuất giải pháp toàn diện để đưa Bệnh Viện Tai Mũi Họng Sài Gòn dẫn đầu cả trên công cụ tìm kiếm truyền thống (Google) lẫn công cụ tìm kiếm tạo sinh bằng AI (Google AI Overviews, Gemini, ChatGPT, Perplexity).
            </p>
          </div>
        </div>
      </section>

      {/* Audit Review Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <StrategicAuditComparison />
      </section>

      {/* GEO Blueprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <GeoFrameworkView />
      </section>

      {/* Implementation Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Kế Hoạch Hành Động Thực Thi
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
              Lộ Trình Tái Cấu Trúc 8 Tuần Bứt Phá
            </h3>
          </div>

          {/* Stepper selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ROADMAP.map((phase) => (
              <button
                key={phase.week}
                onClick={() => setSelectedWeek(phase.week)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  selectedWeek === phase.week
                    ? 'bg-emerald-50 border-brand-600 text-brand-950 font-bold shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 font-medium'
                }`}
              >
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Giai đoạn {phase.week}</div>
                <div className="text-sm font-bold line-clamp-1">{phase.title.split(':')[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          {(() => {
            const current = ROADMAP.find((r) => r.week === selectedWeek)!
            return (
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-6">
                <div>
                  <h4 className="text-xl font-black text-slate-900">{current.title}</h4>
                  <div className="text-xs font-bold text-brand-700 mt-1">
                    Mục tiêu tác động: {current.impact}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nhiệm vụ cụ thể cần triển khai:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {current.tasks.map((task, i) => (
                      <div key={i} className="p-3.5 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })()}

        </div>
      </section>

      {/* Docs download & export note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Toàn Bộ Dữ Liệu Đã Được Đóng Gói Dưới Dạng Markdown</div>
              <div className="text-xs text-slate-400">
                Lưu trữ tại thư mục <code>docs/</code> gồm 7 tài liệu chi tiết: Hạ tầng, Danh mục, Bác sĩ, Audit, Tái cấu trúc, GEO và Prototype.
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            Về Trang Chủ Prototype
          </Link>
        </div>
      </section>

    </div>
  )
}
