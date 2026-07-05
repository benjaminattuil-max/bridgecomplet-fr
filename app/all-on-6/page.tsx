import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'All-on-6 : 6 Implants pour un Bridge Complet | Dr Attuil' },
  description: 'L\'All-on-6 utilise 6 implants par arcade pour un bridge complet fixe : ancrage renforcé et répartition des forces optimale. Par le Dr Attuil, Paris.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/all-on-6` },
  openGraph: {
    title: 'All-on-6 : 6 implants, bridge complet fixe — Dr Attuil Paris',
    description: 'Tout comprendre sur la technique All-on-6 : principe, avantages, différences avec l\'All-on-4, indications et résultats.',
    url: `${SITE_CONFIG.siteUrl}/all-on-6`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce que la technique All-on-6 ?",
    answer: "La technique All-on-6 consiste à poser 6 implants dentaires en titane par arcade pour soutenir un bridge complet fixe de 12 à 14 dents. Les 6 implants sont répartis de manière équilibrée sur l'ensemble de l'arcade, offrant un ancrage plus distribué que la technique All-on-4. C'est la technique recommandée dans la majorité des cas quand le volume osseux le permet."
  },
  {
    question: "L'All-on-6 est-il meilleur que l'All-on-4 ?",
    answer: "L'All-on-6 n'est pas meilleur dans l'absolu — il est mieux indiqué dans certains cas. Avec 6 implants, la répartition des forces masticatoires est plus équilibrée, ce qui peut améliorer la longévité de la prothèse et réduire les contraintes sur chaque implant. Si le volume osseux est suffisant, l'All-on-6 est souvent préféré. Si l'os postérieur est insuffisant, l'All-on-4 avec ses implants inclinés peut être la meilleure option."
  },
  {
    question: "L'All-on-6 nécessite-t-il une greffe osseuse ?",
    answer: "Cela dépend de la situation de chaque patient. L'All-on-6 nécessite un volume osseux suffisant en zone postérieure pour accueillir les 6 implants en position plus droite. Si l'os est insuffisant en arrière de la mâchoire, une greffe osseuse ou un sinus lift peut être nécessaire — ou le chirurgien peut se tourner vers la technique All-on-4 avec implants inclinés. Le scanner 3D (CBCT) permet de trancher lors du bilan pré-implantaire."
  },
  {
    question: "Combien de temps dure la pose d'un All-on-6 ?",
    answer: "La pose d'un All-on-6 sur une arcade dure généralement 2 à 4 heures. Pour un traitement des deux arcades simultanément (double All-on-6), compter 5 à 7 heures en une seule journée. La durée varie selon la complexité du cas, la nécessité d'extractions préalables et la technique utilisée. Dans tous les cas, le patient repart avec une prothèse fixe provisoire le soir même."
  },
  {
    question: "Quelle est la durée de vie d'un All-on-6 ?",
    answer: "Les implants posés lors d'un All-on-6 sont définitifs — une fois ostéointégrés, ils peuvent durer toute une vie. La prothèse en zircone posée à la fin du traitement a une durée de vie estimée à 15 à 25 ans avec un entretien correct (hygiène quotidienne, contrôles annuels). La répartition des forces sur 6 implants plutôt que 4 tend à réduire l'usure de chaque implant et à allonger la durée de vie de l'ensemble."
  },
]

