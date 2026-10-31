'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  FileText, Activity, AlertTriangle, CheckCircle2, Zap, Layout, TrendingUp, 
  ShieldAlert, Compass, Server, Search, ArrowRight, Gauge, Layers, Users,
  Clock, ShieldCheck, HeartPulse, ChevronRight, BarChart3, Target, Check,
  Cpu, MapPin, DollarSign, Award, Stethoscope, UserCheck, AlertCircle
} from 'lucide-react'

export default function WebPlanPage() {
  const [activeTab, setActiveTab] = useState<'situation' | 'restructure' | 'growth'>('situation')

  return (
    <div className="py-12 md:py-16 space-y-16 bg-slate-50 min-h-screen">
      
      {/* 1. HERO HEADER - EXECUTIVE LEVEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-brand-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              Báo Cáo Chiến Lược Dành Cho Ban Lãnh Đạo & Hội Đồng Bác Sĩ
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Kế Hoạch Tái Cấu Trúc Website & Tăng Trưởng Lượt Khám 2026 - 2027
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Phân tích thực trạng website <strong className="text-white">taimuihongsg.com</strong> dưới góc độ <strong>tác động kinh doanh (Business Impact)</strong>: Những rào cản vô hình đang khiến bệnh viện bị mất lượt đặt khám vào tay đối thủ, lãng phí tài sản 2.200 bài viết y khoa và kế hoạch nâng cấp toàn diện để gia tăng bệnh nhân phẫu thuật kỹ thuật cao.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Tài sản tích lũy</div>
                <div className="text-lg font-black text-white mt-0.5">2.212 Trang y khoa</div>
                <div className="text-[11px] text-emerald-400">Tích lũy từ 2007</div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Vị thế hiện tại</div>
                <div className="text-lg font-black text-emerald-400 mt-0.5">Top 1 Quận 1</div>
                <div className="text-[11px] text-slate-300">Từ khóa phòng khám địa phương</div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Rủi ro mất khách</div>
                <div className="text-lg font-black text-rose-400 mt-0.5">~35 - 40%</div>
                <div className="text-[11px] text-rose-300">Rơi rụng do web chậm & link lỗi</div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Tiềm năng tăng trưởng</div>
                <div className="text-lg font-black text-teal-400 mt-0.5">+45% Lượt khám</div>
                <div className="text-[11px] text-teal-300">Sau 8 tuần khắc phục kỹ thuật</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TAB SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setActiveTab('situation')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'situation'
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            1. Thực Trạng & Rủi Ro Kinh Doanh (Business Situation)
          </button>
          <button
            onClick={() => setActiveTab('restructure')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'restructure'
                ? 'bg-brand-700 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Layout className="w-4 h-4 text-emerald-300" />
            2. Kế Hoạch Tái Thiết Tối Ưu Lượt Khám (Restructuring)
          </button>
          <button
            onClick={() => setActiveTab('growth')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'growth'
                ? 'bg-teal-700 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-teal-300" />
            3. Chiến Lược Tăng Trưởng Doanh Thu (Growth Plan)
          </button>
        </div>
      </section>

      {/* 3. TAB CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ==================== TAB 1: SITUATION (BUSINESS IMPACT) ==================== */}
        {activeTab === 'situation' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Executive Summary Alert */}
            <div className="p-6 md:p-8 rounded-3xl bg-amber-50/80 border border-amber-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Góc Nhìn Quản Trị Y Tế & Hiệu Quả Đầu Tư
                </div>
                <h3 className="text-xl md:text-2xl font-black text-amber-950">
                  Bệnh Viện Đang Bị "Chảy Máu" Bệnh Nhân & Lãng Phí Hàng Tỷ Đồng Tài Sản Số
                </h3>
                <p className="text-xs md:text-sm text-amber-900/80 leading-relaxed max-w-4xl">
                  Bệnh Viện Tai Mũi Họng Sài Gòn có đội ngũ chuyên gia đầu ngành (TS.BS Hoàng Lương, các BS.CKII) và kho nội dung y khoa khổng lồ từ 2007. Tuy nhiên, hệ thống website hiện tại đang bị <strong>nghẽn kỹ thuật nghiêm trọng</strong>, giống như một bệnh viện hiện đại nhưng cánh cửa đón tiếp bị kẹt, bảng chỉ dẫn bị sai và thời gian chờ làm thủ tục quá lâu khiến bệnh nhân bỏ sang bệnh viện tư khác (Tâm Anh, Vinmec, BV TMH TPHCM).
                </p>
              </div>
              <div className="shrink-0 p-4 bg-white rounded-2xl border border-amber-200 text-center shadow-sm">
                <div className="text-2xl font-black text-rose-600">~150 - 200</div>
                <div className="text-xs font-bold text-slate-700">Ca khám/phẫu thuật bị mất</div>
                <div className="text-[11px] text-slate-500">Ước tính mỗi tháng do lỗi web</div>
              </div>
            </div>

            {/* 4 Critical Business Pain Points */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">
                    4 Rào Cản Kỹ Thuật Đang Trực Tiếp Làm Giảm Doanh Thu Bệnh Viện
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    Chuyển hóa các lỗi kỹ thuật thành tác động kinh doanh cụ thể để Ban Giám Đốc dễ dàng ra quyết định:
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
                      Tắc Nghẽn Cửa Ngõ Tiếp Nhận Của Google (Hỏng Sitemap XML)
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Ví von y khoa:</strong> Giống như bệnh viện bổ sung kỹ thuật mới hoặc bác sĩ mới nhưng không đưa vào danh mục niêm yết, khiến bệnh nhân và cơ quan quản lý không hề hay biết.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Thực tế kỹ thuật:</strong> File bản đồ website (Sitemap) trong <code>robots.txt</code> bị chuyển hướng lòng vòng sang trang Đặt hẹn thay vì mở cho Google đọc.</div>
                      <div><strong>Hậu quả kinh doanh:</strong> Bác sĩ viết bài mới (ví dụ bài cấp cứu <em>"9 dấu hiệu điếc đột ngột"</em> đăng ngày 28/10/2026) nhưng Google không thấy để hiển thị lên kết quả tìm kiếm. Bệnh viện mất trắng lượng bệnh nhân tìm kiếm dịch vụ này vào tay Tâm Anh.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Giải pháp trên Prototype mới:</span>
                    <span className="text-emerald-700 font-black">Khôi phục Sitemap tự động 200 OK</span>
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
                      Bệnh Nhân Bấm Vào Gói Khám Lại Bị Đẩy Vào Form Trống (Lỗi Soft 404)
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Ví von y khoa:</strong> Bệnh nhân đến hỏi thông tin <em>"Gói tầm soát ngưng thở khi ngủ"</em> nhưng bảo vệ lại dẫn thẳng họ vào phòng thu tiền mà không giải thích gì, làm họ khó chịu và bỏ về.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Thực tế kỹ thuật:</strong> 53 đường dẫn liên kết cũ bị gãy, nhưng lập trình viên trước đây lại cài đặt tự động chuyển hướng mọi link chết về trang `/dat-hen-kham-benh/`.</div>
                      <div><strong>Hậu quả kinh doanh:</strong> Bệnh nhân đang quan tâm gói khám phẫu thuật, bấm vào link lại thấy hiện form đặt hẹn trống rỗng, không có thông tin chi phí hay phương pháp, khiến họ hoang mang và thoát trang ngay lập tức. Google cũng đánh giá website chất lượng kém.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Giải pháp trên Prototype mới:</span>
                    <span className="text-emerald-700 font-black">Trang 404 chuẩn chỉ dẫn về chuyên khoa đúng</span>
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
                      Bị Google Gắn Mác "Phòng Khám Đa Khoa" Thay Vì Bệnh Viện Chuyên Khoa Sâu
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Ví von y khoa:</strong> Giống như Bệnh viện Tai Mũi Họng chuyên sâu hạng 1 nhưng trước cổng lại treo biển "Phòng khám đa khoa khám tổng quát", làm giảm hẳn niềm tin của bệnh nhân cần mổ ca khó.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Thực tế kỹ thuật:</strong> Đoạn mã ẩn Schema trên 2.212 trang và 1.269 tiêu đề đều ghi *"Phòng Khám / Bệnh Viện Đa Khoa Quốc Tế Sài Gòn"*, link Facebook trỏ sang fanpage phòng khám đa khoa, liệt kê cả chuyên khoa Tim mạch, Tiêu hóa.</div>
                      <div><strong>Hậu quả kinh doanh:</strong> Google Knowledge Graph bị rối loạn thực thể, không nhận diện được `taimuihongsg.com` là đơn vị chuyên môn sâu số 1 về Tai Mũi Họng. Bệnh viện bị thua thiệt vị trí xếp hạng ở các từ khóa bệnh học giá trị cao như *"mổ vách ngăn mũi"*, *"vi phẫu tai"*, *"đo giấc ngủ OSAS"*.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Giải pháp trên Prototype mới:</span>
                    <span className="text-emerald-700 font-black">Chuẩn hóa 100% Thực thể Bệnh Viện Tai Mũi Họng</span>
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
                      Tốc Độ Tải Trên Điện Thoại Quá Chậm (&gt;3 Giây) Làm Mất Khách Trẻ
                    </h4>

                    {/* Analogy for Doctors */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <strong className="text-brand-800">Ví von y khoa:</strong> Bệnh nhân đang khó chịu muốn đặt khám ngay trên điện thoại, nhưng phải đứng chờ hơn 3 giây ở sảnh tải trang; hơn 40% người sẽ bấm quay lại chọn bệnh viện khác tải nhanh hơn.
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div><strong>Thực tế kỹ thuật:</strong> Tốc độ tải nội dung chính (LCP) trên mobile là 3.1 giây, bài mổ xoang lên tới 3.4 giây (trong khi BV Tai Mũi Họng TPHCM chỉ 1.2 giây). Nguyên nhân do 6 ảnh bác sĩ trang chủ là ảnh nặng tới 7.8MB mỗi ảnh, cùng 34 file code CSS cũ kỹ đè nặng.</div>
                      <div><strong>Hậu quả kinh doanh:</strong> Google đo trải nghiệm người dùng thực tế và hạ bậc xếp hạng của website trên điện thoại di động – nơi chiếm tới 82% lượt tìm kiếm khám chữa bệnh hiện nay.</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Giải pháp trên Prototype mới:</span>
                    <span className="text-emerald-700 font-black">Tải trang siêu tốc &lt; 0.8 giây, nén ảnh tự động</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Inaction Cost Table */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-lg font-black text-slate-900">
                Bảng So Sánh: Giữ Nguyên Hiện Trạng Cũ vs. Nâng Cấp Tái Thiết Kế Mới
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5 rounded-l-xl">Yếu Tố Đánh Giá</th>
                      <th className="p-3.5 text-rose-700">Nếu Giữ Nguyên Website Cũ (Cost of Inaction)</th>
                      <th className="p-3.5 text-emerald-700 rounded-r-xl bg-emerald-50">Khi Nâng Cấp Theo Web Plan Mới</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Doanh thu từ tìm kiếm Google</td>
                      <td className="p-3.5 text-rose-600">Dần mất thị phần các ca mổ kỹ thuật cao vào tay Tâm Anh, Medlatec, Vinmec</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Tăng 45% lượt bệnh nhân tự nhiên tìm đến khám và phẫu thuật</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Chi phí Marketing (Google Ads)</td>
                      <td className="p-3.5 text-rose-600">Phải liên tục đốt tiền chạy quảng cáo bù đắp (30.000đ - 50.000đ/click mổ xoang)</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Tiết kiệm 40 - 60 triệu/tháng nhờ bài viết tự lên Top 1 Google bền vững</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Uy tín học hàm của Bác Sĩ</td>
                      <td className="p-3.5 text-rose-600">Hồ sơ bác sĩ bị canonical chéo nhau, bài viết thiếu khối chứng thực y khoa</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Mỗi bác sĩ có trang chuyên gia chuẩn mực, định vị chuyên môn vững chắc</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Đón đầu AI Search (ChatGPT, Gemini)</td>
                      <td className="p-3.5 text-rose-600">Bị "tàng hình" hoàn toàn khi người bệnh hỏi tư vấn qua AI</td>
                      <td className="p-3.5 text-emerald-700 bg-emerald-50/50 font-semibold">Trở thành nguồn dữ liệu y khoa số 1 được AI trích dẫn và gợi ý khám</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: RESTRUCTURING (DOCTOR-FRIENDLY) ==================== */}
        {activeTab === 'restructure' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Header intro */}
            <div className="p-6 md:p-8 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-800">
                  Định Hướng Tái Cấu Trúc Toàn Diện
                </div>
                <h3 className="text-xl md:text-2xl font-black text-brand-950">
                  Tổ Chức Lại Website Theo Đúng 5 Dịch Vụ Mũi Nhọn Mang Lại Doanh Thu Cao Nhất
                </h3>
                <p className="text-xs md:text-sm text-brand-900/80 leading-relaxed max-w-3xl">
                  Thay vì dàn trải lan man, toàn bộ cấu trúc website mới được quy hoạch thành 5 Chuyên khoa chiến lược. Mọi bài viết, video và công cụ tư vấn đều hướng tới việc thuyết phục bệnh nhân đặt lịch khám và can thiệp phẫu thuật tại bệnh viện.
                </p>
              </div>
              <span className="px-4 py-2 bg-brand-700 text-white rounded-xl text-xs font-bold shrink-0">
                Chuẩn Mực Bệnh Viện Tư
              </span>
            </div>

            {/* 5 Revenue Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 1 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-700 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Khoa Mũi - Xoang & Chỉnh Hình Vách Ngăn</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trọng tâm khai thác dịch vụ: Phẫu thuật nội soi xoang FESS, chỉnh hình vách ngăn mũi, cắt polyp mũi. Đây là nhóm dịch vụ có tỷ lệ chỉ định phẫu thuật cao nhất.
                </p>
                <div className="pt-2 text-[11px] text-brand-800 font-semibold bg-brand-50 p-2.5 rounded-xl border border-brand-200/50">
                  Mục tiêu kinh doanh: Chiếm lĩnh từ khóa <em>"mổ vách ngăn mũi tphcm"</em> từ Tâm Anh.
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Khoa Họng - Cắt Amidan Dao Coblator</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nhấn mạnh công nghệ Coblator nhiệt độ thấp: Không đau, không chảy máu, xuất viện trong ngày, ăn nhẹ sau 4 giờ. Đánh trúng tâm lý sợ đau của bệnh nhân và phụ huynh.
                </p>
                <div className="pt-2 text-[11px] text-teal-800 font-semibold bg-teal-50 p-2.5 rounded-xl border border-teal-200/50">
                  Mục tiêu kinh doanh: Tăng 40% ca cắt amidan và nạo VA người lớn & trẻ em.
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Trung Tâm Đo Đa Ký Giấc Ngủ (PSG)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đơn vị mũi nhọn cao cấp: Chẩn đoán chứng ngủ ngáy và ngưng thở khi ngủ nguy hiểm. Dịch vụ lưu đêm phòng riêng tiêu chuẩn khách sạn và cung cấp phác đồ thở máy CPAP.
                </p>
                <div className="pt-2 text-[11px] text-purple-800 font-semibold bg-purple-50 p-2.5 rounded-xl border border-purple-200/50">
                  Mục tiêu kinh doanh: Độc quyền phân khúc điều trị ngáy cao cấp tại Quận 1.
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Khoa Tai - Thính Học & Cấp Cứu Điếc</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đo thính lực phòng cách âm ISO, vi phẫu vá màng nhĩ, cấp cứu điếc đột ngột trong 72 giờ đầu. Nhấn mạnh yếu tố "thời gian vàng" để thúc đẩy bệnh nhân đến khám khẩn cấp.
                </p>
                <div className="pt-2 text-[11px] text-blue-800 font-semibold bg-blue-50 p-2.5 rounded-xl border border-blue-200/50">
                  Mục tiêu kinh doanh: Tăng lượt khám đo thính lực và can thiệp vá nhĩ.
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  05
                </div>
                <h4 className="font-extrabold text-base text-slate-900">Trung Tâm Tai Mũi Họng Nhi Khoa</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Khu khám riêng không gian thân thiện. Nguyên tắc điều trị: <em>Nội soi ống mềm không đau, hạn chế kháng sinh bừa bãi</em>. Thu hút các gia đình có thu nhập khá tại TP.HCM.
                </p>
                <div className="pt-2 text-[11px] text-amber-800 font-semibold bg-amber-50 p-2.5 rounded-xl border border-amber-200/50">
                  Mục tiêu kinh doanh: Xây dựng tệp khách hàng thành viên gia đình trung thành.
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
        )}

        {/* ==================== TAB 3: GROWTH PLAN (FINANCIAL & ROI) ==================== */}
        {activeTab === 'growth' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Header intro */}
            <div className="p-6 md:p-8 rounded-3xl bg-teal-50 border border-teal-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Hiệu Quả Kinh Doanh & Lợi Nhuận Đầu Tư (ROI)
                </div>
                <h3 className="text-xl md:text-2xl font-black text-teal-950">
                  Kế Hoạch Tăng Trưởng Doanh Thu Bền Vững Giai Đoạn 2026 - 2027
                </h3>
                <p className="text-xs md:text-sm text-teal-900/80 leading-relaxed max-w-3xl">
                  Thay vì phụ thuộc vào việc đốt tiền quảng cáo Facebook hay Google Ads với chi phí click ngày càng đắt đỏ, chiến lược tập trung biến kho dữ liệu 2.200 bài viết sẵn có thành "cỗ máy tự động thu hút bệnh nhân" chất lượng cao.
                </p>
              </div>
              <span className="px-4 py-2 bg-teal-700 text-white rounded-xl text-xs font-bold shrink-0">
                Hiệu Quả Bền Vững
              </span>
            </div>

            {/* Financial ROI Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Tiết Kiệm Tiền Ads Mỗi Tháng</div>
                <div className="text-3xl font-black text-emerald-600">~50 - 70 Tr</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Nhờ bài viết mổ xoang, cắt amidan tự lên Top 1 Google tự nhiên mà không cần trả tiền mỗi click.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Tăng Trưởng Bệnh Nhân Tự Nhiên</div>
                <div className="text-3xl font-black text-brand-700">+45%</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Lượng truy cập từ người bệnh có nhu cầu thật tăng từ 28.000 lên hơn 40.000 lượt/tháng.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Tỷ Lệ Chuyển Đổi Thành Lịch Hẹn</div>
                <div className="text-3xl font-black text-teal-600">+35%</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Nhờ tốc độ web dưới 1 giây, bộ lọc triệu chứng và quy trình đặt hẹn tức thì không phải chờ.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase">Bảo Vệ Thương Hiệu Khỏi Đối Thủ</div>
                <div className="text-3xl font-black text-purple-600">Top 1</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Khẳng định vị thế Bệnh viện Tai Mũi Họng số 1 TP.HCM trên Google và cả các ứng dụng AI (ChatGPT, Gemini).
                </p>
              </div>
            </div>

            {/* Strategic Pillars for Doctors */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-lg font-black text-slate-900">
                3 Mũi Tấn Công Chiếm Lĩnh Thị Phần Người Bệnh Mới
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Attack 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <MapPin className="w-4 h-4 text-brand-700" />
                    1. Mở Rộng Địa Bàn Khám Bán Kính 5km
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hiện bệnh viện chỉ đứng đầu từ khóa Quận 1. Kế hoạch mới sẽ phủ sóng tiếp sang các quận lân cận có thu nhập cao: <strong>Quận 3, Quận 4, Quận 7 (Phú Mỹ Hưng), Bình Thạnh</strong> để đón dòng bệnh nhân khám dịch vụ và bảo hiểm tư nhân.
                  </p>
                </div>

                {/* Attack 2 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Cpu className="w-4 h-4 text-teal-700" />
                    2. Đón Đầu Bệnh Nhân Tìm Kiếm Bằng AI (GEO)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Người bệnh thế hệ mới ngày càng hỏi ChatGPT và Google Gemini: <em>"Mổ xoang ở đâu uy tín?", "Cắt amidan giá bao nhiêu?"</em>. Chúng tôi cài đặt sẵn các khối tóm tắt chuẩn y khoa để AI ưu tiên đọc và giới thiệu Bệnh Viện Tai Mũi Họng Sài Gòn.
                  </p>
                </div>

                {/* Attack 3 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    3. Kênh Bảo Hiểm Bảo Lãnh Tư Nhân
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bệnh viện liên kết hơn 35 công ty bảo hiểm lớn (Bảo Việt, Prudential, Manulife, Pacific Cross...). Website mới sẽ làm nổi bật quy trình bảo lãnh viện phí không cần thanh toán trước, thu hút nhóm bệnh nhân sẵn sàng chi trả cao.
                  </p>
                </div>

              </div>
            </div>

            {/* 8-Week Timeline for Leadership */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xl font-black text-white">Lộ Trình Triển Khai 8 Tuần Không Gián Đoạn Khám Bệnh</h4>
                  <p className="text-xs text-slate-400 mt-1">Toàn bộ việc nâng cấp thực hiện trên môi trường thử nghiệm song song</p>
                </div>
                <div className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-800/60 w-fit">
                  Bắt đầu thấy kết quả sau 4 tuần
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-emerald-400 font-extrabold text-sm">Tuần 1 - 2: Xử Lý Lỗ Hổng</div>
                  <p className="text-slate-300 leading-relaxed">
                    Mở lại đường dẫn Sitemap, xóa lỗi link chết 404, sửa canonical để hồ sơ các bác sĩ được Google nhận diện chính xác.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-teal-400 font-extrabold text-sm">Tuần 3 - 4: Định Vị Chuyên Khoa</div>
                  <p className="text-slate-300 leading-relaxed">
                    Cập nhật chuẩn thực thể Bệnh Viện Tai Mũi Họng, gắn badge chứng thực bác sĩ cho các bài viết chuyên môn cao.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-blue-400 font-extrabold text-sm">Tuần 5 - 6: Tăng Tốc Tải Trang</div>
                  <p className="text-slate-300 leading-relaxed">
                    Nén toàn bộ 9.000 hình ảnh sang định dạng siêu nhẹ, đưa tốc độ trên điện thoại đạt điểm chuẩn xanh &lt; 1 giây.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-purple-400 font-extrabold text-sm">Tuần 7 - 8: Kích Hoạt Tăng Trưởng</div>
                  <p className="text-slate-300 leading-relaxed">
                    Gom nhóm câu hỏi tư vấn, kích hoạt trợ lý triệu chứng lâm sàng và bắt đầu chiến dịch phủ sóng từ khóa các quận lân cận.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

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
