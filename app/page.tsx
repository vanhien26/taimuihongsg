'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Baby,
  BedDouble,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Ear,
  FileText,
  MapPin,
  Moon,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  Volume2,
  Wind,
} from 'lucide-react'

interface PageProps {
  onOpenBooking?: (specialty?: string) => void
}

const patientActions = [
  {
    title: 'Tra cứu bác sĩ',
    description: 'Xem lý lịch khoa học, chuyên môn sâu và số CCHN của 80+ bác sĩ.',
    href: '/doi-ngu-bac-si',
    icon: Users,
    badge: '80+ Bác sĩ',
  },
  {
    title: 'Dịch vụ chuyên khoa',
    description: 'Tìm hiểu danh mục khám Tai, Mũi, Họng, Thính học và Phẫu thuật.',
    href: '/chuyen-khoa',
    icon: Stethoscope,
    badge: 'Đúng bệnh lý',
  },
  {
    title: 'Bảo lãnh viện phí',
    description: 'Quy trình tiếp nhận, hồ sơ bảo lãnh trực tiếp và bảng giá công khai.',
    href: '/thu-vien-kien-thuc-y-hoc',
    icon: ShieldCheck,
    badge: '30+ Bảo hiểm',
  },
]

const specialties = [
  {
    name: 'Tai và Thính học',
    summary: 'Khám giảm thính lực, ù tai, chóng mặt, đo thính lực và điều trị các bệnh lý tai giữa, tai trong.',
    icon: Ear,
    booking: 'Tai - Thính học',
    href: '/chuyen-khoa#tai-thinh-hoc',
    accent: 'border-sky-200 hover:border-sky-400',
  },
  {
    name: 'Mũi và Xoang',
    summary: 'Nội soi chẩn đoán viêm xoang cấp - mạn, polyp mũi, viêm mũi dị ứng và vẹo lệch vách ngăn.',
    icon: Wind,
    booking: 'Mũi - Xoang',
    href: '/chuyen-khoa#mui-xoang',
    accent: 'border-blue-200 hover:border-blue-400',
  },
  {
    name: 'Họng và Thanh quản',
    summary: 'Khám đau rát họng, khàn tiếng, viêm amidan, nội soi hoạt nghiệm hoạt động dây thanh quản.',
    icon: Volume2,
    booking: 'Họng - Thanh quản',
    href: '/chuyen-khoa#hong-thanh-quan',
    accent: 'border-indigo-200 hover:border-indigo-400',
  },
  {
    name: 'Tai Mũi Họng Trẻ Em',
    summary: 'Khu khám thân thiện, đội ngũ bác sĩ giàu kinh nghiệm điều trị VA, viêm tai giữa, viêm amidan ở trẻ.',
    icon: Baby,
    booking: 'Tai Mũi Họng Nhi',
    href: '/chuyen-khoa#tmh-nhi',
    accent: 'border-emerald-200 hover:border-emerald-400',
  },
  {
    name: 'Đo Đa Ký Giấc Ngủ',
    summary: 'Chẩn đoán chính xác hội chứng ngưng thở khi ngủ (OSA), ngáy to mạn tính và rối loạn giấc ngủ.',
    icon: Moon,
    booking: 'Đo Đa ký giấc ngủ',
    href: '/do-da-ki-giac-ngu',
    accent: 'border-purple-200 hover:border-purple-400',
  },
  {
    name: 'Phẫu Thuật và Nội Trú',
    summary: 'Hệ thống phòng mổ vô trùng áp lực dương, trang thiết bị đồng bộ, chăm sóc hậu phẫu chu đáo.',
    icon: BedDouble,
    booking: 'Phẫu thuật và nội trú',
    href: '/chuyen-khoa/khoa-phau-thuat-tai-mui-hong',
    accent: 'border-teal-200 hover:border-teal-400',
  },
]

