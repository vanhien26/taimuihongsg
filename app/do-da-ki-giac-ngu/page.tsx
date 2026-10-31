import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Calendar, Phone, ArrowLeft, Clock, Check, ShieldCheck, Stethoscope, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Đo Đa Ký Giấc Ngủ Chẩn Đoán Ngáy & Ngưng Thở Khi Ngủ - Bệnh Viện Tai Mũi Họng Sài Gòn',
  description: 'Dịch vụ đo đa ký giấc ngủ (Polysomnography - PSG) tại Bệnh Viện Tai Mũi Họng Sài Gòn giúp chẩn đoán chính xác hội chứng ngưng thở khi ngủ do tắc nghẽn (OSAS), ngủ ngáy, thiếu oxy về đêm.',
  alternates: {
    canonical: 'https://taimuihongsg.com/do-da-ki-giac-ngu/',
  },
}

export default function DoDaKiGiacNguPage() {
  const service = {
    title: 'Đo đa ký giấc ngủ (Polysomnography - PSG)',
    intro: 'Dịch vụ ghi nhận các chỉ số sinh lý toàn diện trong khi ngủ để hỗ trợ Bác sĩ Chuyên khoa Tai Mũi Họng và Y Học Giấc Ngủ đánh giá chính xác mức độ ngáy và hội chứng ngưng thở khi ngủ do tắc nghẽn (OSAS).',
    booking: 'Đo Đa ký giấc ngủ',
    facts: [
      'Hệ thống đo đa ký giấc ngủ tiêu chuẩn quốc tế',
      'Phòng lưu trú riêng biệt, yên tĩnh, đảm bảo giấc ngủ tự nhiên',
      'Bác sĩ Chuyên khoa II đọc kết quả và tư vấn phác đồ cá thể hóa'
    ],
    services: [
      'Đánh giá chỉ số ngưng thở - giảm thở AHI (Apnea-Hypopnea Index)',
      'Theo dõi gián đoạn hô hấp và tình trạng tụt nồng độ oxy trong máu (SpO2)',
      'Ghi nhận điện não đồ (EEG), điện tim (ECG), điện cơ (EMG) khi ngủ',
      'Tầm soát nguyên nhân ngáy to, giật mình thức giấc, buồn ngủ ban ngày',
      'Tư vấn điều trị phối hợp: máy thở áp lực dương CPAP hoặc phẫu thuật chỉnh hình họng màn hầu'
    ],
    process: [
      'Khám lâm sàng Tai Mũi Họng và chỉ định đo đa ký',
      'Nhận phòng theo dõi giấc ngủ vào buổi tối (20:00)',
      'Kỹ thuật viên gắn các đầu dò và cảm biến sinh lý không xâm lấn',
      'Ghi nhận dữ liệu liên tục trong suốt 6 - 8 giờ ngủ đêm',
      'Bác sĩ chuyên khoa phân tích biểu đồ và hội chẩn kết quả vào sáng hôm sau'
    ],
    preparation: [
      'Giữ thói quen sinh hoạt và giờ giấc bình thường trước ngày đo',
      'Không uống trà, cà phê, rượu bia hoặc chất kích thích trong ngày thực hiện',
      'Gội đầu sạch và không sử dụng keo/sáp vuốt tóc để gắn điện cực chính xác',
      'Mang theo hồ sơ bệnh án và các loại thuốc đang sử dụng hàng ngày'
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-800 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/chuyen-khoa" className="hover:text-brand-800 transition-colors">Chuyên khoa</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-semibold">Đo đa ký giấc ngủ</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14 space-y-10">
        <div>
          <Link href="/chuyen-khoa" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Quay lại danh sách chuyên khoa
          </Link>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-200">
              <Stethoscope className="w-3.5 h-3.5" />
              Tiêu Chuẩn Vàng Chẩn Đoán Hội Chứng Ngưng Thở Khi Ngủ
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">{service.title}</h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{service.intro}</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/dat-hen-kham-benh?dichvu=do-da-ki-giac-ngu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 font-bold text-white shadow-sm hover:bg-brand-800 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Đặt lịch đo giấc ngủ
            </Link>
            <a
              href="tel:02838213456"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 font-bold text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <Phone className="h-5 w-5 text-brand-700" />
              Tổng đài: (028) 38.213.456
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-8">
            {service.facts.map((fact, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-800">Điểm nổi bật 0{idx + 1}</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              Nội dung khảo sát
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {service.services.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-700" />
              Quy trình thực hiện
            </h2>
            <ol className="space-y-3 text-sm text-slate-700">
              {service.process.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-800 shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-amber-600" />
              Lưu ý trước khi đo
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {service.preparation.map((prep, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{prep}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
