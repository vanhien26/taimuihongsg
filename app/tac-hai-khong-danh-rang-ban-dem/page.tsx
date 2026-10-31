'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Clock, ShieldAlert, HeartPulse, Droplets, AlertTriangle, 
  CheckCircle2, ArrowRight, Activity, Moon, Sun, Wind, Volume2, 
  Stethoscope, Layers, Compass, ChevronDown, RefreshCw
} from 'lucide-react'

// Register ScrollTrigger safely on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const TIMELINE_STEPS = [
  {
    time: '23:00',
    hour: 0,
    title: 'Giờ Đi Ngủ: Vụn Thức Ăn & 700 Loài Vi Khuẩn Chực Chờ',
    summary: 'Khi bạn chìm vào giấc ngủ mà quên đánh răng, hàng triệu mảnh vụn carbohydrate, tinh bột và đường li ti từ bữa ăn tối vẫn bám chặt quanh cổ răng và kẽ răng.',
    description: 'Khoang miệng con người là nơi cư ngụ của hơn 700 loài vi sinh vật. Trong điều kiện ban ngày, các mảng bám này liên tục bị nước bọt và cử động nuốt cơ học làm trôi bớt. Nhưng ngay khi bạn nhắm mắt, vi khuẩn bắt đầu tập hợp thành một mạng lưới chất dính sinh học (biofilm) bám chắc vào men răng.',
    ph: 6.8,
    salivaFlow: '0.40 ml/phút',
    bacteriaCount: '10,000 CFU/ml',
    dangerLevel: 'Bình thường',
    enamelColor: '#ffffff',
    plaqueOpacity: 0.15,
    bloodPenetration: 0,
  },
  {
    time: '01:00',
    hour: 2,
    title: '2 Tiếng Sau: "Hạn Hán Sinh Học" – Lá Chắn Nước Bọt Biến Mất',
    summary: 'Cơ chế sinh học tự nhiên làm giảm hơn 90% lượng nước bọt tiết ra trong giấc ngủ. Hàng rào phòng thủ mạnh nhất của khoang miệng chính thức sụp đổ.',
    description: 'Nước bọt không chỉ làm ẩm mà là một "dung dịch kháng sinh tự nhiên" giàu enzyme Lysozyme, kháng thể IgA và ion Bicarbonate (HCO3-) có tác dụng đệm rửa và trung hòa axit. Khi bạn ngủ, các tuyến nước bọt mang tai và dưới hàm chuyển sang trạng thái ngủ đông. Khoang miệng khô kiệt, biến thành một lồng ấp ấm nóng, kín gió và lý tưởng cho vi khuẩn sinh sôi.',
    ph: 6.1,
    salivaFlow: '0.04 ml/phút',
    bacteriaCount: '250,000 CFU/ml',
    dangerLevel: 'Bắt đầu nguy hiểm',
    enamelColor: '#f8fafc',
    plaqueOpacity: 0.35,
    bloodPenetration: 5,
  },
  {
    time: '03:00',
    hour: 4,
    title: '4 Tiếng Sau: Điểm Rơi Axit (Acid Spike) – Men Răng Bị Ăn Mòn',
    summary: 'Độ pH khoang miệng rơi xuống dưới ngưỡng nguy kịch 5.5. Vi khuẩn lên men đường thải axit lactic, bắt đầu ăn mòn bề mặt men răng.',
    description: 'Vi khuẩn kị khí (đặc biệt là Streptococcus mutans) tiêu thụ các mẩu thức ăn thừa và giải phóng axit lactic với tốc độ chóng mặt. Khi độ pH tụt xuống dưới 5.5 (ngưỡng phá hủy hydroxyapatite), các ion Canxi và Phosphate bị rút cạn khỏi bề mặt răng. Đây là hiện tượng "hủy khoáng" (demineralization) — bước khởi đầu không thể đảo ngược của sâu răng và xói mòn men răng.',
    ph: 4.8,
    salivaFlow: '0.02 ml/phút',
    bacteriaCount: '45,000,000 CFU/ml',
    dangerLevel: 'Hủy khoáng men răng',
    enamelColor: '#fef3c7',
    plaqueOpacity: 0.65,
    bloodPenetration: 20,
  },
  {
    time: '05:00',
    hour: 6,
    title: '6 Tiếng Sau: Viêm Nướu & Xâm Lấn Vào Dòng Máu',
    summary: 'Màng sinh học biofilm phát triển thành độc tố. Vi khuẩn nướu Porphyromonas gingivalis tấn công biểu mô, mở đường vào hệ tuần hoàn máu.',
    description: 'Màng vi khuẩn dày đặc giải phóng độc tố lipopolysaccharide (LPS), kích thích phản ứng viêm sưng mô nướu. Các mạch máu nhỏ ở viền nướu bị sung huyết, giãn nở và dễ rách. Các vi khuẩn độc hại theo các vết loét vi thể này trực tiếp xâm nhập vào dòng máu (bacteremia), kích hoạt các phản ứng viêm toàn thân và ảnh hưởng đến thành mạch tim.',
    ph: 4.6,
    salivaFlow: '0.02 ml/phút',
    bacteriaCount: '800,000,000 CFU/ml',
    dangerLevel: 'Xâm lấn mạch máu',
    enamelColor: '#fde68a',
    plaqueOpacity: 0.85,
    bloodPenetration: 60,
  },
  {
    time: '07:00',
    hour: 8,
    title: '07:00 Sáng: "Hơi Thở Tử Thần" & Tác Hại Liên Hoàn Đến Tai Mũi Họng',
    summary: '8 giờ ủ bệnh sinh ra các hợp chất lưu huỳnh dễ bay hơi (VSC). Họng và amidan bị tấn công trực tiếp bởi hàng tỷ vi khuẩn.',
    description: 'Sau 8 tiếng không vệ sinh, vi khuẩn kị khí phân hủy các axit amin chứa lưu huỳnh, sinh ra khí Hydrogen Sulfide (mùi trứng thối) và Methyl Mercaptan tạo thành mùi hôi miệng kinh hoàng khi thức dậy. Đáng sợ hơn, lượng vi khuẩn khổng lồ này tràn xuống vòm họng, kích thích viêm Amidan hốc mủ, viêm họng hạt mạn tính và làm tăng nặng hội chứng ngưng thở khi ngủ OSAS.',
    ph: 5.2,
    salivaFlow: '0.15 ml/phút',
    bacteriaCount: '1,500,000,000 CFU/ml',
    dangerLevel: 'Nguy hại liên hoàn',
    enamelColor: '#f59e0b',
    plaqueOpacity: 1.0,
    bloodPenetration: 90,
  }
]

