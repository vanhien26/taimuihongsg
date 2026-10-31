'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FileText, Search, ShieldCheck, CheckCircle2, ChevronDown, BookOpen, Stethoscope, ArrowRight, ChevronRight, Activity } from 'lucide-react'

const TOPIC_CLUSTERS = [
  {
    id: 'cluster-mui-xoang',
    title: 'Cụm Chuyên Đề: Mũi - Xoang & Vách Ngăn',
    articles: [
      {
        question: 'Phẫu thuật lệch vách ngăn mũi mất bao lâu và có phải nằm viện không?',
        directAnswer: 'Phẫu thuật chỉnh hình vách ngăn mũi tại Bệnh Viện Tai Mũi Họng Sài Gòn thường kéo dài từ 30 đến 45 phút bằng phương pháp nội soi vi phẫu. Người bệnh có thể xuất viện ngay trong ngày hoặc sau 24 giờ theo dõi, không để lại vết sẹo ngoài da và hồi phục hoàn toàn sau 5-7 ngày.',
        reviewedBy: 'ThS.BS.CKII Trương Kim Tri - Giám Đốc Phòng Khám Đa Khoa',
        tags: ['Vách ngăn mũi', 'Nội soi xoang FESS', 'Viêm xoang mạn']
      },
      {
        question: 'Viêm mũi dị ứng mạn tính có phẫu thuật dứt điểm được không?',
        directAnswer: 'Viêm mũi dị ứng bản chất là bệnh lý miễn dịch. Đối với các trường hợp cuốn mũi dưới phì đại gây nghẹt thở liên tục kháng thuốc, can thiệp chỉnh hình cuốn mũi dưới bằng sóng cao tần (RF) hoặc laser sẽ giúp giải phóng thông thoáng đường thở mà không làm tổn thương niêm mạc.',
        reviewedBy: 'TS.BS.CKII Hoàng Lương - Nhà Sáng Lập BV Tai Mũi Họng Sài Gòn',
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
        directAnswer: 'Công nghệ cắt Amidan bằng sóng cao tần Coblator sử dụng nhiệt độ thấp (40-70°C), vừa cắt vừa hàn gắn mạch máu tại chỗ nên hầu như không gây chảy máu và giảm đáng kể mức độ đau rát so với phương pháp bóc tách truyền thống. Người bệnh ăn nhẹ được sau 4 giờ và xuất viện an toàn.',
        reviewedBy: 'BS.CKII Trịnh Thị Minh Hải - Giám Đốc Khối Đào Tạo Lâm Sàng',
        tags: ['Cắt Amidan', 'Dao Coblator', 'Không đau']
      },
      {
        question: 'Khàn tiếng kéo dài trên 3 tuần cảnh báo bệnh lý gì?',
        directAnswer: 'Khàn tiếng quá 3 tuần là dấu hiệu cảnh báo tổn thương thực thể dây thanh như hạt xơ, polyp, nang thanh quản hoặc tiền ung thư thanh quản. Cần nội soi hoạt nghiệm thanh quản NBI ngay để phát hiện bất thường vi mạch máu và can thiệp điều trị sớm.',
        reviewedBy: 'BS.CKII Đỗ Kỳ Nhật - Giám Đốc Bệnh Viện Tai Mũi Họng Sài Gòn',
        tags: ['Khàn tiếng', 'Hạt xơ dây thanh', 'Nội soi NBI']
      }
    ]
  },
  {
    id: 'cluster-ngu-ngay-osas',
    title: 'Cụm Chuyên Đề: Ngáy Ngủ & Ngưng Thở Khi Ngủ (OSAS)',
    articles: [
      {
        question: 'Tại sao ngưng thở khi ngủ do tắc nghẽn (OSAS) nguy hiểm đến sức khỏe?',
        directAnswer: 'Hội chứng ngưng thở khi ngủ gây thiếu oxy não và cơ tim từng cơn suốt đêm, làm tăng nguy cơ đột quỵ, nhồi máu cơ tim, cao huyết áp kháng trị và buồn ngủ nguy hiểm vào ban ngày. Đo đa ký giấc ngủ PSG là tiêu chuẩn vàng chẩn đoán chính xác mức độ bệnh.',
        reviewedBy: 'ThS.BS.CKII Hoàng Long - Giám Đốc Khối Vận Hành Y Tế',
        tags: ['Đo đa ký giấc ngủ', 'Ngưng thở khi ngủ', 'Ngủ ngáy']
      }
    ]
  }
]

export default function ThuVienKienThucPage() {
  const [openItem, setOpenItem] = useState<string | null>('cluster-mui-xoang-0')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClusters = TOPIC_CLUSTERS.map((cluster) => {
    const matchedArticles = cluster.articles.filter((art) => {
      const q = searchTerm.toLowerCase()
      return (
        art.question.toLowerCase().includes(q) ||
        art.directAnswer.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
    return { ...cluster, articles: matchedArticles }
  }).filter((c) => c.articles.length > 0)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-800 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-semibold">Thư viện kiến thức y học</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              Thư Viện Kiến Thức Y Học Chính Thức
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Cẩm Nang Y Khoa & Tư Vấn Bác Sĩ Chuyên Sâu
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Các bài viết và câu hỏi tư vấn y khoa thực tế được kiểm chứng bởi đội ngũ Bác sĩ Bệnh Viện Tai Mũi Họng Sài Gòn, cung cấp câu trả lời khoa học, chuẩn y khoa và dễ hiểu cho người bệnh.
            </p>

            {/* Search Input */}
            <div className="mt-6 relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm kiến thức y khoa, triệu chứng hoặc bệnh lý..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:bg-white text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clinical Article Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-gradient-to-r from-brand-900 via-navy-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Activity className="w-3.5 h-3.5" />
              Bài viết y khoa tiêu biểu
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Tác hại không ngờ của thói quen không đánh răng ban đêm
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Phân tích cơ chế vi khuẩn kỵ khí sinh sôi trong giấc ngủ, gây viêm nướu, hôi miệng và làm tăng gánh nặng nhiễm khuẩn vùng họng thanh quản. Được thẩm định bởi Bác sĩ Tai Mũi Họng.
            </p>
          </div>
          <Link
            href="/tac-hai-khong-danh-rang-ban-dem"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shrink-0 shadow"
          >
            Đọc bài viết đầy đủ <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Topic Clusters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {filteredClusters.map((cluster) => (
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
                      <span className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-3">
                        <FileText className="w-4 h-4 text-brand-700 shrink-0" />
                        {art.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="p-5 md:p-6 bg-white space-y-4 border-t border-slate-100">
                        {/* Direct Answer */}
                        <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Tóm tắt y khoa trực diện
                          </div>
                          <p className="text-sm text-slate-800 leading-relaxed font-medium">
                            {art.directAnswer}
                          </p>
                        </div>

                        {/* Medical Reviewer Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-slate-500 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 font-medium text-slate-700">
                            <ShieldCheck className="w-4 h-4 text-brand-700" />
                            <span>Thẩm định chuyên môn: <strong className="text-brand-900">{art.reviewedBy}</strong></span>
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {art.tags.map((tag) => (
                              <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-mono text-[11px]">
                                #{tag}
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

        {filteredClusters.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-800">Không tìm thấy bài viết phù hợp</p>
            <p className="text-sm text-slate-500 mt-1">Vui lòng thử tìm kiếm với từ khóa khác.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 text-sm font-semibold text-brand-800 bg-brand-50 rounded-xl hover:bg-brand-100"
            >
              Hiển thị tất cả
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
