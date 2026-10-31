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
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/60 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-700">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                      Lỗi 1: Sitemap XML Bị Chuyển Hướng 301
                    </span>
                    <span className="bg-rose-200/80 text-rose-900 px-2 py-0.5 rounded text-[10px] shrink-0">Cũ (WordPress)</span>
                  </div>
                  
                  {/* Giải thích súc tích & Mức độ nghiêm trọng */}
                  <div className="p-3 bg-white/90 rounded-xl border border-rose-100 text-xs space-y-1.5">
                    <div className="text-slate-700 leading-relaxed">
                      <strong className="text-rose-950 font-bold">Thuật ngữ:</strong> <code>XML Sitemap</code> là sơ đồ danh mục trang gửi cho Google; <code>Redirect 301</code> là lệnh tự chuyển hướng vĩnh viễn sang trang khác.
                    </div>
                    <div className="text-rose-900 text-[11px] font-semibold leading-relaxed">
                      <span className="text-rose-600 font-bold">Mức độ nghiêm trọng:</span> Cực kỳ nguy hiểm. Google Bot bị đẩy sang trang đặt hẹn thay vì đọc danh mục bài, làm "mù" toàn bộ 2.212 trang y khoa và ngừng index bài mới.
                    </div>
                  </div>

                  <p className="text-xs text-rose-900/80 leading-relaxed">
                    URL <code>/sitemap_index.xml</code> khai báo trong robots.txt trả mã 301 về trang đặt hẹn thay vì trả nội dung XML.
                  </p>
                </div>
                
                <div className="mt-3 pt-3 border-t border-rose-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục Next.js:
                  </span>
                  <span className="text-right">Route <code>/sitemap.xml</code> trả HTTP 200 OK tự động</span>
                </div>
              </div>

              {/* Bug 2: 404 Wildcard */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-800">
                    <span className="flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                      Lỗi 2: Soft 404 Hàng Loạt (Wildcard Redirect)
                    </span>
                    <span className="bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded text-[10px] shrink-0">Cũ (WordPress)</span>
                  </div>

                  {/* Giải thích súc tích & Mức độ nghiêm trọng */}
                  <div className="p-3 bg-white/90 rounded-xl border border-amber-100 text-xs space-y-1.5">
                    <div className="text-slate-700 leading-relaxed">
                      <strong className="text-amber-950 font-bold">Thuật ngữ:</strong> <code>Soft 404</code> là lỗi trang chết nhưng web vẫn trả mã 200 hoặc ép chuyển hướng dồn toàn bộ link sai (Wildcard) về 1 trang đích.
                    </div>
                    <div className="text-amber-900 text-[11px] font-semibold leading-relaxed">
                      <span className="text-amber-600 font-bold">Mức độ nghiêm trọng:</span> Nghiêm trọng cao. Google xem đây là hành vi spam đánh lừa, trừ điểm PageRank và làm rớt thứ hạng chính trang Đặt Lịch tiếp nhận chuyển hướng.
                    </div>
                  </div>

                  <p className="text-xs text-amber-900/80 leading-relaxed">
                    53 link chết và mọi URL gõ sai đều bị ép chuyển hướng về <code>/dat-hen-kham-benh/</code> gây lỗi Soft 404 diện rộng.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục Next.js:
                  </span>
                  <span className="text-right">Trả chuẩn mã HTTP 404 Not Found & gợi ý điều hướng</span>
                </div>
              </div>

              {/* Bug 3: Schema Brand Mismatch */}
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200/60 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-purple-800">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-purple-600 shrink-0" />
                      Lỗi 3: Xung Đột Thực Thể Thương Hiệu (Entity Conflict)
                    </span>
                    <span className="bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded text-[10px] shrink-0">Cũ (WordPress)</span>
                  </div>

                  {/* Giải thích súc tích & Mức độ nghiêm trọng */}
                  <div className="p-3 bg-white/90 rounded-xl border border-purple-100 text-xs space-y-1.5">
                    <div className="text-slate-700 leading-relaxed">
                      <strong className="text-purple-950 font-bold">Thuật ngữ:</strong> <code>Entity (Thực thể)</code> là hồ sơ nhận diện số để Google biết: website là Bệnh viện Tai Mũi Họng hay Phòng khám Đa khoa.
                    </div>
                    <div className="text-purple-900 text-[11px] font-semibold leading-relaxed">
                      <span className="text-purple-600 font-bold">Mức độ nghiêm trọng:</span> Mất ưu thế xếp hạng Top 1. Google bị xung đột dữ liệu, làm giảm thẩm quyền chuyên khoa Tai Mũi Họng vào tay các bệnh viện khác.
                    </div>
                  </div>

                  <p className="text-xs text-purple-900/80 leading-relaxed">
                    Mã Schema và 1.269 bài viết ghi nhầm <em>"Bệnh viện Đa khoa Quốc tế Sài Gòn"</em> với chuyên khoa Tim mạch, Tiêu hóa.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-purple-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục Next.js:
                  </span>
                  <span className="text-right">Đồng bộ 1 thực thể: Bệnh Viện Tai Mũi Họng Sài Gòn</span>
                </div>
              </div>

              {/* Bug 4: Canonical Mismatch */}
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/60 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-800">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0" />
                      Lỗi 4: Thẻ Canonical Bị Trỏ Nhầm Bác Sĩ
                    </span>
                    <span className="bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded text-[10px] shrink-0">Cũ (WordPress)</span>
                  </div>

                  {/* Giải thích súc tích & Mức độ nghiêm trọng */}
                  <div className="p-3 bg-white/90 rounded-xl border border-blue-100 text-xs space-y-1.5">
                    <div className="text-slate-700 leading-relaxed">
                      <strong className="text-blue-950 font-bold">Thuật ngữ:</strong> <code>rel="canonical"</code> là thẻ báo cho Google biết trang nào là bản quyền gốc duy nhất cần được xếp hạng.
                    </div>
                    <div className="text-blue-900 text-[11px] font-semibold leading-relaxed">
                      <span className="text-blue-600 font-bold">Mức độ nghiêm trọng:</span> Mất hiển thị tên Bác sĩ. Hồ sơ BS. Thống, BS. Hà bị coi là bản sao của bác sĩ khác và bị loại bỏ khỏi kết quả tìm kiếm Google.
                    </div>
                  </div>

                  <p className="text-xs text-blue-900/80 leading-relaxed">
                    Hồ sơ BS. Thống, BS. Hà trỏ canonical nhầm về BS. Thúy; nhiều bác sĩ khác trỏ về BS. Gia.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục Next.js:
                  </span>
                  <span className="text-right">Mỗi bác sĩ tự trỏ chính mình + Physician Schema</span>
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
                  <strong>Khắc phục:</strong> Gỡ bỏ 34 file mã CSS/JS cồng kềnh, bật công nghệ nén ảnh tự động Next/Image chuẩn WebP/AVIF giảm 95% dung lượng ảnh bác sĩ.
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
                  <strong>Khắc phục:</strong> Bỏ plugin Slider Revolution nặng nề, khóa cố định tỷ lệ khung hình (aspect-ratio) cho banner và ảnh bác sĩ, đạt độ ổn định tuyệt đối (CLS = 0).
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
                  <div><strong>Mức độ nghiêm trọng:</strong> Máy chủ WordPress phải chạy truy vấn MySQL nặng cho từng lượt khách. Khi có chiến dịch quảng cáo hoặc lượng truy cập tăng vọt, web dễ bị treo.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khắc phục:</strong> Kiến trúc Next.js Serverless tĩnh hóa trang ngay tại mạng máy chủ biên Edge CDN (Cloudflare/Vercel), tốc độ mở trang tức thì dưới 0.2 giây.
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