const featuredDoctors = [
  {
    name: 'TS.BS.CKII Hoàng Lương',
    role: 'Bác sĩ Chuyên Gia - Nhà Sáng Lập BV',
    department: 'Ban Giám Đốc • Thầy thuốc Ưu tú',
    specialty: 'Phẫu thuật Thần kinh thị giác, Nội soi Mũi Xoang & Đầu Cổ',
    cchn: '001078/HCM - CCHN',
    image: 'https://taimuihongsg.com/wp-content/uploads/2016/06/1.png',
    slug: 'ts-bs-ckii-hoang-luong',
  },
  {
    name: 'BS.CKII Đỗ Kỳ Nhật',
    role: 'Bác sĩ Cao Cấp - Giám Đốc Bệnh Viện',
    department: 'Ban Giám Đốc',
    specialty: 'Phẫu tích Xương Thái Dương & Phẫu thuật Cấy Điện Ốc Tai',
    cchn: '005011/HCM-CCHN',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/7.png',
    slug: 'bs-ckii-do-ky-nhat',
  },
  {
    name: 'BS.CKII Trịnh Thị Minh Hải',
    role: 'Bác sĩ Cao Cấp - Giám Đốc Khối Đào Tạo',
    department: 'Khối Lâm Sàng & Đào Tạo',
    specialty: 'Nội soi NBI tầm soát sớm ung thư vòm họng & thanh quản',
    cchn: 'Chuyên khoa II TMH',
    image: 'https://taimuihongsg.com/wp-content/uploads/2018/05/19.png',
    slug: 'bs-ckii-trinh-thi-minh-hai',
  },
]

