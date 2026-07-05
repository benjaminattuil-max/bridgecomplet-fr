import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants pour les Patients de Paris Ouest | Dr Attuil' },
  description: 'Vous habitez Paris Ouest (8e, 16e, 17e) ? Le cabinet du Dr Benjamin Attuil accueille des patients de tout Paris pour leur bridge complet sur implants.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-ouest` },
  openGraph: {
    title: 'Bridge complet sur implants — patients de Paris Ouest',
    description: 'Le cabinet du Dr Attuil à Paris 11e, accessible depuis Paris Ouest.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-paris-ouest`,
  },
}

const FAQS = [
  {
    question: "Le trajet depuis Paris Ouest en vaut-il la peine ?",
    answer: "De nombreux patients des 8e, 16e et 17e arrondissements font ce choix pour bénéficier de l'expertise exclusive du Dr Attuil en implantologie et bridge complet, une spécialisation rare qui justifie souvent un trajet un peu plus long."
  },
  {
    question: "Comment se déroule le premier contact depuis ces quartiers ?",
    answer: "La prise de rendez-vous se fait par téléphone, Doctolib ou formulaire en ligne, exactement comme pour tout autre patient, avec une réponse garantie sous 24h."
  },
]

export default function ParisOuestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants — Paris Ouest' }]} />
          <p className="page-eyebrow">Paris 8e, 16e, 17e</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants pour les patients de Paris Ouest
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Une expertise exclusive en implantologie qui attire des patients de tout Paris, y compris des quartiers ouest de la capitale.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Une spécialisation qui justifie le déplacement</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            L'activité du Dr Benjamin Attuil, entièrement dédiée à l'implantologie et à la réhabilitation complète sur implants, est une spécialisation rare qui motive de nombreux patients à traverser la capitale, y compris depuis les 8e, 16e et 17e arrondissements.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Retrouvez le parcours complet du traitement sur notre page <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link>, ainsi que les modalités de <Link href="/consultation-implants-paris" className="text-brand-600 hover:underline">prise de rendez-vous</Link>.
          </p>

          <CTABox variant="inline"
            title="Prendre rendez-vous depuis Paris Ouest"
            subtitle="Consultation de bilan disponible rapidement — réponse sous 24h."
          />

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Questions fréquentes</h2>
          <div className="space-y-4 mb-12">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6">
                <h3 className="font-serif font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-100 mb-12">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Lire aussi</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Le chirurgien', href: '/chirurgien-implantologiste-paris' },
                { label: 'Consultation', href: '/consultation-implants-paris' },
                { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="tag hover:bg-brand-100 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <CTABox />
        </div>
      </article>
    </>
  )
}
