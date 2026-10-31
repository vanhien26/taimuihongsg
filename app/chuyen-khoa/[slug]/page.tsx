'use client'

import Link from 'next/link'
import { ArrowLeft, BedDouble, BellRing, Calendar, Check, Clock, MapPin, Phone, ShieldCheck, Stethoscope, Utensils } from 'lucide-react'

const SERVICES: Record<string, {
  title: string
  intro: string
  booking: string
  facts: string[]
  services: string[]
  process: string[]
  preparation: string[]
}> = {
  'khoa-kham-noi-soi-tai-mui-hong': {
    title: 'Khám và nội soi Tai Mũi Họng',
    intro: 'Khoa khám và nội soi tiếp nhận các bệnh lý về tai, mũi xoang, họng và thanh quản cho người lớn và trẻ em.',
    booking: 'Khám Nội soi Tai Mũi Họng',
    facts: ['10 phòng khám nội soi', 'Tiếp nhận hơn 400 lượt khách mỗi ngày', 'Thiết bị Xion, Karl Storz và Olympus'],
    services: ['Khám Tai Mũi Họng tổng quát', 'Nội soi tai, mũi và họng thanh quản', 'Nội soi NBI hỗ trợ tầm soát tổn thương', 'Khảo sát chức năng giọng nói', 'Đo thính lực và đánh giá chức năng nghe'],
    process: ['Bác sĩ hỏi bệnh và khám ban đầu', 'Đánh giá chỉ định nội soi phù hợp', 'Thực hiện nội soi và ghi nhận hình ảnh', 'Bác sĩ giải thích kết quả và tư vấn hướng xử trí'],
    preparation: ['Thông báo cho bác sĩ về bệnh nền và thuốc đang sử dụng', 'Trẻ nhỏ nên có người thân đi cùng', 'Thực hiện theo hướng dẫn của bác sĩ trong quá trình nội soi'],
  },
  'khoa-phau-thuat-tai-mui-hong': {
    title: 'Khoa Phẫu thuật Tai Mũi Họng',
    intro: 'Khoa thực hiện các phẫu thuật chuyên khoa tai, mũi xoang, họng thanh quản và đầu cổ theo chỉ định của bác sĩ.',
    booking: 'Khoa Phẫu thuật Tai Mũi Họng',
    facts: ['Phẫu thuật chuyên khoa sâu', 'Theo dõi trước và sau mổ', 'Phối hợp gây mê hồi sức'],
    services: ['Phẫu thuật tai và phục hồi chức năng nghe', 'Phẫu thuật nội soi mũi xoang', 'Phẫu thuật amidan và VA', 'Vi phẫu thanh quản', 'Phẫu thuật vùng đầu cổ theo chỉ định'],
    process: ['Khám và đánh giá chỉ định phẫu thuật', 'Thực hiện xét nghiệm tiền phẫu', 'Tư vấn phương pháp và kế hoạch điều trị', 'Phẫu thuật, theo dõi hồi tỉnh và chăm sóc sau mổ'],
    preparation: ['Mang theo hồ sơ khám và kết quả xét nghiệm', 'Tuân thủ hướng dẫn nhịn ăn hoặc dùng thuốc', 'Chuẩn bị thông tin bảo hiểm hoặc bảo lãnh viện phí'],
  },
  'khoa-noi-tru': {
    title: 'Khoa Nội trú Tai Mũi Họng',
    intro: 'Khoa nội trú chăm sóc người bệnh trước và sau phẫu thuật, theo dõi điều trị và hỗ trợ người nhà trong thời gian lưu viện.',
    booking: 'Khoa Nội trú Tai Mũi Họng',
    facts: ['Theo dõi điều trị liên tục', 'Điều dưỡng hỗ trợ tại khoa', 'Có lựa chọn phòng bệnh'],
    services: ['Tiếp nhận người bệnh cần lưu viện', 'Chăm sóc trước và sau phẫu thuật', 'Theo dõi thuốc và diễn tiến điều trị', 'Hướng dẫn chăm sóc sau xuất viện'],
    process: ['Hoàn tất thủ tục nhập viện', 'Nhận phòng và đánh giá ban đầu', 'Theo dõi theo kế hoạch điều trị', 'Bác sĩ đánh giá trước khi xuất viện'],
    preparation: ['Mang giấy tờ tùy thân và hồ sơ y tế', 'Xác nhận quyền lợi bảo hiểm trước khi nhập viện', 'Chuẩn bị đồ dùng cá nhân cần thiết'],
  },
  'do-da-ky-giac-ngu': {
    title: 'Đo đa ký giấc ngủ',
    intro: 'Dịch vụ ghi nhận các chỉ số sinh lý trong khi ngủ để hỗ trợ bác sĩ đánh giá ngáy và rối loạn hô hấp khi ngủ.',
    booking: 'Đo Đa ký giấc ngủ',
    facts: ['Theo dõi trong khi ngủ', 'Ghi nhận nhiều chỉ số sinh lý', 'Bác sĩ đọc và tư vấn kết quả'],
    services: ['Đánh giá tình trạng ngáy', 'Theo dõi gián đoạn hô hấp khi ngủ', 'Ghi nhận nồng độ oxy máu và nhịp tim', 'Tư vấn hướng điều trị sau khi có kết quả'],
    process: ['Khám và đánh giá chỉ định', 'Gắn cảm biến theo dõi', 'Ghi nhận dữ liệu trong thời gian ngủ', 'Phân tích kết quả và tư vấn với bác sĩ'],
    preparation: ['Giữ lịch sinh hoạt bình thường trước ngày đo', 'Hạn chế chất kích thích theo hướng dẫn', 'Mang theo thuốc đang sử dụng và đồ ngủ cá nhân'],
  },
}

