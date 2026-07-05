import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Remboursement Implants Dentaires : Sécu et Mutuelle | Dr Attuil' },
  description: 'La Sécurité sociale et les mutuelles remboursent-elles les implants dentaires ? Le Dr Benjamin Attuil fait le point sur les règles de remboursement en France.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/remboursement-implants-secu-mutuelle` },
  openGraph: {
    title: 'Remboursement des implants dentaires : Sécu et mutuelle',
    description: 'Ce que remboursent réellement la Sécurité sociale et les mutuelles pour un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/remboursement-implants-secu-mutuelle`,
  },
}

const FAQS = [
  {
    question: "La Sécurité sociale rembourse-t-elle les implants dentaires ?",
    answer: "Le remboursement de la Sécurité sociale sur les implants dentaires eux-mêmes reste très limité, voire inexistant selon les actes : les implants ne figurent pas parmi les actes couverts par la nomenclature générale des actes professionnels au même titre que les soins conservateurs. Certains actes associés (extractions, consultations) peuvent en revanche être partiellement remboursés selon les tarifs conventionnels."
  },
  {
    question: "Certaines mutuelles remboursent-elles mieux que d'autres ?",
    answer: "Oui, les écarts sont importants d'un contrat à l'autre. Certaines complémentaires santé haut de gamme proposent des forfaits spécifiques \"implantologie\" pouvant couvrir plusieurs centaines, voire plusieurs milliers d'euros par implant. Il est recommandé de vérifier précisément les garanties de votre contrat avant de vous engager dans le traitement."
  },
  {
    question: "Comment savoir ce que ma mutuelle rembourse exactement ?",
    answer: "Le plus fiable est de contacter directement votre mutuelle avec le devis détaillé fourni par le Dr Attuil, en demandant explicitement le montant remboursé pour chaque acte (pose d'implant, prothèse sur implant, éventuelle greffe osseuse). Le cabinet peut vous aider à identifier les codes d'actes à transmettre à votre assureur."
  },
  {
    question: "Existe-t-il des dispositifs d'aide pour les revenus modestes ?",
    answer: "Certaines situations particulières (accident, maladie spécifique) peuvent ouvrir droit à une prise en charge différente. Ces cas sont étudiés individuellement lors de la consultation de bilan. En dehors de ces situations, les solutions de financement échelonné restent le principal levier pour rendre le traitement accessible."
  },
  {
    question: "Faut-il choisir sa mutuelle avant de commencer le traitement ?",
    answer: "Si votre contrat actuel offre une couverture implantologie faible, il peut être pertinent de comparer les offres avant de démarrer un traitement de grande ampleur comme un bridge complet, sachant que la plupart des mutuelles appliquent un délai de carence avant la prise en charge de ce type d'acte."
  },
]

export default function RemboursementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Prix et coût', href: '/prix-bridge-complet-implants' },
            { label: 'Remboursement Sécu / mutuelle' }
          ]} />
          <p className="page-eyebrow">Ce que couvre réellement l'Assurance Maladie</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Remboursement des implants dentaires : Sécu et mutuelle
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Un point clair et sans ambiguïté sur ce que remboursent réellement la Sécurité sociale et les complémentaires santé pour un bridge complet sur implants.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La <strong>Sécurité sociale rembourse très peu, voire pas du tout</strong>, la pose d'implants dentaires. Certaines <strong>mutuelles</strong> proposent en revanche des <strong>forfaits implantologie</strong> qui peuvent réduire significativement le reste à charge — leur montant varie fortement d'un contrat à l'autre.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi la Sécurité sociale rembourse-t-elle si peu ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Contrairement aux couronnes ou aux soins conservateurs, les actes liés à la pose d'implants dentaires ne bénéficient pas d'un tarif de remboursement standard dans la nomenclature de l'Assurance Maladie. Cette situation, régulièrement débattue, reste en vigueur en France à ce jour, contrairement à certains pays voisins qui prennent en charge une partie de ces actes.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Certains actes associés au parcours de soin (consultations, radiographies, extractions dentaires) peuvent en revanche être remboursés selon les tarifs conventionnels habituels, indépendamment de la partie implantaire du traitement.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Le rôle des mutuelles</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            C'est principalement au niveau des complémentaires santé que se joue la prise en charge des implants. Certains contrats, en particulier les gammes intermédiaires et hauts de gamme, incluent des <strong>forfaits implantologie</strong> annuels ou par implant, qui peuvent alléger significativement le reste à charge.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Il est essentiel de vérifier ces garanties <strong>avant</strong> de démarrer le traitement, en contactant votre mutuelle avec le devis détaillé fourni par le cabinet, qui précise chaque acte réalisé.
          </p>

          <CTABox variant="inline"
            title="Un devis détaillé pour votre mutuelle"
            subtitle="Le Dr Attuil fournit un devis précis, prêt à être transmis à votre complémentaire santé."
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
                { label: 'Financement', href: '/financement-bridge-implants' },
                { label: 'Pourquoi si cher ?', href: '/pourquoi-bridge-implants-si-cher' },
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
