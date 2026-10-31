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
      termsExplained: 'XML Sitemap (bản đồ trang), Redirect 301 (lệnh chuyển hướng vĩnh viễn), Soft 404 (lỗi trang chết ngụy tạo), Canonical (thẻ chỉ định bản gốc), Title Template (mẫu tiêu đề hiển thị trên Google).',
      severity: 'Mức độ cấp bách: BÁO ĐỘNG ĐỎ. Đây là những "hòn đá tảng" chặn cửa robot tìm kiếm, khiến Google không thể cập nhật nội dung và liên tục phạt trang web.',
      tasks: [
        'Khôi phục XML Sitemap chuẩn HTTP 200 OK tại /sitemap.xml, gỡ bỏ lệnh redirect 301 chuyển sang trang đặt hẹn.',
        'Xóa bỏ cơ chế wildcard redirect 404 ép dồn trang, trả đúng mã HTTP 404/410 chuẩn mực để Google dọn dẹp các liên kết rác.',
        'Sửa thẻ Canonical cho hồ sơ các Bác sĩ (BS. Thống, BS. Hà, BS. Vân, BS. Hưng, BS. Nhàn) tự trỏ về chính mình thay vì trỏ nhầm sang bác sĩ khác.',
        'Cập nhật Title Template trên công cụ SEO: Loại bỏ hoàn toàn đuôi "- PHÒNG KHÁM ĐA KHOA QUỐC TẾ SÀI GÒN", thay bằng chuẩn "- BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN".'
      ],
      impact: 'Khai thông đường dẫn cho Google Bot thu thập lại toàn bộ 2.212 trang bài viết, chấm dứt hoàn toàn án phạt kỹ thuật Soft 404.'
    },
    {
      week: 2,
      title: 'Tuần 3-4: Chuẩn Hóa Thực Thể Y Khoa (Medical Entity & E-E-A-T Schema)',
      termsExplained: 'Medical Entity (hồ sơ định danh số của bệnh viện trên Google), Schema E-E-A-T (dữ liệu vi mô chứng minh Kinh nghiệm - Chuyên môn - Thẩm quyền - Đáng tin cậy), reviewedBy (chứng thực thẩm định bài viết bởi bác sĩ).',
      severity: 'Mức độ nghiêm trọng: RẤT CAO. Ngành y tế bị Google xếp vào nhóm nhạy cảm YMYL. Nếu thông tin mơ hồ, website sẽ bị giáng cấp xếp hạng và mất niềm tin với người bệnh.',
      tasks: [
        'Cập nhật mã Schema MedicalOrganization & Hospital: định danh duy nhất chuyên khoa Tai Mũi Họng (Otolaryngologic), xóa bỏ nhãn Đa khoa.',
        'Thêm khối "Thẩm định y khoa bởi Bác sĩ" và trường reviewedBy trong schema MedicalWebPage cho 204 bài bệnh học mũi nhọn.',
        'Tách bạch nội dung: Chuyển hướng 301 di dời 22 bài viết đa khoa ngoài phạm vi (sởi, tay chân miệng, vú, gan) sang đúng domain phòng khám đa khoa sighospital.vn.',
        'Dọn dẹp triệt để các trang nội bộ thử nghiệm bị lộ link: /dat-hen-kham-benh-old/, /giao-dien-website-moi/.'
      ],
      impact: 'Khẳng định vững chắc vị thế Bệnh viện Tai Mũi Họng đầu ngành trên cơ sở dữ liệu tri thức Google Knowledge Graph.'
    },
    {
      week: 3,
      title: 'Tuần 5-6: Tối Ưu Tốc Độ Core Web Vitals Đạt Chuẩn Xanh',
      termsExplained: 'Core Web Vitals (bộ 3 chỉ số trải nghiệm người dùng của Google: LCP - tốc độ mở trang chính, CLS - độ giật khung hình, TTFB - tốc độ phản hồi của máy chủ), Edge CDN (mạng máy chủ đệm đặt sát vị trí người dùng).',
      severity: 'Mức độ nghiêm trọng: CAO. Trang web tải chậm hơn 3 giây làm mất 50% bệnh nhân tiềm năng ngay từ giây đầu tiên và bị Google đánh tụt thứ hạng tìm kiếm trên di động.',
      tasks: [
        'Bật công nghệ nén ảnh tự động chuẩn WebP/AVIF cho 9.198 ảnh media, nén dung lượng ảnh chân dung bác sĩ từ 7.8MB xuống dưới 150KB.',
        'Tối ưu mã nguồn: Dọn dẹp các thư viện CSS/JS dư thừa, chuyển thư viện jQuery ra khỏi phần đầu trang (<head>) để chỉ số FCP dưới 1.2s.',
        'Kích hoạt bộ đệm HTML tĩnh trên hệ thống máy chủ biên Cloudflare Edge CDN để chỉ số phản hồi máy chủ TTFB giảm từ 1.5s xuống dưới 0.2s.',
        'Khắc phục triệt để lỗi giật màn hình CLS từ 0.21 xuống mức 0 tuyệt đối bằng cách cố định tỷ lệ khung hình cho toàn bộ banner và ảnh.'
      ],
      impact: 'Trang web mở tức thì trên điện thoại 4G/5G, đạt chuẩn kiểm định Core Web Vitals loại Xuất Sắc của Google.'
    },
    {
      week: 4,
      title: 'Tuần 7-8: Kích Hoạt Chiến Lược GEO (Tối Ưu Tìm Kiếm Bằng Trí Tuệ Nhân Tạo AI)',
      termsExplained: 'GEO (Generative Engine Optimization - kỹ thuật giúp website được các công cụ AI như Google AI Overviews, Gemini, ChatGPT trích dẫn làm nguồn trả lời), Topic Clusters (mô hình gom cụm nội dung theo chuyên khoa trụ cột), Local 3-Pack (top 3 vị trí hiển thị bản đồ địa phương).',
      severity: 'Cơ hội sống còn: Mang tính quyết định trong 2-3 năm tới. Người bệnh đang chuyển dần từ việc tự bấm link sang đọc câu trả lời do AI tóm tắt. Nếu không tối ưu GEO, website sẽ bị lãng quên.',
      tasks: [
        'Gom 1.517 bài hỏi đáp manh mún thành 6 Topic Cluster Pillars (Chuyên đề trụ cột) có cấu trúc Silo chặt chẽ và tích hợp FAQ Schema.',
        'Bổ sung khối "Direct Answer" (Câu trả lời lâm sàng súc tích 50 từ) ngay đầu mỗi bài viết dịch vụ để robot AI dễ dàng trích dẫn nguyên văn.',
        'Tối ưu Local 3-Pack định vị Google Map cho các từ khóa khám tai mũi họng tại các quận trung tâm TP.HCM (Quận 1, Quận 3, Quận 4, Quận 7, Bình Thạnh).',
        'Phát triển nội dung tương tác chuyên sâu về Đo đa ký giấc ngủ và phẫu thuật nội soi xoang FESS công nghệ cao.'
      ],
      impact: 'Tăng trưởng tối thiểu 45% lượng bệnh nhân tìm kiếm tự nhiên và trở thành bệnh viện số 1 được AI đề xuất cho người bệnh tại TP.HCM.'
    }
  ]

  return (
    <div className="py-12 md:py-16 space-y-16 bg-slate-50">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-navy-900 via-brand-900 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              Chiến Lược Tái Cấu Trúc Toàn Diện & Thúc Đẩy Tăng Trưởng
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Hiện Trạng Website & Kế Hoạch Tăng Trưởng SEO/GEO
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Một báo cáo hợp nhất từ tình trạng website cũ, tác động đến hoạt động kinh doanh, các lỗi kỹ thuật cần xử lý và lộ trình tăng trưởng trên Google lẫn công cụ tìm kiếm AI.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10">
        <nav className="grid grid-cols-2 md:grid-cols-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm" aria-label="Mục lục báo cáo">
          {[
            ['#hien-trang', '01', 'Hiện trạng'],
            ['#audit', '02', 'Audit kỹ thuật'],
            ['#geo', '03', 'SEO và GEO'],
            ['#roadmap', '04', 'Roadmap'],
          ].map(([href, number, label]) => (
            <a key={href} href={href} className="p-4 border-b md:border-b-0 md:border-r border-slate-200 last:border-r-0 hover:bg-slate-50 transition-colors">
              <span className="block text-[11px] font-bold text-emerald-700">{number}</span>
              <span className="block mt-1 text-sm font-bold text-slate-900">{label}</span>
            </a>
          ))}
        </nav>
      </section>

      <section id="hien-trang" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 md:p-10 lg:col-span-5 lg:border-r border-slate-200">
              <div className="text-sm font-bold text-amber-700">Phần 1. Tình trạng website hiện tại</div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-3">Tài sản nội dung lớn nhưng hạ tầng tìm kiếm đang làm giảm hiệu quả khai thác</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Website tích lũy lượng lớn nội dung y khoa, hồ sơ bác sĩ và trang dịch vụ từ năm 2007. Tuy nhiên, các lỗi sitemap, canonical trỏ nhầm, chuyển hướng soft 404, xung đột entity thương hiệu và phân hệ tiếng Anh bị lai tạp làm gián đoạn hành trình từ tìm kiếm đến đặt khám của cả bệnh nhân trong nước lẫn quốc tế.</p>
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 text-sm leading-6 text-amber-950">
                Vấn đề cốt lõi không phải thiếu nội dung. Vấn đề là nội dung hiện có chưa được tổ chức và phân phối đúng để tạo ra lượt khám.
              </div>
            </div>
            <div className="grid grid-cols-2 lg:col-span-7">
              {[
                ['2.212', 'trang y khoa đã tích lũy', 'Tài sản nội dung'],
                ['9.198', 'ảnh trong thư viện media', 'Tài sản hình ảnh'],
                ['53', 'liên kết cũ bị gãy', 'Rủi ro trải nghiệm'],
                ['1.517', 'trang hỏi đáp ngắn, phân tán', 'Cơ hội gom cụm'],
              ].map(([value, label, meta], index) => (
                <div key={label} className={`p-6 md:p-8 border-slate-200 ${index < 2 ? 'border-b' : ''} ${index % 2 === 0 ? 'border-r' : ''}`}>
                  <div className="text-xs font-bold text-slate-500">{meta}</div>
                  <div className="mt-3 text-3xl font-black text-slate-950">{value}</div>
                  <div className="mt-2 text-xs md:text-sm leading-5 text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
            {[
              ['Business Flow', 'Tìm kiếm triệu chứng → đọc nội dung kiểm chứng → xem bác sĩ/chuyên khoa → đặt hẹn trực tuyến → khám và điều trị (kể cả bệnh nhân quốc tế).'],
              ['Business Info', 'Hai cơ sở, hơn 80 bác sĩ và chuyên gia, khám ngoại trú, phẫu thuật, nội trú, đo đa ký giấc ngủ và phân hệ English Portal cho kiều bào/expat.'],
              ['Revenue Stream', 'Khám chuyên khoa, nội soi NBI, phẫu thuật Coblator/FESS, nội trú VIP, đo đa ký giấc ngủ và bảo lãnh viện phí hơn 35 hãng bảo hiểm lớn.'],
            ].map(([title, description]) => (
              <div key={title} className="p-6 md:p-8 md:border-r last:border-r-0 border-slate-200">
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Review Comparison */}
      <section id="audit" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <StrategicAuditComparison />
      </section>

      {/* GEO Blueprint */}
      <section id="geo" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <GeoFrameworkView />
      </section>

      {/* Implementation Roadmap */}
      <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
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
                  <div className="text-xs font-bold text-emerald-800 mt-1">
                    Mục tiêu tác động: {current.impact}
                  </div>
                </div>

                {/* Khối định nghĩa thuật ngữ & Mức độ nghiêm trọng */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="text-slate-800 leading-relaxed">
                    <strong className="text-slate-950 font-bold">Lý giải thuật ngữ:</strong> {current.termsExplained}
                  </div>
                  <div className="text-rose-900 font-semibold leading-relaxed">
                    {current.severity}
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
