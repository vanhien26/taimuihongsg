import { MetadataRoute } from 'next'
import { DOCTORS } from '@/data/doctors'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taimuihongsg.com'
  const currentDate = new Date().toISOString()

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          vi: `${baseUrl}/`,
          en: `${baseUrl}/english`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/doi-ngu-bac-si`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/thu-vien-kien-thuc-y-hoc`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dat-hen-kham-benh`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chuyen-khoa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chuyen-khoa/khoa-phau-thuat-tai-mui-hong`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chuyen-khoa/khoa-noi-tru`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/do-da-ki-giac-ngu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tac-hai-khong-danh-rang-ban-dem`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/english`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          vi: `${baseUrl}/`,
          en: `${baseUrl}/english`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/chien-luoc-tang-truong`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const doctorRoutes: MetadataRoute.Sitemap = DOCTORS.map((doc) => ({
    url: `${baseUrl}/bac-si/${doc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...coreRoutes, ...doctorRoutes]
}