interface NocturnalOralHealthStoryProps {
  onOpenBooking?: (specialty?: string) => void
}

export default function NocturnalOralHealthStory({ onOpenBooking }: NocturnalOralHealthStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphicStageRef = useRef<HTMLDivElement>(null)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // Interactive manual scrubber state for interactive comparison
  const [interactiveHour, setInteractiveHour] = useState(0)
  const [compareBrushed, setCompareBrushed] = useState(false)

  useEffect(() => {
    if (!containerRef.current || !graphicStageRef.current) return

    const sections = gsap.utils.toArray<HTMLElement>('.story-card')

    // Create ScrollTrigger to monitor active section cards
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center+=100',
        end: 'bottom center',
        onEnter: () => setCurrentStepIndex(index),
        onEnterBack: () => setCurrentStepIndex(index),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const currentStep = TIMELINE_STEPS[currentStepIndex]

  return (
    <div className="bg-[#070b14] text-slate-100 min-h-screen selection:bg-rose-500 selection:text-white">
      
      {/* 1. TOP EDITORIAL MASTHEAD (REUTERS GRAPHICS STYLE) */}
      <header className="border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold uppercase tracking-widest text-emerald-400">
              REUTERS GRAPHICS STYLE • Y KHOA ĐỒ HỌA
            </span>
            <span className="hidden sm:inline text-slate-600">/</span>
            <span className="hidden sm:inline text-slate-300">
              Bệnh Viện Tai Mũi Họng Sài Gòn
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onOpenBooking ? onOpenBooking('Điều trị Hơi thở mùi & Sỏi Amidan') : undefined}
              className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
            >
              Đặt Lịch Khám Răng Miệng & Amidan
            </button>
            <Link 
              href="/"
              className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-bold transition-colors"
            >
              Trang Chủ Bệnh Viện
            </Link>
          </div>
        </div>
      </header>

      {/* 2. CINEMATIC TITLE HERO */}
      <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-bold tracking-widest uppercase">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          Giải Mã Cơ Chế Sinh Học Ban Đêm
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
          8 Tiếng Trong Bóng Tối: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400">
            Điều Gì Thực Sự Xảy Ra Khi Bạn Đi Ngủ Mà Không Đánh Răng?
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          Một hành trình trực quan giải mã sự sụp đổ của tuyến nước bọt, sự bùng nổ của vi khuẩn kị khí và mối đe dọa trực tiếp đến hệ thống Tai Mũi Họng suốt một đêm dài bạn say giấc.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/60 max-w-md mx-auto">
          <div>Hội đồng Chuyên gia Bệnh Viện Tai Mũi Họng Sài Gòn</div>
          <span className="hidden sm:inline">•</span>
          <div>Cập nhật tháng 10/2026</div>
        </div>

        <div className="pt-12 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-[11px] uppercase tracking-widest font-mono">Cuộn xuống để khám phá timeline</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* 3. CORE SCROLLYTELLING SECTION (PINNED GRAPHIC + SCROLLING TEXT) */}
      <section ref={containerRef} className="relative border-t border-slate-800/80 bg-[#090e1a]">
        
        {/* Floating Scrollytelling Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* LEFT: Pinned Visual Stage (Sticky on Desktop) */}
          <div className="lg:col-span-6 lg:h-screen lg:sticky lg:top-14 flex flex-col justify-center py-8">
            <div 
              ref={graphicStageRef}
              className="bg-[#0d1424] rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6"
            >
              {/* Stage Top Bar: Realtime Bio-Instruments */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-rose-400 font-mono font-bold text-sm">
                    {currentStep.time}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      THỜI GIAN NGỦ
                    </div>
                    <div className="text-sm font-bold text-white">
                      Giờ thứ {currentStep.hour} / 8h
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                    currentStepIndex >= 2 
                      ? 'bg-rose-950 text-rose-400 border border-rose-800/50' 
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                  }`}>
                    {currentStep.dangerLevel}
                  </span>
                </div>
              </div>

              {/* DYNAMIC ANATOMICAL ILLUSTRATION (SVG CROSS-SECTION) */}
              <div className="relative w-full aspect-video bg-[#080c16] rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 240" className="w-full h-full p-4">
                  
                  {/* Gum tissue (Nướu) */}
                  <path 
                    d="M 50,160 Q 200,140 350,160 L 350,230 L 50,230 Z" 
                    fill={currentStepIndex >= 3 ? '#991b1b' : '#be123c'} 
                    opacity="0.8"
                    className="transition-colors duration-700"
                  />
                  <text x="65" y="210" fill="#fecdd3" fontSize="11" fontWeight="bold">
                    Mô Nướu (Lợi) {currentStepIndex >= 3 ? '• Sung Huyết Viêm' : '• Bình Thường'}
                  </text>

                  {/* Tooth Root & Crown */}
                  {/* Dentin (Ngà răng) */}
                  <path 
                    d="M 140,160 C 140,80 160,50 200,50 C 240,50 260,80 260,160 C 260,200 240,220 200,220 C 160,220 140,200 140,160 Z" 
                    fill="#fef3c7"
                  />
                  {/* Tooth Enamel (Men răng) */}
                  <path 
                    d="M 130,140 C 130,60 155,30 200,30 C 245,30 270,60 270,140 C 270,165 260,175 250,175 C 245,110 235,55 200,55 C 165,55 155,110 150,175 C 140,175 130,165 130,140 Z" 
                    fill={currentStep.enamelColor}
                    className="transition-colors duration-700"
                  />
                  <text x="200" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                    Lớp Men Răng (Enamel)
                  </text>

                  {/* Saliva Flow Simulation (Droplets) */}
                  {currentStepIndex === 0 && (
                    <g className="animate-pulse">
                      <circle cx="110" cy="80" r="4" fill="#38bdf8" opacity="0.7" />
                      <circle cx="290" cy="80" r="5" fill="#38bdf8" opacity="0.7" />
                      <circle cx="120" cy="120" r="3" fill="#38bdf8" opacity="0.6" />
                      <circle cx="280" cy="130" r="4" fill="#38bdf8" opacity="0.6" />
                      <text x="310" y="75" fill="#38bdf8" fontSize="10">Dòng Nước Bọt</text>
                    </g>
                  )}

                  {/* Bacterial Plaque Layer (Màng Sinh Học Biofilm) */}
                  <path 
                    d="M 126,145 C 126,80 150,45 190,45 C 200,45 200,45 210,45 C 250,45 274,80 274,145" 
                    fill="none" 
                    stroke="#84cc16" 
                    strokeWidth={currentStepIndex * 2 + 1}
                    strokeDasharray="4 2"
                    opacity={currentStep.plaqueOpacity}
                    className="transition-all duration-700"
                  />

                  {/* Bacterial Colonies Dots multiplying */}
                  {currentStepIndex >= 1 && (
                    <g>
                      <circle cx="132" cy="130" r="3" fill="#bef264" />
                      <circle cx="268" cy="135" r="3" fill="#bef264" />
                      <circle cx="140" cy="100" r="2.5" fill="#a3e635" />
                      <circle cx="260" cy="105" r="2.5" fill="#a3e635" />
                    </g>
                  )}
                  {currentStepIndex >= 2 && (
                    <g>
                      <circle cx="150" cy="65" r="3.5" fill="#facc15" />
                      <circle cx="250" cy="70" r="3" fill="#facc15" />
                      <circle cx="170" cy="45" r="3" fill="#ef4444" />
                      <circle cx="230" cy="48" r="3" fill="#ef4444" />
                      <text x="200" y="90" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">
                        Axit Lactic Ăn Mòn pH &lt; 5.5
                      </text>
                    </g>
                  )}
                  {currentStepIndex >= 3 && (
                    <g>
                      {/* Blood vessels in gum */}
                      <path d="M 90,170 Q 140,195 200,190 T 310,170" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                      <circle cx="130" cy="175" r="2" fill="#22c55e" />
                      <circle cx="270" cy="178" r="2" fill="#22c55e" />
                      <text x="200" y="215" textAnchor="middle" fill="#fda4af" fontSize="9">
                        Vi khuẩn P. gingivalis xâm nhập mao mạch
                      </text>
                    </g>
                  )}
                </svg>

                {/* Legend indicator */}
                <div className="absolute bottom-2 left-3 text-[10px] text-slate-400 bg-slate-900/80 px-2 py-1 rounded-md border border-slate-800">
                  Mô phỏng lát cắt vi thể Răng & Nướu
                </div>
              </div>

              {/* HUD METRICS PANEL (CRUCIAL REUTERS GRAPHICS TELEMETRY) */}
              <div className="grid grid-cols-3 gap-3 text-center">
                
                {/* Metric 1: pH */}
                <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-slate-400">ĐỘ PH MIỆNG</div>
                  <div className={`text-xl font-black font-mono ${
                    currentStep.ph < 5.5 ? 'text-rose-400' : 'text-emerald-400'
                  }`}>
                    {currentStep.ph}
                  </div>
                  <div className="text-[9px] text-slate-500">
                    {currentStep.ph < 5.5 ? 'Vùng ăn mòn men' : 'Ngưỡng trung tính'}
                  </div>
                </div>

                {/* Metric 2: Saliva */}
                <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-slate-400">NƯỚC BỌT</div>
                  <div className="text-xl font-black font-mono text-cyan-400">
                    {currentStep.salivaFlow.split(' ')[0]}
                  </div>
                  <div className="text-[9px] text-slate-500">ml / phút</div>
                </div>

                {/* Metric 3: Bacteria */}
                <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-slate-400">MẬT ĐỘ KHUẨN</div>
                  <div className="text-sm font-black font-mono text-amber-400 truncate pt-1">
                    {currentStep.bacteriaCount.split(' ')[0]}
                  </div>
                  <div className="text-[9px] text-slate-500">CFU / ml</div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: Scrolling Narrative Story Cards */}
          <div className="lg:col-span-6 py-12 lg:py-24 space-y-36">
            {TIMELINE_STEPS.map((step, idx) => (
              <div 
                key={step.hour}
                className={`story-card p-8 md:p-10 rounded-3xl border transition-all duration-500 ${
                  currentStepIndex === idx 
                    ? 'bg-slate-900/90 border-slate-700 shadow-2xl ring-1 ring-slate-600' 
                    : 'bg-slate-900/30 border-slate-800/40 opacity-40'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm font-bold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
                    GIAI ĐOẠN: {step.time}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Giờ thứ {step.hour} của giấc ngủ
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-rose-300 font-medium leading-relaxed mb-4">
                  {step.summary}
                </p>

                <p className="text-xs md:text-sm text-slate-400 leading-relaxed space-y-2">
                  {step.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>pH đo được: <strong className="text-slate-300">{step.ph}</strong></span>
                  <span>Mật độ khuẩn: <strong className="text-slate-300">{step.bacteriaCount}</strong></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CLINICAL DEEP DIVE: THE ENT CONNECTION (MỐI LIÊN HỆ VỚI TAI MŨI HỌNG) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 font-mono">
            Góc Nhìn Chuyên Khoa Tai Mũi Họng
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Khoang Miệng Bẩn Ban Đêm Tấn Công Đường Hô Hấp Trên Như Thế Nào?
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
            Nhiều bệnh nhân đến khám viêm họng hạt hay amidan tái phát quanh năm mà không biết căn nguyên bắt nguồn từ thói quen đi ngủ không vệ sinh răng miệng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Amidan */}
          <div className="p-7 rounded-3xl bg-[#0d1424] border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-rose-950/60 text-rose-400 flex items-center justify-center border border-rose-800/40">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Viêm Amidan Hốc Mủ & Sỏi Amidan</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vi khuẩn kị khí và mảnh thức ăn tích tụ ban đêm di chuyển ngược về các khe hốc của amidan. Lâu ngày, chúng vôi hóa thành <strong>sỏi amidan (tonsilloliths)</strong>, tạo ổ viêm dai dẳng và hơi thở nặng mùi không thể chữa khỏi bằng nước súc miệng thông thường.
            </p>
          </div>

          {/* Card 2: Viêm Họng Mạn */}
          <div className="p-7 rounded-3xl bg-[#0d1424] border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/60 text-amber-400 flex items-center justify-center border border-amber-800/40">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Viêm Họng Hạt & Trào Ngược LPR</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Axit do vi khuẩn sinh ra kết hợp với axit dạ dày trào ngược ban đêm phá hủy lớp màng nhầy bảo vệ niêm mạc họng. Bệnh nhân thức dậy với cảm giác khô rát, nghẹn đờm ở cổ họng và khàn tiếng kéo dài.
            </p>
          </div>

          {/* Card 3: OSAS & Ngáy Ngủ */}
          <div className="p-7 rounded-3xl bg-[#0d1424] border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 text-cyan-400 flex items-center justify-center border border-cyan-800/40">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Trầm Trọng Hóa Hội Chứng Ngưng Thở Khi Ngủ</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bệnh nhân ngủ ngáy và ngưng thở khi ngủ thường có thói quen <strong>thở bằng miệng</strong>. Điều này làm bay hơi toàn bộ lượng nước bọt ít ỏi còn lại, đẩy tốc độ nhân đôi của vi khuẩn lên gấp 3 lần so với người thở bằng mũi.
            </p>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE SIMULATION: COMPARE 2 SCENARIOS (CÓ ĐÁNH RĂNG VS. KHÔNG ĐÁNH RĂNG) */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="bg-[#0d1424] rounded-3xl p-6 md:p-10 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              TRÌNH GIẢ LẬP ĐỐI CHỨNG LÂM SÀNG
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              So Sánh Trực Tiếp: 8 Giờ Đêm Có Đánh Răng vs. Bỏ Quên
            </h2>
          </div>

          {/* Controls: Hour scrubber and Toggle */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-300 font-semibold">
                Kéo để quan sát mốc thời gian trong đêm:
              </div>
              <div className="flex items-center gap-4 w-full sm:w-1/2">
                <input 
                  type="range" 
                  min="0" 
                  max="8" 
                  value={interactiveHour} 
                  onChange={(e) => setInteractiveHour(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <span className="font-mono text-sm font-bold text-white shrink-0">
                  {interactiveHour}h sau ngủ
                </span>
              </div>
            </div>

            {/* Comparison Cards Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Scenario A: Có đánh răng */}
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Kịch Bản: Đánh Răng Chuẩn 2 Phút
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">
                    Bảo Vệ Tối Đa
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <div>• <strong>Độ pH duy trì an toàn:</strong> ~6.5 - 6.8 (Nhờ loại bỏ mảng bám tinh bột, không còn thức ăn để vi khuẩn lên men axit).</div>
                  <div>• <strong>Men răng:</strong> Được lớp màng bảo vệ Fluoride tái khoáng hóa suốt đêm.</div>
                  <div>• <strong>Vi khuẩn:</strong> Mật độ bị ức chế ở mức tối thiểu (&lt; 100,000 CFU/ml).</div>
                  <div>• <strong>Hơi thở sáng hôm sau:</strong> Dễ chịu, không có độc tố lưu huỳnh nồng nặc.</div>
                </div>
              </div>

              {/* Scenario B: Không đánh răng */}
              <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Kịch Bản: Không Đánh Răng Ban Đêm
                  </span>
                  <span className="text-[10px] font-mono bg-rose-900/60 text-rose-300 px-2 py-0.5 rounded">
                    Nguy Hiểm
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <div>• <strong>Độ pH tụt dốc nguy kịch:</strong> Rơi xuống 4.6 - 4.8 tại mốc giờ {interactiveHour}h (Men răng bị rút cạn canxi).</div>
                  <div>• <strong>Men răng:</strong> Bị axit lactic ăn mòn, mở lỗ sâu li ti và tích tụ cao răng cứng.</div>
                  <div>• <strong>Vi khuẩn:</strong> Bùng nổ lên tới hàng trăm triệu CFU/ml, gây viêm đỏ chân nướu.</div>
                  <div>• <strong>Hơi thở sáng hôm sau:</strong> Mùi hôi tanh nồng nặc, đọng dịch mủ tại khe amidan.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. MEDICAL RECOMMENDATIONS & CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-8 border-t border-slate-800/80">
        <div className="w-14 h-14 rounded-2xl bg-brand-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-brand-500/30">
          <Stethoscope className="w-7 h-7" />
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          Quy Tắc 2 Phút Bảo Vệ Toàn Diện 8 Giờ Giấc Ngủ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs">
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-emerald-400 text-sm">1. Đánh răng với kem có Fluoride</div>
            <p className="text-slate-400 leading-relaxed">Đánh đúng kỹ thuật xoay tròn ít nhất 2 phút, không súc miệng quá kỹ bằng nước sạch để giữ lại lớp màng bảo vệ men răng.</p>
          </div>
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-emerald-400 text-sm">2. Dùng chỉ nha khoa / tăm nước</div>
            <p className="text-slate-400 leading-relaxed">Bàn chải chỉ làm sạch 60% bề mặt răng. Chỉ nha khoa là vũ khí duy nhất dọn sạch ổ thức ăn thừa ở kẽ răng trước khi ngủ.</p>
          </div>
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-1.5">
            <div className="font-bold text-emerald-400 text-sm">3. Kiểm tra chuyên khoa định kỳ</div>
            <p className="text-slate-400 leading-relaxed">Nếu ngủ dậy thường xuyên khô rát họng hoặc hôi miệng dù đã vệ sinh kỹ, cần nội soi Tai Mũi Họng kiểm tra sỏi amidan và trào ngược LPR.</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking ? onOpenBooking('Điều trị Hơi thở mùi & Sỏi Amidan') : undefined}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <Stethoscope className="w-4 h-4 text-slate-950" />
            Đặt Lịch Khám: Răng Miệng • Sỏi Amidan • Khô Rát Họng
          </button>
          <button
            onClick={() => onOpenBooking ? onOpenBooking('Trào ngược Họng - Thanh quản (LPR)') : undefined}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
          >
            Nội Soi Tầm Soát Trào Ngược LPR
          </button>
        </div>
      </section>

      {/* 7. EDITORIAL FOOTER */}
      <footer className="border-t border-slate-900 py-8 px-4 text-center text-xs text-slate-600 font-mono">
        © 2026 Bệnh Viện Tai Mũi Họng Sài Gòn • Visual Health Journalism Feature (Inspired by Reuters Graphics)
      </footer>

    </div>
  )
}
