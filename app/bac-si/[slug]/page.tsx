import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Calendar, Phone, Award, CheckCircle2, Stethoscope, ChevronRight, ArrowLeft, Clock, MapPin, ShieldCheck, GraduationCap, Briefcase, FileCheck } from 'lucide-react'
import { DOCTORS, getDoctorBySlug } from '@/data/doctors'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return DOCTORS.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const doctor = getDoctorBySlug(params.slug)
  if (!doctor) {
    return {
      title: 'Bác sĩ không tồn tại - Bệnh Viện Tai Mũi Họng Sài Gòn',
    }
  }

  return {
    title: `${doctor.name} - Bệnh Viện Tai Mũi Họng Sài Gòn`,
    description: `${doctor.name} - ${doctor.role}. ${doctor.specialty}. Bằng cấp: ${doctor.degree}. Đặt hẹn trực tiếp tại Bệnh viện Tai Mũi Họng Sài Gòn.`,
    alternates: {
      canonical: `https://taimuihongsg.com/bac-si/${doctor.slug}/`,
    },
    openGraph: {
      title: `${doctor.name} - Bệnh Viện Tai Mũi Họng Sài Gòn`,
      description: `${doctor.name} - ${doctor.role}. ${doctor.specialty}.`,
      url: `https://taimuihongsg.com/bac-si/${doctor.slug}/`,
      images: [
        {
          url: doctor.image,
          width: 800,
          height: 800,
          alt: doctor.name,
        },
      ],
    },
  }
}

export default function DoctorDetailPage({ params }: PageProps) {
  const doctor = getDoctorBySlug(params.slug)

  if (!doctor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-800 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/doi-ngu-bac-si" className="hover:text-brand-800 transition-colors">Đội ngũ bác sĩ</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">{doctor.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Doctor Card & Quick Action */}
          <div className="min-w-0 space-y-6 lg:col-span-4">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-brand-50 px-6 pb-6 pt-6 text-center">
              <div className="relative mx-auto mb-5 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">Hồ sơ bác sĩ</p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {doctor.name}
              </h1>
              
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-200">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
                {doctor.role}
              </div>

              {doctor.cchn && (
                <p className="mx-auto mt-3 max-w-sm rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-slate-500">
                  {doctor.cchn}
                </p>
              )}
              </div>

              <div className="flex flex-col gap-3 p-5 sm:p-6">
                <Link
                  href={`/dat-hen-kham-benh?bacsi=${encodeURIComponent(doctor.name)}`}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-800"
                >
                  <Calendar className="w-4 h-4" />
                  Đặt hẹn với bác sĩ
                </Link>

                <a
                  href="tel:02838213456"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200"
                >
                  <Phone className="w-4 h-4 text-brand-700" />
                  (028) 38.213.456
                </a>
              </div>
            </div>

            {/* Hospital Contact Info Widget */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 text-xs text-slate-600">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-700" />
                Địa điểm thăm khám
              </h3>
              <p className="leading-relaxed">
                Bệnh viện Tai Mũi Họng Sài Gòn<br />
                1 - 3, 6 - 8 Trịnh Văn Cấn, P. Bến Thành, Quận 1, TP.HCM
              </p>
              <div className="pt-3 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Giờ khám tiêu chuẩn
                </h4>
                <p>Thứ 2 – Thứ 7: 07:30 – 19:45</p>
                <p>Chủ Nhật: 08:00 – 11:45</p>
              </div>
            </div>

            <div>
              <Link
                href="/doi-ngu-bac-si"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại danh sách 18 bác sĩ
              </Link>
            </div>
          </div>

          {/* Right Column: Full Doctor Biography & Credentials */}
          <div className="min-w-0 space-y-8 lg:col-span-8">
            
            {/* Specialty Highlights Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Chuyên môn & Lĩnh vực điều trị</h2>
                  <p className="text-xs text-slate-500">Phụ trách điều trị chuyên sâu tại Bệnh viện Tai Mũi Họng Sài Gòn</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-sm text-slate-800 font-medium leading-relaxed mb-6">
                {doctor.specialty}
              </div>

              {doctor.subSpecialties && doctor.subSpecialties.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Lĩnh vực chuyên sâu can thiệp:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {doctor.subSpecialties.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Academic Degrees & Certification */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Bằng cấp & Quá trình đào tạo</h2>
                  <p className="text-xs text-slate-500">Được đào tạo chính quy tại các trường đại học y khoa hàng đầu</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 leading-relaxed font-medium">
                {doctor.degree}
              </div>
            </div>

            {/* Career History Timeline */}
            {doctor.careerHistory && doctor.careerHistory.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Quá trình công tác đã kinh qua</h2>
                    <p className="text-xs text-slate-500">Kinh nghiệm lâm sàng và các cương vị phụ trách y tế</p>
                  </div>
                </div>

                <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 pl-8">
                  {doctor.careerHistory.map((hist, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-brand-600 border-2 border-white shadow-sm" />
                      <p className="text-sm font-medium text-slate-800 leading-relaxed">
                        {hist}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Booking Call-To-Action Box */}
            <div className="bg-gradient-to-br from-brand-900 to-navy-900 rounded-2xl p-6 sm:p-8 text-white">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/20 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  Chủ động chọn lịch thăm khám
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Đặt hẹn khám cùng {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Để giảm thời gian chờ đợi và đảm bảo bác sĩ có mặt trong ca trực, quý người bệnh nên đăng ký lịch hẹn trước ít nhất 24 giờ.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/dat-hen-kham-benh?bacsi=${encodeURIComponent(doctor.name)}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-brand-900 bg-white hover:bg-slate-100 transition-colors shadow"
                  >
                    <Calendar className="w-4 h-4 text-brand-900" />
                    Đặt lịch khám ngay
                  </Link>
                  <a
                    href="tel:02838213456"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    Tổng đài: (028) 38.213.456
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
