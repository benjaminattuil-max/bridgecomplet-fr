import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Cas Cliniques et Profils de Patients | Dr Attuil' },
  description: 'Découvrez les profils types de patients accompagnés par le Dr Attuil pour un bridge complet sur implants : édentement total, échec de dentier.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/temoignages-patients-bridge-implants` },
  openGraph: {
    title: 'Cas cliniques — Bridge complet sur implants, Dr Attuil Paris',
    description: 'Profils de patients types traités pour un bridge complet sur implants, et ce qui a changé pour eux après le traitement.',
    url: `${SITE_CONFIG.siteUrl}/temoignages-patients-bridge-implants`,
  },
}

// NOTE : Les profils ci-dessous sont des cas-types illustratifs et anonymisés,
// représentatifs des situations rencontrées au cabinet — et non des citations
// verbatim attribuées à des patients identifiés. Pour publier de véritables
// témoignages, il est nécessaire de recueillir le consentement explicite et
// écrit de chaque patient avant toute publication (nom, photo, ou citation).

const PROFILES = [
  {
    title: 'Édentement total suite à une parodontite',
    profile: 'Homme, 58 ans, cadre parisien',
    situation: 'Perte progressive de toutes ses dents du haut sur plusieurs années, à cause d\'une parodontite non traitée. Portait un dentier amovible mal toléré depuis 3 ans.',
    outcome: 'Traitement par All-on-6 avec extraction-implantation immédiate. Prothèse provisoire fixe posée le jour même, prothèse définitive en zircone 5 mois plus tard.',
  },
  {
    title: 'Échec de dentier amovible',
    profile: 'Femme, 64 ans, ancienne enseignante',
    situation: 'Dentier complet supérieur et inférieur depuis 10 ans, avec des douleurs de gencive récurrentes et une gêne importante pour manger en public.',
    outcome: 'Traitement All-on-4 sur les deux arcades, réalisé en deux interventions à quelques mois d\'intervalle. Reprise d\'une alimentation normale après la pose de la prothèse définitive.',
  },
  {
    title: 'Déficit osseux important',
    profile: 'Homme, 71 ans, retraité',
    situation: 'Résorption osseuse avancée de la mâchoire supérieure après un édentement de longue date, initialement orienté vers une greffe osseuse lourde par un autre praticien.',
    outcome: 'Traitement par implants zygomatiques, évitant la greffe osseuse préalable et réduisant significativement la durée totale du parcours de soin.',
  },
]

const FAQS = [
  {
    question: "Les cas présentés sont-ils de vrais patients ?",
    answer: "Les profils présentés sur cette page sont des cas-types anonymisés, représentatifs des situations les plus fréquemment rencontrées au cabinet du Dr Attuil. Ils illustrent la diversité des parcours plutôt que de citer des patients identifiés nommément, conformément aux règles déontologiques encadrant la communication des professionnels de santé en France."
  },
  {
    question: "Puis-je échanger avec d'anciens patients avant de me décider ?",
    answer: "Cette question peut être abordée directement avec le Dr Attuil lors de la consultation de bilan, dans le respect de la confidentialité de chaque patient."
  },
  {
    question: "Combien de temps prend un parcours de bridge complet sur implants ?",
    answer: "Le jour de l'intervention, vous repartez avec une prothèse provisoire fixe. La prothèse définitive en zircone est posée 4 à 6 mois plus tard, une fois l'ostéointégration confirmée. Le parcours complet dure donc généralement entre 4 et 6 mois, avec des dents fixes dès le premier jour."
  },
]

export default function TemoignagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Cas cliniques' }]} />
          <p className="page-eyebrow">Des parcours variés, un objectif commun</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Cas cliniques : des profils de patients variés
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Chaque situation est différente. Voici quelques profils-types de patients accompagnés par le Dr Attuil, pour vous donner une idée concrète de la diversité des parcours possibles.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="space-y-6 mb-12">
            {PROFILES.map((p, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6">
                <span className="tag mb-3 inline-block">{p.profile}</span>
                <h2 className="font-serif text-h3 font-bold text-neutral-900 mb-3">{p.title}</h2>
                <p className="text-sm text-neutral-500 uppercase tracking-wide font-semibold mb-1">Situation initiale</p>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">{p.situation}</p>
                <p className="text-sm text-neutral-500 uppercase tracking-wide font-semibold mb-1">Traitement et résultat</p>
                <p className="text-neutral-700 text-sm leading-relaxed">{p.outcome}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-12">
            <p className="font-serif font-semibold text-brand-800 mb-2">Votre situation est unique</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Ces profils illustrent la variété des cas traités, mais votre situation mérite une analyse individuelle. La consultation de bilan, avec scanner 3D, permet d'établir un plan de traitement adapté à votre anatomie et à vos attentes.
            </p>
          </div>

          <CTABox variant="inline"
            title="Discuter de votre situation avec le Dr Attuil"
            subtitle="Consultation de bilan personnalisée — réponse sous 24h."
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
                { label: 'Édenté total : solutions', href: '/edenté-total-solution-implants' },
                { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
                { label: 'FAQ complète', href: '/faq-bridge-complet-implants' },
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
