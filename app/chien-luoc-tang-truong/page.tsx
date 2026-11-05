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
  Globe2
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
    <div className="min-h-screen bg-slate-50/60 pb-20 text-slate-800 antialiased print:bg-white print:pb-0">
      
      {/* Sticky Tab Navigation Bar */}
      <div 
        style={{ top: `${navbarHeight}px` }}
        className="sticky z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs print:hidden transition-all duration-150"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <nav className="flex space-x-1.5 overflow-x-auto py-2.5 no-scrollbar" aria-label="Mục lục báo cáo">
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
                className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center pl-4 shrink-0">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50 hover:text-slate-900"
              title="In báo cáo hoặc lưu file PDF"
            >
              <Printer className="h-3.5 w-3.5 text-slate-500" />
              <span>In PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              <Compass className="h-3.5 w-3.5 text-brand-700" />
              Báo cáo đánh giá website & Kế hoạch cải thiện
            </div>

            <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl leading-tight">
              Website đang gặp vấn đề gì và cần làm gì tiếp theo?
            </h1>

            <p className="text-sm text-slate-600 md:text-base leading-relaxed">
              Báo cáo tóm tắt cho Ban Giám Đốc: Website hiện đang vướng những lỗi gì, ảnh hưởng ra sao đến việc người bệnh tìm kiếm và đặt lịch khám, cùng kế hoạch xử lý từng bước rõ ràng.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        
        {/* ========================================================================= */}
        {/* SECTION 1: EXECUTIVE SUMMARY                                              */}
        {/* ========================================================================= */}
        <section id="overview" className="mb-14 scroll-mt-44 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Building2 className="h-4 w-4" />
              Phần 1 • Tóm tắt tình trạng hiện tại
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Nội dung và bác sĩ đều có sẵn, nhưng website chưa giúp người bệnh dễ đặt khám
            </h2>
          </div>

          {/* 3 Executive Takeaways */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-xs font-black text-emerald-700">
                01
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-950">Đã có nền tảng tốt</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Website hoạt động từ năm 2007, có hơn <strong>2.200 bài viết y khoa</strong> và đội ngũ hơn <strong>80 bác sĩ chuyên khoa</strong> tại Quận 1. Đây là thế mạnh lớn so với các đơn vị mới.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-xs font-black text-amber-700">
                02
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-950">Vấn đề đang gặp phải</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tên bệnh viện bị lẫn lộn giữa bệnh viện và phòng khám; bài viết phân tán và thiếu tên bác sĩ duyệt; khu vực tiếng Anh chưa hoàn chỉnh khiến người nước ngoài khó đặt hẹn.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-xs font-black text-brand-700">
                03
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-950">Cách làm thực tế</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sửa các lỗi kỹ thuật trước, thống nhất thông tin bệnh viện và bác sĩ, sắp xếp bài viết theo từng nhóm bệnh, rồi đo lượt gọi và lượt đặt hẹn thực tế.
              </p>
            </div>
          </div>

          {/* Key Numbers Grid */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Số liệu hiện có trên website</div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
              <div className="p-6">
                <div className="text-xs font-semibold text-slate-500">Bài viết y khoa</div>
                <div className="mt-2 text-3xl font-black tracking-tight text-slate-950">2.212</div>
                <div className="mt-1 text-xs text-slate-600">Cần gom nhóm và cập nhật lại</div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-slate-500">Đội ngũ bác sĩ</div>
                <div className="mt-2 text-3xl font-black tracking-tight text-brand-700">80+</div>
                <div className="mt-1 text-xs text-slate-600">Cần trang riêng cho từng bác sĩ</div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-slate-500">Lượt vào từ Google</div>
                <div className="mt-2 text-3xl font-black tracking-tight text-emerald-700">64.5%</div>
                <div className="mt-1 text-xs text-slate-600">Kênh người bệnh tìm đến chính</div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-slate-500">Hãng bảo hiểm đối tác</div>
                <div className="mt-2 text-3xl font-black tracking-tight text-sky-700">35+</div>
                <div className="mt-1 text-xs text-slate-600">Cần làm rõ quyền lợi bảo lãnh</div>
              </div>
            </div>
          </div>

          {/* Market & Patient Journey */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">So sánh lượng người xem</span>
              <h3 className="mt-2 text-xl font-black text-slate-950">Lượng người vào web so với các bệnh viện khác</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Lượng người vào website hiện thấp hơn các bệnh viện đa khoa lớn. Hướng đi đúng không phải chạy đua viết thêm bài lan man, mà tập trung vào các dịch vụ mũi nhọn: Mũi xoang, Amidan, Ù tai, Đo giấc ngủ và Phẫu thuật.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { name: 'Bệnh Viện Tai Mũi Họng Sài Gòn (Hiện tại)', traffic: '69.2K lượt/tháng', width: '25%', current: true },
                  { name: 'Bệnh viện Nam Sài Gòn', traffic: '119K lượt/tháng', width: '35%', current: false },
                  { name: 'Bệnh viện Hồng Ngọc', traffic: '258K lượt/tháng', width: '45%', current: false },
                  { name: 'Bệnh viện Tâm Anh', traffic: '3.6M lượt/tháng', width: '80%', current: false },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className={item.current ? 'font-bold text-brand-700' : 'text-slate-600'}>
                        {item.name}
                      </span>
                      <span className="font-bold text-slate-900">{item.traffic}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.current ? 'bg-brand-700' : 'bg-slate-300'}`}
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600">
                <strong className="text-slate-900 font-bold">Mục tiêu cốt lõi:</strong> Giúp người đang có triệu chứng tai mũi họng tìm thấy đúng thông tin và dễ dàng bấm gọi hoặc đặt lịch khám.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Hành trình người bệnh</span>
              <h3 className="mt-2 text-xl font-black text-slate-950">Người bệnh đang gặp khó khăn ở những bước nào?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Thực tế khi một người tìm kiếm thông tin và muốn đặt khám:
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50/60 p-3.5 text-xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-200 text-rose-800 font-bold">1</div>
                  <div>
                    <strong className="text-rose-950 font-bold">Khi tìm kiếm:</strong> Thấy website nhưng Google ghi là "Phòng khám Đa khoa", người bệnh băn khoăn về chuyên môn sâu.
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/60 p-3.5 text-xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold">2</div>
                  <div>
                    <strong className="text-amber-950 font-bold">Khi đọc bài:</strong> Bài viết chưa để rõ bác sĩ nào duyệt nội dung, người bệnh chưa thật sự yên tâm.
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/60 p-3.5 text-xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-amber-800 font-bold">3</div>
                  <div>
                    <strong className="text-amber-950 font-bold">Khi tìm bác sĩ:</strong> Bấm vào xem bác sĩ thì bị chuyển nhầm trang hoặc không thấy lịch khám cụ thể.
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/60 p-3.5 text-xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-200 text-brand-800 font-bold">4</div>
                  <div>
                    <strong className="text-brand-950 font-bold">Khi muốn đặt hẹn:</strong> Người nước ngoài không tìm thấy trang tiếng Anh hoàn chỉnh; form đặt hẹn còn rườm rà.
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                Mục tiêu: Sửa 4 điểm này để tăng số lượt người bệnh liên hệ và đến khám.
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: 4 THINGS TO DO                                                 */}
        {/* ========================================================================= */}
        <section id="pillars" className="mb-14 scroll-mt-44 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Target className="h-4 w-4" />
              Phần 2 • 4 việc cần làm để cải thiện
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Tập trung vào thông tin rõ ràng và giúp người bệnh dễ đặt khám
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Mỗi việc giải quyết một vấn đề cụ thể, dễ theo dõi và thực hiện được ngay.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* PILLAR 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700 font-black">
                  01
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">Việc 1</span>
                  <h3 className="text-lg font-bold text-slate-950">Thống nhất tên Bệnh viện & làm rõ thông tin Bác sĩ</h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <div className="font-bold text-slate-900">Điều đang xảy ra:</div>
                  <p className="text-slate-600">
                    Một số nơi trên website vẫn ghi là phòng khám đa khoa; hồ sơ của nhiều bác sĩ trỏ nhầm sang người khác, thiếu bằng cấp và lịch khám chi tiết.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="font-bold text-slate-900">Ảnh hưởng:</div>
                  <p className="text-slate-600">
                    Người bệnh và Google bị nhầm lẫn; người quen tìm đích danh bác sĩ không thấy thông tin chính thức của bệnh viện.
                  </p>
                </div>

                <div>
                  <div className="font-bold text-emerald-800">Cách xử lý:</div>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Dùng thống nhất tên duy nhất: <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> trên toàn bộ website.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Tạo trang giới thiệu riêng cho từng bác sĩ, ghi rõ chuyên khoa, kinh nghiệm và lịch khám.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILLAR 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 font-black">
                  02
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">Việc 2</span>
                  <h3 className="text-lg font-bold text-slate-950">Sắp xếp lại bài viết theo từng nhóm bệnh</h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <div className="font-bold text-slate-900">Điều đang xảy ra:</div>
                  <p className="text-slate-600">
                    Hơn 1.500 câu hỏi ngắn nằm rời rạc (hơn 80 bài cùng viết về ù tai, 120 bài về xoang nhưng nội dung lặp lại). Đầu bài thiếu đoạn tóm tắt ngắn.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="font-bold text-slate-900">Ảnh hưởng:</div>
                  <p className="text-slate-600">
                    Người đọc khó tìm thấy câu trả lời đầy đủ; khi người bệnh hỏi các công cụ tìm kiếm hoặc AI, website ít được trích dẫn làm câu trả lời chính.
                  </p>
                </div>

                <div>
                  <div className="font-bold text-emerald-800">Cách xử lý:</div>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Gom bài viết vào <strong>6 nhóm chuyên khoa chính</strong> (Mũi Xoang, Amidan, Ù Tai - Thính Học, Đo Giấc Ngủ, TMH Nhi, Phẫu thuật).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Đầu mỗi bài có đoạn tóm tắt 50 từ dễ hiểu và để rõ tên bác sĩ kiểm duyệt nội dung.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILLAR 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 font-black">
                  03
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">Việc 3</span>
                  <h3 className="text-lg font-bold text-slate-950">Làm riêng trang tiếng Anh cho người nước ngoài</h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <div className="font-bold text-slate-900">Điều đang xảy ra:</div>
                  <p className="text-slate-600">
                    Khu vực tiếng Anh hiện chỉ có vài bài viết dịch sơ sài, menu vẫn là tiếng Việt, chưa có thông tin về quy trình khám và thanh toán bảo hiểm quốc tế.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="font-bold text-slate-900">Ảnh hưởng:</div>
                  <p className="text-slate-600">
                    Người nước ngoài sống tại Quận 1, Quận 2, Quận 7 hoặc khách du lịch khó tìm hiểu thông tin và bỏ sang các phòng khám khác.
                  </p>
                </div>

                <div>
                  <div className="font-bold text-emerald-800">Cách xử lý:</div>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Xây dựng trang tiếng Anh riêng tại <strong>/english</strong> với 100% tiếng Anh chuẩn xác.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Nêu rõ quy trình đón tiếp, bảo lãnh viện phí hơn 35 hãng bảo hiểm và xuất hồ sơ y khoa bằng tiếng Anh.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILLAR 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-black">
                  04
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Việc 4</span>
                  <h3 className="text-lg font-bold text-slate-950">Tải trang nhanh trên điện thoại & đặt hẹn dễ hơn</h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <div className="font-bold text-slate-900">Điều đang xảy ra:</div>
                  <p className="text-slate-600">
                    Mở trang trên điện thoại còn chậm do nhiều ảnh dung lượng lớn; form đặt hẹn chưa gợi ý chuyên khoa theo triệu chứng ban đầu.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="font-bold text-slate-900">Ảnh hưởng:</div>
                  <p className="text-slate-600">
                    Người bệnh chờ lâu dễ tắt trang; bộ phận tiếp nhận mất nhiều thời gian gọi điện hỏi lại thông tin.
                  </p>
                </div>

                <div>
                  <div className="font-bold text-emerald-800">Cách xử lý:</div>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Nén ảnh để mở trang dưới 1 giây trên điện thoại 4G/5G.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                      <span>Rút gọn form đặt hẹn thành 3 bước đơn giản, tự gợi ý đúng bác sĩ phù hợp với triệu chứng.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 3: BEFORE VS AFTER COMPARISON                                     */}
        {/* ========================================================================= */}
        <section id="comparison" className="mb-14 scroll-mt-44 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Activity className="h-4 w-4" />
              Phần 3 • So sánh website trước và sau khi làm
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Những điểm khác biệt cụ thể giữa bản cũ và bản mới
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Bảng đối chiếu trực tiếp các phần việc cụ thể:
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-12 md:divide-x md:divide-y-0">
              
              {/* Header column */}
              <div className="hidden bg-slate-50/80 p-4 text-xs font-bold uppercase tracking-wider text-slate-500 md:col-span-3 md:block">
                Hạng mục
              </div>
              <div className="bg-rose-50/50 p-4 text-xs font-bold uppercase tracking-wider text-rose-800 md:col-span-4">
                Hiện trạng cũ (Cần sửa)
              </div>
              <div className="bg-emerald-50/50 p-4 text-xs font-bold uppercase tracking-wider text-emerald-800 md:col-span-5">
                Sau khi sửa (Chuẩn mới)
              </div>

              {/* Row 1: Brand & Entity */}
              <div className="p-4 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-sm">
                1. Tên bệnh viện
              </div>
              <div className="p-4 text-sm leading-6 text-slate-600 md:col-span-4">
                Lẫn lộn giữa Phòng khám Đa khoa và Bệnh viện; thông tin trên Google chưa thống nhất.
              </div>
              <div className="p-4 text-sm leading-6 text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                Thống nhất duy nhất tên <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> trên toàn bộ website và bản đồ.
              </div>

              {/* Row 2: Doctors Profile */}
              <div className="p-4 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-sm">
                2. Hồ sơ Bác sĩ
              </div>
              <div className="p-4 text-sm leading-6 text-slate-600 md:col-span-4">
                Hồ sơ bị gộp chung hoặc trỏ nhầm link; thiếu bằng cấp và lịch khám rõ ràng.
              </div>
              <div className="p-4 text-sm leading-6 text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                Mỗi bác sĩ có <strong>trang hồ sơ riêng</strong>, hiển thị đầy đủ chuyên khoa, kinh nghiệm và nút đặt lịch trực tiếp.
              </div>

              {/* Row 3: Content Structure */}
              <div className="p-4 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-sm">
                3. Bài viết y khoa
              </div>
              <div className="p-4 text-sm leading-6 text-slate-600 md:col-span-4">
                1.517 bài hỏi đáp ngắn nằm rời rạc; chưa ghi rõ bác sĩ nào duyệt nội dung.
              </div>
              <div className="p-4 text-sm leading-6 text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                Gom theo <strong>6 nhóm chuyên khoa</strong>; 100% bài viết có <strong>tên bác sĩ kiểm duyệt</strong> và đoạn tóm tắt dễ hiểu ở đầu bài.
              </div>

              {/* Row 4: International Patients */}
              <div className="p-4 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-sm">
                4. Trang tiếng Anh
              </div>
              <div className="p-4 text-sm leading-6 text-slate-600 md:col-span-4">
                Chỉ có vài bài dịch sơ sài, menu vẫn tiếng Việt, thiếu thông tin bảo lãnh bảo hiểm.
              </div>
              <div className="p-4 text-sm leading-6 text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                <strong>Trang tiếng Anh riêng biệt</strong>, hướng dẫn quy trình đón tiếp và danh sách hơn 35 hãng bảo hiểm hỗ trợ trực tiếp.
              </div>

              {/* Row 5: Booking & Conversion */}
              <div className="p-4 font-bold text-slate-900 md:col-span-3 bg-slate-50/40 text-sm">
                5. Đặt hẹn và đo lường
              </div>
              <div className="p-4 text-sm leading-6 text-slate-600 md:col-span-4">
                Chưa biết bài viết nào mang lại cuộc gọi và lịch khám; form đặt hẹn chưa gợi ý chuyên khoa.
              </div>
              <div className="p-4 text-sm leading-6 text-slate-800 md:col-span-5 font-medium bg-emerald-50/20">
                Đo được từ lúc người bệnh xem bài đến số ca khám thực tế; form gợi ý đúng bác sĩ phù hợp với triệu chứng.
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 4: PHASED ROADMAP                                                 */}
        {/* ========================================================================= */}
        <section id="roadmap" className="mb-14 scroll-mt-44 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Clock className="h-4 w-4" />
              Phần 4 • Kế hoạch triển khai theo từng tuần
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Thứ tự ưu tiên các việc cần làm
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Làm việc quan trọng trước để không gián đoạn hoạt động khám chữa bệnh thường nhật.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Phase 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-700">Tuần 1 - 2 (Làm trước)</div>
                <h3 className="mt-1 text-lg font-bold text-slate-950">Sửa lỗi tìm kiếm & Thống nhất tên bệnh viện</h3>
              </div>

              <div className="mt-4 space-y-3 text-xs leading-5 text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sửa các đường dẫn bị lỗi và danh mục bài gửi cho Google.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Đổi lại đúng tên: <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> trên các trang.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tách trang hồ sơ riêng cho 18 bác sĩ chủ chốt.</span>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-900">
                Kết quả: Google nhận diện đúng tên bệnh viện và bác sĩ, không còn lỗi kỹ thuật.
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Tuần 3 - 6 (Làm tiếp theo)</div>
                <h3 className="mt-1 text-lg font-bold text-slate-950">Sắp xếp lại bài viết & Hoàn thiện trang tiếng Anh</h3>
              </div>

              <div className="mt-4 space-y-3 text-xs leading-5 text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gom các bài hỏi đáp vào 6 nhóm chuyên khoa; thêm tên bác sĩ duyệt.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Hoàn thiện trang tiếng Anh cho người nước ngoài và danh sách bảo hiểm.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Nén ảnh để trang mở nhanh trên điện thoại (dưới 1 giây).</span>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-900">
                Kết quả: Người bệnh đọc bài thấy tin cậy hơn, người nước ngoài có trang đặt hẹn rõ ràng.
              </div>
            </div>

            {/* Phase 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Tuần 7 - 12 (Đo lường & Mở rộng)</div>
                <h3 className="mt-1 text-lg font-bold text-slate-950">Tối ưu tìm kiếm bản đồ & Đo lường thực tế</h3>
              </div>

              <div className="mt-4 space-y-3 text-xs leading-5 text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cập nhật vị trí bệnh viện trên Google Map ở Quận 1 và các quận lân cận.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Đẩy mạnh các dịch vụ mũi nhọn: Đo giấc ngủ, phẫu thuật xoang, nạo VA.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Báo cáo số cuộc gọi và số lượt đặt lịch thực tế hàng tháng.</span>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-900">
                Kết quả: Nắm rõ hiệu quả thực tế và số ca khám mang lại từ kênh trực tuyến.
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 5: MEASUREMENT FRAMEWORK (NO HALLUCINATED TARGETS)                */}
        {/* ========================================================================= */}
        <section id="kpis" className="mb-14 scroll-mt-44 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Activity className="h-4 w-4" />
              Phần 5 • Đề xuất Khung đo lường hiệu quả (Measurement Framework)
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Các chỉ số cần cài đặt theo dõi sau khi sửa website
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Báo cáo này dừng lại ở việc <strong>Audit hiện trạng</strong> và <strong>Đề xuất Kế hoạch Tăng trưởng</strong>. Chúng tôi không tự đưa ra các con số cam kết (KPI) ảo trước khi kết nối dữ liệu đo lường thực tế từ Search Console, Google Analytics 4 và hệ thống quản lý bệnh nhân của bệnh viện.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            
            {/* KPI 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700">Nhóm 1</div>
              <h4 className="mt-1 text-base font-bold text-slate-950">Chuẩn hóa thông tin</h4>
              <div className="mt-3 space-y-2.5 text-xs text-slate-600">
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Tên bệnh viện trên Google:</span>
                  <span className="text-slate-500 mt-0.5 block">Sửa dứt điểm lỗi hiển thị nhầm sang phòng khám đa khoa.</span>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Kiểm duyệt y khoa:</span>
                  <span className="text-slate-500 mt-0.5 block">Rà soát 204 bài mũi nhọn để bổ sung tên bác sĩ duyệt.</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Hồ sơ bác sĩ:</span>
                  <span className="text-slate-500 mt-0.5 block">Tách trang độc lập, sửa lỗi trỏ nhầm canonical.</span>
                </div>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-700">Nhóm 2</div>
              <h4 className="mt-1 text-base font-bold text-slate-950">Khả năng tìm thấy</h4>
              <div className="mt-3 space-y-2.5 text-xs text-slate-600">
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Lượt tìm kiếm tự nhiên:</span>
                  <span className="text-slate-500 mt-0.5 block">Đo qua Search Console (mốc tham khảo bên thứ ba ~69K/tháng).</span>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Trích dẫn trên AI:</span>
                  <span className="text-slate-500 mt-0.5 block">Theo dõi tần suất xuất hiện trên Google AI và ChatGPT.</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Bản đồ Google Maps:</span>
                  <span className="text-slate-500 mt-0.5 block">Đo lượt xem và gọi điện từ vị trí cơ sở Quận 1.</span>
                </div>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Nhóm 3</div>
              <h4 className="mt-1 text-base font-bold text-slate-950">Hành vi người bệnh</h4>
              <div className="mt-3 space-y-2.5 text-xs text-slate-600">
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Bấm gọi Hotline:</span>
                  <span className="text-slate-500 mt-0.5 block">Cài mã theo dõi số lượt bấm gọi trên website.</span>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Gửi form đặt hẹn:</span>
                  <span className="text-slate-500 mt-0.5 block">Đo số lượt gửi form hoàn tất mỗi tuần.</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Bệnh nhân đến khám:</span>
                  <span className="text-slate-500 mt-0.5 block">Đối chiếu dữ liệu web với sổ tiếp nhận thực tế tại viện.</span>
                </div>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700">Nhóm 4</div>
              <h4 className="mt-1 text-base font-bold text-slate-950">Dịch vụ thế mạnh</h4>
              <div className="mt-3 space-y-2.5 text-xs text-slate-600">
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Đo đa ký giấc ngủ:</span>
                  <span className="text-slate-500 mt-0.5 block">Đo số lượt đọc và gửi tư vấn về ngáy/ngưng thở khi ngủ.</span>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Bệnh nhân nước ngoài:</span>
                  <span className="text-slate-500 mt-0.5 block">Theo dõi lượng truy cập trang tiếng Anh (/english).</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Bảo lãnh viện phí:</span>
                  <span className="text-slate-500 mt-0.5 block">Đo lượt xem danh sách 35 hãng bảo hiểm liên kết.</span>
                </div>
              </div>
            </div>

          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
            <strong className="text-slate-900 font-bold">Lưu ý về số liệu:</strong> Đây là <em>khung đo lường đề xuất</em>. Báo cáo không tự đặt ra các chỉ tiêu cam kết (KPI) về doanh thu hay số lượt khám cụ thể khi chưa có số đo xác thực từ Google Analytics 4, Search Console và dữ liệu vận hành phòng khám.
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 6: GLOSSARY                                                       */}
        {/* ========================================================================= */}
        <section className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <HelpCircle className="h-4 w-4 text-brand-700" />
              Giải thích nhanh từ ngữ kỹ thuật
            </div>
            <h3 className="mt-2 text-xl font-black text-slate-950">
              Các từ ngữ này có ý nghĩa gì đối với việc vận hành bệnh viện?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tóm tắt ngắn gọn để Ban Giám Đốc dễ nắm bắt khi làm việc với đội ngũ kỹ thuật:
            </p>
          </div>

          <div className="mt-6 divide-y divide-slate-100 border-t border-slate-100 text-sm">
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
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left font-bold text-slate-900 transition hover:text-brand-700"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-black text-slate-700">
                      ?
                    </span>
                    {item.term}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-4 w-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="mt-3 rounded-xl bg-slate-50 p-4 space-y-2 text-xs leading-relaxed text-slate-700 animate-in fade-in duration-200">
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
        </section>


        {/* ========================================================================= */}
        {/* SECTION 7: SUMMARY & SCOPE                                                */}
        {/* ========================================================================= */}
        <section className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-white shadow-md">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
              Phạm vi báo cáo
            </span>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Audit hiện trạng & Đề xuất Kế hoạch Tăng trưởng
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Kế hoạch này dừng lại ở việc nhận diện các điểm lỗi kỹ thuật, mâu thuẫn thương hiệu và đứt gãy luồng thông tin trên website hiện tại. Các chỉ tiêu cam kết cụ thể sẽ chỉ được xác lập sau khi Ban Giám Đốc phê duyệt phạm vi và kết nối dữ liệu đo lường thực tế từ Search Console và hệ thống phòng khám.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/dat-hen-kham-benh"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-xs font-bold text-white shadow transition hover:bg-brand-500"
              >
                <span>Xem mẫu giao diện đặt hẹn</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/english"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10"
              >
                <Globe2 className="h-4 w-4 text-sky-400" />
                <span>Xem mẫu phân hệ tiếng Anh</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Note */}
      <footer className="mx-auto max-w-7xl px-4 pt-12 text-center text-xs text-slate-400 sm:px-6 print:hidden">
        <div>Báo cáo hiện trạng website • Bệnh Viện Tai Mũi Họng Sài Gòn (1-3 Trịnh Văn Cấn, P. Cầu Ông Lãnh, Quận 1, TP.HCM)</div>
      </footer>

    </div>
  )
}
