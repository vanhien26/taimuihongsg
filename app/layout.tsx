import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingModal from '../components/BookingModal'
import { ClientLayoutWrapper } from '../components/ClientLayoutWrapper'

export const metadata: Metadata = {
  title: 'BỆNH VIỆN TAI MŨI HỌNG SÀI GÒN - Khám & Phẫu Thuật Chuyên Khoa Uy Tín',
  description: 'Bệnh Viện Tai Mũi Họng Sài Gòn thành lập từ năm 2007. Chuyên khoa sâu Mũi Xoang, Họng Thanh Quản, Tai Thính Học, Đo Đa Ký Giấc Ngủ và TMH Nhi Khoa tại Quận 1, TP.HCM.',
  metadataBase: new URL('https://taimuihongsg.com'),
  alternates: {
    canonical: 'https://taimuihongsg.com/',
    languages: {
      'vi-VN': 'https://taimuihongsg.com/',
      'en-US': 'https://taimuihongsg.com/english',
      'vi': 'https://taimuihongsg.com/',
      'en': 'https://taimuihongsg.com/english',
      'x-default': 'https://taimuihongsg.com/',
    },
  },
  openGraph: {
    title: 'Bệnh Viện Tai Mũi Họng Sài Gòn',
    description: 'Bệnh viện chuyên khoa Tai Mũi Họng hàng đầu TP.HCM. Bác sĩ giàu kinh nghiệm, nội soi NBI không đau, trang thiết bị chuẩn quốc tế.',
    url: 'https://taimuihongsg.com/',
    siteName: 'Bệnh Viện Tai Mũi Họng Sài Gòn',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Hospital', 'MedicalOrganization'],
        '@id': 'https://taimuihongsg.com/#organization',
        'name': 'Bệnh Viện Tai Mũi Họng Sài Gòn',
        'url': 'https://taimuihongsg.com/',
        'logo': 'https://taimuihongsg.com/logo-bv-tai-mui-hong-sg.png',
        'image': 'https://taimuihongsg.com/banner-tai-mui-hong.jpg',
        'email': 'info@taimuihongsg.com',
        'telephone': '(028) 38.213.456',
        'medicalSpecialty': 'Otolaryngologic',
        'address': {
          '@type': 'PostalAddress',
        'streetAddress': '1 - 3, 6 - 8 Trịnh Văn Cấn',
        'addressLocality': 'Phường Bến Thành, Quận 1',
          'addressRegion': 'Hồ Chí Minh',
          'postalCode': '700000',
          'addressCountry': 'VN',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 10.7686,
          'longitude': 106.6970,
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'opens': '07:30',
            'closes': '19:30',
          },
        ],
        'sameAs': [
          'https://www.facebook.com/benhvientaimuihongsaigon',
          'https://www.youtube.com/@benhvientaimuihongsaigon',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://taimuihongsg.com/#website',
        'url': 'https://taimuihongsg.com/',
        'name': 'Bệnh Viện Tai Mũi Họng Sài Gòn',
        'publisher': {
          '@id': 'https://taimuihongsg.com/#organization',
        },
      },
    ],
  }

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50 text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  )
}
