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
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start lg:grid-cols-12">
          <div className="px-4 py-12 sm:px-6 md:py-16 lg:col-span-7 lg:border-r lg:border-slate-200 lg:py-20 lg:pr-14">
            <p className="mb-5 text-sm font-semibold text-brand-800">Bệnh viện chuyên khoa Tai Mũi Họng tại TP.HCM</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
              Bệnh Viện Tai Mũi Họng Sài Gòn: thăm khám đúng chuyên khoa
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">Chủ động chọn bác sĩ, dịch vụ và lịch hẹn tại bệnh viện chuyên khoa Tai Mũi Họng tại TP.HCM.</p>
            <ul className="mt-7 grid max-w-2xl gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-3 sm:gap-4" aria-label="Điểm nổi bật của bệnh viện">
              {[
                'Hơn 80 bác sĩ và chuyên gia Tai Mũi Họng',
                '2 cơ sở khám tại TP.HCM',
                'Hoạt động chuyên khoa từ năm 2007',
              ].map((usp) => (
                <li key={usp} className="flex gap-2 font-semibold sm:block">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-700 sm:mb-2" aria-hidden="true" />
                  <span>{usp}</span>
                </li>
              ))}
            </ul>
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
            <div className="relative mb-8 overflow-hidden bg-slate-200">
              <img src="https://taimuihongsg.com/wp-content/uploads/2023/06/doi-ngu-bac-si-chuyen-mon-cao-nhieu-nam-kinh-nghiem.jpeg" alt="Đội ngũ bác sĩ Bệnh Viện Tai Mũi Họng Sài Gòn" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-3 shadow-lg">
                <div className="text-xs font-semibold text-brand-700">Đội ngũ chuyên gia</div>
                <div className="mt-1 text-sm font-bold text-slate-950">Chăm sóc theo từng nhu cầu</div>
              </div>
            </div>
            <h2 className="text-lg font-bold text-slate-950">Thông tin trước khi đến khám</h2>
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <InfoRow icon={Clock} title="Giờ tiếp nhận"><>Thứ Hai đến Thứ Bảy: 07:30 đến 20:00<br />Chủ Nhật: 08:00 đến 12:00</></InfoRow>
              <InfoRow icon={MapPin} title="Địa chỉ">1 - 3, 6 - 8 Trịnh Văn Cấn, Phường Bến Thành, TP.HCM</InfoRow>
              <InfoRow icon={ShieldCheck} title="Bảo lãnh viện phí">Liên hệ tổng đài để kiểm tra quyền lợi trước khi đến khám.</InfoRow>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
          {[
            ['2', 'cơ sở khám'],
            ['80+', 'bác sĩ và chuyên gia'],
            ['19 năm', 'hoạt động chuyên khoa'],
            ['42.290', 'ca phẫu thuật thành công'],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-7 text-center sm:px-6 md:py-9">
              <div className="text-2xl font-bold tracking-tight text-brand-700 md:text-3xl">{value}</div>
              <div className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-800 md:grid-cols-3 md:divide-x md:divide-y-0">
          {patientActions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.title} href={action.href} className="group flex min-h-44 gap-4 px-5 py-8 transition-colors hover:bg-slate-900 sm:px-7">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-sky-300" />
                <div><h2 className="text-xl font-bold">{action.title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{action.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">Xem thông tin <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Dịch vụ chuyên khoa</h2>
          <p className="mt-4 leading-7 text-slate-600">Chọn nhóm dịch vụ để tìm hiểu trước khi đặt lịch. Thông tin trên website không thay thế chẩn đoán trực tiếp của bác sĩ.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <article key={specialty.name} className={`group flex min-h-64 flex-col justify-between border p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg ${index === 0 ? 'border-brand-200 bg-brand-50' : 'border-slate-200 bg-white'}`}>
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${index === 0 ? 'bg-brand-700 text-white' : 'bg-slate-100 text-brand-700'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{specialty.name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{specialty.summary}</p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <Link href="/chuyen-khoa" className="text-sm font-semibold text-brand-800 hover:underline">Tìm hiểu</Link>
                  <button onClick={() => openBooking(specialty.booking)} className="min-h-10 rounded-lg border border-slate-300 px-3 text-sm font-semibold text-slate-800 transition-colors hover:border-brand-700 hover:text-brand-800">Đặt lịch</button>
                </div>
              </article>
            )
          })}
        </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="px-4 py-14 sm:px-6 md:py-20 lg:col-span-5 lg:border-r lg:border-slate-200 lg:pr-14">
            <p className="text-sm font-semibold text-brand-800">Khoa khám và nội soi</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Khám cả ba vùng Tai, Mũi và Họng trong một lần tiếp nhận</h2>
            <p className="mt-5 leading-7 text-slate-600">Khoa hiện có 10 phòng khám nội soi, phục vụ nhu cầu khám chuyên sâu và ghi nhận hình ảnh hỗ trợ bác sĩ đánh giá tình trạng bệnh.</p>
            <figure className="mt-8 overflow-hidden border border-slate-200 bg-white">
              <img src="https://taimuihongsg.com/wp-content/uploads/2022/11/he-thong-noi-soi-NBI_taimuihongsg-768x456.jpg" alt="Hệ thống nội soi NBI tại Bệnh Viện Tai Mũi Họng Sài Gòn" className="aspect-[16/9] w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-xs leading-5 text-slate-600">Hệ thống nội soi NBI hỗ trợ quan sát vùng Tai Mũi Họng.</figcaption>
            </figure>
            <Link href="/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-800 hover:underline">Xem dịch vụ nội soi <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-1 lg:col-span-7 sm:grid-cols-2">
            <div className="border-b border-slate-200 px-4 py-10 sm:border-r sm:px-8">
              <div className="text-4xl font-bold tracking-tight text-slate-950">10</div>
              <div className="mt-2 font-semibold text-slate-800">phòng khám nội soi</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Thiết bị được đầu tư từ Xion, Karl Storz và Olympus.</p>
            </div>
            <div className="border-b border-slate-200 px-4 py-10 sm:px-8">
              <div className="text-4xl font-bold tracking-tight text-slate-950">400+</div>
              <div className="mt-2 font-semibold text-slate-800">lượt khách mỗi ngày</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Năng lực tiếp nhận theo thông tin đang công bố trên website bệnh viện.</p>
            </div>
            <div className="border-b border-slate-200 px-4 py-10 sm:border-b-0 sm:border-r sm:px-8">
              <div className="font-bold text-slate-950">Nội soi NBI</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Hỗ trợ bác sĩ quan sát tổn thương tại vùng vòm họng, hốc mũi và thanh quản.</p>
            </div>
            <div className="px-4 py-10 sm:px-8">
              <div className="font-bold text-slate-950">Nội soi hoạt nghiệm dây thanh</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Khảo sát vận động dây thanh ở người có vấn đề về giọng nói hoặc giọng hát.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-14 grid grid-cols-1 gap-8 border-b border-slate-300 pb-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden bg-slate-200">
            <img src="https://taimuihongsg.com/wp-content/uploads/2021/10/benh-vien-tai-mui-hong-sai-gon-thanh-lap-tu-2007_taimuihongsg-768x768.jpg" alt="Bệnh Viện Tai Mũi Họng Sài Gòn" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-800">Không gian khám chữa bệnh</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Một hệ thống chuyên khoa, hai cơ sở phục vụ người bệnh</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">Bệnh viện Tai Mũi Họng Sài Gòn hoạt động từ năm 2007, tập trung vào thăm khám, phẫu thuật và điều trị các bệnh lý Tai Mũi Họng cho người lớn và trẻ em.</p>
            <Link href="/" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-800 hover:underline">Tìm hiểu về bệnh viện <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Đi khám tại bệnh viện</h2>
            <p className="mt-4 leading-7 text-slate-600">Bốn bước giúp người bệnh chủ động hơn trước khi đến.</p>
          </div>
          <ol className="lg:col-span-8 border-t border-slate-300">
            {[
              ['01', 'Chọn chuyên khoa hoặc bác sĩ', 'Xem thông tin dịch vụ và đội ngũ phù hợp với nhu cầu.'],
              ['02', 'Đặt lịch hoặc gọi tổng đài', 'Gửi yêu cầu trực tuyến hoặc gọi (028) 38.213.456.'],
              ['03', 'Nhận xác nhận', 'Bộ phận chăm sóc khách hàng liên hệ xác nhận thông tin.'],
              ['04', 'Đến khám', 'Mang theo giấy tờ, hồ sơ cũ và thông tin bảo hiểm nếu có.'],
            ].map(([number, title, description]) => (
              <li key={number} className="grid grid-cols-[48px_1fr] gap-4 border-b border-slate-300 py-6 sm:grid-cols-[64px_220px_1fr] sm:items-start">
                <span className="text-sm font-bold text-brand-800">{number}</span>
                <h3 className="font-bold text-slate-950">{title}</h3>
                <p className="col-start-2 text-sm leading-6 text-slate-600 sm:col-start-3">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="px-4 py-14 sm:px-6 md:py-20 lg:col-span-5 lg:border-r lg:border-slate-800 lg:pr-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Chi phí khám nội soi tham khảo</h2>
            <p className="mt-5 leading-7 text-slate-400">Mức giá được tổng hợp từ website hiện tại. Chi phí thực tế có thể thay đổi theo chỉ định và thời điểm khám.</p>
            <div className="mt-8 flex items-start gap-3 border-t border-slate-800 pt-6">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
              <p className="text-sm leading-6 text-slate-300">Bệnh viện có dịch vụ hỗ trợ bảo lãnh viện phí. Người bệnh nên xác nhận quyền lợi trước khi đến.</p>
            </div>
          </div>
          <div className="px-4 py-10 sm:px-6 lg:col-span-7 lg:px-14 lg:py-20">
            <div className="divide-y divide-slate-800 border-y border-slate-800">
              {[
                ['Bác sĩ Tai Mũi Họng', '350.000đ'],
                ['Bác sĩ cao cấp', '450.000đ'],
                ['Chuyên gia', '600.000đ'],
                ['Khách hàng nước ngoài', '700.000đ'],
              ].map(([label, price]) => (
                <div key={label} className="flex items-center justify-between gap-6 py-5"><span className="text-sm text-slate-300">{label}</span><strong className="whitespace-nowrap text-lg text-white">{price}</strong></div>
              ))}
            </div>
            <a href="tel:02838213456" className="mt-7 inline-flex items-center gap-2 font-bold text-sky-300 hover:text-sky-200"><Phone className="h-4 w-4" />Xác nhận chi phí qua tổng đài</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="px-4 py-14 sm:px-6 md:py-20 lg:col-span-5 lg:border-r lg:border-brand-800 lg:pr-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Đặt hẹn để chủ động hơn khi đi khám</h2>
            <p className="mt-5 max-w-xl leading-7 text-blue-100">Bệnh viện tiếp nhận yêu cầu và liên hệ xác nhận lịch với khách hàng trước khi đến.</p>
            <button onClick={() => openBooking()} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-brand-900 transition-colors hover:bg-brand-50">Đặt lịch khám <ArrowRight className="h-5 w-5" /></button>
          </div>
          <div className="px-4 py-12 sm:px-6 lg:col-span-7 lg:px-14 lg:py-20">
            <ul className="space-y-6">
              {['Chọn bác sĩ hoặc chuyên khoa theo nhu cầu', 'Được bộ phận chăm sóc khách hàng xác nhận lịch', 'Giảm thời gian đăng ký khi đến bệnh viện', 'Chủ động chuẩn bị hồ sơ và thông tin bảo hiểm'].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 border-b border-brand-800 pb-6 text-base"><Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />{benefit}</li>
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Kiến thức sức khỏe mới</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Thông tin giúp nhận biết dấu hiệu cần đi khám và chuẩn bị câu hỏi cho bác sĩ.</p></div>
            <Link href="/kien-thuc" className="inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline">Xem thư viện kiến thức <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid grid-cols-1 border-t border-slate-300 md:grid-cols-3">
            {[
              ['Điếc đột ngột', '9 dấu hiệu cảnh báo cần nhận biết sớm', '28/10/2026'],
              ['Họng và thanh quản', 'Khàn tiếng kéo dài: Khi nào cần đi khám?', '14/10/2026'],
              ['Tai Mũi Họng', 'Nổi hạch cổ, sau tai: Nguyên nhân và dấu hiệu cần khám', '14/10/2026'],
            ].map(([category, title, date]) => (
              <article key={title} className="border-b border-slate-300 py-7 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold text-slate-500"><span>{category}</span><time>{date}</time></div>
                <h3 className="mt-5 text-xl font-bold leading-7 text-slate-950">{title}</h3>
                <Link href="/kien-thuc" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:underline">Đọc bài viết <ArrowRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
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