export default function ServiceDetailPage({ params, onOpenBooking }: any) {
  const service = SERVICES[params.slug]

  if (!service) {
    return <div className="mx-auto max-w-4xl px-4 py-20"><h1 className="text-3xl font-bold">Không tìm thấy dịch vụ</h1><Link href="/chuyen-khoa" className="mt-6 inline-block font-semibold text-brand-800">Quay lại chuyên khoa</Link></div>
  }

  if (params.slug === 'khoa-noi-tru') {
    return <InpatientServicePage service={service} onOpenBooking={onOpenBooking} />
  }

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <Link href="/chuyen-khoa" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800"><ArrowLeft className="h-4 w-4" />Danh sách chuyên khoa</Link>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-sm font-semibold text-brand-800">Bệnh Viện Tai Mũi Họng Sài Gòn</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => onOpenBooking?.(service.booking)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 font-bold text-white hover:bg-brand-800"><Calendar className="h-5 w-5" />Đặt lịch khám</button>
                <a href="tel:02838213456" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 font-bold text-slate-900 hover:bg-slate-50"><Phone className="h-5 w-5 text-brand-700" />Gọi tư vấn</a>
              </div>
            </div>
            <aside className="border-y border-slate-200 bg-slate-50 p-6 lg:col-span-4">
              <h2 className="font-bold text-slate-950">Thông tin chính</h2>
              <ul className="mt-4 divide-y divide-slate-200">{service.facts.map((fact) => <li key={fact} className="flex gap-3 py-4 text-sm text-slate-700"><Check className="h-5 w-5 shrink-0 text-brand-700" />{fact}</li>)}</ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Dịch vụ tại khoa</h2>
          <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">{service.services.map((item) => <li key={item} className="flex items-start gap-3 py-5"><Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" /><span className="font-medium text-slate-800">{item}</span></li>)}</ul>
        </div>
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold text-slate-950">Quy trình dự kiến</h2>
          <ol className="mt-6 space-y-5">{service.process.map((item, index) => <li key={item} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-brand-800">{index + 1}</span><span className="pt-1 text-sm leading-6 text-slate-700">{item}</span></li>)}</ol>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div><div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-brand-700" /><h2 className="text-xl font-bold">Chuẩn bị trước khi đến</h2></div><ul className="mt-5 space-y-3">{service.preparation.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />{item}</li>)}</ul></div>
          <div className="border-t border-slate-200 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0"><div className="flex items-center gap-3"><Clock className="h-6 w-6 text-brand-700" /><h2 className="text-xl font-bold">Lưu ý</h2></div><p className="mt-5 text-sm leading-6 text-slate-700">Quy trình và chỉ định cụ thể phụ thuộc vào tình trạng của từng người bệnh. Bác sĩ sẽ tư vấn sau khi thăm khám trực tiếp.</p></div>
        </div>
      </section>
    </div>
  )
}

