'use client'

import React from 'react'
import { AlertTriangle, CheckCircle2, Zap, Search, ShieldAlert, Layers, ArrowUpRight, FileText, UserCheck, BookOpen, Share2 } from 'lucide-react'

export default function StrategicAuditComparison() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-6 pb-5 pt-6 md:px-8 md:pb-6 md:pt-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Kết quả kiểm tra website gốc
          </span>
          <h3 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Website hiện tại đang vướng gì và sẽ xử lý ra sao?
          </h3>
        </div>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Báo cáo được trình bày theo một mạch: vấn đề chính, nội dung, tốc độ và thông tin bệnh viện.
        </p>
      </div>

      <div className="px-6 pb-6 pt-6 md:px-8 md:pb-8">
        <section id="audit-issues" className="space-y-6">
            <div className="grid grid-cols-1 items-start gap-6">
              
              {/* Card 1: Sitemap */}
              <div className="flex h-fit min-h-0 self-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="space-y-6 p-6 md:p-8">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <h4 className="font-bold text-xl tracking-tight text-slate-900">
                        Sitemap XML Bị Chuyển Hướng 301
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 uppercase tracking-wider">
                      Báo động đỏ
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="space-y-2 text-base">
                    <span className="font-bold text-slate-900">Điều đang xảy ra:</span>
                    <p className="leading-7 text-slate-600">
                      Bản danh mục website dành cho Google đang dùng luồng cũ. Cần kiểm tra lại để Google luôn nhận được danh sách trang mới nhất.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="space-y-2 rounded-xl border border-rose-100 bg-rose-50/70 p-5 text-base">
                    <span className="flex items-center gap-2 font-bold text-rose-900">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      Ảnh hưởng đến website:
                    </span>
                    <p className="leading-7 text-rose-950/90">
                      Nội dung mới có thể chậm được Google phát hiện. Đây là rủi ro cần xử lý, chưa nên quy thành số lượt khám bị mất nếu chưa có dữ liệu đo lường.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="flex flex-col gap-2 border-t border-emerald-100 bg-emerald-50/60 px-6 py-5 text-base md:flex-row md:items-center md:justify-between md:px-8">
                  <span className="flex shrink-0 items-center gap-2 font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Hướng xử lý:
                  </span>
                  <span className="font-medium text-emerald-800 md:text-right">
                    Cập nhật bản danh mục website và kiểm tra lại với Google
                  </span>
                </div>
              </div>

              {/* Card 2: Soft 404 */}
              <div className="flex h-fit min-h-0 self-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="space-y-6 p-6 md:p-8">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <h4 className="font-bold text-xl tracking-tight text-slate-900">
                        Lỗi Soft 404 Do Chuyển Hướng Ép Dồn
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wider">
                      Cực kỳ rủi ro
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="space-y-2 text-base">
                    <span className="font-bold text-slate-900">Điều đang xảy ra:</span>
                    <p className="leading-7 text-slate-600">
                      Một số đường dẫn cũ hoặc sai có thể đưa người dùng đến trang không liên quan thay vì thông báo rõ rằng nội dung không còn tồn tại.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="space-y-2 rounded-xl border border-amber-100 bg-amber-50/70 p-5 text-base">
                    <span className="flex items-center gap-2 font-bold text-amber-900">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      Ảnh hưởng đến người bệnh:
                    </span>
                    <p className="leading-7 text-amber-950/90">
                      Người bệnh có thể không tìm thấy thông tin họ cần và rời website trước khi xem dịch vụ hoặc đặt hẹn. Cần kiểm tra từng đường dẫn để xác nhận phạm vi ảnh hưởng.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="flex flex-col gap-2 border-t border-emerald-100 bg-emerald-50/60 px-6 py-5 text-base md:flex-row md:items-center md:justify-between md:px-8">
                  <span className="flex shrink-0 items-center gap-2 font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Hướng xử lý:
                  </span>
                  <span className="font-medium text-emerald-800 md:text-right">
                    Trả thông báo không tìm thấy trang và gợi ý nội dung phù hợp
                  </span>
                </div>
              </div>

              {/* Card 3: Entity Conflict */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Xung Đột Thực Thể Thương Hiệu (Entity)
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 uppercase tracking-wider">
                      Mất vị thế ngành
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Bản chất kỹ thuật:</span>
                    <p className="text-slate-600 leading-relaxed">
                      <code>Entity</code> là hồ sơ nhận diện số của thương hiệu. Schema ngầm và 1.269 bài viết lại khai báo là *"Bệnh viện Đa khoa Quốc tế Sài Gòn"* kèm các chuyên khoa Tim Mạch, Tiêu Hóa.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-purple-900 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      Mức độ nghiêm trọng & Tác hại:
                    </span>
                    <p className="text-purple-950/90 leading-relaxed text-[11px]">
                      Google bị phân vân, không nhận định được đây là bệnh viện chuyên khoa Tai Mũi Họng đầu ngành, làm mất ưu thế cạnh tranh Top 1 vào tay các bệnh viện khác.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Đồng bộ 100% toàn trang: Bệnh Viện Tai Mũi Họng Sài Gòn
                  </span>
                </div>
              </div>

              {/* Card 4: Canonical Mismatch */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                        04
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Thẻ Canonical Trỏ Nhầm Bác Sĩ
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-brand-800 uppercase tracking-wider">
                      Mất uy tín Bác Sĩ
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Bản chất kỹ thuật:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Thẻ <code>rel="canonical"</code> dùng để chỉ định trang gốc. Tuy nhiên hồ sơ của BS. Thống, BS. Hà lại bị cấu hình trỏ canonical sang BS. Thúy; các bác sĩ khác trỏ sang BS. Gia.
                    </p>
                  </div>

                  {/* Mức độ nghiêm trọng */}
                  <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-brand-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      Mức độ nghiêm trọng & Tác hại:
                    </span>
                    <p className="text-brand-950/90 leading-relaxed text-[11px]">
                      Google coi hồ sơ của các bác sĩ giỏi chỉ là "bản sao" và loại bỏ hoàn toàn khỏi trang kết quả tìm kiếm khi bệnh nhân gõ tìm đích danh tên bác sĩ.
                    </p>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Cấp URL độc lập cho từng bác sĩ + Dữ liệu cấu trúc Bác sĩ chuyên khoa
                  </span>
                </div>
              </div>

              {/* Card 5: English Version & International Patients */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-colors md:col-span-2">
                <div className="p-5 space-y-4">
                  {/* Header Card */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                        05
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Phân Hệ Tiếng Anh /english/ Lai Tạp & Đứt Gãy Luồng Chuyển Đổi Quốc Tế
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase tracking-wider">
                      Mất Thị Phần Expat & Du Lịch Y Tế
                    </span>
                  </div>

                  {/* Thuật ngữ & Giải thích */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900">Bản chất kỹ thuật trên web cũ:</span>
                      <p className="text-slate-600 leading-relaxed">
                        URL <code>/english/</code> thực chất chỉ là một danh mục bài viết sơ sài; toàn bộ menu điều hướng chính, thanh tiện ích và chân trang vẫn hiển thị 100% tiếng Việt ("Văn hóa doanh nghiệp", "Bác sĩ", "Chuyên khoa"...); không khai báo cặp thẻ ngôn ngữ quốc tế <code>hreflang="en"</code> và <code>hreflang="vi"</code>.
                      </p>
                    </div>

                    {/* Mức độ nghiêm trọng */}
                    <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl space-y-1">
                      <span className="font-bold text-sky-950 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                        Tác hại đối với Bệnh viện:
                      </span>
                      <p className="text-sky-950/90 leading-relaxed text-[11px]">
                        Đánh mất hoàn toàn cơ hội phục vụ tệp người nước ngoài sinh sống tại Quận 1, Thảo Điền, Phú Mỹ Hưng và khách du lịch y tế (Medical Tourism). Bệnh nhân quốc tế không thể tự định hướng, không thấy thông tin bảo lãnh bảo hiểm trực tiếp (Direct Billing) và không có luồng đặt hẹn tiếng Anh chuyên biệt.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Giải pháp */}
                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Khắc phục (Rebuild Web):
                  </span>
                  <span className="text-emerald-800 font-medium text-[11px]">
                    Xây dựng <strong>English Portal riêng biệt tại /english</strong>: Giao diện 100% tiếng Anh, quy trình Foreign Patient Pathway 5 bước, hỗ trợ Direct Billing 35+ hãng bảo hiểm toàn cầu và xuất hồ sơ y khoa bằng tiếng Anh trong 30 phút.
                  </span>
                </div>
              </div>

            </div>
        </section>

        <section id="content-restructure" className="mt-12 space-y-6 border-t border-slate-200 pt-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Phần 2</span>
            <h4 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Nội dung cần sắp xếp lại</h4>
          </div>
            <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
              <div>
                <strong className="text-amber-950 font-bold">Kiểm kê 2.212 bài viết & 49 trang tĩnh:</strong> Dữ liệu y khoa phong phú nhưng mắc 5 mô thức viết sai chuẩn SEO Y Tế (YMYL) và không phục vụ AI Search.
              </div>
              <span className="font-mono text-[10px] bg-amber-200/70 text-amber-900 px-2.5 py-1 rounded-lg font-bold shrink-0">
                Data Scraping: 31/10/2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Pattern 1: Thiếu Bác sĩ bảo chứng */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Bài Y Khoa Đứng Tên Tài Khoản Marketing
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 uppercase tracking-wider">
                      Vi phạm YMYL
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Toàn bộ 204 bài viết bệnh học quan trọng (viêm tai, amidan, xoang) đều do tài khoản <code>TMH MKT</code> (Author ID: 116) đứng tên xuất bản, không có tên bác sĩ chuyên khoa phụ trách.
                    </p>
                  </div>

                  <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-rose-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-rose-950/90 leading-relaxed text-[11px]">
                      Google xếp y tế vào nhóm Your Money Your Life. Bài viết thiếu bác sĩ kiểm duyệt bị trừ điểm E-E-A-T nặng nề, giảm 50% khả năng hiển thị top đầu tìm kiếm.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Thêm badge Bác sĩ thẩm định + Mã Schema <code>reviewedBy</code>
                  </span>
                </div>
              </div>

              {/* Pattern 2: Thiếu Direct-Answer cho AI */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Mở Bài Dài Dòng, Thiếu Khối Direct-Answer
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wider">
                      Mất Lượt AI Trích Dẫn
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Bài viết mở đầu bằng 200 - 300 từ kể chuyện dài dòng (*"Một đêm con khó ngủ, ba mẹ có thể mất cả ngày..."*), không có câu định nghĩa y khoa dứt khoát.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-amber-900 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-amber-950/90 leading-relaxed text-[11px]">
                      Các công cụ tìm kiếm AI (Google AI Overviews, SearchGPT, Perplexity) không thể bóc tách câu trả lời nhanh, nhường cơ hội trích dẫn cho đối thủ.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Đặt khối <strong>Direct-Answer 45-60 từ</strong> ngay dưới tiêu đề
                  </span>
                </div>
              </div>

              {/* Pattern 3: Thin content tự triệt tiêu */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        1.517 Bài Hỏi Đáp Vụn Vặt "Tự Ăn Thịt Từ Khóa"
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 uppercase tracking-wider">
                      Thin Content
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Tách lẻ hàng nghìn câu hỏi tư vấn 100 từ thành các trang riêng biệt. Hơn 80 bài cùng nói về "ù tai", hơn 120 bài về "viêm xoang" với nội dung tương tự.
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-purple-900 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-purple-950/90 leading-relaxed text-[11px]">
                      Gây ra lỗi <em>Keyword Cannibalization</em> (các bài tự tranh giành thứ hạng lẫn nhau), làm loãng uy tín domain và bị Google đánh giá là nội dung mỏng.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Gom vào <strong>6 Topic Clusters Silo</strong> kèm Accordion FAQ
                  </span>
                </div>
              </div>

              {/* Pattern 4: Rác shortcode WPBakery & Taxonomy sai */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                        04
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Nội Dung Nhúng Shortcode Rác & Danh Mục Lộn Xộn
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-brand-800 uppercase tracking-wider">
                      Lỗi Hạ Tầng
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                    <p className="text-slate-600 leading-relaxed">
                      Nội dung 49 trang dịch vụ bị bọc kín trong shortcode WPBakery (<code>[vc_row]</code>, <code>[vc_column]</code>). Danh mục phân loại theo độ tuổi (`18-25`, `Trên 40`) sinh ra archive rác.
                    </p>
                  </div>

                  <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-brand-900 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      Tác hại đối với Bệnh viện:
                    </span>
                    <p className="text-brand-950/90 leading-relaxed text-[11px]">
                      Mã HTML phình to, tỷ lệ text thật / code chỉ đạt &lt; 8%. Bot tìm kiếm tốn tài nguyên cào dữ liệu (crawl budget) và dễ bỏ dở giữa chừng.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-right text-[11px]">
                    Làm sạch HTML/Markdown thuần + Tái cấu trúc Taxonomy y khoa
                  </span>
                </div>
              </div>

              {/* Pattern 5: Bài viết tiếng Anh nghèo nàn, thiếu truy vấn thực tế */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-slate-300 transition-colors md:col-span-2">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xs">
                        05
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900">
                        Nội Dung Tiếng Anh Cũ Đơn Điệu, Thiếu Bộ Từ Khóa Cho Bệnh Nhân Ngoại Quốc
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase tracking-wider">
                      Bỏ Ngỏ Thị Trường
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-900">Thực trạng bản cũ:</span>
                      <p className="text-slate-600 leading-relaxed">
                        Chỉ có 9 bài viết tiếng Anh được biên dịch cơ học từ tiếng Việt, tiêu đề dài dòng (*"PROLONGED NASAL CONGESTION DURING A SHORT VISIT TO VIETNAM..."*), thiếu các từ khóa tìm kiếm thực tế của người nước ngoài như <em>"English speaking ENT doctor Saigon"</em>, <em>"Swimmer ear clinic District 1"</em>, <em>"Ear barotrauma flight Vietnam"</em>.
                      </p>
                    </div>

                    <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl space-y-1">
                      <span className="font-bold text-sky-950 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                        Tác hại đối với Bệnh viện:
                      </span>
                      <p className="text-sky-950/90 leading-relaxed text-[11px]">
                        Không thể cạnh tranh với các phòng khám đa khoa quốc tế như FV, Raffles hay Family Medical Practice ở phân khúc khách du lịch và expat, dù Bệnh Viện Tai Mũi Họng Sài Gòn có cơ sở vật chất chuyên khoa và đội ngũ bác sĩ vượt trội hơn.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-emerald-50/60 border-t border-emerald-100 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Chuẩn mới:
                  </span>
                  <span className="text-emerald-800 font-medium text-[11px]">
                    Xây dựng cụm bài viết chuyên sâu nhắm trúng Intent tìm kiếm của du khách & expat: Hướng dẫn lấy ráy tai bằng máy hút vi phẫu, cấp chứng chỉ Fit-to-fly sau khi bị chấn thương áp lực tai, và hồ sơ thanh toán bảo lãnh quốc tế.
                  </span>
                </div>
              </div>

            </div>
        </section>

        <section id="site-speed" className="mt-12 space-y-4 border-t border-slate-200 pt-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Phần 3</span>
            <h4 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Tốc độ website</h4>
          </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed">
              <strong className="text-slate-900 font-bold">Core Web Vitals là gì?</strong> Đây là bộ 3 chỉ số đo lường trải nghiệm thực tế của người dùng do Google quy định từ năm 2021. Nếu trang web chậm hoặc giật khung hình, Google sẽ <strong>hạ thứ hạng tìm kiếm trên thiết bị di động</strong> và người bệnh sẽ tắt trang sang bệnh viện đối thủ ngay trong 3 giây đầu tiên.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">1. Chỉ số LCP</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Cần đo</span>
                </div>
                <div className="text-xs text-slate-800 font-semibold">Largest Contentful Paint (Thời gian tải nội dung chính)</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold text-slate-700">Chưa có số đo xác thực</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-950 space-y-1">
                  <div><strong>Điều cần kiểm tra:</strong> Đo thời gian hiển thị nội dung chính trên các thiết bị và mạng phổ biến trước khi quyết định mức cải thiện.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khuyến nghị:</strong> Tối ưu ảnh, font và phần nội dung hiển thị đầu tiên sau khi có số đo làm mốc.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">2. Chỉ số CLS</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Cần đo</span>
                </div>
                <div className="text-xs text-slate-800 font-semibold">Cumulative Layout Shift (Độ dịch chuyển bố cục đột ngột)</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold text-slate-700">Chưa có số đo xác thực</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-950 space-y-1">
                  <div><strong>Điều cần kiểm tra:</strong> Kiểm tra tình trạng nhảy chữ, banner và nút bấm khi trang đang tải trên mobile.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khuyến nghị:</strong> Cố định kích thước ảnh và khu vực hiển thị để bố cục ổn định hơn.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">3. Chỉ số TTFB</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Cần đo</span>
                </div>
                <div className="text-xs text-slate-800 font-semibold">Time to First Byte (Thời gian máy chủ phản hồi gói tin đầu tiên)</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold text-slate-700">Chưa có số đo xác thực</span>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-950 space-y-1">
                  <div><strong>Điều cần kiểm tra:</strong> Đo thời gian máy chủ bắt đầu phản hồi và theo dõi khi lượng truy cập tăng.</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Khuyến nghị:</strong> Rà soát máy chủ, bộ nhớ đệm và cách phân phối nội dung trước khi chọn giải pháp hạ tầng.
                </p>
              </div>
            </div>
        </section>

        <section id="hospital-info" className="mt-12 space-y-4 border-t border-slate-200 pt-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-700">Phần 4</span>
            <h4 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Thông tin bệnh viện</h4>
          </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-2">
              <div>
                <strong className="text-slate-900 font-bold">Schema E-E-A-T là gì?</strong> Đây là đoạn mã dữ liệu cấu trúc (JSON-LD) gắn ngầm dưới nền website để robot của Google đọc hiểu bản chất của bệnh viện. E-E-A-T viết tắt cho: <em>Kinh nghiệm (Experience) - Chuyên môn (Expertise) - Thẩm quyền (Authoritativeness) - Đáng tin cậy (Trustworthiness)</em>.
              </div>
              <div className="text-rose-900 font-semibold">
                <span className="text-rose-600 font-bold">Mức độ nghiêm trọng của lỗi cũ:</span> Trong y tế (nhóm ngành YMYL - Your Money Your Life), Google cực kỳ khắt khe. Việc Schema cũ tự xưng là "Phòng khám Đa khoa" và thiếu hồ sơ bác sĩ thẩm định khiến điểm tin cậy E-E-A-T của Bệnh viện Tai Mũi Họng Sài Gòn bị tụt dốc, bài viết y khoa bị giảm 50% khả năng hiển thị Top đầu.
              </div>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 md:p-6">
              <h4 className="font-bold text-slate-950">Thông tin cần thống nhất</h4>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-3">
                <div className="rounded-xl bg-white p-4 ring-1 ring-inset ring-brand-100"><strong className="text-slate-950">Tên bệnh viện</strong><p className="mt-1">Dùng thống nhất tên Bệnh viện Tai Mũi Họng Sài Gòn trên toàn website.</p></div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-inset ring-brand-100"><strong className="text-slate-950">Chuyên môn</strong><p className="mt-1">Làm rõ bệnh viện chuyên sâu về Tai, Mũi, Họng và các dịch vụ liên quan.</p></div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-inset ring-brand-100"><strong className="text-slate-950">Địa điểm liên hệ</strong><p className="mt-1">Đồng bộ địa chỉ, số điện thoại, giờ khám và vị trí của từng cơ sở.</p></div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">Phần mã triển khai được giữ trong tài liệu kỹ thuật, không đưa vào slide trình bày.</p>
            </div>
        </section>
      </div>
    </div>
  )
}
