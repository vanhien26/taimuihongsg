'use client'

import Link from 'next/link'
import { ArrowRight, Baby, BedDouble, Calendar, Check, Clock, Ear, MapPin, Moon, Phone, ShieldCheck, Stethoscope, Users, Volume2, Wind } from 'lucide-react'

interface PageProps { onOpenBooking?: (specialty?: string) => void }

const patientActions = [
  { title: 'Tìm bác sĩ', description: 'Xem chuyên môn và đội ngũ bác sĩ đang công tác tại bệnh viện.', href: '/bac-si', icon: Users },
  { title: 'Xem chuyên khoa', description: 'Chọn dịch vụ phù hợp với triệu chứng và nhu cầu điều trị.', href: '/chuyen-khoa', icon: Stethoscope },
  { title: 'Hướng dẫn đi khám', description: 'Chuẩn bị thông tin cần thiết trước khi đến bệnh viện.', href: '/kien-thuc', icon: ShieldCheck },
]

const specialties = [
  { name: 'Tai và thính học', summary: 'Khám giảm thính lực, ù tai, chóng mặt và bệnh lý tai.', icon: Ear, booking: 'Tai - Thính học' },
  { name: 'Mũi và xoang', summary: 'Khám nghẹt mũi, viêm xoang, dị ứng và bất thường vách ngăn.', icon: Wind, booking: 'Mũi - Xoang' },
  { name: 'Họng và thanh quản', summary: 'Khám đau họng, khàn tiếng, amidan và các vấn đề thanh quản.', icon: Volume2, booking: 'Họng - Thanh quản' },
  { name: 'Tai Mũi Họng trẻ em', summary: 'Thăm khám các bệnh lý Tai Mũi Họng thường gặp ở trẻ.', icon: Baby, booking: 'Tai Mũi Họng Nhi' },
  { name: 'Đa ký giấc ngủ', summary: 'Đánh giá ngáy, gián đoạn giấc ngủ và rối loạn hô hấp khi ngủ.', icon: Moon, booking: 'Đo Đa ký giấc ngủ' },
  { name: 'Phẫu thuật và nội trú', summary: 'Chăm sóc trước mổ, phẫu thuật và theo dõi nội trú.', icon: BedDouble, booking: 'Phẫu thuật và nội trú' },
]

const doctors = [
  { name: 'TS.BS.CKII Hoàng Lương', role: 'Bác sĩ chuyên gia, nhà sáng lập', initials: 'HL' },
  { name: 'BS.CKII Đỗ Kỳ Nhật', role: 'Giám đốc bệnh viện', initials: 'ĐN' },
  { name: 'BS.CKII Trịnh Thị Minh Hải', role: 'Giám đốc Khối Đào tạo Lâm sàng', initials: 'MH' },
]

