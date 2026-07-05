import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Je Déteste mon Dentier : l\'Alternative Fixe sur Implants | Dr Attuil' },
  description: 'Dentier qui bouge, qui gêne, mal supporté ? Le Dr Benjamin Attuil explique comment le bridge fixe sur implants met fin à ces contraintes du quotidien.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/deteste-dentier-alternative-fixe` },
  openGraph: {
    title: 'Je déteste mon dentier : quelle alternative fixe ?',
    description: 'Comment le bridge fixe sur implants résout les problèmes du dentier amovible mal supporté.',
    url: `${SITE_CONFIG.siteUrl}/deteste-dentier-alternative-fixe`,
  },
}

const PROBLEMS = [
  { problem: 'Le dentier bouge en parlant ou en riant', solution: 'Un bridge fixe sur implants ne bouge jamais, quelle que soit l\'intensité des mouvements de la bouche.' },
  { problem: 'Difficile de manger certains aliments', solution: 'La force masticatoire retrouvée est proche de celle des dents naturelles, permettant de manger la plupart des aliments sans crainte.' },
  { problem: 'Gêne ou douleur au niveau de la gencive', solution: 'Le bridge repose sur des implants ancrés dans l\'os, sans pression directe sur la gencive comme un dentier posé dessus.' },
  { problem: 'Sensation de corps étranger, perte de goût', solution: 'Un bridge sur implants au maxillaire peut être conçu sans recouvrir le palais, préservant sensations gustatives et confort.' },
  { problem: 'Besoin de colle ou d\'adhésif quotidien', solution: 'Fixé de façon permanente sur les implants, le bridge ne nécessite aucune colle ni adhésif.' },
]

const FAQS = [
  {
    question: "Peut-on remplacer un dentier mal supporté par un bridge fixe à tout moment ?",
    answer: "Oui, il n'y a pas de délai particulier à respecter. Une consultation de bilan avec scanner 3D permet d'évaluer votre situation osseuse actuelle et de planifier la transition vers un bridge fixe sur implants."
  },
  {
    question: "Le dentier a-t-il abîmé mes gencives ou mon os au fil des années ?",
    answer: "Le port prolongé d'un dentier peut effectivement accélérer la résorption osseuse sous-jacente, l'os n'étant plus stimulé par des racines dentaires. C'est un argument supplémentaire pour envisager les implants, qui stimulent l'os comme le feraient des racines naturelles."
  },
  {
    question: "Combien de temps faut-il pour ne plus porter de dentier ?",
    answer: "Grâce à la mise en charge immédiate, une prothèse provisoire fixe peut être posée le jour même de l'intervention. Vous ne remettez donc plus jamais votre ancien dentier après cette journée."
  },
  {
    question: "Le résultat esthétique est-il meilleur qu'un dentier ?",
    answer: "Généralement oui : la prothèse fixe est conçue sur mesure, personnalisée avec vous en termes de forme et de teinte, et son ancrage stable sur les implants permet un rendu plus naturel dans les mouvements du visage."
  },
]

export default function DetesteDentierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Je déteste mon dentier' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Vous détestez votre dentier ? Il existe une alternative fixe
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Bouge en parlant, gêne pour manger, sensation de corps étranger : ces frustrations quotidiennes ont une solution durable.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-6">Les problèmes du dentier, et leur solution</h2>
          <div className="space-y-4 mb-12">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6">
                <p className="text-sm font-semibold text-red-600 mb-2">✗ {p.problem}</p>
                <p className="text-sm text-neutral-700 leading-relaxed">✓ {p.solution}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> répond directement à ces frustrations accumulées au fil des années. Retrouvez une comparaison complète sur notre page <Link href="/dentier-vs-bridge-implants" className="text-brand-600 hover:underline">dentier vs bridge sur implants</Link>.
          </p>

          <CTABox variant="inline"
            title="Fatigué de votre dentier ?"
            subtitle="Une consultation de bilan permet d'évaluer votre passage vers une solution fixe."
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
                { label: 'Dentier vs bridge sur implants', href: '/dentier-vs-bridge-implants' },
                { label: 'Passer de l\'appareil au bridge fixe', href: '/appareil-complet-bridge-implants' },
                { label: 'Édentement total : solutions', href: '/edenté-total-solution-implants' },
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
