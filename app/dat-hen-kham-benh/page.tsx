'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Clock3, MapPin, Phone, ShieldCheck, UserRound } from 'lucide-react'

const steps = [
  'Nhập thông tin cá nhân',
  'Chọn cơ sở khám',
  'Chọn ngày khám',
  'Chọn dịch vụ và bác sĩ',
  'Chọn giờ phù hợp',
]

const branches = ['Cơ sở Trịnh Văn Cấn, Quận 1', 'Phòng khám Tai Mũi Họng Sài Gòn']
const services = ['Khám Tai và thính học', 'Khám Mũi và xoang', 'Khám Họng và thanh quản', 'Tai Mũi Họng trẻ em', 'Đo đa ký giấc ngủ', 'Phẫu thuật và nội trú']
const doctors = ['Bác sĩ chuyên khoa phù hợp', 'TS.BS.CKII Hoàng Lương', 'BS.CKII Đỗ Kỳ Nhật', 'BS.CKII Trịnh Thị Minh Hải']

export default function DatHenKhamBenhPage() {
  const [submitted, setSubmitted] = useState(false)
  const [monthOffset, setMonthOffset] = useState(0)
  const [selectedDate, setSelectedDate] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', birthDay: '', insurance: 'Không sử dụng bảo hiểm', medicalId: '', branch: branches[0], service: services[0], doctor: doctors[0], time: '' })

  const month = new Date()
  month.setMonth(month.getMonth() + monthOffset)
  const monthLabel = month.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' })
  const availableDays = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(month.getFullYear(), month.getMonth(), index + 1)
    return { value: date.toISOString().slice(0, 10), day: date.getDate(), label: date.toLocaleDateString('vi-VN', { weekday: 'short' }) }
  })
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }))

  return (
    <div className="bg-slate-50 text-slate-950">
      <section className="bg-brand-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-sm font-semibold text-blue-100">Dịch vụ khách hàng</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Đặt hẹn khám bệnh tại Bệnh Viện Tai Mũi Họng Sài Gòn</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">Chọn ngày, cơ sở, dịch vụ và bác sĩ phù hợp. Nhân viên bệnh viện sẽ liên hệ xác nhận lịch hẹn qua điện thoại.</p>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:py-14">
        <aside className="h-fit bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5"><div className="flex h-10 w-10 items-center justify-center bg-brand-50 text-brand-700"><CalendarDays className="h-5 w-5" /></div><div><h2 className="font-bold">Cách đặt hẹn</h2><p className="text-xs text-slate-500">7 bước đơn giản</p></div></div>
          <ol className="mt-5 space-y-4">{steps.map((step, index) => <li key={step} className="flex gap-3 text-sm"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">{index + 1}</span><span className="pt-0.5 leading-5 text-slate-600">{step}</span></li>)}</ol>
          <div className="mt-7 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600"><p className="font-semibold text-slate-900">Lưu ý</p><p className="mt-2">Vui lòng đặt lịch trước thời điểm khám ít nhất 2 giờ. Hệ thống sẽ gửi tin nhắn xác nhận và nhắc lịch qua Zalo hoặc SMS.</p></div>
          <a href="tel:02838213456" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700"><Phone className="h-4 w-4" />(028) 38.213.456</a>
        </aside>

        <section className="bg-white p-5 shadow-sm sm:p-8">
          {submitted ? (
            <div className="mx-auto max-w-xl py-14 text-center"><CheckCircle2 className="mx-auto h-16 w-16 text-brand-700" /><h2 className="mt-5 text-2xl font-bold">Đã tiếp nhận yêu cầu đặt hẹn</h2><p className="mt-3 leading-7 text-slate-600">Cảm ơn {form.name || 'bạn'}. Nhân viên bệnh viện sẽ gọi xác nhận lịch hẹn qua số {form.phone || 'điện thoại của bạn'}.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-7 inline-flex min-h-11 items-center gap-2 bg-brand-700 px-5 font-bold text-white hover:bg-brand-800">Đặt lịch khác <ArrowRight className="h-4 w-4" /></button></div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
              <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-brand-700">Bước 1 đến 5</p><h2 className="mt-1 text-2xl font-bold">Thông tin đặt lịch khám</h2></div><p className="text-sm text-slate-500">Các trường có dấu * là bắt buộc</p></div>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field label="Họ tên *" icon={UserRound}><input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="VD: Nguyễn Văn A" /></Field>
                <Field label="Số điện thoại *" icon={Phone}><input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="0901234567" /></Field>
                <Field label="Email (không bắt buộc)"><input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="email@example.com" /></Field>
                <Field label="Ngày sinh *"><input required type="date" value={form.birthDay} onChange={(event) => update('birthDay', event.target.value)} /></Field>
                <Field label="Bảo hiểm *"><select value={form.insurance} onChange={(event) => update('insurance', event.target.value)}><option>Không sử dụng bảo hiểm</option><option>Có sử dụng bảo hiểm</option></select></Field>
                <Field label="Mã số y tế"><input value={form.medicalId} onChange={(event) => update('medicalId', event.target.value)} placeholder="Nhập mã số y tế nếu có" /></Field>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-7"><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-semibold text-brand-700">Bước 3</p><h2 className="mt-1 text-xl font-bold">Chọn ngày khám *</h2></div><div className="flex items-center gap-2"><button type="button" onClick={() => setMonthOffset(Math.max(0, monthOffset - 1))} className="flex h-9 w-9 items-center justify-center border border-slate-200 hover:border-brand-600" aria-label="Tháng trước"><ChevronLeft className="h-4 w-4" /></button><span className="min-w-32 text-center text-sm font-semibold capitalize">{monthLabel}</span><button type="button" onClick={() => setMonthOffset(monthOffset + 1)} className="flex h-9 w-9 items-center justify-center border border-slate-200 hover:border-brand-600" aria-label="Tháng sau"><ChevronRight className="h-4 w-4" /></button></div></div><div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-12">{availableDays.map((date) => <button key={date.value} type="button" onClick={() => setSelectedDate(date.value)} className={`min-h-16 border px-1 text-center transition-colors ${selectedDate === date.value ? 'border-brand-700 bg-brand-700 text-white' : 'border-slate-200 hover:border-brand-500'}`}><span className="block text-xs opacity-70">{date.label}</span><span className="mt-1 block text-lg font-bold">{date.day}</span></button>)}</div><p className="mt-3 text-sm text-slate-500">Chọn ngày để lọc cơ sở, dịch vụ, bác sĩ và giờ trống.</p></div>

              <div className="mt-10 grid gap-5 border-t border-slate-200 pt-7 md:grid-cols-3"><Field label="Cơ sở *"><select required value={form.branch} onChange={(event) => update('branch', event.target.value)}>{branches.map((item) => <option key={item}>{item}</option>)}</select></Field><Field label="Dịch vụ *"><select required value={form.service} onChange={(event) => update('service', event.target.value)}>{services.map((item) => <option key={item}>{item}</option>)}</select></Field><Field label="Bác sĩ *"><select required value={form.doctor} onChange={(event) => update('doctor', event.target.value)}>{doctors.map((item) => <option key={item}>{item}</option>)}</select></Field></div>

              <div className="mt-8 border-t border-slate-200 pt-7"><div className="flex items-center gap-2"><Clock3 className="h-5 w-5 text-brand-700" /><h2 className="text-xl font-bold">Chọn giờ khám *</h2></div><div className="mt-5 grid gap-5 sm:grid-cols-2"><TimeGroup label="Buổi sáng" times={['07:30 - 08:00', '08:00 - 08:30', '09:00 - 09:30', '10:30 - 11:00']} selected={form.time} onSelect={(time) => update('time', time)} /><TimeGroup label="Buổi chiều" times={['13:30 - 14:00', '15:00 - 15:30', '16:30 - 17:00', '18:00 - 18:30']} selected={form.time} onSelect={(time) => update('time', time)} /></div></div>
              <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center"><p className="flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Thông tin được sử dụng để xác nhận lịch hẹn và được bảo mật.</p><button type="submit" disabled={!selectedDate || !form.time} className="inline-flex min-h-12 items-center justify-center gap-2 bg-brand-700 px-7 font-bold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-slate-300">Đặt lịch <ArrowRight className="h-4 w-4" /></button></div>
            </form>
          )}
        </section>
      </main>
      <div className="mx-auto max-w-7xl px-4 pb-12 text-sm text-slate-500 sm:px-6"><Link href="/" className="font-semibold text-brand-700 hover:underline">← Về trang chủ</Link><span className="mx-3">•</span><span>Địa chỉ: 1 - 3, 6 - 8 Trịnh Văn Cấn, TP.HCM</span><span className="mx-3">•</span><a href="https://taimuihongsg.com/dat-hen-kham-benh/" className="hover:text-brand-700">Xem quy trình trên website gốc</a></div>
    </div>
  )
}

function Field({ label, icon: Icon, children }: { label: string; icon?: typeof UserRound; children: ReactNode }) {
  return <label className="block text-sm font-semibold text-slate-800 [&>input]:mt-0 [&>input]:min-h-11 [&>input]:w-full [&>input]:border [&>input]:border-slate-200 [&>input]:bg-slate-50 [&>input]:px-3 [&>input]:font-normal [&>input]:outline-none [&>input]:focus:border-brand-600 [&>select]:min-h-11 [&>select]:w-full [&>select]:border [&>select]:border-slate-200 [&>select]:bg-slate-50 [&>select]:px-3 [&>select]:font-normal [&>select]:outline-none [&>select]:focus:border-brand-600"><span className="mb-2 flex items-center gap-2">{Icon && <Icon className="h-4 w-4 text-brand-700" />}{label}</span>{children}</label>
}

function TimeGroup({ label, times, selected, onSelect }: { label: string; times: string[]; selected: string; onSelect: (time: string) => void }) {
  return <div><h3 className="text-sm font-bold text-slate-700">{label}</h3><div className="mt-3 grid grid-cols-2 gap-2">{times.map((time) => <button key={time} type="button" onClick={() => onSelect(time)} className={`min-h-10 border px-2 text-sm font-semibold transition-colors ${selected === time ? 'border-brand-700 bg-brand-700 text-white' : 'border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-700'}`}>{time}</button>)}</div></div>
}
