import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Anesthésie Générale pour Bridge Complet sur Implants | Dr Attuil' },
  description: 'Dans quels cas l\'anesthésie générale est-elle utilisée pour un bridge complet sur implants ? Le Dr Attuil explique ses indications.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/anesthesie-generale-bridge-implants` },
  openGraph: {
    title: 'Anesthésie générale pour la pose d\'implants : quand est-elle utilisée ?',
    description: 'Indications et déroulement de l\'anesthésie générale pour un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/anesthesie-generale-bridge-implants`,
  },
}

const FAQS = [
  {
    question: "L'anesthésie générale est-elle nécessaire pour un bridge complet sur implants ?",
    answer: "Non, dans la grande majorité des cas, une anesthésie locale, éventuellement associée à une sédation consciente, suffit amplement. L'anesthésie générale est réservée à des situations spécifiques : interventions très complexes et longues (implants zygomatiques par exemple), anxiété extrême non gérable par la sédation consciente, ou préférence du patient après discussion avec l'équipe médicale."
  },
  {
    question: "Qui pratique l'anesthésie générale pour cette intervention ?",
    answer: "Elle est réalisée par un médecin anesthésiste-réanimateur, dans un cadre chirurgical adapté (clinique ou bloc opératoire), en coordination avec le chirurgien implantologiste. Un bilan pré-anesthésique complet est systématiquement requis avant toute anesthésie générale."
  },
  {
    question: "Quelles sont les précautions avant une anesthésie générale ?",
    answer: "Une consultation avec l'anesthésiste est obligatoire quelques jours avant l'intervention, incluant un bilan sanguin et un questionnaire médical détaillé. Un jeûne strict de plusieurs heures avant l'intervention est également requis."
  },
  {
    question: "La récupération est-elle plus longue qu'avec une sédation consciente ?",
    answer: "Oui, l'anesthésie générale nécessite un temps de réveil et de surveillance post-opératoire plus long, ainsi qu'un repos accru dans les heures suivant l'intervention, comparé à une sédation consciente."
  },
]

export default function AnesthesieGeneralePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Anesthésie générale' }
          ]} />
          <p className="page-eyebrow">Une option, pas une norme</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Anesthésie générale pour un bridge complet sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Contrairement à une idée reçue, l'anesthésie générale n'est pas la norme pour la pose d'implants. Voici dans quels cas elle est réellement envisagée.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La plupart des bridges complets sont posés sous <strong>anesthésie locale</strong>, parfois associée à une <Link href="/sedation-consciente-implants" className="text-brand-700 underline">sédation consciente</Link>. L'anesthésie générale reste une <strong>option</strong> réservée à des cas spécifiques : interventions très complexes ou anxiété extrême.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Dans quels cas l'envisager ?</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Interventions particulièrement longues ou complexes, comme la pose d'<Link href="/implants-zygomatiques" className="underline">implants zygomatiques</Link></li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Anxiété extrême non suffisamment gérée par la sédation consciente</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Préférence du patient, après discussion approfondie des avantages et contraintes de chaque option</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Certaines contre-indications à la sédation consciente identifiées lors du bilan médical</li>
          </ul>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Ce que cela implique</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Une anesthésie générale nécessite l'intervention d'un médecin anesthésiste, une consultation pré-anesthésique obligatoire, et un cadre chirurgical adapté (bloc opératoire ou clinique). La récupération post-opératoire est également plus longue qu'avec une simple anesthésie locale ou une sédation consciente.
          </p>

          <CTABox variant="inline"
            title="Quelle option d'anesthésie pour vous ?"
            subtitle="Ce choix est discuté en détail lors de la consultation de bilan, selon votre profil et vos souhaits."
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
                { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Implants zygomatiques', href: '/implants-zygomatiques' },
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
