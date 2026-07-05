import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'All-on-X : le Principe Général du Bridge Complet sur Implants | Dr Attuil' },
  description: 'All-on-X désigne le principe de réhabilitation complète sur un nombre variable d\'implants. Le Dr Attuil explique comment ce nombre est déterminé.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/all-on-x` },
  openGraph: {
    title: 'All-on-X : le concept derrière All-on-4 et All-on-6',
    description: 'Comprendre le principe All-on-X et comment le nombre d\'implants est déterminé pour chaque patient.',
    url: `${SITE_CONFIG.siteUrl}/all-on-x`,
  },
}

const FAQS = [
  {
    question: "Que signifie \"All-on-X\" ?",
    answer: "\"All-on-X\" est le terme générique désignant le concept de bridge complet fixe posé sur un nombre variable (\"X\") d'implants, adapté à l'anatomie de chaque patient. All-on-4 et All-on-6 sont les déclinaisons les plus courantes de ce concept, mais X peut aussi être 5, 7 ou 8 selon les cas."
  },
  {
    question: "Comment est déterminé le nombre exact d'implants nécessaires ?",
    answer: "Le nombre d'implants dépend de la densité et du volume osseux disponibles (analysés par scanner 3D), de la force masticatoire du patient, et de la présence ou non de bruxisme. Le Dr Attuil détermine ce nombre lors de la planification numérique du traitement, au cas par cas."
  },
  {
    question: "Plus d'implants signifie-t-il un meilleur résultat ?",
    answer: "Pas nécessairement. Le nombre optimal est celui qui offre une stabilité et une répartition des forces suffisantes pour la situation du patient, sans complexifier inutilement l'intervention. Un All-on-4 bien indiqué peut être plus adapté qu'un All-on-6 dans certaines situations, et inversement."
  },
  {
    question: "Le principe All-on-X s'applique-t-il aux deux mâchoires ?",
    answer: "Oui, le concept s'applique aussi bien à la mâchoire supérieure qu'inférieure, avec des spécificités anatomiques propres à chacune (proximité du sinus maxillaire en haut, du nerf dentaire inférieur en bas) qui influencent le nombre et le positionnement des implants."
  },
]

export default function AllOnXPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'All-on-X — Concept de bridge complet sur implants',
          'Concept général de réhabilitation dentaire complète fixe sur un nombre variable d\'implants, adapté à l\'anatomie et aux besoins de chaque patient.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'All-on-X' }
          ]} />
          <p className="page-eyebrow">Le concept derrière All-on-4 et All-on-6</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            All-on-X : le principe général du bridge complet sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            All-on-4, All-on-6... ces noms font tous référence au même principe : un bridge complet fixe posé sur un nombre d'implants adapté à chaque patient. Voici comment ce nombre est déterminé.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un concept, plusieurs déclinaisons</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            "All-on-X" signifie littéralement "tout sur X implants" — le X représentant le nombre d'implants variable selon la situation clinique. Ce terme générique regroupe les techniques les plus connues, <Link href="/all-on-4" className="text-brand-600 hover:underline">All-on-4</Link> et <Link href="/all-on-6" className="text-brand-600 hover:underline">All-on-6</Link>, mais aussi des configurations à 5, 7 ou 8 implants selon les besoins.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le principe commun à toutes ces déclinaisons : des implants répartis stratégiquement sur l'arcade, solidarisés par une prothèse fixe complète, permettant de retrouver des dents fixes et fonctionnelles — souvent dès le jour de l'intervention grâce à la <Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">mise en charge immédiate</Link>.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Comment le nombre d'implants est-il déterminé ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Trois éléments principaux guident cette décision, analysés lors du bilan avec <Link href="/scanner-cbct-implants" className="text-brand-600 hover:underline">scanner 3D</Link> :
          </p>
          <ul className="space-y-2 text-neutral-700 mb-8 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Le <strong>volume et la densité osseuse</strong> disponibles à chaque emplacement potentiel d'implant</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>La <strong>force masticatoire</strong> du patient et la présence éventuelle de bruxisme</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>L'<strong>anatomie propre</strong> de chaque mâchoire (proximité du sinus, du nerf dentaire inférieur)</li>
          </ul>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Retrouvez une comparaison détaillée entre les deux options les plus fréquentes sur notre page <Link href="/all-on-4-vs-all-on-6-comparaison" className="text-brand-600 hover:underline">All-on-4 vs All-on-6</Link>.
          </p>

          <CTABox variant="inline"
            title="Quel est le bon nombre d'implants pour vous ?"
            subtitle="Seule l'analyse de votre scanner 3D permet de répondre précisément à cette question."
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
                { label: 'All-on-4', href: '/all-on-4' },
                { label: 'All-on-6', href: '/all-on-6' },
                { label: 'All-on-4 vs All-on-6', href: '/all-on-4-vs-all-on-6-comparaison' },
                { label: 'Scanner CBCT', href: '/scanner-cbct-implants' },
                { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
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
