'use client'

import React, { useState } from 'react'
import { AlertTriangle, CheckCircle2, Zap, Search, ShieldAlert, Layers, ArrowUpRight, FileText, UserCheck, BookOpen, Share2 } from 'lucide-react'

export default function StrategicAuditComparison() {
  const [activeTab, setActiveTab] = useState<'audit' | 'content' | 'vitals' | 'schema'>('audit')

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
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'audit' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4 Lỗi Kỹ Thuật
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'content' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Audit Nội Dung Cũ
          </button>
          <button
            onClick={() => setActiveTab('vitals')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'vitals' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Core Web Vitals
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'schema' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Entity & Schema E-E-A-T
          </button>
        </div>
      </div>

      <div className="pt-6">
        {activeTab === 'audit' && (
          <div className="space-y-6">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
              <div>
                <strong className="text-slate-900 font-bold">Phương pháp đối soát:</strong> Kiểm thử trực tiếp trên mã nguồn và headers phản hồi của máy chủ sản xuất <code>taimuihongsg.com</code>.
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="flex items-center gap-1.5 text-rose-700 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                  4 lỗi cản trở thu thập dữ liệu
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Card 1: Sitemap */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Sitemap XML Bị Chuyển Hướng 301
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 uppercase tracking-wider">
                      Báo động đỏ
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Bản chất kỹ thuật:</span>
                    <p className="text-slate-600 leading-relaxed">
                      <code>XML Sitemap</code> là sơ đồ dẫn đường cho robot tìm kiếm. Hiện tại URL <code>/sitemap_index.xml</code> lại trả mã <code>301 Redirect</code> đưa robot thẳng vào trang đặt hẹn.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-rose-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      Mức độ nghiêm trọng & Tác hại:
                    </span>
                    <p className="text-rose-950/90 leading-relaxed text-[11px]">
                      Google Bot bị "mù", không thể quét 2.212 bài viết y khoa và dịch vụ. Bài viết mới đăng tải không được lập chỉ mục (index), lãng phí tài nguyên nội dung.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Xây dựng lại luồng Sitemap động chuẩn mã HTTP 200 OK
                  </span>
                </div>
              </div>

              {/* Card 2: Soft 404 */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Lỗi Soft 404 Do Chuyển Hướng Ép Dồn
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wider">
                      Cực kỳ rủi ro
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Bản chất kỹ thuật:</span>
                    <p className="text-slate-600 leading-relaxed">
                      <code>Soft 404</code> xảy ra khi trang đã xóa hoặc link gõ sai không báo mã 404 mà bị ép chuyển hướng (Wildcard Redirect) dồn hết về <code>/dat-hen-kham-benh/</code>.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-amber-900 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      Mức độ nghiêm trọng & Tác hại:
                    </span>
                    <p className="text-amber-950/90 leading-relaxed text-[11px]">
                      Google coi đây là hành vi spam điều hướng. Trang nhận chuyển hướng (trang Đặt Hẹn) bị thuật toán đánh tụt điểm uy tín (PageRank) và giảm thứ hạng toàn diện.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Thiết lập trang báo lỗi chuẩn mã HTTP 404 Not Found & gợi ý điều hướng
                  </span>
                </div>
              </div>

              {/* Card 3: Entity Conflict */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Xung Đột Thực Thể Thương Hiệu (Entity)
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 uppercase tracking-wider">
                      Mất vị thế ngành
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Bản chất kỹ thuật:</span>
                    <p className="text-slate-600 leading-relaxed">
                      <code>Entity</code> là hồ sơ nhận diện số của thương hiệu. Schema ngầm và 1.269 bài viết lại khai báo là *"Bệnh viện Đa khoa Quốc tế Sài Gòn"* kèm các chuyên khoa Tim Mạch, Tiêu Hóa.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-purple-900 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      Mức độ nghiêm trọng & Tác hại:
                    </span>
                    <p className="text-purple-950/90 leading-relaxed text-[11px]">
                      Google bị phân vân, không nhận định được đây là bệnh viện chuyên khoa Tai Mũi Họng đầu ngành, làm mất ưu thế cạnh tranh Top 1 vào tay các bệnh viện khác.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Đồng bộ 100% toàn trang: Bệnh Viện Tai Mũi Họng Sài Gòn
                  </span>
                </div>
              </div>

              {/* Card 4: Canonical Mismatch */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                        04
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Thẻ Canonical Trỏ Nhầm Bác Sĩ
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-brand-800 uppercase tracking-wider">
                      Mất uy tín Bác Sĩ
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Bản chất kỹ thuật:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Thẻ <code>rel="canonical"</code> dùng để chỉ định trang gốc. Tuy nhiên hồ sơ của BS. Thống, BS. Hà lại bị cấu hình trỏ canonical sang BS. Thúy; các bác sĩ khác trỏ sang BS. Gia.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-brand-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      Mức độ nghiêm trọng & Tác hại:
                    </span>
                    <p className="text-brand-950/90 leading-relaxed text-[11px]">
                      Google coi hồ sơ của các bác sĩ giỏi chỉ là "bản sao" và loại bỏ hoàn toàn khỏi trang kết quả tìm kiếm khi bệnh nhân gõ tìm đích danh tên bác sĩ.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Cấp URL độc lập cho từng bác sĩ + Dữ liệu cấu trúc Bác sĩ chuyên khoa
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB AUDIT NỘI DUNG CŨ */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
              <div>
                <strong className="text-amber-950 font-bold">Kiểm kê 2.212 bài viết & 49 trang tĩnh:</strong> Dữ liệu y khoa phong phú nhưng mắc 4 mô thức viết sai chuẩn SEO Y Tế (YMYL) và không phục vụ AI Search.
              </div>
              <span className="font-mono text-[10px] bg-amber-200/70 text-amber-900 px-2.5 py-1 rounded-lg font-bold shrink-0">
                Data Scraping: 31/10/2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Pattern 1: Thiếu Bác sĩ bảo chứng */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Bài Y Khoa Đứng Tên Tài Khoản Marketing
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 uppercase tracking-wider">
                      Vi phạm YMYL
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Toàn bộ 204 bài viết bệnh học quan trọng (viêm tai, amidan, xoang) đều do tài khoản <code>TMH MKT</code> (Author ID: 116) đứng tên xuất bản, không có tên bác sĩ chuyên khoa phụ trách.
                    </p>
                  </div>

                  <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-rose-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-rose-950/90 leading-relaxed text-[11px]">
                      Google xếp y tế vào nhóm Your Money Your Life. Bài viết thiếu bác sĩ kiểm duyệt bị trừ điểm E-E-A-T nặng nề, giảm 50% khả năng hiển thị top đầu tìm kiếm.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Thêm badge Bác sĩ thẩm định + Mã Schema <code>reviewedBy</code>
                  </span>
                </div>
              </div>

              {/* Pattern 2: Thiếu Direct-Answer cho AI */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Mở Bài Dài Dòng, Thiếu Khối Direct-Answer
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wider">
                      Mất Lượt AI Trích Dẫn
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Bài viết mở đầu bằng 200 - 300 từ kể chuyện dài dòng (*"Một đêm con khó ngủ, ba mẹ có thể mất cả ngày..."*), không có câu định nghĩa y khoa dứt khoát.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-amber-900 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-amber-950/90 leading-relaxed text-[11px]">
                      Các công cụ tìm kiếm AI (Google AI Overviews, SearchGPT, Perplexity) không thể bóc tách câu trả lời nhanh, nhường cơ hội trích dẫn cho đối thủ.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Đặt khối <strong>Direct-Answer 45-60 từ</strong> ngay dưới tiêu đề
                  </span>
                </div>
              </div>

              {/* Pattern 3: Thin content tự triệt tiêu */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        1.517 Bài Hỏi Đáp Vụn Vặt "Tự Ăn Thịt Từ Khóa"
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 uppercase tracking-wider">
                      Thin Content
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Tách lẻ hàng nghìn câu hỏi tư vấn 100 từ thành các trang riêng biệt. Hơn 80 bài cùng nói về "ù tai", hơn 120 bài về "viêm xoang" với nội dung tương tự.
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-purple-900 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-purple-950/90 leading-relaxed text-[11px]">
                      Gây ra lỗi <em>Keyword Cannibalization</em> (các bài tự tranh giành thứ hạng lẫn nhau), làm loãng uy tín domain và bị Google đánh giá là nội dung mỏng.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Gom vào <strong>6 Topic Clusters Silo</strong> kèm Accordion FAQ
                  </span>
                </div>
              </div>

              {/* Pattern 4: Rác shortcode WPBakery & Taxonomy sai */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                        04
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Nội Dung Nhúng Shortcode Rác & Danh Mục Lộn Xộn
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-brand-800 uppercase tracking-wider">
                      Lỗi Hạ Tầng
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Nội dung 49 trang dịch vụ bị bọc kín trong shortcode WPBakery (<code>[vc_row]</code>, <code>[vc_column]</code>). Danh mục phân loại theo độ tuổi (`18-25`, `Trên 40`) sinh ra archive rác.
                    </p>
                  </div>

                  <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-brand-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-brand-950/90 leading-relaxed text-[11px]">
                      Mã HTML phình to, tỷ lệ text thật / code chỉ đạt &lt; 8%. Bot tìm kiếm tốn tài nguyên cào dữ liệu (crawl budget) và dễ bỏ dở giữa chừng.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Làm sạch HTML/Markdown thuần + Tái cấu trúc Taxonomy y khoa
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-bold">Core Web Vitals là gì?</strong> Đây là bộ 3 chỉ số đo lường trải nghiệm thực tế của người dùng do Google quy định từ năm 2021. Nếu trang web chậm hoặc giật khung hình, Google sẽ <strong>hạ thứ hạng tìm kiếm trên thiết bị di động</strong> và người bệnh sẽ tắt trang sang bệnh viện đối thủ ngay trong 3 giây đầu tiên.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">1. Chỉ số LCP</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">Rất Chậm</span>
                </div>
                <div className="text-xs text-slate-800 font-semibold">Largest Contentful Paint (Thời gian tải nội dung chính)</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-rose-600 line-through">3.1s</span>
                  <span className="text-3xl font-black text-emerald-600">0.7s</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-950 space-y-1">
                  <div><strong>Mức độ nghiêm trọng:</strong> Người bệnh đợi quá 3 giây trên 4G/5G sẽ rời bỏ trang ngay lập tức. Tỷ lệ thoát (Bounce Rate) trên mobile lên đến 68%.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khắc phục khi Rebuild:</strong> Tinh giản toàn bộ mã nguồn cồng kềnh, bật công nghệ nén ảnh tự động chuẩn WebP/AVIF giảm 95% dung lượng ảnh bác sĩ.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">2. Chỉ số CLS</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">Giật Khung Hình</span>
                </div>
                <div className="text-xs text-slate-800 font-semibold">Cumulative Layout Shift (Độ dịch chuyển bố cục đột ngột)</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-rose-600 line-through">0.21</span>
                  <span className="text-3xl font-black text-emerald-600">0.00</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-950 space-y-1">
                  <div><strong>Mức độ nghiêm trọng:</strong> Vượt ngưỡng chuẩn của Google (chuẩn là &lt; 0.1). Gây hiện tượng nhảy chữ/banner làm người dùng bấm nhầm nút hoặc bực bội rời trang.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khắc phục khi Rebuild:</strong> Loại bỏ các hiệu ứng trượt banner giật cục, thiết lập tỷ lệ khung hình cố định cho toàn bộ banner và ảnh, triệt tiêu độ xô lệch (CLS = 0).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">3. Chỉ số TTFB</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">Phản Hồi Máy Chủ</span>
                </div>
                <div className="text-xs text-slate-800 font-semibold">Time to First Byte (Thời gian máy chủ phản hồi gói tin đầu tiên)</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-rose-600 line-through">1.5s</span>
                  <span className="text-3xl font-black text-emerald-600">&lt; 0.2s</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-950 space-y-1">
                  <div><strong>Mức độ nghiêm trọng:</strong> Hạ tầng cũ phải tải lại cơ sở dữ liệu cho từng lượt khách. Khi có lượng truy cập tăng đột biến, hệ thống dễ rơi vào tình trạng quá tải hoặc phản hồi chậm.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khắc phục khi Rebuild:</strong> Phân phối trang tĩnh trực tiếp từ mạng lưới máy chủ biên Edge CDN, tốc độ mở trang lập tức dưới 0.2 giây mà không tốn tài nguyên máy chủ.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2">
              <div>
                <strong className="text-slate-900 font-bold">Schema E-E-A-T là gì?</strong> Đây là đoạn mã dữ liệu cấu trúc (JSON-LD) gắn ngầm dưới nền website để robot của Google đọc hiểu bản chất của bệnh viện. E-E-A-T viết tắt cho: <em>Kinh nghiệm (Experience) - Chuyên môn (Expertise) - Thẩm quyền (Authoritativeness) - Đáng tin cậy (Trustworthiness)</em>.
              </div>
              <div className="text-rose-900 font-semibold">
                <span className="text-rose-600 font-bold">Mức độ nghiêm trọng của lỗi cũ:</span> Trong y tế (nhóm ngành YMYL - Your Money Your Life), Google cực kỳ khắt khe. Việc Schema cũ tự xưng là "Phòng khám Đa khoa" và thiếu hồ sơ bác sĩ thẩm định khiến điểm tin cậy E-E-A-T của Bệnh viện Tai Mũi Họng Sài Gòn bị tụt dốc, bài viết y khoa bị giảm 50% khả năng hiển thị Top đầu.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-emerald-300 font-mono text-xs overflow-x-auto space-y-2 shadow-inner">
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
          </div>
        )}
      </div>
    </div>
  )
}
