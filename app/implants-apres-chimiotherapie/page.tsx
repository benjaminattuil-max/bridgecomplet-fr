import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Implants Dentaires après une Chimiothérapie | Dr Attuil' },
  description: 'Peut-on poser des implants dentaires après un traitement contre le cancer ? Le Dr Attuil explique les précautions et la coordination avec l\'oncologue.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/implants-apres-chimiotherapie` },
  openGraph: {
    title: 'Implants dentaires après chimiothérapie : les précautions',
    description: 'Ce qu\'il faut savoir avant d\'envisager des implants dentaires après un traitement contre le cancer.',
    url: `${SITE_CONFIG.siteUrl}/implants-apres-chimiotherapie`,
  },
}

const FAQS = [
  {
    question: "Peut-on poser des implants dentaires après une chimiothérapie ?",
    answer: "Cela dépend de plusieurs facteurs : le type de traitement reçu, le délai depuis la fin du traitement, et l'état de santé général au moment du projet implantaire. Dans de nombreux cas, une fois la rémission confirmée et un délai de sécurité respecté, les implants peuvent être envisagés après avis favorable de l'équipe oncologique."
  },
  {
    question: "Pourquoi une coordination avec l'oncologue est-elle indispensable ?",
    answer: "Certains traitements du cancer, notamment les thérapies ciblant l'os (bisphosphonates, certains anticorps monoclonaux) ou la radiothérapie de la sphère cervico-faciale, augmentent le risque de complications osseuses graves après un geste chirurgical dentaire, comme l'ostéonécrose des mâchoires. L'avis de l'oncologue est indispensable pour évaluer ce risque avant tout projet implantaire."
  },
  {
    question: "La radiothérapie de la tête et du cou change-t-elle la donne ?",
    answer: "Oui, significativement. Une radiothérapie ayant touché la mâchoire modifie durablement la vascularisation osseuse et augmente le risque de complications après une chirurgie implantaire. Ces situations nécessitent une évaluation très prudente et spécialisée, parfois en milieu hospitalier."
  },
  {
    question: "Combien de temps attendre après la fin des traitements ?",
    answer: "Il n'existe pas de délai universel : cela dépend du type de cancer, du traitement reçu et de l'état de santé général. Ce délai est déterminé au cas par cas, en concertation directe avec l'équipe oncologique qui a suivi le patient."
  },
]

export default function ImplantsChimioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Implants après chimiothérapie' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Implants dentaires après une chimiothérapie
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Un projet implantaire après un traitement contre le cancer nécessite une évaluation prudente et une coordination étroite avec l'équipe oncologique.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Une évaluation individualisée est indispensable</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Chaque situation oncologique est unique. Le type de cancer, les traitements reçus (chimiothérapie, radiothérapie, thérapies ciblant l'os) et le délai depuis leur arrêt influencent directement la faisabilité et la sécurité d'un traitement implantaire. Aucune généralité ne remplace un avis médical coordonné.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi la coordination avec l'oncologue est essentielle</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Certains traitements oncologiques, en particulier les médicaments antirésorptifs osseux (bisphosphonates, dénosumab) parfois prescrits en cas de métastases osseuses, ainsi que la radiothérapie touchant la sphère cervico-faciale, sont associés à un risque accru de complications osseuses après une chirurgie dentaire, notamment l'ostéonécrose des mâchoires.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            C'est pourquoi le Dr Attuil demande systématiquement l'avis de l'équipe oncologique ayant suivi le patient avant d'envisager tout traitement implantaire dans ce contexte, afin d'évaluer précisément les risques et le délai de sécurité approprié.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Une solution reste souvent possible</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Dans de nombreux cas, une fois la rémission confirmée et les précautions nécessaires respectées, un projet de <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> reste envisageable. Chaque dossier est étudié individuellement, en toute transparence sur les risques et les bénéfices attendus.
          </p>

          <CTABox variant="inline"
            title="Un projet implantaire après un cancer ?"
            subtitle="Une évaluation coordonnée avec votre équipe médicale est la première étape."
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
                { label: 'Contre-indications aux implants', href: '/contre-indications-implants-dentaires' },
                { label: 'Implants et diabète', href: '/implants-diabetes' },
                { label: 'Bridge implants et personnes âgées', href: '/bridge-implants-personnes-agees' },
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
