import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants chez les Personnes Âgées | Dr Attuil' },
  description: 'Existe-t-il un âge limite pour poser des implants dentaires ? Le Dr Benjamin Attuil explique pourquoi l\'âge n\'est pas un frein et ce qui compte réellement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-personnes-agees` },
  openGraph: {
    title: 'Bridge complet sur implants chez les personnes âgées',
    description: 'L\'âge n\'est pas une contre-indication aux implants dentaires : ce qui compte vraiment.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-personnes-agees`,
  },
}

const FAQS = [
  {
    question: "Existe-t-il un âge limite pour poser des implants dentaires ?",
    answer: "Non, il n'existe pas d'âge limite strict. C'est l'état de santé général, la capacité à supporter une intervention chirurgicale sous anesthésie locale, et la qualité osseuse qui déterminent la faisabilité du traitement, quel que soit l'âge du patient."
  },
  {
    question: "Les personnes âgées ont-elles plus de risques de complications ?",
    answer: "Le risque dépend avant tout de l'état de santé général et des traitements en cours, pas de l'âge en lui-même. De nombreux patients de plus de 70 ou 80 ans, en bonne santé générale, bénéficient de bridges complets sur implants avec d'excellents résultats."
  },
  {
    question: "Le bridge sur implants est-il particulièrement bénéfique pour les personnes âgées ?",
    answer: "Oui, souvent plus encore que pour des patients plus jeunes : une meilleure mastication favorise une alimentation plus variée et équilibrée, un enjeu de santé important chez les personnes âgées, tout en améliorant la confiance en soi et la qualité de vie au quotidien."
  },
  {
    question: "Quelles précautions particulières sont prises pour un patient âgé ?",
    answer: "Un bilan médical complet est réalisé, incluant les traitements en cours (anticoagulants notamment) et les éventuelles pathologies associées. La durée de l'intervention peut être adaptée, et une sédation consciente peut être proposée pour un meilleur confort si nécessaire."
  },
]

export default function PersonnesAgeesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Personnes âgées' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants chez les personnes âgées
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            "Suis-je trop âgé pour des implants ?" est une question fréquente. La réponse : l'âge seul n'est presque jamais un obstacle.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Non, il n'y a <strong>pas d'âge limite</strong> pour les implants dentaires. C'est l'<strong>état de santé général</strong>, pas l'âge, qui détermine la faisabilité du traitement. De nombreux patients de plus de 70 ans bénéficient de bridges complets sur implants avec d'excellents résultats.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi l'âge n'est pas le critère déterminant</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La pose d'implants se fait sous anesthésie locale, un geste bien toléré par la grande majorité des patients quel que soit leur âge. Ce sont les <strong>pathologies associées</strong> (troubles cardiovasculaires sévères non stabilisés, prise de certains traitements comme les anticoagulants) qui nécessitent une évaluation attentive, pas l'âge en tant que tel.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Un bilan médical complet, en coordination avec le médecin traitant si nécessaire, permet d'évaluer précisément la faisabilité et la sécurité du traitement pour chaque patient.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Des bénéfices particulièrement importants</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Retrouver une mastication efficace grâce à un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet fixe</Link> permet une alimentation plus variée et équilibrée — un enjeu de santé important pour les personnes âgées, souvent limitées par un dentier peu fonctionnel. Le gain en confiance en soi et en qualité de vie est également très souvent souligné par les patients de cette tranche d'âge.
          </p>

          <CTABox variant="inline"
            title="L'âge vous inquiète pour ce projet ?"
            subtitle="C'est votre état de santé général qui compte, pas votre date de naissance."
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
                { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
                { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
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
