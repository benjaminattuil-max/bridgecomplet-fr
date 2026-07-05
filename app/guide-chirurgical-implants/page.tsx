import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Guide Chirurgical Numérique pour Implants Dentaires | Dr Attuil' },
  description: 'Le guide chirurgical numérique permet de poser les implants exactement selon le plan de traitement. Le Dr Attuil explique cette technologie.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/guide-chirurgical-implants` },
  openGraph: {
    title: 'Guide chirurgical numérique : la précision au service de la sécurité',
    description: 'Comment le guide chirurgical numérique améliore la précision et la sécurité de la pose d\'implants.',
    url: `${SITE_CONFIG.siteUrl}/guide-chirurgical-implants`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un guide chirurgical numérique ?",
    answer: "C'est une gouttière imprimée sur mesure, conçue à partir des données du scanner 3D et de la planification numérique du traitement, qui vient se positionner précisément sur les dents ou la gencive du patient pendant l'intervention. Elle guide physiquement le forage pour chaque implant selon l'emplacement et l'angle définis à l'avance."
  },
  {
    question: "Quels sont les avantages du guide chirurgical ?",
    answer: "Il permet de transférer fidèlement en bouche la planification réalisée sur ordinateur, réduisant la marge d'erreur, la durée de l'intervention, et le caractère invasif de la chirurgie. Dans de nombreux cas, il permet une chirurgie \"flapless\", c'est-à-dire sans ouverture large de la gencive, ce qui améliore le confort post-opératoire."
  },
  {
    question: "Le guide chirurgical est-il utilisé pour tous les patients ?",
    answer: "Il est utilisé dans la grande majorité des cas de bridge complet sur implants, car la précision qu'il apporte est particulièrement précieuse lorsque plusieurs implants doivent être positionnés selon un plan de traitement rigoureux. Sa fabrication nécessite un scanner 3D préalable de bonne qualité."
  },
  {
    question: "Combien de temps faut-il pour fabriquer le guide chirurgical ?",
    answer: "Une fois le plan de traitement validé après le scanner 3D, la fabrication du guide chirurgical (conception numérique puis impression 3D) prend généralement 1 à 2 semaines avant la date de l'intervention."
  },
]

export default function GuideChirurgicalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Guide chirurgical numérique' }
          ]} />
          <p className="page-eyebrow">La planification transférée en bouche</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Le guide chirurgical numérique : la précision au service de la sécurité
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Chaque implant est planifié virtuellement avant l'intervention. Le guide chirurgical permet de transférer cette planification en bouche avec une précision millimétrique.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Du plan numérique à la réalité</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Après l'analyse du <Link href="/scanner-cbct-implants" className="text-brand-600 hover:underline">scanner 3D</Link>, le Dr Attuil planifie la position, l'angle et la profondeur exacts de chaque implant à l'aide d'un logiciel spécialisé. Cette planification, validée avant l'intervention, doit ensuite être fidèlement reproduite en bouche : c'est le rôle du <strong>guide chirurgical</strong>.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce guide, une gouttière rigide imprimée en 3D sur mesure, se positionne sur les dents restantes ou la gencive et comporte des cylindres métalliques qui orientent précisément les forets chirurgicaux, garantissant que chaque implant est posé exactement là où il a été planifié.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Les bénéfices pour le patient</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Chirurgie plus rapide</strong>, réduisant le temps global de l'intervention</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Moins invasive</strong>, souvent réalisable sans large ouverture de la gencive</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Suites post-opératoires plus légères</strong> grâce à une chirurgie plus précise et moins traumatisante</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Sécurité renforcée</strong> en évitant les structures anatomiques sensibles</li>
          </ul>

          <CTABox variant="inline"
            title="Bénéficiez d'une chirurgie planifiée numériquement"
            subtitle="Le guide chirurgical fait partie du protocole standard chez le Dr Attuil."
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
                { label: 'Scanner CBCT', href: '/scanner-cbct-implants' },
                { label: 'Bridge complet en 1 journée', href: '/bridge-complet-une-journee' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
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
