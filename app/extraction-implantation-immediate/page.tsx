import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Extraction-Implantation Immédiate : Principe et Avantages | Dr Attuil' },
  description: 'L\'extraction-implantation immédiate permet de poser un implant le jour même de l\'extraction. Le Dr Attuil explique ce protocole et ses avantages.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/extraction-implantation-immediate` },
  openGraph: {
    title: 'Extraction-implantation immédiate : un implant le jour de l\'extraction',
    description: 'Principe, avantages et limites de l\'extraction-implantation immédiate pour le bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/extraction-implantation-immediate`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce que l'extraction-implantation immédiate ?",
    answer: "C'est une technique consistant à poser un implant directement dans l'alvéole osseuse d'une dent que l'on vient d'extraire, au cours de la même séance chirurgicale, plutôt que d'attendre plusieurs mois de cicatrisation entre les deux étapes."
  },
  {
    question: "Quels sont les avantages de cette technique ?",
    answer: "Elle réduit significativement la durée totale du traitement en évitant une période d'attente entre extraction et pose d'implant. Elle limite aussi le nombre d'interventions chirurgicales et préserve mieux le volume osseux, qui a tendance à se résorber naturellement après une extraction si l'espace n'est pas comblé rapidement."
  },
  {
    question: "Cette technique est-elle toujours possible ?",
    answer: "Non, elle nécessite une évaluation précise : absence d'infection active au niveau de la dent extraite, qualité osseuse suffisante autour de l'alvéole, et possibilité d'obtenir une bonne stabilité primaire de l'implant. Le Dr Attuil évalue cette possibilité pour chaque dent lors du bilan pré-opératoire."
  },
  {
    question: "Cette technique est-elle plus risquée qu'un protocole différé ?",
    answer: "Non, à condition que les critères de sélection soient respectés. Les études cliniques montrent des taux de succès comparables entre extraction-implantation immédiate et pose différée, lorsque l'indication est bien posée par un praticien expérimenté."
  },
]

export default function ExtractionImplantationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Extraction-implantation immédiate',
          'Technique chirurgicale consistant à poser un implant dentaire directement dans l\'alvéole d\'une dent extraite, au cours de la même intervention, réduisant la durée totale du traitement implantaire.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Extraction-implantation immédiate' }
          ]} />
          <p className="page-eyebrow">Une étape en moins dans le parcours de soin</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Extraction-implantation immédiate : un implant le jour même
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Extraire une dent abîmée et poser l'implant à sa place, dans la même séance : cette technique évite d'attendre plusieurs mois entre les deux étapes, quand les conditions le permettent.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Le principe</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Traditionnellement, il était recommandé d'attendre 2 à 6 mois après l'extraction d'une dent avant de poser un implant, le temps que l'os cicatrise. L'<strong>extraction-implantation immédiate</strong> bouscule ce protocole : l'implant est positionné directement dans l'alvéole de la dent qui vient d'être extraite, au cours de la même intervention.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette approche est particulièrement pertinente dans le cadre d'un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link>, où plusieurs dents doivent souvent être extraites avant la pose des implants : réaliser les deux étapes le même jour réduit considérablement la durée et la lourdeur globale du traitement.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Les avantages</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Une seule intervention</strong> au lieu de deux chirurgies distinctes</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Préservation du volume osseux</strong>, qui commence à se résorber dès les semaines suivant une extraction</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Durée totale de traitement réduite</strong>, compatible avec la mise en charge immédiate le jour même</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span><strong>Moins de gêne globale</strong> pour le patient, avec une seule période de convalescence</li>
          </ul>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Quand cette technique n'est-elle pas indiquée ?</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            En présence d'une <strong>infection active</strong> sévère au niveau de la dent à extraire, ou si l'alvéole ne permet pas d'obtenir une <strong>stabilité primaire</strong> suffisante de l'implant, un protocole différé (extraction, cicatrisation, puis pose de l'implant quelques semaines à mois plus tard) reste préférable. Cette décision se prend au cas par cas lors du bilan.
          </p>

          <CTABox variant="inline"
            title="Vos dents peuvent-elles être extraites et remplacées le même jour ?"
            subtitle="Le bilan avec scanner 3D permet de le déterminer précisément."
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
                { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
                { label: 'Bridge complet en 1 journée', href: '/bridge-complet-une-journee' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Greffe osseuse', href: '/greffe-osseuse-bridge-implants' },
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