export default function HomePage({ onOpenBooking }: PageProps) {
  const openBooking = (specialty?: string) => onOpenBooking?.(specialty)

  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-slate-50/30 to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-12 gap-8 px-4 py-10 sm:px-6 md:py-16 lg:py-20">
          {/* Hero Left Content */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800 shadow-sm">
              <span>Bệnh Viện Chuyên Khoa Tai Mũi Họng • 19 Năm Uy Tín (2007 - 2026)</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              Thăm khám chuẩn xác, điều trị chuyên sâu cùng đội ngũ chuyên gia đầu ngành
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Bệnh Viện Tai Mũi Họng Sài Gòn quy tụ hơn 80 bác sĩ và chuyên gia giàu kinh nghiệm, sở hữu hệ thống nội soi NBI Olympus & Karl Storz hiện đại, phục vụ người bệnh tận tâm và chuyên nghiệp.
            </p>

            {/* USPs */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {[
                { title: '80+ Bác sĩ & Chuyên gia', desc: 'Tu nghiệp trong & ngoài nước' },
                { title: '10 Phòng nội soi NBI', desc: 'Tầm soát ung thư sớm' },
                { title: 'Bảo lãnh viện phí', desc: 'Hỗ trợ 30+ đơn vị bảo hiểm' },
              ].map((usp) => (
                <div key={usp.title} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white/80 p-3 shadow-xs">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{usp.title}</div>
                    <div className="text-[11px] text-slate-500">{usp.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => openBooking()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-800 hover:shadow-lg active:scale-98"
              >
                <Calendar className="h-4 w-4" />
                <span>Đặt Lịch Khám Ngay</span>
              </button>

              <a
                href="tel:02838213456"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-xs transition-all hover:border-brand-600 hover:bg-brand-50 hover:text-brand-800 active:scale-98"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Tổng Đài (028) 38.213.456</span>
              </a>

              <Link
                href="/chuyen-khoa"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:underline px-2 py-2"
              >
                <span>Xem danh mục dịch vụ</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src="https://taimuihongsg.com/wp-content/uploads/2023/06/doi-ngu-bac-si-chuyen-mon-cao-nhieu-nam-kinh-nghiem.jpeg"
                  alt="Đội ngũ bác sĩ Bệnh Viện Tai Mũi Họng Sài Gòn"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="inline-block rounded-md bg-emerald-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Y Đức • Chất Lượng
                    </span>
                    <h2 className="mt-1 text-sm font-bold text-white drop-shadow-sm">
                      Đội ngũ y bác sĩ Tai Mũi Họng giàu kinh nghiệm
                    </h2>
                  </div>
                </div>
              </div>

              {/* Practical Hospital Info */}
              <div className="p-5 sm:p-6 divide-y divide-slate-100">
                <div className="flex items-start gap-3.5 pb-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Giờ làm việc</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      Thứ 2 - Thứ 7: 07:30 - 20:00 • Chủ Nhật: 08:00 - 12:00
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Cơ sở khám bệnh</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      1 - 3 & 6 - 8 Trịnh Văn Cấn, P. Cầu Ông Lãnh / Bến Thành, Quận 1, TP.HCM
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Bảo lãnh viện phí</div>
                    <div className="text-sm text-slate-700 mt-0.5">
                      Áp dụng trực tiếp với hơn 30 đơn vị bảo hiểm tư nhân & quốc tế.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
            {[
              { value: '19+ Năm', label: 'Hoạt động chuyên khoa', sub: 'Thành lập từ năm 2007' },
              { value: '80+', label: 'Bác sĩ & Chuyên gia', sub: 'Giàu kinh nghiệm lâm sàng' },
              { value: '10 Phòng', label: 'Khám nội soi NBI', sub: 'Công nghệ Olympus & Karl Storz' },
              { value: '42.290+', label: 'Ca phẫu thuật thành công', sub: 'An toàn & thẩm mỹ' },
            ].map((stat, i) => (
              <div key={stat.label} className={`flex flex-col items-center text-center ${i !== 0 ? 'lg:pl-6' : ''}`}>
                <div className="text-2xl font-black tracking-tight text-brand-700 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900">{stat.label}</div>
                <div className="mt-0.5 text-xs text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PATIENT JOURNEY / 3 ACTION PATHS */}
      <section className="bg-slate-900 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {patientActions.map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-6 transition-all hover:border-brand-500 hover:bg-slate-800/80 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-900/60 text-sky-400 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-300">
                        {action.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {action.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {action.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-white">
                    <span>Xem thông tin chi tiết</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. CHUYÊN KHOA & DỊCH VỤ MŨI NHỌN */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Dịch Vụ Lâm Sàng</span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Các chuyên khoa điều trị chuyên sâu
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Khám và điều trị đầy đủ các bệnh lý Tai Mũi Họng người lớn và trẻ em theo quy trình chuẩn y khoa quốc tế.
              </p>
            </div>
            <Link
              href="/chuyen-khoa"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-900"
            >
              <span>Xem tất cả chuyên khoa</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <article
                  key={specialty.name}
                  className={`flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md ${specialty.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Khoa #{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-950">{specialty.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{specialty.summary}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <Link
                      href={specialty.href}
                      className="text-xs font-bold text-brand-700 hover:text-brand-900 hover:underline"
                    >
                      Chi tiết chuyên khoa
                    </Link>
                    <button
                      onClick={() => openBooking(specialty.booking)}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-800 transition-colors hover:bg-brand-700 hover:text-white"
                    >
                      Đặt hẹn khám
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. CÔNG NGHỆ NỘI SOI NBI CHUYÊN SÂU */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: Technology Editorial */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                Khoa Khám & Nội Soi Chuyên Sâu
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl md:text-4xl leading-tight">
                Hệ thống nội soi NBI dải tần hẹp, quan sát đồng thời cả ba vùng Tai - Mũi - Họng
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Khoa sở hữu 10 phòng khám nội soi chuyên dụng với thiết bị nhập khẩu từ Xion (Đức), Karl Storz (Đức) và Olympus (Nhật Bản), hỗ trợ phát hiện sớm các tổn thương tiền ung thư vòm họng và niêm mạc thanh quản.
              </p>

              <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src="https://taimuihongsg.com/wp-content/uploads/2022/11/he-thong-noi-soi-NBI_taimuihongsg-768x456.jpg"
                  alt="Hệ thống nội soi NBI tại Bệnh Viện Tai Mũi Họng Sài Gòn"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="px-4 py-2.5 text-xs text-slate-600 border-t border-slate-200">
                  Hệ thống nội soi NBI Olympus hỗ trợ chẩn đoán chính xác tại Bệnh viện Tai Mũi Họng Sài Gòn
                </figcaption>
              </figure>

              <div className="mt-6">
                <Link
                  href="/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong"
                  className="inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-900"
                >
                  <span>Tìm hiểu quy trình nội soi NBI</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: 4 Capabilities Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                <div className="text-3xl font-extrabold text-brand-700">10 Phòng</div>
                <div className="mt-1 font-bold text-slate-900">Khám nội soi vô trùng</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Quy trình khử trùng ống soi nghiêm ngặt theo chuẩn kiểm soát nhiễm khuẩn của Bộ Y tế.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                <div className="text-3xl font-extrabold text-brand-700">400+</div>
                <div className="mt-1 font-bold text-slate-900">Lượt khách mỗi ngày</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Công suất tiếp nhận lớn, phân luồng khoa học giúp giảm tối đa thời gian chờ đợi.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-700">Công Nghệ NBI</div>
                <div className="mt-1 font-bold text-slate-900">Tầm soát sớm ung thư</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Dải tần ánh sáng hẹp giúp hiển thị rõ mạng lưới vi mạch bất thường tại niêm mạc vòm họng.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                <div className="text-sm font-bold uppercase tracking-wider text-purple-700">Hoạt Nghiệm Dây Thanh</div>
                <div className="mt-1 font-bold text-slate-900">Khảo sát chức năng giọng nói</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Phân tích chi tiết chuyển động sóng rung dây thanh âm ở giáo viên, ca sĩ, MC và người khàn tiếng kéo dài.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUY TRÌNH 4 BƯỚC KHÁM BỆNH */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Hướng Dẫn Bệnh Nhân</span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Quy trình 4 bước đi khám chủ động & nhanh chóng
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Chủ động đăng ký trước giúp người bệnh được ưu tiên sắp xếp khung giờ khám, giảm thời gian chờ đợi và có sự chuẩn bị chu đáo về hồ sơ.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                <img
                  src="https://taimuihongsg.com/wp-content/uploads/2021/10/benh-vien-tai-mui-hong-sai-gon-thanh-lap-tu-2007_taimuihongsg-768x768.jpg"
                  alt="Không gian Bệnh Viện Tai Mũi Họng Sài Gòn"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <div className="text-xs font-bold text-slate-900">Không gian hiện đại, sạch sẽ và an toàn</div>
                  <div className="text-xs text-slate-500 mt-0.5">Cơ sở 1-3, 6-8 Trịnh Văn Cấn, Quận 1</div>
                </div>
              </div>
            </div>

            {/* Stepper (clean responsive layout) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                {
                  number: '01',
                  title: 'Chọn bác sĩ hoặc chuyên khoa',
                  description: 'Tìm hiểu danh sách bác sĩ chuyên khoa hoặc chọn khoa khám theo triệu chứng đang gặp phải.',
                },
                {
                  number: '02',
                  title: 'Đặt hẹn trực tuyến hoặc qua hotline',
                  description: 'Gửi yêu cầu đặt lịch trên website hoặc gọi tổng đài (028) 38.213.456 để chọn ngày giờ phù hợp.',
                },
                {
                  number: '03',
                  title: 'Nhận xác nhận từ bộ phận CSKH',
                  description: 'Nhân viên bệnh viện sẽ liên hệ hướng dẫn chuẩn bị hồ sơ y tế, bảo hiểm và cấp mã tiếp nhận.',
                },
                {
                  number: '04',
                  title: 'Đến khám đúng hẹn theo luồng ưu tiên',
                  description: 'Mang theo CCCD/hộ chiếu, hồ sơ bệnh án cũ và thẻ bảo hiểm để được hỗ trợ thủ tục nhanh chóng.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-colors hover:border-brand-300"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white font-extrabold text-base shadow-sm">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-2 flex items-center justify-end">
                <button
                  onClick={() => openBooking()}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-brand-800"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Bắt đầu đặt lịch ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BẢNG GIÁ THAM KHẢO & BẢO LÃNH VIỆN PHÍ */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full bg-sky-950 px-3 py-1 text-xs font-bold text-sky-400 border border-sky-800">
                Minh Bạch & Rõ Ràng
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
                Chi phí khám nội soi & Bảo lãnh viện phí
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Mức giá dịch vụ được niêm yết công khai theo quy định của Bệnh viện Tai Mũi Họng Sài Gòn. Chi phí có thể thay đổi tùy theo chỉ định cận lâm sàng và phác đồ điều trị của bác sĩ.
              </p>

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                  <span>Bảo lãnh viện phí trực tiếp</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Bệnh viện hợp tác cùng hơn 30 đơn vị bảo hiểm trong nước & quốc tế: Bảo Việt, PVI, Prudential, Manulife, AIA, Dai-ichi Life, PTI, Liberty, Pacific Cross... Khách hàng vui lòng mang thẻ bảo hiểm để được hỗ trợ tra cứu hạn mức ngay tại quầy.
                </p>
              </div>
            </div>

            {/* Right: Pricing Table Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Hạng mục khám nội soi</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Chi phí tham khảo</span>
                </div>

                <div className="divide-y divide-slate-800/80">
                  {[
                    { title: 'Khám với Bác sĩ Tai Mũi Họng', price: '350.000đ', note: 'Bác sĩ chuyên khoa khám & tư vấn' },
                    { title: 'Khám với Bác sĩ Cao Cấp', price: '450.000đ', note: 'Trưởng/Phó khoa, BS.CKII nhiều năm kinh nghiệm' },
                    { title: 'Khám với Bác sĩ Chuyên Gia', price: '600.000đ', note: 'Chuyên gia đầu ngành, Tiến sĩ, Ban cố vấn chuyên môn' },
                    { title: 'Khách hàng Nước Ngoài (Foreigners)', price: '700.000đ', note: 'Thăm khám kèm hỗ trợ ngôn ngữ tiếng Anh' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between gap-4 py-4 sm:py-5">
                      <div>
                        <div className="text-sm sm:text-base font-bold text-white">{item.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.note}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-lg sm:text-xl font-black text-sky-400">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4">
                  <a
                    href="tel:02838213456"
                    className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Xác nhận quyền lợi bảo hiểm qua tổng đài: (028) 38.213.456</span>
                  </a>

                  <Link
                    href="https://taimuihongsg.com/bang-gia-dich-vu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Xem bảng giá đầy đủ →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ĐỘI NGŨ BÁC SĨ CHUYÊN GIA (CHÂN DUNG THỰC TẾ) */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Đội Ngũ Chuyên Môn</span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Bác sĩ chuyên khoa giàu kinh nghiệm
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Quy tụ các chuyên gia Tai Mũi Họng đầu ngành, có đầy đủ Chứng chỉ hành nghề và nhiều năm công tác tại các bệnh viện lớn.
              </p>
            </div>
            <Link
              href="/doi-ngu-bac-si"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-900 shrink-0"
            >
              <span>Xem danh sách 80+ bác sĩ</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredDoctors.map((doctor) => (
              <article
                key={doctor.name}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-brand-400 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                        {doctor.department}
                      </div>
                      <h3 className="mt-1 text-base font-extrabold text-slate-950 group-hover:text-brand-700 transition-colors">
                        {doctor.name}
                      </h3>
                      <div className="text-xs font-medium text-slate-600 mt-0.5">{doctor.role}</div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <div className="text-xs font-semibold text-slate-700">
                      <span className="text-slate-400">Chuyên môn:</span> {doctor.specialty}
                    </div>
                    <div className="mt-1.5 text-[11px] text-slate-500 font-mono">
                      {doctor.cchn}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                  <Link
                    href={`/doi-ngu-bac-si#${doctor.slug}`}
                    className="text-xs font-bold text-brand-700 hover:underline"
                  >
                    Xem lý lịch khoa học
                  </Link>
                  <button
                    onClick={() => openBooking(doctor.name)}
                    className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-800 transition-colors hover:bg-brand-700 hover:text-white"
                  >
                    Đặt khám
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. KIẾN THỨC Y HỌC & BỆNH HỌC */}
      <section className="bg-slate-50 py-16 sm:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Cẩm Nang Sức Khỏe</span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                Kiến thức y học & Lời khuyên chuyên gia
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Nhận biết sớm các triệu chứng nguy hiểm và chủ động thăm khám kịp thời.
              </p>
            </div>
            <Link
              href="/thu-vien-kien-thuc-y-hoc"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-900 shrink-0"
            >
              <span>Xem thư viện kiến thức</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                category: 'Bệnh Về Tai',
                title: 'Điếc đột ngột: 9 dấu hiệu cảnh báo cần nhận biết và cấp cứu trong 72 giờ vàng',
                date: '28/10/2026',
                summary: 'Điếc đột ngột là tình trạng cấp cứu tai mũi họng. Điều trị càng sớm trong giai đoạn vàng, tỷ lệ phục hồi thính lực càng cao.',
              },
              {
                category: 'Họng & Thanh Quản',
                title: 'Khàn tiếng kéo dài trên 2 tuần: Khi nào cần nội soi kiểm tra dây thanh quản?',
                date: '14/10/2026',
                summary: 'Khàn tiếng kéo dài không đơn thuần là cảm lạnh thông thường, có thể là dấu hiệu của hạt xơ, polyp hoặc tổn thương ác tính dây thanh.',
              },
              {
                category: 'Tai Mũi Họng Nhi',
                title: 'Nổi hạch cổ, sau tai ở trẻ em: Nguyên nhân lành tính và các dấu hiệu cần đưa đi khám ngay',
                date: '14/10/2026',
                summary: 'Phân biệt hạch phản ứng do viêm họng, viêm amidan và các trường hợp hạch bệnh lý cần can thiệp y tế chuyên sâu.',
              },
            ].map((article) => (
              <article
                key={article.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-brand-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-brand-700">
                    <span className="rounded-md bg-brand-50 px-2 py-0.5">{article.category}</span>
                    <span className="text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold leading-snug text-slate-950">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                    {article.summary}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <Link
                    href="/thu-vien-kien-thuc-y-hoc"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:underline"
                  >
                    <span>Đọc toàn bộ bài viết</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER (ĐẶT LỊCH HẸN & HOTLINE) */}
      <section className="bg-gradient-to-r from-brand-900 via-navy-900 to-brand-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-300">
                Đăng Ký Khám Chủ Động
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Chăm sóc sức khỏe Tai Mũi Họng toàn diện cho cả gia đình
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                Đặt lịch trực tuyến để chủ động chọn bác sĩ, khung giờ khám và nhận xác nhận tức thì từ phòng khám.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" /> Không phải bốc số chờ đợi lâu
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" /> Bác sĩ chuyên khoa trực tiếp khám
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" /> Bảo lãnh viện phí 30+ bảo hiểm
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => openBooking()}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-900 shadow-lg transition-all hover:bg-brand-50 hover:shadow-xl active:scale-98"
              >
                <Calendar className="h-4 w-4 text-brand-700" />
                <span>Đặt Lịch Khám Ngay</span>
              </button>

              <a
                href="tel:02838213456"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-white/20 active:scale-98"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>(028) 38.213.456</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
