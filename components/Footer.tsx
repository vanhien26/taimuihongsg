import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, ShieldCheck, Award, HeartHandshake, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Entity */}
          <div className="space-y-4">
            <div className="font-black text-xl text-white tracking-tight">
              BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bệnh viện chuyên khoa Tai Mũi Họng & Phẫu thuật Đầu Cổ hàng đầu TP.HCM, thành lập từ năm 2007. Tiên phong áp dụng công nghệ vi phẫu, nội soi NBI và điều trị ngưng thở khi ngủ chuẩn quốc tế.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Giấy phép hoạt động khám chữa bệnh cấp bởi Bộ Y Tế</span>
            </div>
          </div>

          {/* Col 2: Chuyên khoa chính */}
          <div className="space-y-3">
            <div className="font-bold text-white text-base">Chuyên Khoa Mũi Nhọn</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong" className="hover:text-emerald-400 transition-colors">Khoa Khám & Nội Soi Tai Mũi Họng</Link></li>
              <li><Link href="/chuyen-khoa/khoa-phau-thuat-tai-mui-hong" className="hover:text-emerald-400 transition-colors">Khoa Phẫu Thuật Tai Mũi Họng</Link></li>
              <li><Link href="/chuyen-khoa/khoa-noi-tru" className="hover:text-emerald-400 transition-colors">Khoa Nội Trú Tai Mũi Họng</Link></li>
              <li><Link href="/do-da-ki-giac-ngu" className="hover:text-emerald-400 transition-colors">Đo Đa Ký Giấc Ngủ (OSAS)</Link></li>
              <li><Link href="/doi-ngu-bac-si" className="hover:text-emerald-400 transition-colors">Đội Ngũ 18 Bác Sĩ Chuyên Khoa</Link></li>
              <li><Link href="/thu-vien-kien-thuc-y-hoc" className="hover:text-emerald-400 transition-colors">Thư Viện Kiến Thức Y Học</Link></li>
            </ul>
          </div>

          {/* Col 3: Cam kết chất lượng & Bảo hiểm */}
          <div className="space-y-3">
            <div className="font-bold text-white text-base">Tiêu Chuẩn & Bảo Lãnh</div>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bảo lãnh viện phí hơn 35 công ty bảo hiểm lớn</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Phòng mổ áp lực dương vô trùng tuyệt đối</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nội soi tầm soát ung thư sớm không đau</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hồ sơ bệnh án điện tử bảo mật</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Thông tin liên hệ & Local Entity */}
          <div className="space-y-3">
            <div className="font-bold text-white text-base">Thông Tin Liên Hệ</div>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>1 - 3 Trịnh Văn Cấn, Phường Cầu Ông Lãnh, Quận 1, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:02838213456" className="hover:text-white font-bold text-emerald-300">
                  (028) 38.213.456
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@taimuihongsg.com</span>
              </div>
              <div className="pt-2 text-xs text-slate-500">
                Tọa độ GPS: 10.7686° N, 106.6970° E
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © 2007 - 2026 Bệnh Viện Tai Mũi Họng Sài Gòn. Toàn bộ quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-slate-400">Sitemap XML (200 OK)</Link>
            <Link href="/chien-luoc-tang-truong" className="text-emerald-400 hover:text-emerald-300 font-medium">Báo cáo Kỹ thuật & Tăng trưởng GEO</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
