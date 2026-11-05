'use client'

import React from 'react'
import { Compass, FileCheck, MapPin, Layers3, CheckCircle2 } from 'lucide-react'

const priorities = [
  ['01', 'Trả lời ngay câu hỏi của người bệnh', 'Đặt một đoạn trả lời ngắn, rõ và đúng trọng tâm ngay đầu mỗi bài viết hoặc trang dịch vụ.', 'Việc cần làm: viết phần tóm tắt 45 đến 60 từ trước phần giải thích chi tiết.', 'Giúp người bệnh và công cụ tìm kiếm hiểu nhanh nội dung chính.', FileCheck, 'text-emerald-700 bg-emerald-50 border-emerald-100'],
  ['02', 'Làm rõ ai chịu trách nhiệm chuyên môn', 'Mỗi nội dung y khoa cần có bác sĩ hoặc chuyên gia kiểm tra, cùng thông tin hồ sơ rõ ràng.', 'Việc cần làm: bổ sung người duyệt, chuyên khoa và ngày cập nhật cho bài viết.', 'Tăng độ tin cậy khi người bệnh kiểm tra thông tin sức khỏe.', CheckCircle2, 'text-teal-700 bg-teal-50 border-teal-100'],
  ['03', 'Giúp người bệnh gần cơ sở tìm thấy bệnh viện', 'Thông tin địa chỉ, giờ khám, số điện thoại và từng cơ sở phải thống nhất trên website và bản đồ.', 'Việc cần làm: chuẩn hóa hồ sơ Google Business và nội dung theo từng khu vực.', 'Tăng khả năng xuất hiện khi người bệnh tìm nơi khám gần mình.', MapPin, 'text-blue-700 bg-blue-50 border-blue-100'],
  ['04', 'Gom nội dung theo từng nhóm bệnh', 'Các bài viết liên quan cần được gom quanh một trang chuyên đề chính thay vì nằm rời rạc.', 'Việc cần làm: sắp xếp lại nội dung theo nhóm Mũi Xoang, Amidan, Ù Tai, Ngáy và Tai Mũi Họng Nhi.', 'Người bệnh dễ đi từ câu hỏi đến dịch vụ phù hợp hơn.', Layers3, 'text-violet-700 bg-violet-50 border-violet-100'],
] as const

export default function GeoFrameworkView() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-700"><Compass className="h-4 w-4" />Kế hoạch xuất hiện trong kết quả tìm kiếm AI</div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-4xl">Làm cho nội dung y khoa dễ được hiểu, tin và trích dẫn hơn</h3>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">Khi người bệnh hỏi Google hoặc các công cụ AI, website cần trả lời rõ ràng, có nguồn chuyên môn và thông tin địa phương chính xác. Kế hoạch dưới đây tập trung vào 4 việc dễ hiểu và có thể triển khai theo từng tuần.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {priorities.map(([number, title, description, action, result, Icon, tone]) => (
          <article key={number} className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
            <div className="flex items-start gap-4"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${tone}`}><Icon className="h-5 w-5" /></div><div className="min-w-0"><div className="text-xs font-bold tracking-widest text-slate-400">{number}</div><h4 className="mt-1 text-lg font-bold text-slate-950">{title}</h4></div></div>
            <p className="mt-5 text-sm leading-6 text-slate-600">{description}</p>
            <div className="mt-4 border-l-2 border-slate-300 pl-4 text-sm leading-6 text-slate-700">{action}</div>
            <div className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-brand-700">Kết quả mong muốn: {result}</div>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 rounded-xl border border-brand-100 bg-brand-50/50 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
        <div><h4 className="font-bold text-slate-950">Lộ trình đề xuất trong 6 tuần</h4><p className="mt-2 text-sm leading-6 text-slate-600">Tuần 1: sửa lỗi nền tảng. Tuần 2: thống nhất thông tin bệnh viện. Tuần 3 và 4: sắp xếp lại nội dung. Tuần 5 và 6: theo dõi khả năng xuất hiện và lượt đặt lịch.</p></div>
        <span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-700 ring-1 ring-inset ring-brand-100">Đo bằng lượt tìm kiếm và lịch hẹn</span>
      </div>
    </section>
  )
}
