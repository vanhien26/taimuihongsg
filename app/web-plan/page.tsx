'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FileText, Activity, AlertTriangle, CheckCircle2, Zap, Layout, TrendingUp, 
  ShieldAlert, Compass, Server, Search, ArrowRight, Gauge, Layers, Users,
  Clock, ShieldCheck, HeartPulse, ChevronRight, BarChart3, Target, Check,
  Cpu, MapPin, DollarSign, Award, Stethoscope, UserCheck, AlertCircle
} from 'lucide-react'

export default function WebPlanPage() {
  return (
    <div className="min-h-screen space-y-12 bg-white py-8 md:space-y-16 md:py-12">
      
      {/* 1. HERO HEADER - EXECUTIVE LEVEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden border-y border-slate-200 bg-slate-50 p-7 md:p-10">
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-700">
              <Compass className="h-3.5 w-3.5" />
              Web Plan • Bản tóm tắt để ra quyết định
            </div>
            
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Kế hoạch cải thiện website và tăng lượt đặt khám
            </h1>
            
            <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              Tóm tắt website đang có vấn đề gì, người bệnh bị ảnh hưởng ở đâu và nên cải thiện theo thứ tự nào. Nội dung dùng để thống nhất hướng đi trước khi lập kế hoạch triển khai.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-px border-y border-slate-200 bg-slate-200 pt-0 sm:grid-cols-4">
              <div className="bg-slate-50 py-4 pr-4">
                <div className="text-xs font-medium text-slate-500">Nội dung tích lũy</div>
                <div className="mt-1 text-lg font-black text-slate-950">2.212 trang</div>
                <div className="text-[11px] text-slate-500">Từ năm 2007</div>
              </div>
              <div className="bg-slate-50 px-4 py-4">
                <div className="text-xs font-medium text-slate-500">Điểm mạnh</div>
                <div className="mt-1 text-lg font-black text-brand-700">Có nền tảng tìm kiếm</div>
                <div className="text-[11px] text-slate-500">Nội dung và thương hiệu sẵn có</div>
              </div>
              <div className="bg-slate-50 px-4 py-4">
                <div className="text-xs font-medium text-slate-500">Điểm cần sửa</div>
                <div className="mt-1 text-lg font-black text-rose-700">Link và nhận diện</div>
                <div className="text-[11px] text-slate-500">Đang ảnh hưởng hành trình khám</div>
              </div>
              <div className="bg-slate-50 pl-4 py-4 sm:pl-4">
                <div className="text-xs font-medium text-slate-500">Mục tiêu</div>
                <div className="mt-1 text-lg font-black text-slate-950">Dễ tìm, dễ tin</div>
                <div className="text-[11px] text-slate-500">Dẫn người bệnh đến đặt hẹn</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-y border-slate-200 py-4 text-sm font-bold text-slate-600">
          <a href="#situation" className="text-brand-700 hover:text-brand-900">01. Website hiện tại</a>
          <a href="#restructure" className="hover:text-brand-700">02. Cách cải thiện</a>
          <a href="#growth" className="hover:text-brand-700">03. Cách đo hiệu quả</a>
        </div>
      </section>

      {/* 3. TAB CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ==================== TAB 1: SITUATION (BUSINESS IMPACT) ==================== */}
        <div id="situation" className="scroll-mt-28">
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Executive Summary Alert */}
            <div className="p-6 md:p-8 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Điều cần biết trước khi cải thiện website
                </div>
                <h3 className="text-xl md:text-2xl font-black text-amber-950">
                  Website có nhiều nội dung tốt nhưng đang làm người bệnh khó tìm và khó đặt lịch
                </h3>
                <p className="text-xs md:text-sm text-amber-900/80 leading-relaxed max-w-4xl">
                  Bệnh viện có đội ngũ chuyên môn và kho nội dung y khoa lớn. Tuy nhiên, một số đường dẫn, thông tin nhận diện và trải nghiệm trên website chưa rõ ràng. Người bệnh có thể không tìm thấy đúng thông tin hoặc bỏ dở trước khi đặt lịch.
                </p>
              </div>
              <div className="shrink-0 p-4 bg-white rounded-2xl border border-amber-200 text-center shadow-sm">
                <div className="text-2xl font-black text-rose-600">Cần đo thêm</div>
                <div className="text-xs font-bold text-slate-700">Ảnh hưởng đến lượt đặt lịch</div>
                <div className="text-[11px] text-slate-500">Chưa kết luận bằng số lượt khám</div>
              </div>
            </div>

            {/* 4 Critical Business Pain Points */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">
                    4 điểm cần ưu tiên cải thiện
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    Mỗi điểm được trình bày theo thứ tự: vấn đề, ảnh hưởng và hướng xử lý.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Pain Point 1: Sitemap Broken */}
                <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-xl bg-rose-50 text-rose-600 font-bold text-xs">
                        Rào Cản 01
                      </span>
                      <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                        Mất Cơ Hội Tiếp Cận Bài Mới
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900">
                      Google chưa nhận đủ danh sách trang mới
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Nói đơn giản:</strong> Bệnh viện có thêm nội dung mới nhưng chưa đưa đúng vào danh mục để Google cập nhật.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Ảnh hưởng:</strong> Bài viết mới có thể được Google phát hiện chậm hơn.</div>
                      <div><strong>Nên làm:</strong> Kiểm tra và cập nhật lại danh sách trang gửi cho Google.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Hướng xử lý:</span>
                    <span className="text-emerald-700 font-black">Cập nhật lại danh sách trang cho Google</span>
                  </div>
                </div>

                {/* Pain Point 2: Soft 404 Wildcard */}
                <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-xl bg-amber-50 text-amber-700 font-bold text-xs">
                        Rào Cản 02
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                        Bệnh Nhân Bỏ Cuộc Giữa Chừng
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900">
                      Một số đường dẫn cũ có thể đưa người bệnh đến sai chỗ
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Nói đơn giản:</strong> Người bệnh đang tìm thông tin nhưng lại bị đưa thẳng đến một trang không trả lời đúng câu hỏi.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Ảnh hưởng:</strong> Người bệnh có thể rời website vì không thấy thông tin mình cần.</div>
                      <div><strong>Nên làm:</strong> Kiểm tra từng đường dẫn cũ và đưa người bệnh đến nội dung gần nhất.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Hướng xử lý:</span>
                    <span className="text-emerald-700 font-black">Thông báo rõ và gợi ý nội dung phù hợp</span>
                  </div>
                </div>

                {/* Pain Point 3: Brand & Schema Identity Conflict */}
                <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-xl bg-purple-50 text-purple-700 font-bold text-xs">
                        Rào Cản 03
                      </span>
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
                        Hạ Thấp Định Vị Chuyên Khoa
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900">
                      Tên và chuyên môn của bệnh viện chưa thống nhất
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Nói đơn giản:</strong> Website đang dùng nhiều cách gọi khác nhau, khiến Google và người bệnh khó xác định chính xác bệnh viện chuyên về lĩnh vực nào.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Ảnh hưởng:</strong> Các trang về bác sĩ, chuyên khoa và dịch vụ có thể không được hiểu đúng trong kết quả tìm kiếm.</div>
                      <div><strong>Nên làm:</strong> Thống nhất tên bệnh viện, chuyên môn, cơ sở và thông tin liên hệ trên toàn website.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Hướng xử lý:</span>
                    <span className="text-emerald-700 font-black">Dùng một cách gọi thống nhất trên toàn website</span>
                  </div>
                </div>

                {/* Pain Point 4: Performance & Slow Loading */}
                <div className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs">
                        Rào Cản 04
                      </span>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                        Mất Bệnh Nhân Do Tải Chậm
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900">
                      Một số trang trên điện thoại tải chưa đủ nhanh
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Nói đơn giản:</strong> Người bệnh phải chờ lâu mới xem được nội dung hoặc nút đặt lịch trên điện thoại.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Ảnh hưởng:</strong> Người bệnh có thể rời trang trước khi xem dịch vụ hoặc đặt lịch.</div>
                      <div><strong>Nên làm:</strong> Tối ưu hình ảnh, nội dung đầu trang và các thành phần tải chưa cần thiết.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Hướng xử lý:</span>
                    <span className="text-emerald-700 font-black">Ưu tiên nội dung chính và tối ưu ảnh</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Inaction Cost Table */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-black text-slate-900">
                Nếu chưa cải thiện thì sao?
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">Yếu Tố Đánh Giá</th>
                      <th className="p-3.5 text-rose-700">Ảnh hưởng có thể xảy ra</th>
                      <th className="p-3.5 text-emerald-700 rounded-r-xl bg-emerald-50">Việc nên làm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Doanh thu từ tìm kiếm Google</td>
                      <td className="p-3.5 text-rose-600">Người bệnh khó tìm thấy dịch vụ phù hợp.</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Ưu tiên các trang dịch vụ và chuyên khoa.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Chi phí Marketing (Google Ads)</td>
                      <td className="p-3.5 text-rose-600">Khó biết nội dung nào đang tạo ra lượt đặt lịch.</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Gắn đo lường từ tìm kiếm đến đặt hẹn.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Uy tín học hàm của Bác Sĩ</td>
                      <td className="p-3.5 text-rose-600">Người bệnh khó xác định thông tin nào đáng tin.</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Chuẩn hóa trang bác sĩ và thông tin chuyên môn.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Đón đầu AI Search (ChatGPT, Gemini)</td>
                      <td className="p-3.5 text-rose-600">Nội dung có thể chưa được công cụ tìm kiếm hiểu đúng.</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Viết nội dung rõ, có người chuyên môn kiểm tra.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-700">Snapshot đối thủ</div>
                <h4 className="mt-2 text-xl font-bold text-slate-950 md:text-2xl">Khoảng cách về lượng truy cập tìm kiếm đang rất lớn</h4>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Trong snapshot tham khảo, website đang có khoảng 69.224 lượt truy cập, thấp hơn rõ rệt so với các bệnh viện cùng nhóm. Đây là lý do cần tìm hiểu thêm về độ phủ nội dung, thương hiệu và khả năng xuất hiện trên Google.</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <tr><th className="p-4">Website</th><th className="p-4 text-brand-700">Traffic snapshot</th><th className="p-4">So với taimuihongsg</th><th className="p-4">Ý nghĩa cần lưu ý</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {[
                        ['taimuihongsg.com', '69.224', 'Cơ sở so sánh', 'Cần bảo vệ và mở rộng nhóm từ khóa dịch vụ'],
                        ['Tamanh Hospital', '3,6 triệu', 'Khoảng 52 lần', 'Cần phân tích các nhóm dịch vụ và nội dung đang kéo traffic'],
                        ['Vinmec', '12,1 triệu', 'Khoảng 174 lần', 'Khoảng cách thương hiệu và độ phủ nội dung rất lớn'],
                        ['Bệnh viện Nam Sài Gòn', '119.282', 'Khoảng 1,7 lần', 'Cần kiểm tra chênh lệch ở local search và trang dịch vụ'],
                        ['Hồng Ngọc Hospital', '258.127', 'Khoảng 3,7 lần', 'Cần so sánh độ phủ nội dung và khả năng chuyển đổi'],
                      ].map(([criterion, current, competitor, gap]) => <tr key={criterion}><td className="p-4 font-bold text-slate-950">{criterion}</td><td className="p-4 text-brand-700">{current}</td><td className="p-4">{competitor}</td><td className="p-4">{gap}</td></tr>)}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ['Điều đã biết', 'Website có 69.224 lượt truy cập trong snapshot, thấp hơn toàn bộ nhóm đối thủ được đưa vào so sánh.'],
                  ['Điều cần tìm nguyên nhân', 'Chưa đủ dữ liệu để tách riêng tác động của thương hiệu, nội dung, local search và quảng cáo.'],
                  ['Việc cần làm tiếp', 'Crawl các website, đối chiếu nhóm từ khóa và kiểm tra dữ liệu Search Console trước khi chốt mục tiêu tăng trưởng.'],
                ].map(([title, detail]) => <div key={title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-5"><h5 className="font-bold text-slate-950">{title}</h5><p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p></div>)}
              </div>

              <div className="border-l-2 border-brand-600 pl-4 text-sm leading-6 text-slate-700"><strong className="text-slate-950">Kết luận để ra quyết định:</strong> khoảng cách traffic là có thật trong snapshot, nhưng nguyên nhân chưa đủ dữ liệu để kết luận. Bước tiếp theo nên là audit đối thủ theo nhóm từ khóa và dịch vụ, sau đó mới chốt mục tiêu tăng trưởng.</div>
              <p className="text-xs leading-5 text-slate-500">Nguồn: Similarweb snapshot tháng 09/2026 do người dùng cung cấp. Đây là traffic ước tính, không phải số liệu Analytics nội bộ.</p>
            </div>

          </div>
        </div>

        {/* ==================== TAB 2: RESTRUCTURING (DOCTOR-FRIENDLY) ==================== */}
        <div id="restructure" className="scroll-mt-28">
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Header intro */}
            <div className="p-6 md:p-8 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-800">
                  Định Hướng Tái Cấu Trúc Toàn Diện
                </div>
                <h3 className="text-xl md:text-2xl font-black text-brand-950">
                  Tổ chức lại website theo hành trình của người bệnh
                </h3>
                <p className="text-xs md:text-sm text-brand-900/80 leading-relaxed max-w-3xl">
                  Phần này chỉ mô tả nguyên tắc tổ chức website: người bệnh dễ tìm thông tin, hiểu lựa chọn của mình và đi đến bước liên hệ phù hợp. Chiến lược dịch vụ và nội dung chi tiết sẽ được quyết định ở tài liệu riêng.
                </p>
              </div>
              <span className="px-4 py-2 bg-brand-700 text-white rounded-xl text-xs font-bold shrink-0">
                Nguyên tắc trải nghiệm
              </span>
            </div>

            {/* 5 Revenue Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 1 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-700 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Tìm đúng thông tin</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Người bệnh có thể tìm thấy chuyên khoa, dịch vụ, bác sĩ và thông tin cần biết mà không phải đi qua quá nhiều lớp trang.
                </p>
                <div className="pt-2 text-[11px] text-brand-800 font-semibold bg-brand-50 p-2.5 rounded-xl border border-brand-200/50">
                  Nguyên tắc: Nội dung được nhóm theo nhu cầu tìm kiếm.
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Hiểu trước khi quyết định</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trang dịch vụ cần giải thích rõ phương pháp, quy trình, ai phù hợp, thời gian dự kiến và cách liên hệ.
                </p>
                <div className="pt-2 text-[11px] text-teal-800 font-semibold bg-teal-50 p-2.5 rounded-xl border border-teal-200/50">
                  Nguyên tắc: Thông tin quan trọng được đặt ở nơi dễ thấy.
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Tin đúng thông tin</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hồ sơ bác sĩ, cơ sở, quy trình và thông tin chuyên môn cần nhất quán để người bệnh dễ kiểm chứng.
                </p>
                <div className="pt-2 text-[11px] text-purple-800 font-semibold bg-purple-50 p-2.5 rounded-xl border border-purple-200/50">
                  Nguyên tắc: Có nguồn và người chịu trách nhiệm chuyên môn.
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Liên hệ đúng lúc</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nút gọi, đặt lịch và thông tin cơ sở cần xuất hiện đúng lúc, đặc biệt trên điện thoại.
                </p>
                <div className="pt-2 text-[11px] text-blue-800 font-semibold bg-blue-50 p-2.5 rounded-xl border border-blue-200/50">
                  Nguyên tắc: Mỗi trang có một bước tiếp theo rõ ràng.
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  05
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Đo để cải thiện</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Theo dõi lượt xem dịch vụ, gọi điện, đặt lịch và các bước người bệnh rời đi để biết phần nào cần cải thiện tiếp.
                </p>
                <div className="pt-2 text-[11px] text-amber-800 font-semibold bg-amber-50 p-2.5 rounded-xl border border-amber-200/50">
                  Nguyên tắc: Quyết định tiếp theo dựa trên dữ liệu thực tế.
                </div>
              </div>

              {/* Pillar 6: CRO Feature */}
              <div className="bg-gradient-to-br from-brand-800 to-teal-900 rounded-3xl p-6 text-white space-y-3 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-300 uppercase">Công Cụ Tăng Tỷ Lệ Đặt Khám</div>
                  <h4 className="font-extrabold text-base text-white mt-1">Trợ Lý Sàng Lọc Triệu Chứng (Symptom Navigator)</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mt-2">
                    Người bệnh không hiểu từ ngữ chuyên môn y khoa. Công cụ này cho phép họ chọn triệu chứng dễ hiểu (như "nghẹt mũi", "khàn tiếng", "ngáy to") rồi tự động gợi ý khoa khám và bác sĩ phù hợp để chốt lịch.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-300 pt-2 border-t border-white/10">
                  Đã được tích hợp trực tiếp trên Prototype
                </div>
              </div>

            </div>

            {/* Restructure Actions Checklist */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-black text-slate-900">
                3 Việc Cần Làm Ngay Để Hoàn Tất Tái Cấu Trúc (Không Cần Đập Đi Xây Lại Từ Đầu)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">1. Sắp Xếp Lại Danh Mục</div>
                  <p className="text-slate-600 leading-relaxed">
                    Xóa bỏ các trang nháp lộ ra ngoài. Chuyển các bài viết đa khoa (sởi, gan, vú) sang website `sighospital.vn` để giữ cho website thuần khiết Tai Mũi Họng.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">2. Khôi Phục Uy Tín Bác Sĩ</div>
                  <p className="text-slate-600 leading-relaxed">
                    Gắn tên và chứng chỉ Bác sĩ chuyên khoa thẩm định vào từng bài viết (reviewedBy) để tăng điểm uy tín y tế theo tiêu chuẩn Google YMYL.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">3. Gom 1.517 Câu Hỏi Tư Vấn</div>
                  <p className="text-slate-600 leading-relaxed">
                    Không để 1.517 bài hỏi đáp nằm vụn vặt làm loãng web, gom chúng thành 6 Chuyên đề lớn với bảng câu hỏi đáp (Accordion FAQ) dưới chân các trang dịch vụ.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ==================== TAB 3: GROWTH PLAN (FINANCIAL & ROI) ==================== */}
        <div id="growth" className="scroll-mt-28">
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Header intro */}
            <div className="p-6 md:p-8 rounded-3xl bg-teal-50 border border-teal-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Cách đo hiệu quả
                </div>
                <h3 className="text-xl md:text-2xl font-black text-teal-950">
                  Đo kết quả trước khi cam kết mục tiêu tăng trưởng
                </h3>
                <p className="text-xs md:text-sm text-teal-900/80 leading-relaxed max-w-3xl">
                  Các con số về chi phí quảng cáo, lượt khám và tỷ lệ đặt lịch cần được lấy từ dữ liệu thực tế. Trước mắt, website cần thống nhất cách đo từ lượt tìm kiếm đến cuộc gọi và lịch hẹn.
                </p>
              </div>
              <span className="px-4 py-2 bg-teal-700 text-white rounded-xl text-xs font-bold shrink-0">
                Cần thiết lập baseline
              </span>
            </div>

            {/* Financial ROI Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Chi phí quảng cáo</div>
                <div className="text-3xl font-black text-emerald-600">Cần đo</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  So sánh chi phí quảng cáo với lượt đặt lịch đến từ tìm kiếm tự nhiên.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Lượt tìm kiếm tự nhiên</div>
                <div className="text-3xl font-black text-brand-700">Theo dõi</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Theo dõi traffic, nhóm từ khóa và chất lượng lượt truy cập theo tháng.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Tỷ lệ thành lịch hẹn</div>
                <div className="text-3xl font-black text-teal-600">Thiết lập</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Đo từ xem dịch vụ, gọi điện hoặc bấm đặt lịch đến khi hoàn tất.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Mức độ hiện diện thương hiệu</div>
                <div className="text-3xl font-black text-purple-600">Đối chiếu</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  So sánh vị trí tìm kiếm, lượt nhắc đến và độ phủ bản đồ với nhóm đối thủ.
                </p>
              </div>
            </div>

            {/* Strategic Pillars for Doctors */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-lg font-black text-slate-900">
                Growth cần làm gì để tạo ra kết quả?
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Attack 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <MapPin className="w-4 h-4 text-brand-700" />
                    1. Content Production
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sản xuất nội dung theo câu hỏi thật của người bệnh: triệu chứng, dịch vụ, bác sĩ, quy trình và thông tin trước khi đến khám. Mục tiêu là tạo nguồn truy cập đều và giúp bệnh viện được nhớ đến đúng nhu cầu.
                  </p>
                </div>

                {/* Attack 2 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Cpu className="w-4 h-4 text-teal-700" />
                    2. SEO và GEO
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tối ưu nội dung để xuất hiện trên Google và được các công cụ AI hiểu đúng, trích dẫn đúng. Mục tiêu là tăng Traffic và khả năng xuất hiện khi người bệnh đang tìm cách điều trị.
                  </p>
                </div>

                {/* Attack 3 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    3. Build Entity và độ tin cậy
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Xây dựng sự hiện diện nhất quán của bệnh viện qua báo chí, PR, Guest post, đối tác chuyên môn và các nguồn giới thiệu đáng tin cậy. Mục tiêu là tăng Brand Awareness và Top of Mind, không chỉ tăng thứ hạng.
                  </p>
                </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm"><CheckCircle2 className="w-4 h-4 text-brand-700" />4. Conversion và Appointment</div>
                <p className="text-xs text-slate-600 leading-relaxed">Biến lượt truy cập thành hành động: xem dịch vụ, chọn bác sĩ, gọi điện hoặc đặt lịch. Đo từng bước để biết điểm nào đang làm người bệnh dừng lại.</p>
              </div>

              </div>
            </div>

            {/* 8-Week Timeline for Leadership */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xl font-black text-white">Growth loop: từ nội dung đến lịch hẹn</h4>
                  <p className="text-xs text-slate-400 mt-1">Các hoạt động liên kết với nhau, không phải một danh sách task rời rạc.</p>
                </div>
                <div className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800/60 w-fit">
                  Đo theo từng điểm chạm
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-emerald-400 font-extrabold text-sm">01. Tạo nội dung</div>
                  <p className="text-slate-300 leading-relaxed">
                    Tạo các nội dung giải đáp đúng nhu cầu tìm kiếm và gắn với dịch vụ phù hợp.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-teal-400 font-extrabold text-sm">02. Đưa người bệnh đến</div>
                  <p className="text-slate-300 leading-relaxed">
                    Phân phối qua Google, AI Search, PR, Guest post và các kênh có liên quan.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-blue-400 font-extrabold text-sm">03. Tạo ghi nhớ thương hiệu</div>
                  <p className="text-slate-300 leading-relaxed">
                    Củng cố tên bệnh viện, chuyên môn, bác sĩ, cơ sở và bằng chứng chuyên môn trên nhiều điểm chạm.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-purple-400 font-extrabold text-sm">04. Chuyển thành lịch hẹn</div>
                  <p className="text-slate-300 leading-relaxed">
                    Tối ưu CTA, gọi điện, form và flow đặt lịch; đo kết quả để quay lại cải thiện nội dung.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 4. FOOTER EXECUTIVE CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-900 to-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-brand-800/40">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-black">Xem Thử Bản Mẫu Prototype Đã Hoàn Thiện</h4>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Phiên bản thử nghiệm (Prototype) đã giải quyết 100% các lỗi trên, đạt tốc độ dưới 1 giây và có sẵn bộ lọc triệu chứng dành cho bệnh nhân.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Mở Trang Chủ Prototype
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
