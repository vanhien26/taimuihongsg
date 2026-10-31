'use client'

import React from 'react'
import { Compass, Cpu, Target, FileCheck, CheckCircle2, TrendingUp, Award, Layers } from 'lucide-react'

export default function GeoFrameworkView() {
  return (
    <div className="bg-gradient-to-br from-navy-950 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl">
      <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3">
        <Compass className="w-4 h-4 text-emerald-400" />
        Khung Chiến Lược GEO (Generative Engine Optimization) 2026
      </div>
      
      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-4">
        Chiến Lược Tối Ưu Nguồn Dữ Liệu Y Khoa Cho Tìm Kiếm AI (GEO Framework)
      </h3>

      <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mb-8">
        Trong môi trường tìm kiếm tạo sinh (Google AI Overviews, Gemini, ChatGPT Search, Perplexity), người bệnh nhận các câu trả lời y khoa tổng hợp trực tiếp từ các nguồn uy tín. Dưới đây là 4 đòn bẩy kỹ thuật để website Bệnh Viện Tai Mũi Họng Sài Gòn trở thành nguồn tham chiếu lâm sàng được AI trích dẫn.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Pillar 1 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">1. Direct-Answer Blocks</h4>
          
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
            <div><strong className="text-emerald-400">Định nghĩa:</strong> Khối "câu trả lời trực diện" 45-60 từ đặt ngay đầu bài viết.</div>
            <div className="text-amber-300"><strong>Nếu không làm:</strong> Robot AI (ChatGPT, Perplexity) sẽ bỏ qua bài viết của bệnh viện để trích dẫn nguồn từ Vinmec hay Medlatec.</div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Mỗi bài y khoa (như <em>mổ vách ngăn</em>, <em>cắt amidan Coblator</em>) mở đầu bằng 1 đoạn súc tích chuẩn định dạng để AI Crawler ưu tiên bốc vào hộp kết quả tóm tắt.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">2. Medical E-E-A-T</h4>
          
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
            <div><strong className="text-teal-400">Định nghĩa:</strong> Bộ chỉ số đo lường <em>Kinh nghiệm - Chuyên môn - Thẩm quyền - Đáng tin cậy</em> của bài viết y khoa.</div>
            <div className="text-rose-300"><strong>Hậu quả hiện tại:</strong> 74 bài bệnh học cũ không ghi tên bác sĩ thẩm định bị Google xếp vào diện "thông tin thiếu kiểm chứng", hạn chế hiển thị.</div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Bổ sung trường mã <code>reviewedBy</code> trỏ đến hồ sơ Bác sĩ có số chứng chỉ hành nghề, biến mọi bài viết thành tài liệu y khoa chính thống.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">3. Local 3-Pack & GPS</h4>
          
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
            <div><strong className="text-blue-400">Định nghĩa:</strong> 3 vị trí danh giá nhất hiển thị kèm bản đồ Google Map khi người bệnh tìm kiếm gần cơ sở.</div>
            <div className="text-amber-300"><strong>Rủi ro:</strong> Nếu chỉ giữ vững vị trí ở Quận 1, bệnh nhân tại Quận 3, Quận 4, Bình Thạnh sẽ bị các phòng khám tư khác hút mất.</div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Mở rộng từ khóa bán kính 5km: Bình Thạnh, Q3, Q4, Q7 với tọa độ GeoCoordinates đồng bộ, gia tăng bệnh nhân đến khám trực tiếp.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-white">4. Topic Clusters (Cụm Chuyên Đề)</h4>
          
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
            <div><strong className="text-purple-400">Định nghĩa:</strong> Gom các bài viết nhỏ lẻ xoay quanh một "trang chuyên đề trung tâm" (Pillar Page) có chiều sâu học thuật.</div>
            <div className="text-rose-300"><strong>Lỗi cũ:</strong> 1.517 bài hỏi đáp cũ bị rời rạc, làm phân tán sức mạnh SEO (Keyword Cannibalization), tự cạnh tranh triệt tiêu lẫn nhau.</div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Gom toàn bộ nội dung thành 6 cụm chuyên sâu (Mũi Xoang, Amidan, Ù Tai, Ngáy OSAS, TMH Nhi) theo cấu trúc Silo chặt chẽ, đưa thẩm quyền chuyên môn tăng vọt.
          </p>
        </div>

      </div>

      {/* Action timeline banner */}
      <div className="bg-emerald-950/50 rounded-2xl p-6 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-extrabold text-white text-base">Lộ Trình Tái Cấu Trúc Đạt Kết Quả Sau 6 Tuần</div>
          <div className="text-xs text-emerald-200 mt-1">
            Tuần 1: Xóa 4 lỗi chặn thu thập • Tuần 2: Đồng bộ Entity • Tuần 3-4: Tối ưu Core Web Vitals • Tuần 5-6: Kích hoạt GEO Cluster
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-900/60 px-3 py-1.5 rounded-xl border border-emerald-700/50">
            Dự kiến tăng 45% Traffic Tự nhiên
          </span>
        </div>
      </div>
    </div>
  )
}
