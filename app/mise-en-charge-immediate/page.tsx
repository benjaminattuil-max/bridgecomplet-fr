import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Mise en Charge Immédiate : Dents Fixes en 24h | Dr Attuil' },
  description: 'La mise en charge immédiate permet de poser une prothèse fixe provisoire le jour même. Protocole, conditions et résultats par le Dr Attuil.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/mise-en-charge-immediate` },
  openGraph: {
    title: 'Mise en charge immédiate : comment avoir des dents fixes en 24h ?',
    description: 'Tout comprendre sur la mise en charge immédiate : principe, conditions, sécurité et résultats. Dr Benjamin Attuil, Paris 11e.',
    url: `${SITE_CONFIG.siteUrl}/mise-en-charge-immediate`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce que la mise en charge immédiate ?",
    answer: "La mise en charge immédiate est un protocole implantaire qui consiste à fixer une prothèse dentaire provisoire sur les implants dans les heures qui suivent leur pose — le même jour ou dans les 24 à 48 heures. Ce protocole permet au patient de repartir avec des dents fixes fonctionnelles sans attendre la période d'ostéointégration (fusion implant-os) qui dure normalement 4 à 6 mois."
  },
  {
    question: "La mise en charge immédiate est-elle sûre ?",
    answer: "Oui, à condition que les critères de sélection soient respectés. La stabilité primaire des implants — c'est-à-dire la solidité mécanique immédiate dans l'os au moment de la pose — doit être suffisante pour supporter la prothèse provisoire sans compromettre l'ostéointégration. Le Dr Attuil évalue cette stabilité lors de la pose grâce à des instruments de mesure (torque de serrage, analyse des fréquences de résonance). Avec une bonne sélection des patients et une technique rigoureuse, les taux de succès sont comparables à ceux des protocoles différés."
  },
  {
    question: "Peut-on manger normalement avec la prothèse provisoire ?",
    answer: "La prothèse provisoire posée en mise en charge immédiate est fonctionnelle, mais elle nécessite une alimentation molle pendant les 3 premiers mois. Les aliments durs, croquants ou collants sont à éviter pour ne pas exercer de forces excessives sur les implants en cours d'ostéointégration. Une fois la prothèse définitive posée (4 à 6 mois après), vous pouvez manger tous les aliments normalement."
  },
  {
    question: "Tout le monde peut-il bénéficier de la mise en charge immédiate ?",
    answer: "Non, certaines conditions doivent être réunies. La qualité et la quantité d'os doivent permettre d'obtenir une stabilité primaire suffisante des implants. Le bruxisme sévère non traité, certaines maladies osseuses ou un os de très mauvaise qualité peuvent contre-indiquer ce protocole. Mais dans la grande majorité des cas de bridge complet, la mise en charge immédiate est possible et représente aujourd'hui le protocole de référence."
  },
  {
    question: "Quelle est la différence entre prothèse provisoire et prothèse définitive ?",
    answer: "La prothèse provisoire posée le jour même est conçue pour être esthétique et fonctionnelle pendant la période d'ostéointégration (4 à 6 mois). Elle est généralement en résine renforcée ou en PMMA. La prothèse définitive, posée une fois l'ostéointégration confirmée, est fabriquée en zircone (céramique haute résistance) — plus dure, plus esthétique et plus durable. C'est elle que vous garderez pour 15 à 25 ans."
  },
]

export default function MiseEnChargeImmediatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Mise en charge immédiate implants dentaires',
          'Protocole implantaire permettant de fixer une prothèse dentaire provisoire fixe sur les implants dans les heures suivant leur pose. Le patient repart avec des dents fixes fonctionnelles le jour même de l\'intervention.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Mise en charge immédiate' }
          ]} />
          <p className="page-eyebrow">Le protocole qui change tout</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Mise en charge immédiate : des dents fixes dès le jour de l'intervention
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            La mise en charge immédiate est le protocole qui permet de poser une prothèse fixe provisoire le jour même de la pose des implants — sans attendre les 4 à 6 mois de cicatrisation traditionnels. C'est ce qui rend possible le "bridge complet en une journée".
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Qu'est-ce que la mise en charge immédiate ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Historiquement, après la pose d'implants dentaires, les patients devaient attendre 4 à 6 mois que les implants fusionnent avec l'os (ostéointégration) avant de recevoir leur prothèse définitive. Pendant cette période, ils portaient un dentier provisoire amovible.
          </p>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La <strong>mise en charge immédiate</strong> a révolutionné ce protocole : dès la fin de l'intervention, une prothèse fixe provisoire est vissée directement sur les implants. Le patient repart le soir même avec des dents fixes, esthétiques et fonctionnelles — <strong>sans passer un seul jour sans dents</strong>.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce protocole est aujourd'hui le standard pour les bridges complets sur implants. Il est possible grâce à la rigidité mécanique immédiate des implants dans l'os (appelée "stabilité primaire") et à la solidarité de la prothèse qui unit les implants entre eux, réduisant les micromouvements individuels.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-6">
              <p className="font-semibold text-neutral-500 text-sm mb-3 uppercase tracking-wide">Protocole traditionnel</p>
              <div className="space-y-2 text-sm text-neutral-600">
                <p>• Pose des implants</p>
                <p className="text-red-600 font-medium">• 4 à 6 mois avec dentier amovible provisoire</p>
                <p>• Pose de la prothèse définitive</p>
              </div>
              <p className="text-xs text-neutral-400 mt-4 italic">Durée totale : 6 à 9 mois</p>
            </div>
            <div className="bg-brand-50 border border-brand-200 rounded-sm p-6">
              <p className="font-semibold text-brand-700 text-sm mb-3 uppercase tracking-wide">Mise en charge immédiate</p>
              <div className="space-y-2 text-sm text-neutral-700">
                <p>• Pose des implants</p>
                <p className="text-brand-700 font-medium">✓ Prothèse fixe provisoire posée le jour même</p>
                <p>• Pose de la prothèse définitive (J+4 à 6 mois)</p>
              </div>
              <p className="text-xs text-brand-600 mt-4 italic font-medium">Jamais sans dents fixes — même un seul jour</p>
            </div>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Comment est-ce possible d'un point de vue biologique ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La mise en charge immédiate repose sur un principe mécanique précis : la <strong>stabilité primaire</strong>. Quand un implant est vissé dans l'os, il est maintenu mécaniquement par la compression de l'os autour du pas de vis — même avant toute ostéointégration biologique.
          </p>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Cette stabilité mécanique est mesurée au moment de la pose. Si elle est suffisante (torque de serrage ≥ 35 Ncm, analyse ISQ), la prothèse provisoire peut être vissée immédiatement. La clé est que la prothèse, en solidarisant tous les implants entre eux, <strong>élimine les micromouvements individuels</strong> qui pourraient compromettre l'ostéointégration.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            L'ostéointégration se produit normalement dans les 4 à 6 mois suivants — avec la prothèse provisoire en place. Une fois confirmée par contrôle radiographique, la prothèse définitive en zircone est posée.
          </p>

          <CTABox variant="inline"
            title="Êtes-vous candidat à la mise en charge immédiate ?"
            subtitle="La grande majorité des patients pour un bridge complet le sont. Le bilan le confirme."
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
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Bridge complet en 1 journée', href: '/bridge-complet-une-journee' },
                { label: 'Extraction-implantation immédiate', href: '/extraction-implantation-immediate' },
                { label: 'Prothèse provisoire vs définitive', href: '/prothese-provisoire-definitive-implants' },
                { label: 'Alimentation après la pose', href: '/alimentation-apres-bridge-implants' },
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
