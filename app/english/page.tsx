import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Calendar, Phone, MapPin, Clock, ShieldCheck, Globe, CheckCircle2, Stethoscope, ArrowRight, FileText, HeartPulse, Sparkles, Building2, UserCheck, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Saigon ENT Hospital - Ear Nose Throat Specialist Hospital for Foreigners & Expats in HCMC',
  description: 'Leading Ear, Nose & Throat (ENT) Hospital in District 1, Ho Chi Minh City with English-speaking specialists, NBI endoscopy, international health insurance direct billing, and certified English medical reports.',
  alternates: {
    canonical: 'https://taimuihongsg.com/english/',
  },
  openGraph: {
    title: 'Saigon ENT Hospital - English Services for Expats & Foreigners in Ho Chi Minh City',
    description: 'English-speaking ENT specialist hospital located in central District 1, HCMC. Advanced diagnostics, Coblation surgery, sleep apnea treatment, and global insurance support.',
    url: 'https://taimuihongsg.com/english/',
  },
}

export default function EnglishPortalPage() {
  const pathwaySteps = [
    {
      num: '01',
      title: 'Appointment Booking',
      desc: 'Book in advance or on the same day via phone, WhatsApp, or online booking. English assistance is available immediately.',
    },
    {
      num: '02',
      title: 'Reception & Registration',
      desc: 'Conveniently located at 1 - 3 Trinh Van Can, District 1 (near Ben Thanh Market). Our dedicated international staff will guide you through check-in.',
    },
    {
      num: '03',
      title: 'English Specialist Consultation',
      desc: 'Consult directly with experienced Senior ENT Specialists. High-definition HD/NBI endoscopy results are shown live on screen and explained thoroughly.',
    },
    {
      num: '04',
      title: 'Same-Day Diagnostics & Treatment',
      desc: 'Immediate on-site hearing tests (audiometry), tympanometry, CT imaging, and gentle foreign body removal without multiple return visits.',
    },
    {
      num: '05',
      title: 'Insurance & Valid Medical Records',
      desc: 'Direct billing with major international insurers. Itemized English medical records, official invoices, and ICD-10 diagnostic forms provided on departure.',
    },
  ]

  const clinicalTreatments = [
    {
      category: 'Ear & Hearing Care',
      slug: 'ear-conditions-we-treat',
      summary: 'Treatment for acute otitis media, swimmer’s ear, sudden hearing loss, tinnitus, vertigo/dizziness, and safe painless micro-suction earwax removal.',
      badge: 'Micro-suction & Audiometry',
    },
    {
      category: 'Nose & Sinus Care',
      slug: 'nose-conditions-we-treat',
      summary: 'Relief from tropical allergic rhinitis, acute/chronic sinusitis, nasal polyps, and minimally invasive FESS endoscopic sinus surgery.',
      badge: 'Karl Storz Endoscopy',
    },
    {
      category: 'Throat & Larynx Care',
      slug: 'throat-and-larynx-conditions-we-treat',
      summary: 'Rapid care for severe sore throat, pharyngitis, vocal cord hoarseness, and Coblation plasma tonsillectomy (minimal pain and no bleeding).',
      badge: 'Coblation II Technology',
    },
    {
      category: 'Sleep & Snoring Center',
      slug: 'sleep-and-snoring-conditions-we-treat',
      summary: 'Overnight Polysomnography (PSG) sleep study to accurately diagnose obstructive sleep apnea (OSAS), chronic snoring, and nocturnal hypoxia.',
      badge: 'International PSG Standards',
    },
    {
      category: 'Pediatric ENT Care',
      slug: 'pediatric-ent-conditions-we-treat',
      summary: 'Gentle, child-friendly examination for children with recurring ear infections, foreign objects in nose/ears, and enlarged adenoids.',
      badge: 'Family-Friendly Care',
    },
    {
      category: 'Travelers & Expat Medical Prep',
      slug: 'foreign-patient-pathway',
      summary: 'Sudden ear barotrauma from flights, sore throat during travel in Vietnam, and official medical documentation for fitness-to-fly certificates.',
      badge: 'Fit-to-Fly & Insurance',
    },
  ]

  const insurancePartners = [
    'Allianz Global Assistance',
    'Bupa Global',
    'Cigna International',
    'AXA Assistance',
    'Tokio Marine Insurance',
    'SOS International',
    'Aetna International',
    'April International',
    'Liberty Insurance',
    'MSIG Insurance',
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Language Bar Notification */}
      <div className="bg-navy-950 text-slate-300 py-2.5 px-4 text-xs border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">English Medical Portal for International Patients & Expatriates</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Ngôn ngữ:</span>
            <span className="font-bold text-white bg-brand-800 px-2 py-0.5 rounded text-[11px]">English</span>
            <Link href="/" className="hover:text-emerald-400 transition-colors font-medium text-[11px]">
              Tiếng Việt
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-sky-50/30 to-slate-50 border-b border-slate-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                <Globe className="w-4 h-4 text-emerald-600" />
                Specialist Hospital in District 1 • Ho Chi Minh City
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Ear, Nose & Throat (ENT) Hospital for Foreigners & Expats in Saigon
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Founded in 2007, <strong>Bệnh Viện Tai Mũi Họng Sài Gòn</strong> is the premier ENT specialist medical center in downtown Ho Chi Minh City. We provide English-speaking consultations, advanced endoscopic diagnostics, same-day test results, and direct billing with major international insurance providers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/dat-hen-kham-benh"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book English Appointment
                </Link>

                <a
                  href="tel:02838213456"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-700" />
                  English Helpline: (028) 38.213.456
                </a>
              </div>

              {/* Fast trust highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-xs">
                <div>
                  <div className="font-black text-lg text-slate-900">19+ Years</div>
                  <div className="text-slate-500 font-medium mt-0.5">Clinical Excellence</div>
                </div>
                <div>
                  <div className="font-black text-lg text-emerald-700">Central D1</div>
                  <div className="text-slate-500 font-medium mt-0.5">Near Ben Thanh Market</div>
                </div>
                <div>
                  <div className="font-black text-lg text-brand-800">35+ Global</div>
                  <div className="text-slate-500 font-medium mt-0.5">Insurance Partners</div>
                </div>
              </div>
            </div>

            {/* Right Card: Location & Quick Access */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-black text-slate-900 text-base">Hospital Information</h2>
                    <p className="text-xs text-slate-500">Official Foreign Patient Pathway</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-700 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-800 block text-sm">Central Location:</strong>
                      1 - 3 Trinh Van Can, Ben Thanh Ward, District 1, Ho Chi Minh City (Walking distance from Ben Thanh Market & Bui Vien Walking Street).
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-800 block text-sm">Opening Hours:</strong>
                      Monday – Saturday: 07:30 – 19:45<br />
                      Sunday Morning: 08:00 – 11:45
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <UserCheck className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-800 block text-sm">Languages Spoken:</strong>
                      Fluent English & Vietnamese. Clear, simple medical explanations without confusing technical jargon.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-800 block text-sm">Payment Methods:</strong>
                      Visa, MasterCard, JCB, Bank Transfer, Direct Insurance Guarantee, and Cash (VND/USD accepted).
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                    <span className="font-bold text-slate-900 block mb-1">Need travel reimbursement?</span>
                    We issue official VAT red invoices (Hóa đơn điện tử), detailed itemized treatment lists, and doctor’s signed diagnostic sheets in English for your global insurance claims.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Foreign Patient Pathway (Step-by-Step) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-800">Clear & Predictable Visit</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
              The 5-Step Foreign Patient Pathway
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              We understand that seeking medical care in a foreign country can feel daunting. Our streamlined process ensures complete transparency, comfort, and zero communication barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pathwaySteps.map((step) => (
              <div key={step.num} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-black text-brand-700 block mb-2">{step.num}</span>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Conditions We Treat */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-800">Clinical Specialties</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
              ENT Conditions & Treatments Provided in English
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              From sudden flight-related ear trauma and tropical allergies to complex endoscopic sinus surgery, our specialists are equipped with world-class medical instrumentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalTreatments.map((item) => (
              <div
                key={item.category}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-brand-300 transition-all"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-50 text-brand-800 border border-brand-100 mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.category}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/dat-hen-kham-benh?specialty=${encodeURIComponent(item.category)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-900"
                  >
                    Request consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Billing & International Health Insurance */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                Hassle-Free Direct Billing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                International Health & Travel Insurance Support
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We work directly with major global assistance and insurance networks. For outpatient visits or scheduled surgeries, our dedicated Insurance Coordinator handles verification and claims directly.
              </p>
              
              <div className="space-y-2.5 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct guarantee of payment (GOP) accepted from partnered networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Itemized claim dossiers prepared in English within 30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official Vietnamese Ministry of Finance electronic tax invoices (VAT)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h3 className="font-bold text-slate-900 text-sm mb-4">Partnered International Networks Include:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {insurancePartners.map((partner) => (
                    <div
                      key={partner}
                      className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2 shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0"></span>
                      <span className="truncate">{partner}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                  * If your insurer is not listed above, we will provide you with a comprehensive English claim package so you can submit for 100% reimbursement without delays.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Call-To-Action */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/20 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            Same-Day Appointments Welcome
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Need Expert ENT Care in Ho Chi Minh City?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Contact our English coordinator directly. We ensure quick access to senior ENT specialists, transparent upfront estimates, and gentle, attentive care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/dat-hen-kham-benh"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-slate-100 transition-all shadow"
            >
              <Calendar className="w-4 h-4 text-brand-900" />
              Book Your Appointment Now
            </Link>

            <a
              href="tel:02838213456"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Direct Helpline: (028) 38.213.456
            </a>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-white underline transition-colors"
            >
              ← Quay lại trang chủ Bệnh Viện Tai Mũi Họng Sài Gòn (Tiếng Việt)
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
