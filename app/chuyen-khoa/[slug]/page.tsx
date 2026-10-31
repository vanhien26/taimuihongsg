'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Check, Clock, Phone, ShieldCheck, Stethoscope } from 'lucide-react'

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
