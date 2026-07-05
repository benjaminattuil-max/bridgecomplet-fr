import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: { absolute: 'Prendre Rendez-vous — Consultation Implants Dentaires Paris | Dr Attuil' },
  description: `Prenez rendez-vous avec ${SITE_CONFIG.doctorName}, implantologiste exclusif à Paris. Consultation de bilan implantaire. Réponse sous 24h.`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/consultation-implants-paris` },
}

export default function ConsultationPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-white border-b border-neutral-100 py-10 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Prendre rendez-vous' }]} />
          <p className="page-eyebrow">Contact</p>
          <h1 className="font-serif text-h1 font-bold mb-3">
            Demander une consultation
          </h1>
          <p className="text-lead text-neutral-600">
            Première étape vers des dents fixes — réponse garantie sous 24h.
          </p>
        </div>
      </div>

      <section className="section px-4">
        <div className="container-wide grid md:grid-cols-2 gap-12">

          {/* Réservation en ligne */}
          <div className="bg-white border border-neutral-200 rounded-sm p-8">
            <h2 className="font-serif text-h3 font-bold mb-4">Réserver en ligne</h2>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              La prise de rendez-vous se fait directement via Doctolib, avec confirmation immédiate et rappel automatique. C'est le moyen le plus rapide d'obtenir un créneau de consultation de bilan.
            </p>

            <a
              href={SITE_CONFIG.doctolib}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center mb-8"
            >
              Prendre rendez-vous sur Doctolib
            </a>

            <p className="text-sm font-semibold text-neutral-700 mb-3">Quelle que soit votre situation :</p>
            <ul className="space-y-2 text-sm text-neutral-600 mb-2">
              {[
                'Je suis totalement édenté',
                'Je vais perdre toutes mes dents',
                'Je porte un dentier que je supporte mal',
                'Mes dents bougent (parodontite)',
                "J'ai peu d'os et cherche une solution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-500 mt-4">
              Vous préférez en parler de vive voix avant de réserver ? Appelez directement le cabinet au{' '}
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a>.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-h3 font-bold mb-6">Informations pratiques</h2>

              <div className="space-y-4">
                <div className="reassurance-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 mb-0.5">Téléphone</p>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-600 font-bold text-lg hover:underline">{SITE_CONFIG.phone}</a>
                    <p className="text-xs text-neutral-500 mt-0.5">Du lundi au vendredi, 9h–18h</p>
                  </div>
                </div>

                <div className="reassurance-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800 mb-0.5">Adresse</p>
                    <p className="text-neutral-600 text-sm">{SITE_CONFIG.address}</p>
                    <p className="text-neutral-600 text-sm">{SITE_CONFIG.postalCode} {SITE_CONFIG.city}</p>
                    <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-600 hover:underline mt-1 inline-block">Voir sur Google Maps →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Réassurance */}
            <div className="bg-brand-50 border border-brand-100 rounded-sm p-6">
              <p className="font-serif font-semibold text-brand-800 mb-3">Ce que vous pouvez attendre de la consultation</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                {[
                  'Analyse de votre situation clinique',
                  'Explication des options de traitement adaptées',
                  'Réponse à toutes vos questions',
                  'Devis détaillé et transparent',
                  'Présentation des solutions de financement',
                  'Aucun engagement lors de la première consultation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
