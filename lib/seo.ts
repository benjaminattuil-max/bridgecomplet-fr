// ─── Configuration SEO centralisée ───────────────────────────────────────────

import type { Metadata } from 'next'

export const SITE_CONFIG = {
  // ── Praticien ──────────────────────────────────────────────────────────────
  doctorName:      'Dr Benjamin Attuil',
  doctorTitle:     'Chirurgien-Dentiste — Implantologie Exclusive',
  doctorImage:     '/images/dr-attuil.jpg',

  // ── Cabinet ────────────────────────────────────────────────────────────────
  cabinetName:     'Dr Benjamin Attuil — Implantologie Paris',
  address:         '61 rue du Chemin Vert',
  city:            'Paris',
  postalCode:      '75011',
  arrondissement:  'Paris 11e',
  phone:           '01 89 16 48 58',
  phoneRaw:        '+33189164858',
  email:           'dr.benjamin.attuil@gmail.com',

  // ── Site ───────────────────────────────────────────────────────────────────
  siteUrl:         'https://www.bridgecomplet.fr',
  siteName:        'Bridge Complet — Dr Benjamin Attuil, Implantologiste Paris',
  siteDescription: 'Dr Benjamin Attuil, spécialiste exclusif en implantologie à Paris 11e. Bridge complet sur implants (All-on-4, All-on-6) — dents fixes en une journée. Consultation sur rendez-vous.',
  defaultOgImage:  '/images/og-default.jpg',

  // ── Réseaux & localisation ─────────────────────────────────────────────────
  googleMapsUrl:   'https://www.google.com/maps/place/Dr+Benjamin+Attuil/@48.8600067,2.3747548,17z/data=!3m2!4b1!5s0x47e66df9f27c6585:0x62a5f83597cf2aa!4m6!3m5!1s0x47e66f4eb4c931b9:0x79cd35a023c4766a!8m2!3d48.8600067!4d2.3773297!16s%2Fg%2F11hf9hkztq',
  doctolib:        'https://www.doctolib.fr/dentiste/paris/benjamin-attuil',

  // ── Coordonnées GPS (pour Schema.org) ─────────────────────────────────────
  latitude:        48.8600067,
  longitude:       2.3773297,
}

// ─── Métadonnées par défaut ───────────────────────────────────────────────────
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.cabinetName} | Spécialiste Bridge Implant Paris`,
    template: `%s | Dr Benjamin Attuil — Implantologiste Paris 11e`,
  },
  description: SITE_CONFIG.siteDescription,
  authors: [{ name: SITE_CONFIG.doctorName, url: SITE_CONFIG.siteUrl }],
  creator: SITE_CONFIG.doctorName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_CONFIG.siteName,
    images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630, alt: 'Dr Benjamin Attuil — Bridge complet sur implants Paris' }],
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    google: 'VOTRE_CODE_GOOGLE_SEARCH_CONSOLE', // À remplir après inscription GSC
  },
}

// ─── Schema.org : Dentist / LocalBusiness ─────────────────────────────────────
export function generateDentistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'LocalBusiness'],
    name: SITE_CONFIG.cabinetName,
    description: SITE_CONFIG.siteDescription,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.phoneRaw,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.doctorImage}`,
    priceRange: '€€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressLocality: SITE_CONFIG.city,
      postalCode: SITE_CONFIG.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.latitude,
      longitude: SITE_CONFIG.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    medicalSpecialty: 'Implantologie dentaire',
    hasMap: SITE_CONFIG.googleMapsUrl,
    sameAs: [
      SITE_CONFIG.doctolib,
      'https://www.google.com/maps/place/Dr+Benjamin+Attuil/@48.8600067,2.3773297,17z',
    ],
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.doctorName,
      jobTitle: SITE_CONFIG.doctorTitle,
      url: `${SITE_CONFIG.siteUrl}/chirurgien-implantologiste-paris`,
    },
  }
}

// ─── Schema.org : BreadcrumbList ──────────────────────────────────────────────
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.url}`,
    })),
  }
}

// ─── Schema.org : FAQPage ─────────────────────────────────────────────────────
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

// ─── Schema.org : MedicalProcedure ────────────────────────────────────────────
export function generateMedicalProcedureSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    procedureType: 'SurgicalProcedure',
    status: 'ActiveActionStatus',
    performer: {
      '@type': 'Dentist',
      name: SITE_CONFIG.doctorName,
      url: SITE_CONFIG.siteUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address,
        addressLocality: SITE_CONFIG.city,
        postalCode: SITE_CONFIG.postalCode,
        addressCountry: 'FR',
      },
    },
  }
}

// ─── Schema.org : MedicalCondition ────────────────────────────────────────────
export function generateMedicalConditionSchema(name: string, description: string, treatment: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    description,
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name: treatment,
    },
  }
}

// ─── Schema.org : HowTo ───────────────────────────────────────────────────────
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    performer: {
      '@type': 'Dentist',
      name: SITE_CONFIG.doctorName,
    },
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

// ─── Schema.org : Person (praticien) ──────────────────────────────────────────
export function generateDoctorPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.doctorName,
    jobTitle: SITE_CONFIG.doctorTitle,
    url: `${SITE_CONFIG.siteUrl}/chirurgien-implantologiste-paris`,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneRaw,
    image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.doctorImage}`,
    worksFor: {
      '@type': 'Dentist',
      name: SITE_CONFIG.cabinetName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address,
        addressLocality: SITE_CONFIG.city,
        postalCode: SITE_CONFIG.postalCode,
        addressCountry: 'FR',
      },
    },
    knowsAbout: [
      'Implantologie dentaire',
      'Bridge complet sur implants',
      'All-on-4',
      'All-on-6',
      'Mise en charge immédiate',
      'Implants zygomatiques',
      'Sédation consciente',
    ],
  }
}
