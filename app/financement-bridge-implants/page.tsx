import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Financement d\'un Bridge Complet sur Implants | Dr Attuil' },
  description: 'Comment financer un bridge complet sur implants ? Le Dr Attuil présente les solutions de paiement échelonné pour rendre ce traitement accessible.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/financement-bridge-implants` },
  openGraph: {
    title: 'Financer son bridge complet sur implants',
    description: 'Les solutions de financement et de paiement échelonné pour un bridge complet sur implants à Paris.',
    url: `${SITE_CONFIG.siteUrl}/financement-bridge-implants`,
  },
}

const OPTIONS = [
  { title: 'Paiement échelonné auprès du cabinet', desc: 'Un règlement en plusieurs fois peut être proposé directement par le cabinet, selon le montant du devis et la durée souhaitée. Cette option est discutée et formalisée lors de la consultation de bilan.' },
  { title: 'Crédit affecté aux soins dentaires', desc: 'Des organismes de crédit à la consommation proposent des prêts spécifiquement dédiés aux soins dentaires, avec des taux parfois avantageux et des mensualités adaptées à votre budget.' },
  { title: 'Prise en charge partielle par la mutuelle', desc: 'Certains contrats de complémentaire santé incluent un forfait implantologie qui réduit le reste à charge. Voir notre page dédiée au remboursement pour plus de détails.' },
  { title: 'Étalement du traitement en deux phases', desc: 'Lorsque les deux arcades doivent être traitées, il est parfois possible d\'étaler le traitement sur plusieurs mois, répartissant ainsi la charge financière dans le temps.' },
]

const FAQS = [
  {
    question: "Peut-on payer un bridge complet sur implants en plusieurs fois ?",
    answer: "Oui, un paiement échelonné est proposé dans de nombreux cas, directement auprès du cabinet ou via un organisme de crédit dédié aux soins dentaires. Les modalités précises (durée, mensualités) sont définies lors de la consultation de bilan, une fois le devis établi."
  },
  {
    question: "Faut-il un apport initial pour commencer le traitement ?",
    answer: "Cela dépend de la solution de financement choisie. Certains organismes de crédit ne demandent pas d'apport, tandis qu'un paiement échelonné directement avec le cabinet peut nécessiter un premier versement au démarrage du traitement. Ce point est clarifié avant toute décision."
  },
  {
    question: "Le crédit dentaire a-t-il un taux d'intérêt élevé ?",
    answer: "Les taux varient selon les organismes et votre profil emprunteur. Il est recommandé de comparer plusieurs offres avant de s'engager. Le cabinet peut vous orienter vers des partenaires proposant des conditions adaptées aux soins dentaires."
  },
  {
    question: "Le financement retarde-t-il le début du traitement ?",
    answer: "Non. Une fois la solution de financement validée — ce qui peut se faire rapidement pour un crédit dédié aux soins dentaires — le traitement peut démarrer selon le calendrier habituel, sans attente supplémentaire liée au financement lui-même."
  },
]

export default function FinancementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Prix et coût', href: '/prix-bridge-complet-implants' },
            { label: 'Financement' }
          ]} />
          <p className="page-eyebrow">Rendre le traitement accessible</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Financer son bridge complet sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le coût d'un bridge complet sur implants ne doit pas être un obstacle infranchissable. Voici les solutions concrètes pour répartir cet investissement dans le temps.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Oui, il est possible de <strong>financer un bridge complet sur implants en plusieurs fois</strong>, via un paiement échelonné auprès du cabinet ou un crédit dédié aux soins dentaires. Ces solutions sont étudiées avec vous lors de la consultation de bilan, une fois le devis établi.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">Les solutions de financement disponibles</h2>
          <div className="space-y-4 mb-10">
            {OPTIONS.map((o) => (
              <div key={o.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{o.title}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Comment se déroule la discussion sur le financement ?</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Après l'établissement du devis détaillé lors de la consultation de bilan, un temps dédié est consacré aux questions de financement. L'objectif est de trouver, avec vous, la solution la mieux adaptée à votre budget et à votre calendrier — sans pression et sans engagement lors de cette première rencontre.
          </p>

          <CTABox variant="inline"
            title="Discuter de votre budget en toute transparence"
            subtitle="Le Dr Attuil vous présente toutes les options lors de la consultation de bilan."
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
                { label: 'Prix du bridge complet', href: '/prix-bridge-complet-implants' },
                { label: 'Pourquoi si cher ?', href: '/pourquoi-bridge-implants-si-cher' },
                { label: 'Remboursement Sécu/mutuelle', href: '/remboursement-implants-secu-mutuelle' },
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
