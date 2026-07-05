import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Passer de l\'Appareil Dentaire Complet au Bridge sur Implants | Dr Attuil' },
  description: 'Vous portez un appareil dentaire complet amovible ? Le Dr Benjamin Attuil explique comment passer à un bridge fixe sur implants, étape par étape.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/appareil-complet-bridge-implants` },
  openGraph: {
    title: 'De l\'appareil dentaire complet au bridge fixe sur implants',
    description: 'Comment passer d\'un appareil dentaire amovible à un bridge fixe sur implants.',
    url: `${SITE_CONFIG.siteUrl}/appareil-complet-bridge-implants`,
  },
}

const FAQS = [
  {
    question: "Peut-on remplacer un appareil dentaire complet par un bridge sur implants à tout âge ?",
    answer: "Oui, l'âge en lui-même n'est pas un facteur limitant. C'est l'état de santé général et la qualité osseuse qui déterminent la faisabilité du traitement, évalués lors du bilan avec scanner 3D."
  },
  {
    question: "Faut-il retirer l'appareil actuel avant de commencer le traitement ?",
    answer: "L'appareil actuel peut continuer à être porté jusqu'au jour de l'intervention. Dans certains cas, il peut même être adapté temporairement pendant la phase de cicatrisation, si la mise en charge immédiate n'est pas possible pour votre situation spécifique."
  },
  {
    question: "Le passage à un bridge fixe nécessite-t-il forcément des implants sur toute l'arcade ?",
    answer: "Oui, pour remplacer un appareil complet par un bridge fixe (non amovible), plusieurs implants répartis sur l'arcade sont nécessaires pour ancrer solidement l'ensemble de la prothèse, selon le protocole All-on-4, All-on-6 ou une configuration adaptée à votre anatomie."
  },
  {
    question: "Le résultat esthétique est-il comparable à celui de l'appareil actuel ?",
    answer: "Généralement bien supérieur : la prothèse fixe sur implants est conçue sur mesure, avec une teinte et une forme choisies avec vous, et elle ne bouge pas en parlant ou en mangeant, contrairement à un appareil amovible qui peut parfois se déplacer légèrement."
  },
]

export default function AppareilCompletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Passer de l\'appareil au bridge fixe' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Passer de l'appareil dentaire complet au bridge fixe sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Vous portez un appareil amovible et souhaitez retrouver des dents fixes ? Voici comment se déroule concrètement cette transition.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Une transition bien maîtrisée</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le passage d'un appareil dentaire complet amovible à un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge fixe sur implants</Link> est l'une des demandes les plus fréquentes au cabinet. Le principe : 4 à 8 implants sont posés dans la mâchoire pour ancrer une prothèse fixe, qui remplace définitivement le besoin d'un appareil amovible.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Un scanner 3D permet d'évaluer précisément le volume osseux disponible, souvent modifié par des années de port d'appareil, et de déterminer la technique la plus adaptée (All-on-4, All-on-6, ou solutions avec implants inclinés en cas de manque osseux).
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Ce qui change concrètement</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Plus besoin de <strong>retirer la prothèse</strong> le soir ou pour la nettoyer</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Aucun mouvement</strong> de la prothèse en parlant ou en mangeant</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Force masticatoire</strong> nettement supérieure, proche de la dentition naturelle</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Fin des irritations</strong> de gencive parfois causées par un appareil mal ajusté</li>
          </ul>

          <CTABox variant="inline"
            title="Prêt à abandonner votre appareil amovible ?"
            subtitle="Le bilan avec scanner 3D est la première étape concrète."
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
                { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
                { label: 'Dentier vs bridge sur implants', href: '/dentier-vs-bridge-implants' },
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
