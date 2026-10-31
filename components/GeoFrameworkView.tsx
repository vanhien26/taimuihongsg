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
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white">1. Direct-Answer Blocks</h4>
            
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
              <div><strong className="text-emerald-400">Định nghĩa:</strong> Đoạn tóm tắt trực diện 45-60 từ ở đầu bài.</div>
              <div className="text-amber-300 text-[10px]"><strong>Hậu quả:</strong> AI sẽ bỏ qua web và trích dẫn từ đối thủ.</div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Mỗi bài y khoa mở đầu bằng 1 đoạn súc tích chuẩn định dạng để AI Crawler ưu tiên bốc vào hộp kết quả tóm tắt.
            </p>
          </div>
          <div className="text-[11px] font-bold text-emerald-400 border-t border-white/10 pt-2">
            Đích đến: Google AI Overviews & ChatGPT
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white">2. Medical E-E-A-T</h4>
            
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
              <div><strong className="text-teal-400">Định nghĩa:</strong> Bộ chỉ số Thẩm quyền & Độ tin cậy y khoa.</div>
              <div className="text-rose-300 text-[10px]"><strong>Hậu quả:</strong> 74 bài thiếu bác sĩ duyệt bị hạn chế hiển thị.</div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Gắn mã <code>reviewedBy</code> trỏ đến hồ sơ Bác sĩ có chứng chỉ hành nghề, xác thực tính khoa học bài viết.
            </p>
          </div>
          <div className="text-[11px] font-bold text-teal-400 border-t border-white/10 pt-2">
            Đích đến: Chuẩn YMYL Google Search
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white">3. Local 3-Pack & GPS</h4>
            
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
              <div><strong className="text-blue-400">Định nghĩa:</strong> 3 vị trí danh giá nhất trên bản đồ Google Map.</div>
              <div className="text-amber-300 text-[10px]"><strong>Hậu quả:</strong> Mất bệnh nhân lân cận (Q3, Q4, Q7, Bình Thạnh).</div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Mở rộng từ khóa bán kính 5km với tọa độ GeoCoordinates đồng bộ, gia tăng bệnh nhân đến khám trực tiếp.
            </p>
          </div>
          <div className="text-[11px] font-bold text-blue-400 border-t border-white/10 pt-2">
            Đích đến: Bệnh nhân tại cơ sở 1 & 2
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white">4. Topic Clusters</h4>
            
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300 space-y-1">
              <div><strong className="text-purple-400">Định nghĩa:</strong> Cụm chuyên đề trụ cột có cấu trúc Silo.</div>
              <div className="text-rose-300 text-[10px]"><strong>Hậu quả:</strong> 1.517 bài hỏi đáp cũ tự triệt tiêu sức mạnh.</div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Gom toàn bộ nội dung thành 6 cụm chuyên sâu (Mũi Xoang, Amidan, Ù Tai, Ngáy OSAS, TMH Nhi).
            </p>
          </div>
          <div className="text-[11px] font-bold text-purple-400 border-t border-white/10 pt-2">
            Đích đến: Thẩm quyền chuyên môn số 1
          </div>
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
