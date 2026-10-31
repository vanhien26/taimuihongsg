'use client'

import React, { useState } from 'react'
import { X, Calendar, Clock, User, Phone, CheckCircle, ShieldCheck, Stethoscope } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedSpecialty?: string
}

export default function BookingModal({ isOpen, onClose, preselectedSpecialty }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: preselectedSpecialty || 'Mũi - Xoang (Viêm xoang, lệch vách ngăn)',
    date: '',
    time: 'Buổi sáng (08:00 - 11:30)',
    notes: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-800 to-teal-700 px-6 py-5 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <Calendar className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg tracking-tight">Đặt Hẹn Khám Bệnh Nhanh</h3>
              <p className="text-xs text-emerald-100">Bệnh Viện Tai Mũi Họng Sài Gòn • Ưu tiên khám ngay</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-brand-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Đặt Lịch Thành Công!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cảm ơn bạn <span className="font-semibold text-slate-800">{formData.name}</span>. Hệ thống đã tiếp nhận lịch hẹn khám ngày <span className="font-semibold text-slate-800">{formData.date || 'Hôm nay'}</span>. Nhân viên y tế sẽ gọi xác nhận đến SĐT <span className="font-semibold text-slate-800">{formData.phone}</span> trong vòng 5 phút.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-brand-700 text-white font-bold text-sm hover:bg-brand-800 transition-colors"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Họ và tên bệnh nhân *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Số điện thoại liên hệ *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Chuyên khoa cần khám
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-600 focus:outline-none transition-all"
                  >
                    <option value="Họng - Thanh quản">Khám Họng - Amidan - Viêm Họng Hạt</option>
                    <option value="Khám Răng Hàm Mặt - Nha chu">Khám Răng Hàm Mặt - Bệnh Nha Chu & Men Răng</option>
                    <option value="Điều trị Hơi thở mùi & Sỏi Amidan">Điều trị Hôi Miệng & Nội Soi Sỏi Amidan</option>
                    <option value="Trào ngược Họng - Thanh quản (LPR)">Khám Trào Ngược Họng - Thanh Quản (LPR)</option>
                    <option value="Mũi - Xoang">Khoa Mũi - Xoang</option>
                    <option value="Tai - Thính học">Khoa Tai - Thính học</option>
                    <option value="Đo Đa ký giấc ngủ">Đo Đa ký giấc ngủ & Ngáy</option>
                    <option value="Tai Mũi Họng Nhi">Tai Mũi Họng Nhi khoa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ngày khám mong muốn
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mô tả triệu chứng / Ghi chú
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Nghẹt mũi kéo dài, đau họng, khàn tiếng..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-600 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-brand-700 to-teal-600 hover:from-brand-800 hover:to-teal-700 text-white font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Xác Nhận Đặt Lịch Khám
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Không thu phí đặt lịch trước. Bảo mật thông tin bệnh án 100%.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
