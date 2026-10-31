'use client'

import React, { useState } from 'react'
import { FileText, Search, ShieldCheck, CheckCircle2, ChevronDown, BookOpen, Stethoscope } from 'lucide-react'

const TOPIC_CLUSTERS = [
  {
    id: 'cluster-mui-xoang',
    title: 'Cụm Chuyên Đề: Mũi - Xoang & Vách Ngăn',
    articles: [
      {
        question: 'Phẫu thuật lệch vách ngăn mũi mất bao lâu và có phải nằm viện không?',
        directAnswer: 'Phẫu thuật chỉnh hình vách ngăn mũi tại Bệnh Viện Tai Mũi Họng Sài Gòn thường kéo dài từ 30 đến 45 phút bằng phương pháp nội soi vi phẫu. Bệnh nhân có thể xuất viện ngay trong ngày hoặc sau 24 giờ theo dõi, không để lại vết sẹo ngoài da và hồi phục hoàn toàn sau 5-7 ngày.',
        reviewedBy: 'ThS.BS CKII Trương Kim Tri - Trưởng khoa Mũi Xoang',
        tags: ['Vách ngăn mũi', 'Nội soi xoang FESS', 'Viêm xoang mạn']
      },
      {
        question: 'Viêm mũi dị ứng mạn tính có phẫu thuật dứt điểm được không?',
        directAnswer: 'Viêm mũi dị ứng bản chất là bệnh lý miễn dịch. Đối với các trường hợp cuốn mũi dưới phì đại gây nghẹt thở liên tục kháng thuốc, phẫu thuật chỉnh hình cuốn mũi dưới bằng sóng cao tần (RF) hoặc laser sẽ giúp giải phóng thông thoáng đường thở vĩnh viễn mà không ảnh hưởng niêm mạc.',
        reviewedBy: 'TS.BS CKII Hoàng Lương - Giám đốc Bệnh viện',
        tags: ['Viêm mũi dị ứng', 'Cuốn mũi', 'Kháng thuốc']
      }
    ]
  },
  {
    id: 'cluster-hong-amidan',
    title: 'Cụm Chuyên Đề: Họng - Amidan & Thanh Quản',
    articles: [
      {
        question: 'Cắt Amidan bằng dao Coblator có đau và chảy máu nhiều không?',
        directAnswer: 'Công nghệ cắt Amidan bằng sóng cao tần Coblator sử dụng nhiệt độ thấp (40-70°C), vừa cắt vừa hàn gắn mạch máu tại chỗ nên hầu như không gây chảy máu và giảm 80% mức độ đau rát so với phương pháp bóc tách truyền thống. Người bệnh ăn nhẹ được sau 4 giờ và xuất viện an toàn.',
        reviewedBy: 'BS.CKI Bùi Nguyên Thống - Chuyên khoa Tai Mũi Họng',
        tags: ['Cắt Amidan', 'Dao Coblator', 'Không đau']
      },
      {
        question: 'Khàn tiếng kéo dài trên 3 tuần cảnh báo bệnh lý nguy hiểm gì?',
        directAnswer: 'Khàn tiếng quá 3 tuần là dấu hiệu cảnh báo tổn thương thực thể dây thanh như hạt xơ, polyp, nang thanh quản hoặc tiền ung thư thanh quản. Cần nội soi hoạt nghiệm thanh quản NBI ngay để phát hiện bất thường vi mạch máu và can thiệp vi phẫu bóc tách sớm.',
        reviewedBy: 'BS.CKII Đỗ Kỳ Nhật - Chuyên khoa Tai Mũi Họng',
        tags: ['Khàn tiếng', 'Hạt xơ dây thanh', 'Nội soi NBI']
      }
    ]
  },
  {
    id: 'cluster-ngu-ngay-osas',
    title: 'Cụm Chuyên Đề: Ngáy Ngủ & Ngưng Thở Khi Ngủ (OSAS)',
    articles: [
      {
        question: 'Tại sao ngưng thở khi ngủ do tắc nghẽn (OSAS) nguy hiểm đến tính mạng?',
        directAnswer: 'Hội chứng ngưng thở khi ngủ gây thiếu oxy não và cơ tim từng cơn suốt đêm, làm tăng gấp 3 lần nguy cơ đột quỵ, nhồi máu cơ tim, cao huyết áp kháng trị và buồn ngủ nguy hiểm khi lái xe. Đo đa ký giấc ngủ PSG là tiêu chuẩn vàng chẩn đoán chính xác mức độ bệnh.',
        reviewedBy: 'Hội đồng Chuyên gia Giấc ngủ BV TMH Sài Gòn',
        tags: ['Đo đa ký giấc ngủ', 'Ngưng thở khi ngủ', 'Ngủ ngáy']
      }
    ]
  }
]

export default function KienThucPage() {
  const [openItem, setOpenItem] = useState<string | null>('cluster-mui-xoang-0')

  return (
    <div className="py-12 md:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-brand-700 border border-emerald-200 text-xs font-bold">
            <Search className="w-3.5 h-3.5" />
            Cấu Trúc Tri Thức Y Khoa Chuẩn GEO (Answer-Engine Ready)
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Cẩm Nang Y Khoa & Tư Vấn Bác Sĩ Chuyên Sâu
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Hợp nhất từ 1.517 câu hỏi tư vấn thực tế thành các cụm chủ đề trọng điểm. Mỗi câu trả lời đều có khối tóm tắt trực diện và được thẩm định chuyên môn bởi các Bác sĩ Bệnh Viện Tai Mũi Họng Sài Gòn.
          </p>
        </div>
      </section>

      {/* Topic Clusters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {TOPIC_CLUSTERS.map((cluster) => (
          <div key={cluster.id} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-brand-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-lg md:text-xl font-black text-slate-900">{cluster.title}</h2>
            </div>

            <div className="space-y-4">
              {cluster.articles.map((art, idx) => {
                const itemKey = `${cluster.id}-${idx}`
                const isOpen = openItem === itemKey

                return (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenItem(isOpen ? null : itemKey)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                    >
                      <span className="font-extrabold text-sm md:text-base text-slate-900">
                        {art.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="p-5 md:p-6 bg-white space-y-4 text-xs md:text-sm">
                        
                        {/* Direct Answer Block */}
                        <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-slate-800 leading-relaxed space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-brand-800 uppercase tracking-wider">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                            Câu Trả Lời Trực Diện Từ Bác Sĩ (Direct Answer Block):
                          </div>
                          <p className="font-medium">{art.directAnswer}</p>
                        </div>

                        {/* Medical Doctor Verification Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-slate-500">
                          <div className="flex items-center gap-2 text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/50 w-fit">
                            <Stethoscope className="w-4 h-4 text-emerald-600" />
                            <span>Thẩm định chuyên môn: {art.reviewedBy}</span>
                          </div>

                          <div className="flex items-center gap-1.5 flex-wrap">
                            {art.tags.map((t, ti) => (
                              <span key={ti} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]">
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
