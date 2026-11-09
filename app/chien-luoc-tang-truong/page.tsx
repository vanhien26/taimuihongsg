'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Building2, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  Compass, 
  Clock, 
  HelpCircle,
  Globe2,
  AlertTriangle,
  Server,
  Stethoscope,
  Users,
  ShieldCheck,
  TrendingUp,
  FileCheck
} from 'lucide-react'

export default function ChienLuocTangTruongPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pillars' | 'comparison' | 'roadmap' | 'kpis'>('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [navbarHeight, setNavbarHeight] = useState(105)

  useEffect(() => {
    const updateNavbarHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        setNavbarHeight(header.offsetHeight)
      }
    }
    updateNavbarHeight()
    window.addEventListener('resize', updateNavbarHeight)

    const sections = ['overview', 'pillars', 'comparison', 'roadmap', 'kpis']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId as any)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', updateNavbarHeight)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId as any)
    const element = document.getElementById(tabId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-brand-50 selection:text-brand-900 print:bg-white">
      
      {/* Sticky Tab Navigation Bar */}
      <div 
        style={{ top: `${navbarHeight}px` }}
        className="sticky z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md print:hidden transition-all duration-150"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 overflow-x-auto py-3 no-scrollbar" aria-label="Mục lục báo cáo">
            {[
              { id: 'overview', label: '1. Tóm tắt Audit' },
              { id: 'pillars', label: '2. Đề xuất Growth Plan' },
              { id: 'comparison', label: '3. Hiện trạng & Đề xuất' },
              { id: 'roadmap', label: '4. Lộ trình đề xuất' },
              { id: 'kpis', label: '5. Khung đo lường' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center pl-4 shrink-0">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 hover:text-slate-950"
              title="In báo cáo hoặc lưu file PDF"
            >
              <Printer className="h-4 w-4 text-slate-500" />
              <span>In PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Airy Editorial Header */}
      <header className="border-b border-slate-100 bg-linear-to-b from-slate-50/70 via-white to-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-2xs">
              <Compass className="h-4 w-4 text-brand-700" />
              Báo cáo Đánh giá Hiện trạng & Đề xuất Kế hoạch Tăng trưởng
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              Website đang gặp vấn đề gì và cần làm gì tiếp theo?
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal pt-1">
              Báo cáo tóm tắt dành cho Ban Giám Đốc: Nhận diện các điểm nghẽn kỹ thuật, mâu thuẫn nhận diện thương hiệu và giải pháp tái cấu trúc nhằm định vị bệnh viện chuyên khoa Tai Mũi Họng số 1 tại TP.HCM.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        
        {/* ========================================================================= */}
        {/* SECTION 1: EXECUTIVE SUMMARY & AUDIT                                       */}
        {/* ========================================================================= */}
        <section id="overview" className="scroll-mt-36 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            {/* Section Header */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                <Building2 className="h-5 w-5" />
                Phần 1 • Tóm tắt tình trạng hiện tại
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Nội dung và bác sĩ đều có sẵn, nhưng website chưa giúp người bệnh dễ đặt khám
              </h2>
            </div>

            {/* 3 Executive Takeaways - Clean Editorial Narrative */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 border-l-2 border-emerald-500 pl-5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">01 • Thế mạnh sẵn có</div>
                <h3 className="text-xl font-bold text-slate-950">Đã có nền tảng 19 năm phát triển</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Website hoạt động từ năm 2007, sở hữu hơn <strong>2.200 bài viết y khoa</strong> và đội ngũ <strong>18 bác sĩ chuyên khoa chủ chốt</strong> tại trung tâm Quận 1. Đây là tài sản thương hiệu rất lớn mà ít cơ sở y tế tư nhân nào có được.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-amber-500 pl-5">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">02 • Điểm nghẽn chính</div>
                <h3 className="text-xl font-bold text-slate-950">Mâu thuẫn thông tin & Đứt gãy luồng đặt khám</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Tên bệnh viện bị lẫn lộn sang phòng khám đa khoa; kho bài viết nằm phân tán thiếu tên bác sĩ duyệt; khu vực tiếng Anh chưa hoàn chỉnh khiến người nước ngoài khó tìm hiểu quy trình bảo lãnh viện phí.
                </p>
              </div>

              <div className="space-y-3 border-l-2 border-brand-500 pl-5">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-700">03 • Hướng giải quyết</div>
                <h3 className="text-xl font-bold text-slate-950">Khắc phục kỹ thuật & Chuẩn hóa điều hướng chuyên khoa</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Sửa dứt điểm các lỗi kỹ thuật ngầm, thống nhất thương hiệu Bệnh viện trên toàn bộ hệ thống, chuẩn hóa điều hướng từ bài viết về đúng chuyên khoa và thiết lập hệ thống đo lường đặt hẹn thực tế.
                </p>
              </div>
            </div>

            {/* Key Numbers Grid - Open Airy Stat Ledger */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 sm:p-10">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-200/70 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Dữ liệu kiểm toán trên website & thị trường
                </div>
                <div className="text-xs text-slate-500">
                  Nguồn: Audit CMS sitemap & dữ liệu đối soát bên thứ ba
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="space-y-2 pt-4 sm:pt-0">
                  <div className="text-sm font-semibold text-slate-500">Bài viết & Hỏi đáp y khoa</div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">2.212</div>
                  <div className="text-sm text-slate-600 leading-relaxed">532 bài chuyên sâu & 1.517 hỏi đáp đã index</div>
                  <div className="text-xs text-slate-400">Đếm thực tế từ sitemap CMS</div>
                </div>

                <div className="space-y-2 pt-4 sm:pt-0 sm:pl-8">
                  <div className="text-sm font-semibold text-slate-500">Bác sĩ chuyên khoa chủ chốt</div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-brand-700">18</div>
                  <div className="text-sm text-slate-600 leading-relaxed">Profile công khai trên trang web</div>
                  <div className="text-xs text-slate-400">Toàn viện hơn 80 nhân sự y tế</div>
                </div>

                <div className="space-y-2 pt-4 sm:pt-0 sm:pl-8">
                  <div className="text-sm font-semibold text-slate-500">Tỷ trọng tìm kiếm Google</div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-emerald-700">~64.5%</div>
                  <div className="text-sm text-slate-600 leading-relaxed">Kênh người bệnh tiếp cận chính</div>
                  <div className="text-xs text-slate-400">Ước tính Semrush, cần đối soát GA4</div>
                </div>

                <div className="space-y-2 pt-4 sm:pt-0 sm:pl-8">
                  <div className="text-sm font-semibold text-slate-500">Hãng bảo hiểm đối tác</div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-sky-700">35+</div>
                  <div className="text-sm text-slate-600 leading-relaxed">Hợp tác bảo lãnh viện phí trực tiếp</div>
                  <div className="text-xs text-slate-400">Danh mục đối tác công bố</div>
                </div>
              </div>
            </div>

            {/* Market Comparison & Patient Journey */}
            <div className="grid gap-12 lg:grid-cols-2">
              
              {/* Left Column: Market Context */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">So sánh lượng người xem</span>
                  <h3 className="mt-1 text-2xl font-black text-slate-950">Lượng người vào web so với các bệnh viện khác</h3>
                  <p className="mt-2 text-base text-slate-600 leading-relaxed">
                    Lượng người vào website hiện thấp hơn các bệnh viện đa khoa lớn. Hướng đi đúng không phải chạy đua viết thêm bài lan man, mà tập trung điều hướng người bệnh có triệu chứng thực tế về đúng các chuyên khoa điều trị thế mạnh của Bệnh viện.
                  </p>
                </div>

                <div className="space-y-3.5 pt-2">
                  {[
                    { name: 'Bệnh Viện Tai Mũi Họng Sài Gòn (Hiện tại)', traffic: '69.2K lượt/tháng', width: '25%', current: true },
                    { name: 'Bệnh viện Nam Sài Gòn', traffic: '119K lượt/tháng', width: '35%', current: false },
                    { name: 'Bệnh viện Hồng Ngọc', traffic: '258K lượt/tháng', width: '45%', current: false },
                    { name: 'Bệnh viện Tâm Anh', traffic: '3.6M lượt/tháng', width: '80%', current: false },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className={item.current ? 'font-bold text-brand-700' : 'text-slate-600'}>
                          {item.name}
                        </span>
                        <span className="font-bold text-slate-900">{item.traffic}</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.current ? 'bg-brand-700' : 'bg-slate-300'}`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-950 font-bold">Mục tiêu cốt lõi:</strong> Giúp người đang có triệu chứng tai mũi họng tìm thấy đúng thông tin và dễ dàng bấm gọi hoặc đặt lịch khám.
                </div>
              </div>

              {/* Right Column: Patient Friction Points */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Hành trình người bệnh</span>
                  <h3 className="mt-1 text-2xl font-black text-slate-950">Người bệnh đang gặp khó khăn ở những bước nào?</h3>
                  <p className="mt-2 text-base text-slate-600 leading-relaxed">
                    Thực tế diễn ra khi một người bệnh tìm kiếm thông tin và có nhu cầu đặt hẹn:
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 rounded-xl border border-rose-100 bg-rose-50/50 p-4 text-sm leading-relaxed">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-200 text-xs font-bold text-rose-900 mt-0.5">1</span>
                    <div>
                      <strong className="text-rose-950 font-bold">Khi tìm kiếm:</strong> Thấy website nhưng Google ghi là "Phòng khám Đa khoa", người bệnh băn khoăn về năng lực chuyên khoa sâu.
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-amber-100 bg-amber-50/50 p-4 text-sm leading-relaxed">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-900 mt-0.5">2</span>
                    <div>
                      <strong className="text-amber-950 font-bold">Khi đọc bài:</strong> Bài viết chưa để rõ bác sĩ nào duyệt nội dung, người bệnh chưa thật sự yên tâm vào phác đồ.
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-amber-100 bg-amber-50/50 p-4 text-sm leading-relaxed">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-900 mt-0.5">3</span>
                    <div>
                      <strong className="text-amber-950 font-bold">Khi tìm bác sĩ:</strong> Bấm vào xem bác sĩ thì bị chuyển nhầm trang hoặc không thấy lịch khám cụ thể của từng người.
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-brand-100 bg-brand-50/50 p-4 text-sm leading-relaxed">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-200 text-xs font-bold text-brand-900 mt-0.5">4</span>
                    <div>
                      <strong className="text-brand-950 font-bold">Khi muốn đặt hẹn:</strong> Người nước ngoài không tìm thấy trang tiếng Anh hoàn chỉnh; form đặt hẹn còn nhiều trường rườm rà.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-emerald-800">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Mục tiêu: Sửa 4 điểm này để tăng số lượt người bệnh liên hệ và đến khám.</span>
                </div>
              </div>

            </div>

            {/* Deep Technical Audit Bottlenecks - Sleek Warning Panel */}
            <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-rose-200/70 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                    <AlertTriangle className="h-4 w-4" />
                    Kiểm toán kỹ thuật • 3 lỗi nghẽn tầng sâu trên hệ thống cũ
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">
                    Các lỗi mã nguồn ngầm đang cản trở Google và làm tụt điểm tín nhiệm
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-lg bg-rose-100 px-3 py-1.5 text-xs font-bold text-rose-800 shrink-0">
                  Cần xử lý dứt điểm
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm leading-relaxed">
                <div className="rounded-xl border border-rose-100 bg-white p-5 shadow-2xs space-y-2">
                  <div className="font-bold text-slate-950 text-base flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-800 text-xs font-black">1</span>
                    Ép chuyển hướng sai (Soft 404)
                  </div>
                  <p className="text-slate-600">
                    Bất kỳ link gãy hoặc bài viết cũ bị xóa đều bị hệ thống cũ tự động ép chuyển hướng (Redirect 301) về trang Đặt hẹn. Google đánh giá đây là lỗi Soft 404, làm <strong>hạ điểm uy tín (Domain Trust)</strong> của chính trang đặt hẹn và gây ức chế khi người bệnh bị văng vào form ngoài ý muốn.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-100 bg-white p-5 shadow-2xs space-y-2">
                  <div className="font-bold text-slate-950 text-base flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-800 text-xs font-black">2</span>
                    Sitemap XML chậm cập nhật
                  </div>
                  <p className="text-slate-600">
                    Bản đồ gửi URL cho Google (Sitemap) có nhiều chuyên mục dừng cập nhật từ cuối năm 2023 dù website vẫn đăng bài trong năm 2026. Điều này khiến các bài viết chuyên khoa và dịch vụ mới <strong>chậm được Google phát hiện và hiển thị</strong> cho người bệnh tìm kiếm.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-100 bg-white p-5 shadow-2xs space-y-2">
                  <div className="font-bold text-slate-950 text-base flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-800 text-xs font-black">3</span>
                    Máy chủ chưa bật bộ đệm (Cache)
                  </div>
                  <p className="text-slate-600">
                    Mặc dù có kết nối Cloudflare nhưng toàn bộ tài nguyên web đang ở trạng thái <code>DYNAMIC</code>, bắt máy chủ WordPress/PHP phải xử lý từng lượt xem trang đơn lẻ. Khi có nhiều người truy cập cùng lúc, tốc độ phản hồi máy chủ (TTFB) bị kéo dài.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: 4 STRATEGIC GROWTH PILLARS & SPECIALIZED FOCUS                  */}
        {/* ========================================================================= */}
        <section id="pillars" className="scroll-mt-36 border-t border-slate-200/80 bg-slate-50/40 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                <Target className="h-5 w-5" />
                Phần 2 • 4 việc cần làm để cải thiện
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Tập trung vào thông tin rõ ràng và giúp người bệnh dễ đặt khám
              </h2>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600">
                Mỗi phần việc giải quyết một vấn đề cụ thể, dễ theo dõi tiến độ và có thể bắt tay thực hiện được ngay.
              </p>
            </div>

            {/* 4 Pillars - Clean 2-Column Ledger */}
            <div className="grid gap-8 md:grid-cols-2">
              
              {/* PILLAR 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700 font-black">
                    01
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Việc 1</span>
                    <h3 className="text-xl font-bold text-slate-950">Thống nhất tên Bệnh viện & làm rõ thông tin Bác sĩ</h3>
                  </div>
                </div>

                <div className="space-y-4 text-base leading-relaxed">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Điều đang xảy ra:</div>
                    <p className="text-slate-600 mt-1">
                      Một số nơi trên website vẫn ghi là phòng khám đa khoa; hồ sơ của nhiều bác sĩ trỏ nhầm sang người khác, thiếu bằng cấp và lịch khám chi tiết.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Ảnh hưởng:</div>
                    <p className="text-slate-600 mt-1">
                      Người bệnh và Google bị nhầm lẫn; người quen tìm đích danh bác sĩ không thấy thông tin chính thức của bệnh viện.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-sm font-bold uppercase tracking-wide text-emerald-800">Cách xử lý:</div>
                    <ul className="space-y-2.5 text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Dùng thống nhất tên duy nhất: <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> trên toàn bộ website.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Tạo trang giới thiệu riêng cho từng bác sĩ, ghi rõ chuyên khoa, kinh nghiệm và lịch khám.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PILLAR 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 font-black">
                    02
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Việc 2</span>
                    <h3 className="text-xl font-bold text-slate-950">Sắp xếp lại bài viết theo từng nhóm bệnh</h3>
                  </div>
                </div>

                <div className="space-y-4 text-base leading-relaxed">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Điều đang xảy ra:</div>
                    <p className="text-slate-600 mt-1">
                      Hơn 1.500 câu hỏi ngắn nằm rời rạc (hơn 80 bài cùng viết về ù tai, 120 bài về xoang nhưng nội dung lặp lại). Đầu bài thiếu đoạn tóm tắt ngắn.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Ảnh hưởng:</div>
                    <p className="text-slate-600 mt-1">
                      Người đọc khó tìm thấy câu trả lời đầy đủ; khi người bệnh hỏi các công cụ tìm kiếm hoặc AI, website ít được trích dẫn làm câu trả lời chính.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-sm font-bold uppercase tracking-wide text-emerald-800">Cách xử lý:</div>
                    <ul className="space-y-2.5 text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Gom bài viết vào các nhóm chuyên khoa chính, bổ sung khối thông tin điều hướng rõ ràng để người bệnh có triệu chứng dễ dàng tìm hiểu quy trình khám và đặt hẹn với bác sĩ chuyên khoa tương ứng.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Đầu mỗi bài có đoạn tóm tắt trực diện 50 từ (Direct Answer Block) và để rõ tên bác sĩ kiểm duyệt để các công cụ AI (ChatGPT, Google Gemini) ưu tiên trích dẫn nguồn uy tín.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PILLAR 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 font-black">
                    03
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Việc 3</span>
                    <h3 className="text-xl font-bold text-slate-950">Làm riêng trang tiếng Anh cho người nước ngoài</h3>
                  </div>
                </div>

                <div className="space-y-4 text-base leading-relaxed">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Điều đang xảy ra:</div>
                    <p className="text-slate-600 mt-1">
                      Khu vực tiếng Anh hiện chỉ có vài bài viết dịch sơ sài, menu vẫn là tiếng Việt, chưa có thông tin về quy trình khám và thanh toán bảo hiểm quốc tế.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Ảnh hưởng:</div>
                    <p className="text-slate-600 mt-1">
                      Người nước ngoài sống tại Quận 1, Quận 2, Quận 7 hoặc khách du lịch khó tìm hiểu thông tin và bỏ sang các phòng khám khác.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-sm font-bold uppercase tracking-wide text-emerald-800">Cách xử lý:</div>
                    <ul className="space-y-2.5 text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Xây dựng cổng tiếng Anh chuẩn tại <strong>/english</strong> phục vụ cộng đồng Expat tại Q.1, Q.2, Q.7 và khách du lịch y tế.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Quy trình bệnh nhân quốc tế: Tiếp đón nhân sự tiếng Anh tại Quận 1, khám nội soi màn hình trực tiếp, xuất hóa đơn VAT và hồ sơ y khoa có mã ICD-10 trong 30 phút để thanh toán bảo hiểm quốc tế (Direct Billing hơn 35 hãng).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PILLAR 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-black">
                    04
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Việc 4</span>
                    <h3 className="text-xl font-bold text-slate-950">Tải trang nhanh trên điện thoại & đặt hẹn dễ hơn</h3>
                  </div>
                </div>

                <div className="space-y-4 text-base leading-relaxed">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Điều đang xảy ra:</div>
                    <p className="text-slate-600 mt-1">
                      Mở trang trên điện thoại còn chậm do nhiều ảnh dung lượng lớn; form đặt hẹn chưa gợi ý chuyên khoa theo triệu chứng ban đầu.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Ảnh hưởng:</div>
                    <p className="text-slate-600 mt-1">
                      Người bệnh chờ lâu dễ tắt trang; bộ phận tiếp nhận mất nhiều thời gian gọi điện hỏi lại thông tin.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-sm font-bold uppercase tracking-wide text-emerald-800">Cách xử lý:</div>
                    <ul className="space-y-2.5 text-slate-700">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Nén ảnh để mở trang dưới 1 giây trên điện thoại 4G/5G.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Rút gọn form đặt hẹn thành 3 bước đơn giản, tự gợi ý đúng bác sĩ phù hợp với triệu chứng.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Research & Strategy: GEO / AEO in Healthcare */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-700">
                    Nghiên cứu công nghệ tìm kiếm • Chiến lược GEO & AEO trong Y tế
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-950">
                    Tại sao tối ưu hóa cho AI (GEO/AEO) là bước ngoặt sống còn của Bệnh viện?
                  </h3>
                </div>
                <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-lg shrink-0">
                  Xu hướng tìm kiếm 2024 - 2026
                </span>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Hành vi tìm kiếm thông tin y tế đang trải qua cuộc chuyển dịch lớn nhất trong 20 năm qua. Người bệnh không còn gõ từ khóa ngắn (như <em>"khám tai mũi họng"</em>) rồi click vào 10 đường link truyền thống. Thay vào đó, họ hỏi trực tiếp các cỗ máy AI (<strong>Google AI Overviews, Gemini, ChatGPT, Perplexity</strong>) bằng các câu hỏi đàm thoại chi tiết và yêu cầu đưa ra câu trả lời đích danh.
              </p>

              {/* 3 Academic & Industry Research Findings */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cơ sở nghiên cứu thực chứng (Evidence-based Research)
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-100 bg-purple-50/40 p-5 space-y-2">
                    <div className="font-bold text-slate-950 text-base flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 text-purple-800 text-xs font-black">1</span>
                      Nghiên cứu Princeton & Georgia Tech
                    </div>
                    <div className="text-xs font-semibold text-purple-700">Nghiên cứu gốc về GEO (Kulkarni et al., 2024)</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Nghiên cứu khoa học đầu tiên về thuật toán AI chỉ ra: Việc bổ sung <strong>trích dẫn y khoa có căn cứ (Cite Sources)</strong> và <strong>trích dẫn chuyên môn từ bác sĩ thực tế (Authoritative Quotation)</strong> giúp tăng từ <strong>30% đến 41%</strong> khả năng website được các mô hình AI chọn làm câu trả lời chính cho người dùng.
                    </p>
                  </div>

                  <div className="rounded-xl border border-sky-100 bg-sky-50/40 p-5 space-y-2">
                    <div className="font-bold text-slate-950 text-base flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-200 text-sky-800 text-xs font-black">2</span>
                      Dự báo thị trường từ Gartner
                    </div>
                    <div className="text-xs font-semibold text-sky-700">Chuyển dịch sang Answer Engines (2024 - 2026)</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Gartner dự báo lưu lượng tìm kiếm truyền thống qua các liên kết web có thể <strong>sụt giảm tới 25% vào năm 2026</strong> khi người dùng chuyển sang nhận câu trả lời tổng hợp trực tiếp từ AI. Bệnh viện nào không chuẩn hóa dữ liệu cho Answer Engines (AEO) sẽ mất dần dòng bệnh nhân mới vào tay đối thủ.
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 space-y-2">
                    <div className="font-bold text-slate-950 text-base flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-800 text-xs font-black">3</span>
                      Cơ chế an toàn Y tế (YMYL của Google)
                    </div>
                    <div className="text-xs font-semibold text-emerald-700">Tiêu chuẩn khắt khe cho nội dung sức khỏe</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Do liên quan trực tiếp đến tính mạng con người (*Your Money Your Life*), các cỗ máy AI áp dụng bộ lọc an toàn cao nhất: AI chỉ trích dẫn các đơn vị có <strong>Schema định danh rõ ràng (`Hospital`, `Physician`)</strong> và kiên quyết loại bỏ các bài viết ẩn danh, không có bác sĩ chịu trách nhiệm chuyên môn.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Actionable GEO/AEO Standards */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4 Chuẩn kỹ thuật GEO & AEO áp dụng trực tiếp cho Bệnh Viện Tai Mũi Họng Sài Gòn
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm leading-relaxed text-slate-700">
                  <div className="space-y-1">
                    <div className="font-bold text-slate-950 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Direct Answer Block</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-5">Đầu mỗi bài viết có đoạn tóm tắt 40 - 60 từ trả lời trực diện triệu chứng và giải pháp, giúp bot AI trích xuất câu trả lời ngay lập tức.</p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-950 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Định danh Bác sĩ (E-E-A-T)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-5">Mọi bài viết về Xoang, Amidan, Ù tai hay Giấc ngủ đều gắn liền chữ ký duyệt của 18 bác sĩ chủ chốt với bằng cấp và chứng chỉ y khoa thật.</p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-950 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Bảng dữ liệu có cấu trúc</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-5">Trình bày bảng so sánh kỹ thuật (Plasma vs Dao điện, phân độ AHI trong ngưng thở khi ngủ) để AI đưa vào bảng tổng hợp kết quả.</p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-slate-950 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Thực thể Song ngữ (Vi/En)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-5">Khai báo Schema thực thể cả tiếng Anh và tiếng Việt, giúp khách nước ngoài và expat tại TP.HCM hỏi AI bằng tiếng Anh vẫn được gợi ý tới bệnh viện.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: BEFORE VS AFTER COMPARISON                                     */}
        {/* ========================================================================= */}
        <section id="comparison" className="scroll-mt-36 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                <Activity className="h-5 w-5" />
                Phần 3 • So sánh website trước và sau khi làm
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Những điểm khác biệt cụ thể giữa bản cũ và bản mới
              </h2>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600">
                Bảng đối chiếu trực tiếp các phần việc cụ thể theo từng hạng mục trọng yếu:
              </p>
            </div>

            {/* Comparison Table Ledger */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-12 md:divide-x md:divide-y-0">
                
                {/* Header column */}
                <div className="hidden bg-slate-50/80 p-5 text-sm font-bold uppercase tracking-wider text-slate-600 md:col-span-3 md:block">
                  Hạng mục
                </div>
                <div className="bg-rose-50/50 p-5 text-sm font-bold uppercase tracking-wider text-rose-800 md:col-span-4">
                  Hiện trạng cũ (Cần sửa)
                </div>
                <div className="bg-emerald-50/50 p-5 text-sm font-bold uppercase tracking-wider text-emerald-800 md:col-span-5">
                  Sau khi sửa (Chuẩn mới)
                </div>

                {/* Row 1: Brand & Entity */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  1. Tên bệnh viện
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  Lẫn lộn giữa Phòng khám Đa khoa và Bệnh viện; thông tin trên Google chưa thống nhất.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  Thống nhất duy nhất tên <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> trên toàn bộ website và bản đồ.
                </div>

                {/* Row 2: Doctors Profile */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  2. Hồ sơ Bác sĩ
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  Hồ sơ bị gộp chung hoặc trỏ nhầm link; thiếu bằng cấp và lịch khám rõ ràng.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  Mỗi bác sĩ có <strong>trang hồ sơ riêng</strong>, hiển thị đầy đủ chuyên khoa, kinh nghiệm và nút đặt lịch trực tiếp.
                </div>

                {/* Row 3: Content Structure */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  3. Bài viết y khoa
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  1.517 bài hỏi đáp ngắn nằm rời rạc; chưa ghi rõ bác sĩ nào duyệt nội dung.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  Gom theo <strong>6 nhóm chuyên khoa</strong>; 100% bài viết có <strong>tên bác sĩ kiểm duyệt</strong> và đoạn tóm tắt dễ hiểu ở đầu bài.
                </div>

                {/* Row 4: International Patients */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  4. Trang tiếng Anh
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  Chỉ có vài bài dịch sơ sài, menu vẫn tiếng Việt, thiếu thông tin bảo lãnh bảo hiểm.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  <strong>Trang tiếng Anh riêng biệt</strong>, hướng dẫn quy trình đón tiếp và danh sách hơn 35 hãng bảo hiểm hỗ trợ trực tiếp.
                </div>

                {/* Row 5: Booking & Conversion */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  5. Đặt hẹn và đo lường
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  Chưa biết bài viết nào mang lại cuộc gọi và lịch khám; form đặt hẹn chưa gợi ý chuyên khoa.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  Đo được từ lúc người bệnh xem bài đến số ca khám thực tế; form gợi ý đúng bác sĩ phù hợp với triệu chứng.
                </div>

                {/* Row 6: Soft 404 & Sitemap */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  6. Link hỏng & Sitemap XML
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  Link gãy/sai bị tự động ép redirect về trang đặt hẹn gây Soft 404; sitemap chậm cập nhật bài mới từ 2023.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  Xóa bỏ redirect ép buộc, trả mã <strong>404 chuẩn kèm thanh tìm kiếm</strong>; sitemap XML tự động cập nhật bài mới tức thì.
                </div>

                {/* Row 7: Server & Performance */}
                <div className="p-5 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-base">
                  7. Hạ tầng & Bộ nhớ đệm
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-4">
                  Máy chủ xử lý từng request đơn lẻ (chưa bật cache), ảnh thô nặng 7.8MB khiến điện thoại tải chậm quá 3 giây.
                </div>
                <div className="p-5 text-sm sm:text-base leading-relaxed text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                  Bật <strong>bộ nhớ đệm toàn cầu</strong>, nén ảnh tự động chuẩn WebP, mở trang <strong>dưới 1 giây</strong> trên điện thoại.
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: PHASED ROADMAP & RACI MODEL                                    */}
        {/* ========================================================================= */}
        <section id="roadmap" className="scroll-mt-36 border-t border-slate-200/80 bg-slate-50/40 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                <Clock className="h-5 w-5" />
                Phần 4 • Đề xuất Lộ trình theo Giai đoạn ưu tiên
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Thứ tự ưu tiên các việc cần làm
              </h2>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600">
                Triển khai theo thứ tự ưu tiên từ nền tảng kỹ thuật đến nội dung chuyên môn và mở rộng đo lường, không làm gián đoạn hoạt động khám chữa bệnh thường nhật.
              </p>
            </div>

            {/* 3 Phases Stepper */}
            <div className="grid gap-6 md:grid-cols-3">
              
              {/* Phase 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-700">Giai đoạn 1 • Ưu tiên nền tảng</div>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">Sửa lỗi tìm kiếm & Thống nhất tên bệnh viện</h3>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Sửa các đường dẫn bị lỗi và danh mục bài gửi cho Google.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Đổi lại đúng tên: <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> trên các trang.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tách trang hồ sơ riêng cho 18 bác sĩ chủ chốt.</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 text-sm font-bold text-slate-900">
                  Mục tiêu hoàn thành: Google nhận diện đúng tên bệnh viện và bác sĩ, không còn lỗi kỹ thuật ngầm.
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">Giai đoạn 2 • Tái cấu trúc nội dung</div>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">Sắp xếp lại bài viết & Cổng tiếng Anh</h3>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Gom các bài hỏi đáp vào 6 nhóm chuyên khoa; thêm tên bác sĩ duyệt.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hoàn thiện cổng tiếng Anh riêng biệt cho người nước ngoài và danh mục bảo lãnh.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Nén ảnh để trang mở nhanh trên điện thoại (dưới 1 giây).</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 text-sm font-bold text-slate-900">
                  Mục tiêu hoàn thành: Người bệnh đọc bài thấy tin cậy hơn, khách quốc tế có kênh đặt hẹn chuẩn xác.
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">Giai đoạn 3 • Mở rộng & Tối ưu</div>
                  <h3 className="mt-1 text-xl font-bold text-slate-950">Tối ưu tìm kiếm bản đồ & Đo lường thực tế</h3>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cập nhật vị trí bệnh viện trên Google Map ở Quận 1 và các quận lân cận.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hoàn thiện khối thông tin điều hướng chuyên khoa gắn liền với từng bài viết y khoa và dịch vụ điều trị.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Đối soát số cuộc gọi và số lượt đặt lịch thực tế định kỳ hàng tháng.</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 text-sm font-bold text-slate-900">
                  Mục tiêu hoàn thành: Nắm rõ hiệu quả thực tế và số ca khám mang lại từ kênh trực tuyến.
                </div>
              </div>

            </div>

            {/* Disclaimer note */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
              <strong className="text-slate-900 font-bold">Lưu ý về tiến độ:</strong> Đây là <em>lộ trình phân kỳ theo thứ tự ưu tiên logic</em>. Thời gian triển khai chi tiết cho từng giai đoạn sẽ được xây dựng và thống nhất sau khi Ban Giám Đốc phê duyệt phạm vi công việc cùng nguồn lực phối hợp của các phòng ban.
            </div>

            {/* RACI Coordination Framework */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                    <Users className="h-5 w-5" />
                    Cơ chế vận hành • Mô hình phối hợp 3 bên (RACI Framework)
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-950">
                    Phân định rõ trách nhiệm để triển khai kế hoạch đúng tiến độ
                  </h3>
                </div>
                <span className="text-sm font-semibold text-slate-600">Phối hợp liên phòng ban</span>
              </div>

              <div className="grid gap-6 md:grid-cols-3 text-sm leading-relaxed">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold text-brand-700">
                    <Server className="h-5 w-5" />
                    1. Bộ phận Kỹ thuật & Website
                  </div>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex items-start gap-2">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>Sửa triệt để lỗi sitemap, canonical và schema thực thể Bệnh viện.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>Tối ưu tốc độ tải trang dưới 1 giây và bật bộ nhớ đệm CDN.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-brand-600 font-bold">•</span>
                      <span>Cài đặt công cụ đo lường chuyển đổi (Search Console, GA4, Hotline).</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold text-purple-700">
                    <Stethoscope className="h-5 w-5" />
                    2. Hội đồng Y khoa & Bác sĩ
                  </div>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Rà soát và ký duyệt chuyên môn các bài viết chuyên khoa trọng điểm theo từng đợt (chuẩn E-E-A-T).</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Cung cấp bằng cấp, chứng chỉ và lịch khám định kỳ chính xác của 18 bác sĩ.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Thẩm định bảng gợi ý chuyên khoa theo triệu chứng bệnh trong form đặt hẹn.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                    3. Tiếp tân & Chăm sóc Khách hàng
                  </div>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Cam kết gọi lại xác nhận lịch hẹn trực tuyến trong vòng 15 phút.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Nắm rõ quy trình tiếp đón có nhân sự tiếng Anh cho bệnh nhân quốc tế.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Tư vấn rõ ràng chính sách bảo lãnh viện phí cho hơn 35 hãng bảo hiểm liên kết.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 5: MEASUREMENT FRAMEWORK                                          */}
        {/* ========================================================================= */}
        <section id="kpis" className="scroll-mt-36 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                <Activity className="h-5 w-5" />
                Phần 5 • Đề xuất Khung đo lường hiệu quả (Measurement Framework)
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Các chỉ số cần cài đặt theo dõi sau khi sửa website
              </h2>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600">
                Báo cáo này dừng lại ở việc <strong>Audit hiện trạng</strong> và <strong>Đề xuất Kế hoạch Tăng trưởng</strong>. Chúng tôi không tự đưa ra các con số cam kết (KPI) ảo trước khi kết nối dữ liệu đo lường thực tế từ Search Console, Google Analytics 4 và hệ thống quản lý bệnh nhân của bệnh viện.
              </p>
            </div>

            {/* 4 Measurement Groups */}
            <div className="grid gap-6 md:grid-cols-4">
              
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-700">Nhóm 1</div>
                  <h4 className="mt-1 text-lg font-bold text-slate-950">Chuẩn hóa thông tin</h4>
                </div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed divide-y divide-slate-100">
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Tên bệnh viện:</span>
                    <span className="text-slate-600 mt-0.5 block">Sửa dứt điểm lỗi hiển thị nhầm sang phòng khám đa khoa.</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Kiểm duyệt y khoa:</span>
                    <span className="text-slate-600 mt-0.5 block">Rà soát các bài viết chuyên khoa trọng điểm để bổ sung tên bác sĩ duyệt.</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Hồ sơ bác sĩ:</span>
                    <span className="text-slate-600 mt-0.5 block">Tách trang độc lập, sửa lỗi trỏ nhầm canonical.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-700">Nhóm 2</div>
                  <h4 className="mt-1 text-lg font-bold text-slate-950">Khả năng tìm thấy</h4>
                </div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed divide-y divide-slate-100">
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Lượt tìm kiếm tự nhiên:</span>
                    <span className="text-slate-600 mt-0.5 block">Đo qua Search Console (mốc tham khảo bên thứ ba ~69K/tháng).</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Trích dẫn trên AI:</span>
                    <span className="text-slate-600 mt-0.5 block">Theo dõi tần suất xuất hiện trên Google AI và ChatGPT.</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Bản đồ Google Maps:</span>
                    <span className="text-slate-600 mt-0.5 block">Đo lượt xem và gọi điện từ vị trí cơ sở Quận 1.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Nhóm 3</div>
                  <h4 className="mt-1 text-lg font-bold text-slate-950">Hành vi người bệnh</h4>
                </div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed divide-y divide-slate-100">
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Bấm gọi Hotline:</span>
                    <span className="text-slate-600 mt-0.5 block">Cài mã theo dõi số lượt bấm gọi trên website.</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Gửi form đặt hẹn:</span>
                    <span className="text-slate-600 mt-0.5 block">Đo số lượt gửi form hoàn tất mỗi tuần.</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Bệnh nhân đến khám:</span>
                    <span className="text-slate-600 mt-0.5 block">Đối chiếu dữ liệu web với sổ tiếp nhận thực tế tại viện.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-700">Nhóm 4</div>
                  <h4 className="mt-1 text-lg font-bold text-slate-950">Dịch vụ thế mạnh</h4>
                </div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed divide-y divide-slate-100">
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Đo đa ký giấc ngủ:</span>
                    <span className="text-slate-600 mt-0.5 block">Đo số lượt đọc và gửi tư vấn về ngáy/ngưng thở khi ngủ.</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Bệnh nhân nước ngoài:</span>
                    <span className="text-slate-600 mt-0.5 block">Theo dõi lượng truy cập trang tiếng Anh (/english).</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-slate-950 block">Bảo lãnh viện phí:</span>
                    <span className="text-slate-600 mt-0.5 block">Đo lượt xem danh sách 35 hãng bảo hiểm liên kết.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 text-sm leading-relaxed text-slate-700">
              <strong className="text-slate-950 font-bold">Lưu ý về số liệu:</strong> Đây là <em>khung đo lường đề xuất</em>. Báo cáo không tự đặt ra các chỉ tiêu cam kết (KPI) về doanh thu hay số lượt khám cụ thể khi chưa có số đo xác thực từ Google Analytics 4, Search Console và dữ liệu vận hành phòng khám.
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 6: GLOSSARY                                                       */}
        {/* ========================================================================= */}
        <section className="border-t border-slate-200/80 bg-slate-50/40 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                <HelpCircle className="h-5 w-5 text-brand-700" />
                Giải thích nhanh từ ngữ kỹ thuật
              </div>
              <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">
                Các từ ngữ này có ý nghĩa gì đối với việc vận hành bệnh viện?
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Tóm tắt ngắn gọn để Ban Giám Đốc dễ nắm bắt khi làm việc với đội ngũ kỹ thuật:
              </p>
            </div>

            <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200 text-sm">
              {[
                {
                  term: 'Thẻ Canonical là gì?',
                  tech: 'Thẻ chỉ định bản gốc trang web',
                  impact: 'Là cách báo cho Google biết trang nào là trang gốc của bác sĩ. Nếu cấu hình nhầm, Google sẽ coi trang của bác sĩ là bản sao chép rồi ẩn đi khi người bệnh tìm kiếm.'
                },
                {
                  term: 'Tiêu chuẩn E-E-A-T là gì?',
                  tech: 'Tiêu chuẩn đánh giá độ tin cậy nội dung y tế của Google',
                  impact: 'Google yêu cầu các bài viết sức khỏe phải có bác sĩ thật phụ trách và kiểm duyệt. Nếu không có tên bác sĩ, Google sẽ hạ thứ hạng bài viết xuống.'
                },
                {
                  term: 'Tối ưu cho AI (GEO) là gì?',
                  tech: 'Cách viết bài để các công cụ AI (như ChatGPT, Google) dễ đọc',
                  impact: 'Người bệnh ngày nay hay hỏi thẳng AI. Viết câu trả lời súc tích ở đầu bài giúp bệnh viện được AI trích dẫn làm câu trả lời uy tín.'
                },
                {
                  term: 'Tốc độ tải trang (Core Web Vitals) là gì?',
                  tech: 'Thời gian mở trang web trên điện thoại',
                  impact: 'Nếu mở web trên điện thoại chậm quá 3 giây, hơn một nửa người bệnh sẽ tắt đi để tìm bệnh viện hoặc phòng khám khác.'
                },
              ].map((item, index) => (
                <div key={index} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left font-bold text-base sm:text-lg text-slate-950 transition hover:text-brand-700"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200/70 text-xs font-black text-slate-800">
                        ?
                      </span>
                      {item.term}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="mt-3 rounded-xl bg-white p-5 border border-slate-200 space-y-2.5 text-sm leading-relaxed text-slate-700 animate-in fade-in duration-200">
                      <div className="text-slate-500">
                        <strong className="text-slate-700">Kỹ thuật gọi là:</strong> {item.tech}
                      </div>
                      <div>
                        <strong className="text-emerald-800">Ý nghĩa thực tế:</strong> {item.impact}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: SUMMARY & SCOPE                                                */}
        {/* ========================================================================= */}
        <section className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-300">
                Phạm vi báo cáo
              </span>
              <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Audit hiện trạng & Đề xuất Kế hoạch Tăng trưởng
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                Kế hoạch này dừng lại ở việc nhận diện các điểm lỗi kỹ thuật, mâu thuẫn thương hiệu và đứt gãy luồng thông tin trên website hiện tại. Các chỉ tiêu cam kết cụ thể sẽ chỉ được xác lập sau khi Ban Giám Đốc phê duyệt phạm vi và kết nối dữ liệu đo lường thực tế từ Search Console và hệ thống phòng khám.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/dat-hen-kham-benh"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-xs transition hover:bg-brand-500"
                >
                  <span>Xem mẫu giao diện đặt hẹn</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/english"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Globe2 className="h-4 w-4 text-sky-400" />
                  <span>Xem mẫu phân hệ tiếng Anh</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Note */}
      <footer className="mx-auto max-w-7xl px-4 py-12 text-center text-sm text-slate-500 sm:px-6 lg:px-8 print:hidden">
        <div>Báo cáo hiện trạng website • Bệnh Viện Tai Mũi Họng Sài Gòn (1-3 Trịnh Văn Cấn, P. Cầu Ông Lãnh, Quận 1, TP.HCM)</div>
      </footer>

    </div>
  )
}
