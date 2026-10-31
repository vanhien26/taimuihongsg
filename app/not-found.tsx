import Link from 'next/link'
import { ArrowLeft, Home, Search, ShieldCheck } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 text-center shadow-xl space-y-6">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900">Không Tìm Thấy Trang (404)</h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            Đường dẫn bạn yêu cầu không tồn tại hoặc đã được chuyển dời. Website trả mã <strong>HTTP 404 chuẩn</strong> thay vì chuyển hướng sai lệch (Soft 404).
          </p>
        </div>

        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/60 text-xs text-emerald-800 text-left space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Khắc phục lỗi Soft 404
          </div>
          <div>Mã phản hồi chuẩn giúp Google Bot dọn dẹp các liên kết hỏng nhanh chóng.</div>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href="/"
            className="w-full py-3 bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Về Trang Chủ Bệnh Viện
          </Link>
          <Link
            href="/chuyen-khoa"
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
          >
            Xem Các Chuyên Khoa ENT
          </Link>
        </div>
      </div>
    </div>
  )
}
