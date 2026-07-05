import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateHowToSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Entretien d\'un Bridge Complet sur Implants au Quotidien | Dr Attuil' },
  description: 'Comment entretenir un bridge complet sur implants au quotidien ? Le Dr Benjamin Attuil détaille les gestes d\'hygiène indispensables pour garantir sa durabilité.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/entretien-bridge-implants` },
  openGraph: {
    title: 'Entretien quotidien du bridge complet sur implants',
    description: 'Les gestes d\'hygiène indispensables pour préserver votre bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/entretien-bridge-implants`,
  },
}

const STEPS = [
  { name: 'Brossage biquotidien', text: 'Brossez le bridge comme des dents naturelles, matin et soir, avec une brosse à dents souple, en insistant sur la jonction entre la prothèse et la gencive.' },
  { name: 'Brossettes interdentaires', text: 'Utilisez quotidiennement des brossettes interdentaires adaptées pour nettoyer sous la prothèse et autour de chaque implant, zone inaccessible à la brosse classique.' },
  { name: 'Hydropulseur (jet dentaire)', text: 'Un jet dentaire complète efficacement le nettoyage en délogeant les résidus alimentaires sous le bridge, particulièrement utile pour les zones difficiles d\'accès.' },
  { name: 'Contrôle professionnel semestriel', text: 'Une consultation de contrôle et un détartrage professionnel tous les 6 mois permettent de vérifier la santé des gencives et de dépister précocement tout signe de péri-implantite.' },
]

const FAQS = [
  {
    question: "Le bridge sur implants s'entretient-il comme des dents naturelles ?",
    answer: "En grande partie oui, avec un brossage biquotidien, mais des outils spécifiques (brossettes interdentaires, hydropulseur) sont nécessaires pour nettoyer sous la prothèse, une zone inaccessible avec une brosse à dents classique."
  },
  {
    question: "Que se passe-t-il si l'hygiène est insuffisante ?",
    answer: "Une accumulation de plaque dentaire autour des implants peut évoluer vers une péri-implantite, une inflammation chronique pouvant entraîner une perte osseuse progressive et, à terme, compromettre la stabilité des implants. C'est la principale cause d'échec tardif des implants."
  },
  {
    question: "Faut-il des visites de contrôle plus fréquentes qu'avec des dents naturelles ?",
    answer: "Une visite de contrôle tous les 6 mois est généralement recommandée, avec un nettoyage professionnel réalisé par le praticien ou son assistante dentaire, permettant d'accéder à des zones difficiles à nettoyer soi-même au quotidien."
  },
  {
    question: "Le Dr Attuil fournit-il les outils d'hygiène adaptés ?",
    answer: "Oui, une démonstration personnalisée des techniques de brossage et des outils recommandés (brossettes de la bonne taille, hydropulseur) est réalisée lors de la remise de la prothèse, afin de vous donner toutes les clés pour un entretien efficace au quotidien."
  },
]

export default function EntretienPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateHowToSchema(
          'Entretenir un bridge complet sur implants au quotidien',
          'Les gestes d\'hygiène quotidiens et le suivi professionnel nécessaires pour garantir la durabilité d\'un bridge complet sur implants.',
          STEPS
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Entretien au quotidien' }
          ]} />
          <p className="page-eyebrow">La clé de la longévité</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Entretenir son bridge complet sur implants au quotidien
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Un entretien rigoureux, avec les bons outils, est le facteur le plus déterminant pour que votre bridge dure des décennies. Voici les gestes essentiels.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-6">4 gestes essentiels</h2>
          <div className="space-y-4 mb-10">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-4 border border-neutral-200 rounded-sm p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-700 text-white flex items-center justify-center font-serif font-bold text-sm">{i + 1}</span>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1 text-sm">{s.name}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi cet entretien est-il si important ?</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Contrairement à une dent naturelle, un implant n'a pas de ligament parodontal (le tissu amortisseur naturel autour d'une racine), ce qui le rend plus vulnérable en cas d'accumulation de plaque dentaire non contrôlée. Une hygiène rigoureuse est la meilleure protection contre la <Link href="/echec-implant-que-faire" className="text-brand-600 hover:underline">péri-implantite</Link>, principale cause d'échec tardif des implants, et conditionne directement leur <Link href="/duree-vie-bridge-implants" className="text-brand-600 hover:underline">durée de vie</Link>.
          </p>

          <CTABox variant="inline"
            title="Recevez une démonstration personnalisée"
            subtitle="Le Dr Attuil vous montre les gestes et outils adaptés à votre bridge."
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
                { label: 'Durée de vie du bridge sur implants', href: '/duree-vie-bridge-implants' },
                { label: 'Échec d\'implant : que faire ?', href: '/echec-implant-que-faire' },
                { label: 'Parodontite et implants', href: '/parodontite-et-implants' },
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
