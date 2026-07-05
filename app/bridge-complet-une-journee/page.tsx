import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants en 1 Journée | Dr Attuil' },
  description: 'Repartir avec des dents fixes le jour même de la pose des implants : le Dr Attuil explique comment le bridge complet en 1 journée est possible.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-complet-une-journee` },
  openGraph: {
    title: 'Bridge complet sur implants en une seule journée',
    description: 'Comment repartir avec des dents fixes le jour même de la pose des implants.',
    url: `${SITE_CONFIG.siteUrl}/bridge-complet-une-journee`,
  },
}

const FAQS = [
  {
    question: "Est-il vraiment possible d'avoir des dents fixes en une seule journée ?",
    answer: "Oui, grâce à la combinaison de trois éléments : l'extraction-implantation immédiate (si nécessaire), la pose des implants planifiée numériquement, et la mise en charge immédiate qui permet de visser une prothèse provisoire fixe dans les heures suivant la chirurgie. Vous repartez le soir même avec des dents fixes et fonctionnelles."
  },
  {
    question: "La prothèse posée en une journée est-elle la prothèse finale ?",
    answer: "Non, c'est une prothèse provisoire fixe, portée pendant 4 à 6 mois le temps de l'ostéointégration des implants. La prothèse définitive en zircone est posée ensuite, une fois cette période de cicatrisation confirmée par contrôle radiographique."
  },
  {
    question: "Tous les patients peuvent-ils bénéficier de ce protocole en une journée ?",
    answer: "La grande majorité des patients pour un bridge complet le peuvent, sous réserve d'obtenir une stabilité primaire suffisante des implants au moment de la pose. Le bilan avec scanner 3D permet de confirmer cette possibilité avant l'intervention."
  },
  {
    question: "Combien de temps dure cette journée d'intervention ?",
    answer: "Comptez généralement 6 à 8 heures au cabinet, incluant l'anesthésie, les éventuelles extractions, la pose des implants, l'ajustement de la prothèse provisoire et la consultation post-opératoire. Le détail heure par heure est disponible sur notre page dédiée au déroulement de la journée."
  },
]

export default function BridgeUneJourneePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Bridge complet en 1 journée' }
          ]} />
          <p className="page-eyebrow">Le protocole le plus demandé</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants en une seule journée
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Arriver au cabinet sans dents fixes et en repartir le soir même avec un sourire complet : voici comment ce protocole, autrefois impensable, est aujourd'hui une réalité maîtrisée.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Trois techniques combinées</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le "bridge complet en une journée" n'est pas une technique unique, mais la combinaison de trois protocoles complémentaires : l'<Link href="/extraction-implantation-immediate" className="text-brand-600 hover:underline">extraction-implantation immédiate</Link> lorsque des dents doivent être retirées, la pose des implants selon un <Link href="/guide-chirurgical-implants" className="text-brand-600 hover:underline">guide chirurgical numérique</Link> planifié à l'avance, et la <Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">mise en charge immédiate</Link> qui permet de visser une prothèse provisoire fixe dès la fin de l'intervention.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            C'est cette combinaison qui rend possible de repartir, le soir même, avec des dents fixes et fonctionnelles — sans jamais traverser de période sans dents.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Le déroulement, heure par heure</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La journée dure généralement 6 à 8 heures et comprend l'accueil, l'anesthésie, les éventuelles extractions, la pose des implants, l'ajustement de la prothèse provisoire et une consultation post-opératoire. Le détail complet de chaque étape est disponible sur notre page <Link href="/deroulement-journee-traitement" className="text-brand-600 hover:underline">déroulement de la journée de traitement</Link>.
          </p>

          <CTABox variant="inline"
            title="Êtes-vous candidat à ce protocole en une journée ?"
            subtitle="La grande majorité des patients pour un bridge complet le sont."
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
                { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Extraction-implantation immédiate', href: '/extraction-implantation-immediate' },
                { label: 'Guide chirurgical numérique', href: '/guide-chirurgical-implants' },
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