function InpatientServicePage({ service, onOpenBooking }: { service: (typeof SERVICES)['khoa-noi-tru']; onOpenBooking?: (specialty?: string) => void }) {
  const carePoints = [
    { title: 'Theo dõi trước và sau phẫu thuật', body: 'Bác sĩ đánh giá diễn tiến, điều chỉnh kế hoạch điều trị và thăm khám trước khi xuất viện.', icon: Stethoscope },
    { title: 'Điều dưỡng hỗ trợ 24/24', body: 'Người bệnh có thể gọi điều dưỡng khi cần hỗ trợ chăm sóc, di chuyển hoặc thực hiện y lệnh.', icon: BellRing },
    { title: 'Phòng bệnh riêng tư, tiện nghi', body: 'Không gian lưu viện sạch, yên tĩnh, có rèm riêng tư và các tiện ích phục vụ người bệnh.', icon: BedDouble },
    { title: 'Dinh dưỡng theo chỉ định', body: 'Bữa ăn được chuẩn bị theo chế độ bệnh lý và hướng dẫn của bác sĩ điều trị.', icon: Utensils },
  ]
  const journey = ['Hoàn tất thủ tục nhập viện và xác nhận quyền lợi bảo hiểm', 'Nhận phòng, đánh giá ban đầu và phổ biến kế hoạch chăm sóc', 'Theo dõi dấu hiệu sinh tồn, thuốc và diễn tiến theo y lệnh', 'Bác sĩ thăm khám, hướng dẫn chăm sóc và hoàn tất thủ tục xuất viện']

  return (
    <div className="bg-white text-slate-950">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Link href="/chuyen-khoa" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white"><ArrowLeft className="h-4 w-4" />Danh sách chuyên khoa</Link>
            <p className="mt-10 text-sm font-semibold text-sky-300">Dịch vụ nội trú Tai Mũi Họng</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">Khoa Nội trú Tai Mũi Họng</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Chăm sóc liên tục trước và sau phẫu thuật, theo dõi điều trị và hỗ trợ người bệnh trong suốt thời gian lưu viện tại Bệnh Viện Tai Mũi Họng Sài Gòn.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={() => onOpenBooking?.(service.booking)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 font-bold text-white hover:bg-brand-400"><Calendar className="h-5 w-5" />Đặt lịch tư vấn</button><a href="tel:02838213456" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 font-bold text-white hover:bg-white/10"><Phone className="h-5 w-5 text-sky-300" />Gọi (028) 38.213.456</a></div>
          </div>
          <div className="lg:col-span-5"><div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-800"><img src="https://taimuihongsg.com/wp-content/uploads/2021/10/benh-vien-tai-mui-hong-sai-gon-thanh-lap-tu-2007_taimuihongsg-768x768.jpg" alt="Không gian Bệnh Viện Tai Mũi Họng Sài Gòn" className="aspect-[4/3] w-full object-cover" /><div className="grid grid-cols-2 divide-x divide-white/10 bg-slate-900"><div className="p-4"><div className="text-2xl font-bold text-white">24/24</div><div className="mt-1 text-xs text-slate-400">Điều dưỡng hỗ trợ</div></div><div className="p-4"><div className="text-2xl font-bold text-white">1 - 3</div><div className="mt-1 text-xs text-slate-400">Trịnh Văn Cấn, Q.1</div></div></div></div></div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-slate-200 px-4 sm:px-6 md:grid-cols-3"><div className="bg-slate-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-brand-700">Phù hợp với</p><p className="mt-2 font-bold">Người bệnh cần lưu viện</p><p className="mt-2 text-sm leading-6 text-slate-600">Theo dõi sau phẫu thuật hoặc điều trị theo chỉ định chuyên khoa.</p></div><div className="bg-slate-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-brand-700">Trọng tâm chăm sóc</p><p className="mt-2 font-bold">An toàn và liên tục</p><p className="mt-2 text-sm leading-6 text-slate-600">Bác sĩ, điều dưỡng và người nhà phối hợp trong từng giai đoạn.</p></div><div className="bg-slate-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-brand-700">Địa điểm</p><p className="mt-2 font-bold">Cơ sở Quận 1</p><p className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-600"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-700" />1 - 3, 6 - 8 Trịnh Văn Cấn, P. Bến Thành, TP.HCM</p></div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24"><div className="max-w-3xl"><p className="text-sm font-semibold text-brand-700">Chăm sóc trong suốt thời gian lưu viện</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Một quy trình nội trú rõ ràng để người bệnh và gia đình yên tâm</h2><p className="mt-5 leading-7 text-slate-600">Khoa nội trú tập trung vào việc theo dõi, chăm sóc và hướng dẫn sau điều trị. Quy trình cụ thể được điều chỉnh theo bệnh lý, phương pháp phẫu thuật và tình trạng thực tế của từng người bệnh.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2">{carePoints.map(({ title, body, icon: Icon }) => <article key={title} className="border border-slate-200 bg-white p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}</div></section>

      <section className="bg-slate-50"><div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-sm font-semibold text-brand-700">Hành trình điều trị</p><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Từ nhập viện đến xuất viện</h2><p className="mt-5 leading-7 text-slate-600">Người bệnh được hướng dẫn từng bước, từ thủ tục ban đầu đến chăm sóc tại nhà sau khi xuất viện.</p></div><ol className="space-y-6 lg:col-span-7">{journey.map((item, index) => <li key={item} className="flex gap-4 border-b border-slate-200 pb-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">{index + 1}</span><span className="pt-1 font-semibold leading-6 text-slate-800">{item}</span></li>)}</ol></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12"><div className="lg:col-span-7"><h2 className="text-3xl font-bold tracking-tight">Chuẩn bị trước khi nhập viện</h2><ul className="mt-7 space-y-4">{service.preparation.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-brand-700" />{item}</li>)}</ul></div><aside className="bg-brand-50 p-6 lg:col-span-5"><ShieldCheck className="h-7 w-7 text-brand-700" /><h2 className="mt-5 text-xl font-bold">Bảo lãnh viện phí</h2><p className="mt-3 text-sm leading-6 text-slate-600">Nếu sử dụng bảo hiểm, hãy liên hệ bệnh viện trước khi nhập viện để được kiểm tra quyền lợi và hướng dẫn hồ sơ cần chuẩn bị.</p><a href="tel:02838213456" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-800"><Phone className="h-4 w-4" />Gọi tư vấn quyền lợi</a></aside></section>

      <section className="bg-brand-900 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:py-16"><div><p className="text-sm font-semibold text-sky-300">Cần tư vấn trước khi nhập viện?</p><h2 className="mt-2 text-2xl font-bold md:text-3xl">Trao đổi với đội ngũ bệnh viện</h2></div><div className="flex flex-col gap-3 sm:flex-row"><button onClick={() => onOpenBooking?.(service.booking)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 font-bold text-brand-900 hover:bg-slate-100"><Calendar className="h-4 w-4" />Đặt lịch tư vấn</button><a href="tel:02838213456" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 font-bold text-white hover:bg-white/10"><Phone className="h-4 w-4" />Gọi tổng đài</a></div></div></section>
    </div>
  )
}