export default function AllOn6Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'All-on-6 — Bridge complet sur 6 implants',
          'Technique implantaire utilisant 6 implants en titane par arcade pour soutenir un bridge complet fixe. Répartition des forces optimale, ancrage renforcé et durabilité maximale. Prothèse provisoire fixe posée le jour même.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'All-on-6' }
          ]} />
          <p className="page-eyebrow">Technique — 6 implants par arcade</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            All-on-6 : 6 implants pour un bridge complet plus solide
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            La technique All-on-6 utilise 6 implants par arcade pour un ancrage optimal et une répartition des forces masticatoires plus équilibrée. C'est la technique recommandée dans la majorité des cas quand le volume osseux le permet.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Qu'est-ce que la technique All-on-6 ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La technique <strong>All-on-6</strong> consiste à poser <strong>6 implants en titane par arcade</strong> pour soutenir un bridge complet fixe de 12 à 14 dents. Les implants sont répartis de manière équilibrée sur l'ensemble de l'arcade — généralement 2 à l'avant et 4 en zone médiane et postérieure — ce qui optimise la distribution des forces masticatoires.
          </p>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Par rapport à l'All-on-4, l'All-on-6 offre un <strong>ancrage plus distribué</strong> : chaque implant supporte une charge inférieure, ce qui réduit les contraintes mécaniques sur l'ensemble du système et améliore la longévité de la prothèse. Cette technique est recommandée dès que le volume osseux disponible le permet.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Comme toutes les techniques de bridge complet sur implants, l'All-on-6 est compatible avec la <strong>mise en charge immédiate</strong> : une prothèse provisoire fixe est posée dans les heures suivant l'intervention. Le patient repart le soir même avec des dents fixes fonctionnelles.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi 6 implants plutôt que 4 ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La réponse est mécanique. Imaginez un pont soutenu par des piliers : plus il y a de piliers bien répartis, plus chacun supporte une charge faible et plus le pont est stable dans le temps. C'est exactement le même principe avec les implants dentaires.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 my-8">
            {[
              { num: '6', label: 'Implants posés', desc: 'Répartis sur l\'ensemble de l\'arcade pour un ancrage optimal' },
              { num: '-40%', label: 'Charge par implant', desc: 'Chaque implant supporte moins de contrainte qu\'avec 4 implants' },
              { num: '25 ans', label: 'Durée de vie estimée', desc: 'Avec un entretien correct et des contrôles annuels' },
            ].map((item) => (
              <div key={item.num} className="bg-brand-50 border border-brand-100 rounded-sm p-6 text-center">
                <p className="font-serif text-3xl font-bold text-brand-700 mb-1">{item.num}</p>
                <p className="font-semibold text-neutral-800 text-sm mb-2">{item.label}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">All-on-4 ou All-on-6 : quelle technique pour vous ?</h2>
          <p className="text-neutral-700 mb-6 leading-relaxed">
            La décision n'appartient pas au patient — elle résulte de l'analyse du scanner 3D et de l'examen clinique. Voici néanmoins les grandes orientations :
          </p>
          <div className="space-y-3 mb-10">
            {[
              { cond: 'Volume osseux suffisant en zone postérieure', reco: 'All-on-6 recommandé', color: 'text-brand-700 bg-brand-50 border-brand-200' },
              { cond: 'Résorption osseuse importante en zone postérieure', reco: 'All-on-4 avec implants inclinés', color: 'text-neutral-700 bg-neutral-50 border-neutral-200' },
              { cond: 'Patient bruxomane (grince des dents)', reco: 'All-on-6 ou All-on-X préféré', color: 'text-brand-700 bg-brand-50 border-brand-200' },
              { cond: 'Souhait de minimiser le geste chirurgical', reco: 'All-on-4 (intervention plus courte)', color: 'text-neutral-700 bg-neutral-50 border-neutral-200' },
              { cond: 'Double arcade traitée simultanément', reco: 'All-on-6 souvent préféré pour la stabilité', color: 'text-brand-700 bg-brand-50 border-brand-200' },
            ].map((item) => (
              <div key={item.cond} className={`flex items-center gap-4 p-4 border rounded-sm ${item.color}`}>
                <p className="text-sm flex-1"><span className="font-medium">Si :</span> {item.cond}</p>
                <p className="text-sm font-semibold flex-shrink-0 whitespace-nowrap">→ {item.reco}</p>
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="Quelle technique est faite pour vous ?"
            subtitle="Un scanner 3D et une consultation suffisent pour le déterminer avec précision."
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
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Pages liées</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All-on-4', href: '/all-on-4' },
                { label: 'All-on-4 vs All-on-6', href: '/all-on-4-vs-all-on-6-comparaison' },
                { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
                { label: 'Durée de vie', href: '/duree-vie-bridge-implants' },
                { label: 'Prix et financement', href: '/prix-bridge-complet-implants' },
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
