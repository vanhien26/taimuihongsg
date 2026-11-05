'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Compass, Layers, ShieldCheck, Zap, Cpu, ArrowRight, FileText, CheckCircle2, 
  AlertTriangle, RefreshCw, BarChart3, Database, Globe
} from 'lucide-react'
import GeoFrameworkView from '../../components/GeoFrameworkView'
import StrategicAuditComparison from '../../components/StrategicAuditComparison'

export default function ChienLuocPage() {
  const [selectedWeek, setSelectedWeek] = useState(1)

  const ROADMAP = [
    {
      week: 1,
      title: 'Tuần 1-2: Xử Lý 4 Lỗi Kỹ Thuật Chặn Thu Thập (Critical Fixes)',
      termsExplained: 'XML Sitemap (bản đồ trang), Redirect 301 (lệnh chuyển hướng vĩnh viễn), Soft 404 (lỗi trang chết ngụy tạo), Canonical (thẻ chỉ định bản gốc), Title Template (mẫu tiêu đề hiển thị trên Google).',
      severity: 'Mức độ cấp bách: BÁO ĐỘNG ĐỎ. Đây là những "hòn đá tảng" chặn cửa robot tìm kiếm, khiến Google không thể cập nhật nội dung và liên tục phạt trang web.',
      tasks: [
        'Khôi phục XML Sitemap chuẩn HTTP 200 OK tại /sitemap.xml, gỡ bỏ lệnh redirect 301 chuyển sang trang đặt hẹn.',
        'Xóa bỏ cơ chế wildcard redirect 404 ép dồn trang, trả đúng mã HTTP 404/410 chuẩn mực để Google dọn dẹp các liên kết rác.',
        'Sửa thẻ Canonical cho hồ sơ các Bác sĩ (BS. Thống, BS. Hà, BS. Vân, BS. Hưng, BS. Nhàn) tự trỏ về chính mình thay vì trỏ nhầm sang bác sĩ khác.',
        'Cập nhật Title Template trên công cụ SEO: Loại bỏ hoàn toàn đuôi "- PHÒNG KHÁM ĐA KHOA QUỐC TẾ SÀI GÒN", thay bằng chuẩn "- BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN".'
      ],
      impact: 'Khai thông đường dẫn cho Google Bot thu thập lại toàn bộ 2.212 trang bài viết, chấm dứt hoàn toàn án phạt kỹ thuật Soft 404.'
    },
    {
      week: 2,
      title: 'Tuần 3-4: Chuẩn Hóa Thực Thể Y Khoa (Medical Entity & E-E-A-T Schema)',
      termsExplained: 'Medical Entity (hồ sơ định danh số của bệnh viện trên Google), Schema E-E-A-T (dữ liệu vi mô chứng minh Kinh nghiệm - Chuyên môn - Thẩm quyền - Đáng tin cậy), reviewedBy (chứng thực thẩm định bài viết bởi bác sĩ).',
      severity: 'Mức độ nghiêm trọng: RẤT CAO. Ngành y tế bị Google xếp vào nhóm nhạy cảm YMYL. Nếu thông tin mơ hồ, website sẽ bị giáng cấp xếp hạng và mất niềm tin với người bệnh.',
      tasks: [
        'Cập nhật mã Schema MedicalOrganization & Hospital: định danh duy nhất chuyên khoa Tai Mũi Họng (Otolaryngologic), xóa bỏ nhãn Đa khoa.',
        'Thêm khối "Thẩm định y khoa bởi Bác sĩ" và trường reviewedBy trong schema MedicalWebPage cho 204 bài bệnh học mũi nhọn.',
        'Tách bạch nội dung: Chuyển hướng 301 di dời 22 bài viết đa khoa ngoài phạm vi (sởi, tay chân miệng, vú, gan) sang đúng domain phòng khám đa khoa sighospital.vn.',
        'Dọn dẹp triệt để các trang nội bộ thử nghiệm bị lộ link: /dat-hen-kham-benh-old/, /giao-dien-website-moi/.'
      ],
      impact: 'Khẳng định vững chắc vị thế Bệnh viện Tai Mũi Họng đầu ngành trên cơ sở dữ liệu tri thức Google Knowledge Graph.'
    },
    {
      week: 3,
      title: 'Tuần 5-6: Tối Ưu Tốc Độ Core Web Vitals Đạt Chuẩn Xanh',
      termsExplained: 'Core Web Vitals (bộ 3 chỉ số trải nghiệm người dùng của Google: LCP - tốc độ mở trang chính, CLS - độ giật khung hình, TTFB - tốc độ phản hồi của máy chủ), Edge CDN (mạng máy chủ đệm đặt sát vị trí người dùng).',
      severity: 'Mức độ nghiêm trọng: CAO. Trang web tải chậm hơn 3 giây làm mất 50% bệnh nhân tiềm năng ngay từ giây đầu tiên và bị Google đánh tụt thứ hạng tìm kiếm trên di động.',
      tasks: [
        'Bật công nghệ nén ảnh tự động chuẩn WebP/AVIF cho 9.198 ảnh media, nén dung lượng ảnh chân dung bác sĩ từ 7.8MB xuống dưới 150KB.',
        'Tối ưu mã nguồn: Dọn dẹp các thư viện CSS/JS dư thừa, chuyển thư viện jQuery ra khỏi phần đầu trang (<head>) để chỉ số FCP dưới 1.2s.',
        'Kích hoạt bộ đệm HTML tĩnh trên hệ thống máy chủ biên Cloudflare Edge CDN để chỉ số phản hồi máy chủ TTFB giảm từ 1.5s xuống dưới 0.2s.',
        'Khắc phục triệt để lỗi giật màn hình CLS từ 0.21 xuống mức 0 tuyệt đối bằng cách cố định tỷ lệ khung hình cho toàn bộ banner và ảnh.'
      ],
      impact: 'Trang web mở tức thì trên điện thoại 4G/5G, đạt chuẩn kiểm định Core Web Vitals loại Xuất Sắc của Google.'
    },
    {
      week: 4,
      title: 'Tuần 7-8: Kích Hoạt Chiến Lược GEO (Tối Ưu Tìm Kiếm Bằng Trí Tuệ Nhân Tạo AI)',
      termsExplained: 'GEO (Generative Engine Optimization - kỹ thuật giúp website được các công cụ AI như Google AI Overviews, Gemini, ChatGPT trích dẫn làm nguồn trả lời), Topic Clusters (mô hình gom cụm nội dung theo chuyên khoa trụ cột), Local 3-Pack (top 3 vị trí hiển thị bản đồ địa phương).',
      severity: 'Cơ hội sống còn: Mang tính quyết định trong 2-3 năm tới. Người bệnh đang chuyển dần từ việc tự bấm link sang đọc câu trả lời do AI tóm tắt. Nếu không tối ưu GEO, website sẽ bị lãng quên.',
      tasks: [
        'Gom 1.517 bài hỏi đáp manh mún thành 6 Topic Cluster Pillars (Chuyên đề trụ cột) có cấu trúc Silo chặt chẽ và tích hợp FAQ Schema.',
        'Bổ sung khối "Direct Answer" (Câu trả lời lâm sàng súc tích 50 từ) ngay đầu mỗi bài viết dịch vụ để robot AI dễ dàng trích dẫn nguyên văn.',
        'Tối ưu Local 3-Pack định vị Google Map cho các từ khóa khám tai mũi họng tại các quận trung tâm TP.HCM (Quận 1, Quận 3, Quận 4, Quận 7, Bình Thạnh).',
        'Phát triển nội dung tương tác chuyên sâu về Đo đa ký giấc ngủ và phẫu thuật nội soi xoang FESS công nghệ cao.'
      ],
      impact: 'Tăng trưởng tối thiểu 45% lượng bệnh nhân tìm kiếm tự nhiên và trở thành bệnh viện số 1 được AI đề xuất cho người bệnh tại TP.HCM.'
    }
  ]

  return (
    <div className="space-y-14 bg-white py-8 md:space-y-20 md:py-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden border-l-4 border-brand-700 bg-slate-950 p-7 text-white shadow-sm md:p-12">
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-300">
              <Compass className="w-3.5 h-3.5" />
              Chiến Lược Tái Cấu Trúc Toàn Diện & Thúc Đẩy Tăng Trưởng
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Hiện trạng website và kế hoạch tăng trưởng
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Báo cáo dành cho việc ra quyết định: website đang vướng gì, ảnh hưởng đến hành trình đặt khám ra sao và nên ưu tiên cải thiện theo thứ tự nào.
            </p>
            <div className="grid gap-3 border-t border-white/15 pt-6 text-sm sm:grid-cols-3"><div><div className="font-bold text-white">01</div><div className="mt-1 text-slate-400">Hiện trạng và rủi ro</div></div><div><div className="font-bold text-white">02</div><div className="mt-1 text-slate-400">Audit các điểm cần sửa</div></div><div><div className="font-bold text-white">03</div><div className="mt-1 text-slate-400">Growth và cách đo lường</div></div></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10">
        <nav className="grid grid-cols-2 border-b border-slate-200 bg-white md:grid-cols-4" aria-label="Mục lục báo cáo">
          {[
            ['#hien-trang', '01', 'Hiện trạng'],
            ['#audit', '02', 'Audit kỹ thuật'],
            ['#geo', '03', 'SEO và GEO'],
            ['#roadmap', '04', 'Roadmap'],
          ].map(([href, number, label]) => (
            <a key={href} href={href} className="border-b border-slate-200 p-4 transition-colors hover:bg-slate-50 md:border-b-0 md:border-r last:border-r-0">
              <span className="block text-[11px] font-bold text-emerald-700">{number}</span>
              <span className="block mt-1 text-sm font-bold text-slate-900">{label}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="mx-auto grid max-w-7xl gap-px bg-slate-200 px-4 sm:px-6 md:grid-cols-3">
        {[
          ['Ưu tiên ngay', 'Sửa nhận diện bệnh viện, sitemap và các đường dẫn cũ.', 'P0'],
          ['Cần xây nền', 'Chuẩn hóa trang dịch vụ, bác sĩ, English và luồng đặt hẹn.', 'P1'],
          ['Đo để tăng trưởng', 'Theo dõi từ lượt tìm kiếm đến cuộc gọi và lịch hẹn thành công.', 'KPI'],
        ].map(([title, description, label]) => (
          <div key={title} className="bg-white p-5 md:p-6"><div className="text-xs font-bold uppercase tracking-wider text-brand-700">{label}</div><h2 className="mt-2 font-bold text-slate-950">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></div>
        ))}
      </section>

      <section id="growth-snapshot" className="mx-auto max-w-7xl scroll-mt-32 px-4 sm:px-6">
        <div className="border border-slate-200 bg-white">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-end md:p-8">
            <div><span className="text-xs font-bold uppercase tracking-widest text-brand-700">Growth snapshot</span><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">Website đang có nền tảng, nhưng đà tăng trưởng đang chậm lại</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Snapshot tham khảo từ bộ dữ liệu SEO/GEO ngày 04/11/2026. Đây là tín hiệu định hướng, cần đối chiếu thêm với dữ liệu Search Console, Analytics và CRM trước khi kết luận về doanh thu.</p></div><span className="shrink-0 text-xs font-semibold text-slate-500">VN • Organic + AI Search</span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 lg:grid-cols-8 lg:divide-y-0">
            {[
              ['21', 'AI visibility', 'Cần tăng hiện diện'],
              ['50', 'AI mentions', 'Được nhắc đến'],
              ['292', 'Cited pages', 'Trang được trích dẫn'],
              ['40', 'Authority score', 'Mức độ uy tín'],
              ['94K', 'Organic traffic', '-1.2%'],
              ['29.9K', 'Organic keywords', '-2.9%'],
              ['10.5K', 'Backlinks', 'Liên kết giới thiệu'],
              ['4,470', 'Organic competitors', 'Đối thủ cùng nhóm'],
            ].map(([value, label, note]) => <div key={label} className="min-w-0 p-4 md:p-5"><div className="text-2xl font-black tracking-tight text-brand-700 md:text-3xl">{value}</div><div className="mt-2 text-xs font-bold leading-4 text-slate-900">{label}</div><div className="mt-1 text-[11px] leading-4 text-slate-500">{note}</div></div>)}
          </div>
          <div className="grid gap-6 border-t border-slate-200 p-6 md:grid-cols-3 md:p-8"><div><h3 className="font-bold text-slate-950">Điểm sáng</h3><p className="mt-2 text-sm leading-6 text-slate-600">Website vẫn có lượng từ khóa, nội dung và nguồn trích dẫn đủ lớn để phục hồi.</p></div><div><h3 className="font-bold text-slate-950">Tín hiệu cần chú ý</h3><p className="mt-2 text-sm leading-6 text-slate-600">Organic traffic và số từ khóa đang giảm nhẹ trong snapshot tham khảo.</p></div><div><h3 className="font-bold text-slate-950">Cơ hội tăng trưởng</h3><p className="mt-2 text-sm leading-6 text-slate-600">Tập trung vào nhóm từ khóa thương mại, transactional và các dịch vụ có giá trị cao.</p></div></div>
          <div className="grid gap-px border-t border-slate-200 bg-slate-200 lg:grid-cols-2">
            <div className="bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-widest text-slate-500">So sánh thị trường</span><h3 className="mt-2 text-xl font-black text-slate-950">Lượng truy cập đang thấp hơn nhóm tham chiếu</h3></div><span className="shrink-0 text-xs font-semibold text-slate-500">Traffic snapshot</span></div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Số liệu cho thấy khoảng cách lớn giữa website và các bệnh viện có độ phủ tìm kiếm cao hơn. Đây là cơ hội để ưu tiên nội dung dịch vụ, chuyên khoa và thương hiệu.</p>
              <div className="mt-6 space-y-4">
                {[
                  ['taimuihongsg.com', '69,224', 28, true],
                  ['Tamanh Hospital', '3.602M', 82, false],
                  ['Vinmec', '12.07M', 100, false],
                  ['Bệnh viện Nam Sài Gòn', '119,282', 34, false],
                  ['Hồng Ngọc Hospital', '258,127', 42, false],
                ].map(([name, value, width, current]) => <div key={String(name)}><div className="mb-1 flex items-center justify-between gap-4 text-xs"><span className={current ? 'font-bold text-brand-700' : 'font-medium text-slate-600'}>{name}</span><span className="font-bold text-slate-900">{value}</span></div><div className="h-2 bg-slate-100"><div className={current ? 'h-2 bg-brand-600' : 'h-2 bg-slate-300'} style={{ width: `${width}%` }} /></div></div>)}
              </div>
              <p className="mt-5 text-xs leading-5 text-slate-500">Mốc so sánh theo dữ liệu tham khảo người dùng cung cấp. Không dùng để khẳng định doanh thu hoặc số bệnh nhân.</p>
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-widest text-slate-500">Channels overview</span><h3 className="mt-2 text-xl font-black text-slate-950">Organic Search đang là kênh chính</h3></div><span className="shrink-0 text-xs font-semibold text-slate-500">09/2026 • Worldwide</span></div>
              <p className="mt-3 text-sm leading-6 text-slate-600">Phần lớn lượt truy cập đến từ tìm kiếm tự nhiên. Điều này giúp website có nền tảng tốt, nhưng cũng tạo rủi ro phụ thuộc nếu thứ hạng giảm.</p>
              <div className="mt-6 space-y-3">
                {[
                  ['Organic Search', '64.55%', 64.55, 'bg-brand-600'],
                  ['Direct', '30.18%', 30.18, 'bg-slate-700'],
                  ['Organic Social', '2.03%', 2.03, 'bg-sky-500'],
                  ['Gen AI', '2.73%', 2.73, 'bg-emerald-500'],
                  ['Khác', '0.51%', 0.51, 'bg-slate-300'],
                ].map(([name, value, width, color]) => <div key={String(name)}><div className="mb-1 flex items-center justify-between text-xs"><span className="font-medium text-slate-700">{name}</span><span className="font-bold text-slate-900">{value}</span></div><div className="h-3 bg-slate-100"><div className={`h-3 ${color}`} style={{ width: `${Math.max(Number(width), 1)}%` }} /></div></div>)}
              </div>
              <div className="mt-6 border-l-2 border-brand-600 pl-4 text-sm leading-6 text-slate-700"><strong className="text-slate-950">Hàm ý:</strong> bảo vệ nhóm từ khóa thương hiệu và dịch vụ có ý định đặt lịch, đồng thời mở rộng social, referral và AI content để giảm phụ thuộc vào một kênh.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="hien-trang" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 md:p-10 lg:col-span-5 lg:border-r border-slate-200">
              <div className="text-sm font-bold text-amber-700">Phần 1. Tình trạng website hiện tại</div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-3">Tài sản nội dung lớn nhưng hạ tầng tìm kiếm đang làm giảm hiệu quả khai thác</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Website tích lũy lượng lớn nội dung y khoa, hồ sơ bác sĩ và trang dịch vụ từ năm 2007. Tuy nhiên, các lỗi sitemap, canonical trỏ nhầm, chuyển hướng soft 404, xung đột entity thương hiệu và phân hệ tiếng Anh bị lai tạp làm gián đoạn hành trình từ tìm kiếm đến đặt khám của cả bệnh nhân trong nước lẫn quốc tế.</p>
              <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 text-sm leading-6 text-amber-950">
                Vấn đề cốt lõi không phải thiếu nội dung. Vấn đề là nội dung hiện có chưa được tổ chức và phân phối đúng để tạo ra lượt khám.
              </div>
            </div>
            <div className="grid grid-cols-2 lg:col-span-7">
              {[
                ['2.212', 'trang y khoa đã tích lũy', 'Tài sản nội dung'],
                ['9.198', 'ảnh trong thư viện media', 'Tài sản hình ảnh'],
                ['53', 'liên kết cũ bị gãy', 'Rủi ro trải nghiệm'],
                ['1.517', 'trang hỏi đáp ngắn, phân tán', 'Cơ hội gom cụm'],
              ].map(([value, label, meta], index) => (
                <div key={label} className={`p-6 md:p-8 border-slate-200 ${index < 2 ? 'border-b' : ''} ${index % 2 === 0 ? 'border-r' : ''}`}>
                  <div className="text-xs font-bold text-slate-500">{meta}</div>
                  <div className="mt-3 text-3xl font-black text-slate-950">{value}</div>
                  <div className="mt-2 text-xs md:text-sm leading-5 text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
            {[
              ['Business Flow', 'Tìm kiếm triệu chứng → đọc nội dung kiểm chứng → xem bác sĩ/chuyên khoa → đặt hẹn trực tuyến → khám và điều trị (kể cả bệnh nhân quốc tế).'],
              ['Business Info', 'Hai cơ sở, hơn 80 bác sĩ và chuyên gia, khám ngoại trú, phẫu thuật, nội trú, đo đa ký giấc ngủ và phân hệ English Portal cho kiều bào/expat.'],
              ['Revenue Stream', 'Khám chuyên khoa, nội soi NBI, phẫu thuật Coblator/FESS, nội trú VIP, đo đa ký giấc ngủ và bảo lãnh viện phí hơn 35 hãng bảo hiểm lớn.'],
            ].map(([title, description]) => (
              <div key={title} className="p-6 md:p-8 md:border-r last:border-r-0 border-slate-200">
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Review Comparison */}
      <section id="audit" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <div id="audit-live" className="mb-8 scroll-mt-32 rounded-3xl border border-rose-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-700">Kết quả kiểm tra website gốc ngày 05/11/2026</span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">4 vấn đề đang làm website kém hiệu quả</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Đây là những vấn đề đã nhìn thấy trực tiếp trên website. Phần ảnh hưởng đến số bệnh nhân và doanh thu sẽ được đo thêm bằng dữ liệu vận hành thực tế.</p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-rose-50 px-3 py-1.5 text-xs font-bold text-rose-800">Ưu tiên xử lý P0</span>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              ['Google đang nhận diện sai tên bệnh viện', 'Một số thông tin trên website vẫn ghi bệnh viện là đơn vị đa khoa, chưa thống nhất với thương hiệu Bệnh Viện Tai Mũi Họng Sài Gòn.'],
              ['Danh mục website chưa được cập nhật', 'Bản danh mục gửi cho Google vẫn có dấu hiệu dùng dữ liệu cũ, cần bổ sung và rà soát các trang mới.'],
              ['Khu vực tiếng Anh chưa hoàn chỉnh', 'Trang English vẫn còn menu và nội dung tiếng Việt, chưa đủ để bệnh nhân quốc tế tự tìm hiểu và đặt hẹn.'],
              ['Thông tin giới thiệu bị lặp và mâu thuẫn', 'Tên bệnh viện, loại hình và thông tin nhận diện xuất hiện nhiều phiên bản khác nhau trên cùng website.'],
            ].map(([title, detail], index) => (
              <article key={title} className="border-l-4 border-l-rose-500 bg-slate-50 p-5">
                <div className="flex items-start gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-black text-rose-800">0{index + 1}</span><div><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p></div></div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-slate-700">Những điểm cần đo thêm</span><span className="text-slate-600">Các link cũ, trang lỗi, hồ sơ bác sĩ, tốc độ website và số lượt đặt hẹn thực tế.</span></div>
        </div>
        <StrategicAuditComparison />
      </section>

      {/* GEO Blueprint */}
      <section id="geo" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <GeoFrameworkView />
      </section>

      {/* Action sequence */}
      <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-32">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700">Thứ tự ưu tiên đề xuất</span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Nên làm gì từng bước một?</h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Ở giai đoạn này, chỉ cần thống nhất thứ tự ưu tiên. Lịch triển khai chi tiết sẽ được xây dựng sau khi chốt phạm vi và nguồn lực.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ['01', 'Sửa các lỗi đang cản Google và người bệnh', 'Kiểm tra sitemap, đường dẫn cũ, trang lỗi và các thông tin nhận diện sai.'],
              ['02', 'Thống nhất thông tin bệnh viện', 'Chuẩn hóa tên, chuyên khoa, cơ sở, bác sĩ, giờ khám và thông tin liên hệ trên toàn hệ thống.'],
              ['03', 'Sắp xếp lại nội dung theo nhu cầu khám', 'Ưu tiên các trang dịch vụ, chuyên khoa, bác sĩ và nhóm câu hỏi mà người bệnh thường tìm.'],
              ['04', 'Đo hiệu quả rồi mới mở rộng', 'Theo dõi lượt tìm kiếm, cuộc gọi, lượt đặt hẹn và phản hồi của người bệnh trước khi lập kế hoạch chi tiết hơn.'],
            ].map(([number, title, detail]) => (
              <div key={number} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/60 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">{number}</span>
                <div><h4 className="font-bold text-slate-950">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs download & export note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Toàn Bộ Dữ Liệu Đã Được Đóng Gói Dưới Dạng Markdown</div>
              <div className="text-xs text-slate-400">
                Lưu trữ tại thư mục <code>docs/</code> gồm 7 tài liệu chi tiết: Hạ tầng, Danh mục, Bác sĩ, Audit, Tái cấu trúc, GEO và Prototype.
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            Về Trang Chủ Prototype
          </Link>
        </div>
      </section>

    </div>
  )
}
