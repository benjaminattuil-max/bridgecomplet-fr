import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Durée de Vie d\'un Bridge Complet sur Implants | Dr Attuil' },
  description: 'Combien de temps dure un bridge complet sur implants ? Le Dr Attuil détaille la durée de vie des implants et de la prothèse, et les facteurs qui l\'influencent.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/duree-vie-bridge-implants` },
  openGraph: {
    title: 'Durée de vie du bridge complet sur implants',
    description: 'Ce que dure réellement un bridge complet sur implants, entre implants et prothèse.',
    url: `${SITE_CONFIG.siteUrl}/duree-vie-bridge-implants`,
  },
}

const FAQS = [
  {
    question: "Combien de temps dure un bridge complet sur implants ?",
    answer: "Les implants en titane, une fois ostéointégrés, peuvent durer toute la vie du patient avec un entretien adapté. La prothèse en zircone qu'ils supportent a une durée de vie de 15 à 25 ans en moyenne, après quoi son remplacement peut être envisagé pour des raisons d'usure esthétique ou fonctionnelle."
  },
  {
    question: "Pourquoi la prothèse dure-t-elle moins longtemps que les implants ?",
    answer: "La prothèse, même en zircone haute résistance, subit une usure mécanique progressive liée à des années de mastication quotidienne. Les implants en titane, ancrés dans l'os, ne subissent pas ce type d'usure de la même manière et peuvent rester fonctionnels beaucoup plus longtemps."
  },
  {
    question: "Que se passe-t-il quand la prothèse arrive en fin de vie ?",
    answer: "Elle peut être remplacée par une nouvelle prothèse, revissée sur les mêmes implants existants, sans nouvelle chirurgie si ceux-ci sont toujours en bon état. C'est l'un des grands avantages du bridge sur implants : la structure durable (les implants) permet de renouveler uniquement la partie visible."
  },
  {
    question: "Quels facteurs influencent la durée de vie du bridge complet ?",
    answer: "L'hygiène bucco-dentaire quotidienne, les visites de contrôle régulières, l'absence de tabac, la gestion d'un éventuel bruxisme, et le respect des recommandations alimentaires sont les principaux facteurs qui déterminent la longévité de l'ensemble implants-prothèse."
  },
]

export default function DureeViePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Durée de vie' }
          ]} />
          <p className="page-eyebrow">Un investissement pour le long terme</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Combien de temps dure un bridge complet sur implants ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Implants et prothèse n'ont pas la même durée de vie. Voici ce qu'il faut savoir pour comprendre la longévité réelle de votre futur bridge complet.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Les <strong>implants en titane</strong> peuvent durer toute la vie avec un bon entretien. La <strong>prothèse en zircone</strong> qu'ils supportent dure généralement <strong>15 à 25 ans</strong>, et peut être remplacée sur les mêmes implants sans nouvelle chirurgie.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Deux éléments, deux durées de vie</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Un bridge complet sur implants comprend deux composants distincts : les <strong>implants</strong>, vis en titane ancrées dans l'os, et la <strong>prothèse</strong>, la partie visible qui remplace vos dents. Une fois l'ostéointégration réussie, les implants deviennent une partie stable de votre anatomie, comparable à une racine dentaire, et peuvent fonctionner pendant des décennies, voire toute la vie.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La prothèse, elle, est soumise à l'usure mécanique de la mastication quotidienne. Fabriquée en <Link href="/materiaux-bridge-implants" className="text-brand-600 hover:underline">zircone haute résistance</Link>, elle dure généralement entre 15 et 25 ans avant qu'un remplacement ne soit envisagé.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Ce qui influence cette longévité</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Une <Link href="/entretien-bridge-implants" className="underline">hygiène quotidienne rigoureuse</Link> avec les brossettes adaptées</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Des <strong>visites de contrôle régulières</strong> pour détecter précocement tout signe d'usure</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>L'<strong>absence de tabac</strong>, facteur de risque majeur pour la santé des implants</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>La gestion d'un éventuel <strong>bruxisme</strong>, qui accélère l'usure de la prothèse</li>
          </ul>

          <CTABox variant="inline"
            title="Un investissement conçu pour durer"
            subtitle="Le choix de matériaux de qualité et un suivi rigoureux maximisent la longévité de votre bridge."
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
                { label: 'Entretien du bridge sur implants', href: '/entretien-bridge-implants' },
                { label: 'Matériaux utilisés', href: '/materiaux-bridge-implants' },
                { label: 'Taux de succès des implants', href: '/taux-succes-implants-dentaires' },
                { label: 'Échec d\'implant : que faire ?', href: '/echec-implant-que-faire' },
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