export default function HomePage({ onOpenBooking }: PageProps) {
  const openBooking = (specialty?: string) => onOpenBooking?.(specialty)

  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="px-4 py-12 sm:px-6 md:py-16 lg:col-span-7 lg:border-r lg:border-slate-200 lg:py-20 lg:pr-14">
            <p className="mb-5 text-sm font-semibold text-brand-800">Bệnh viện chuyên khoa Tai Mũi Họng tại TP.HCM</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Thăm khám đúng chuyên khoa, chủ động lịch hẹn
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">Tìm bác sĩ, chọn dịch vụ và đặt lịch khám tại Bệnh Viện Tai Mũi Họng Sài Gòn.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openBooking()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3 font-bold text-white transition-colors hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 active:translate-y-px">
                <Calendar className="h-5 w-5" /> Đặt lịch khám
              </button>
              <a href="tel:02838213456" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700">
                <Phone className="h-5 w-5 text-brand-700" /> (028) 38.213.456
              </a>
            </div>
          </div>

          <aside className="bg-slate-50 px-4 py-10 sm:px-6 lg:col-span-5 lg:px-10 lg:py-20">
            <h2 className="text-lg font-bold text-slate-950">Thông tin trước khi đến khám</h2>
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <InfoRow icon={Clock} title="Giờ tiếp nhận"><>Thứ Hai đến Thứ Bảy: 07:30 đến 20:00<br />Chủ Nhật: 08:00 đến 12:00</></InfoRow>
              <InfoRow icon={MapPin} title="Địa chỉ">1 - 3, 6 - 8 Trịnh Văn Cấn, Phường Bến Thành, TP.HCM</InfoRow>
              <InfoRow icon={ShieldCheck} title="Bảo lãnh viện phí">Liên hệ tổng đài để kiểm tra quyền lợi trước khi đến khám.</InfoRow>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-800 md:grid-cols-3 md:divide-x md:divide-y-0">
          {patientActions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.title} href={action.href} className="group flex min-h-44 gap-4 px-5 py-8 transition-colors hover:bg-slate-900 sm:px-7">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-emerald-400" />
                <div><h2 className="text-xl font-bold">{action.title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{action.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">Xem thông tin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Dịch vụ chuyên khoa</h2>
          <p className="mt-4 leading-7 text-slate-600">Chọn nhóm dịch vụ để tìm hiểu trước khi đặt lịch. Thông tin trên website không thay thế chẩn đoán trực tiếp của bác sĩ.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 border-t border-slate-300 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => {
            const Icon = specialty.icon
            return (
              <article key={specialty.name} className="group border-b border-slate-300 px-1 py-7 md:px-6 md:odd:border-r lg:border-r">
                <Icon className="h-7 w-7 text-brand-700" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{specialty.name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{specialty.summary}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <Link href="/chuyen-khoa" className="text-sm font-semibold text-brand-800 hover:underline">Tìm hiểu</Link>
                  <button onClick={() => openBooking(specialty.booking)} className="min-h-10 rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand-700 hover:text-brand-800">Đặt lịch</button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="px-4 py-14 sm:px-6 md:py-20 lg:col-span-5 lg:border-r lg:border-emerald-800 lg:pr-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Đặt hẹn để chủ động hơn khi đi khám</h2>
            <p className="mt-5 max-w-xl leading-7 text-emerald-100">Bệnh viện tiếp nhận yêu cầu và liên hệ xác nhận lịch với khách hàng trước khi đến.</p>
            <button onClick={() => openBooking()} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-emerald-950 transition-colors hover:bg-emerald-50">Đặt lịch khám <ArrowRight className="h-5 w-5" /></button>
          </div>
          <div className="px-4 py-12 sm:px-6 lg:col-span-7 lg:px-14 lg:py-20">
            <ul className="space-y-6">
              {['Chọn bác sĩ hoặc chuyên khoa theo nhu cầu', 'Được bộ phận chăm sóc khách hàng xác nhận lịch', 'Giảm thời gian đăng ký khi đến bệnh viện', 'Chủ động chuẩn bị hồ sơ và thông tin bảo hiểm'].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 border-b border-emerald-800 pb-6 text-base"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col justify-between gap-5 border-b border-slate-300 pb-7 sm:flex-row sm:items-end">
          <div><h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Đội ngũ bác sĩ</h2><p className="mt-3 text-slate-600">Thông tin bác sĩ được đối chiếu theo website hiện tại.</p></div>
          <Link href="/bac-si" className="inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline">Xem đội ngũ bác sĩ <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="py-8 md:px-7 md:first:pl-0 md:last:pr-0"><div className="flex items-center gap-4"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-brand-800">{doctor.initials}</div><div><h3 className="font-bold text-slate-950">{doctor.name}</h3><p className="mt-1 text-sm leading-5 text-slate-600">{doctor.role}</p></div></div></article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200 md:grid-cols-4">
          {[['19 năm', 'hoạt động'], ['2 cơ sở', 'bệnh viện và phòng khám'], ['80+', 'bác sĩ và chuyên gia'], ['42.290', 'ca phẫu thuật thành công']].map(([value, label]) => (
            <div key={label} className="bg-slate-50 px-4 py-8 text-center sm:px-6"><div className="text-2xl font-bold text-slate-950 md:text-3xl">{value}</div><div className="mt-2 text-sm text-slate-600">{label}</div></div>
          ))}
        </div>
      </section>
    </div>
  )
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof Clock; title: string; children: React.ReactNode }) {
  return <div className="flex gap-4 py-5"><Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" /><div><dt className="font-semibold">{title}</dt><dd className="mt-1 text-sm leading-6 text-slate-600">{children}</dd></div></div>
}
