import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Sédation Consciente pour la Pose d\'Implants | Dr Attuil' },
  description: 'La sédation consciente permet de vivre la pose d\'implants dans un état de relaxation profonde. Le Dr Attuil explique cette technique pour les anxieux.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/sedation-consciente-implants` },
  openGraph: {
    title: 'Sédation consciente : vivre la pose d\'implants sereinement',
    description: 'Principe et déroulement de la sédation consciente pour les patients anxieux face à la pose d\'implants.',
    url: `${SITE_CONFIG.siteUrl}/sedation-consciente-implants`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce que la sédation consciente ?",
    answer: "C'est une technique pharmacologique qui induit un état de relaxation profonde tout en gardant le patient éveillé et capable de répondre aux instructions de l'équipe soignante. Elle diffère de l'anesthésie générale, qui entraîne une perte de conscience complète."
  },
  {
    question: "La sédation consciente est-elle sans danger ?",
    answer: "Oui, réalisée par du personnel qualifié avec un monitoring continu des constantes vitales, la sédation consciente est une technique sûre, largement utilisée en chirurgie dentaire. Un bilan médical préalable permet de vérifier l'absence de contre-indication."
  },
  {
    question: "Se souvient-on de l'intervention après une sédation consciente ?",
    answer: "Selon le type de sédation utilisé, beaucoup de patients gardent un souvenir très flou, voire inexistant, de l'intervention, bien qu'ils soient restés éveillés et coopérants pendant toute sa durée. C'est l'un des effets recherchés pour les patients très anxieux."
  },
  {
    question: "Peut-on conduire après une sédation consciente ?",
    answer: "Non, la conduite est interdite pendant les 12 heures suivant la prise du médicament sédatif. Un accompagnant doit impérativement être présent pour vous ramener à domicile après l'intervention."
  },
  {
    question: "La sédation consciente a-t-elle un coût supplémentaire ?",
    answer: "Oui, cette option est facturée en complément de l'acte chirurgical. Son coût est précisé dans le devis détaillé remis lors de la consultation de bilan, pour les patients qui souhaitent en bénéficier."
  },
]

export default function SedationConscientePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Sédation consciente' }
          ]} />
          <p className="page-eyebrow">Pour les patients anxieux</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            La sédation consciente : vivre l'intervention sereinement
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Pour les patients particulièrement anxieux face à la chirurgie dentaire, la sédation consciente permet de vivre l'intervention dans un état de détente profonde, sans perte de conscience.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Le principe</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La sédation consciente utilise un médicament anxiolytique, administré par voie orale ou intraveineuse selon les cas, pour induire un état de relaxation profonde. Le patient reste éveillé, capable de respirer normalement et de répondre aux instructions de l'équipe, mais dans un état de calme qui réduit considérablement la perception du stress et de l'anxiété liés à l'intervention.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette technique est particulièrement recommandée pour les patients ayant une <Link href="/peur-implants-dentaires" className="text-brand-600 hover:underline">phobie du dentiste</Link>, ceux ayant vécu une expérience traumatisante par le passé, ou simplement ceux qui préfèrent aborder une intervention de plusieurs heures dans un état de détente optimal.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Sédation consciente vs anesthésie générale</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Contrairement à l'<Link href="/anesthesie-generale-bridge-implants" className="text-brand-600 hover:underline">anesthésie générale</Link>, la sédation consciente ne nécessite pas d'intubation ni de séjour en salle de réveil prolongé, et permet une récupération plus rapide. Elle est associée à une anesthésie locale de la zone opérée, qui garantit l'absence totale de douleur pendant l'intervention.
          </p>

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Le jour de l'intervention</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Vous devez être à jeun selon les consignes données, et impérativement accompagné pour le retour à domicile, la conduite étant interdite pendant les 12 heures suivant la sédation. L'équipe surveille en continu vos constantes vitales pendant toute la durée de l'intervention.
            </p>
          </div>

          <CTABox variant="inline"
            title="Anxieux à l'idée de l'intervention ?"
            subtitle="Parlez-en dès la consultation de bilan — la sédation consciente peut transformer votre expérience."
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
                { label: 'Anesthésie générale', href: '/anesthesie-generale-bridge-implants' },
                { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
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
