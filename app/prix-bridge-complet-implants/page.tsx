import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Prix d\'un Bridge Complet sur Implants : Coût Réel | Dr Attuil' },
  description: 'Combien coûte un bridge complet sur implants (All-on-4, All-on-6) ? Le Dr Attuil détaille le prix réel, ce qui est inclus et le financement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/prix-bridge-complet-implants` },
  openGraph: {
    title: 'Prix du bridge complet sur implants : le détail transparent',
    description: 'Fourchette de prix réelle, facteurs qui l\'influencent, et ce qui est inclus dans le devis d\'un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/prix-bridge-complet-implants`,
  },
}

const INCLUDED = [
  'Consultation de bilan et plan de traitement personnalisé',
  'Scanner 3D (CBCT) et planification numérique du guide chirurgical',
  'Pose des implants sous anesthésie locale (ou sédation consciente en option)',
  'Extractions dentaires associées si nécessaire',
  'Prothèse provisoire fixe posée le jour de l\'intervention',
  'Prothèse définitive en zircone (4 à 6 mois après)',
  'Consultations de suivi et contrôles post-opératoires',
]

const FACTORS = [
  { title: 'Nombre d\'implants par arcade', desc: 'All-on-4 (4 implants) est généralement moins coûteux qu\'All-on-6 (6 implants), qui nécessite plus de matériel et de temps opératoire.' },
  { title: 'Nécessité d\'une greffe osseuse', desc: 'Un déficit osseux important peut nécessiter une greffe préalable ou une technique zygomatique, ce qui augmente le coût global du traitement.' },
  { title: 'Matériau de la prothèse définitive', desc: 'La zircone monolithique haute résistance représente un investissement plus élevé que des matériaux d\'entrée de gamme, mais offre une durabilité et une esthétique bien supérieures.' },
  { title: 'Une ou deux arcades traitées', desc: 'Le traitement des deux mâchoires (haut et bas) double logiquement une partie des coûts, bien que certains frais de bilan soient mutualisés.' },
  { title: 'Sédation consciente', desc: 'Une option supplémentaire pour les patients anxieux, facturée en complément de l\'acte chirurgical.' },
]

const FAQS = [
  {
    question: "Combien coûte un bridge complet sur implants en France ?",
    answer: "Le prix d'un bridge complet sur implants (type All-on-4 ou All-on-6) se situe généralement entre 12 000 € et 25 000 € par arcade en France, prothèse définitive incluse. Ce prix varie selon le nombre d'implants, la nécessité d'une greffe osseuse, le matériau de la prothèse et la région. Un devis détaillé est établi lors de la consultation de bilan, après analyse du scanner 3D."
  },
  {
    question: "Pourquoi le prix varie-t-il autant d'un cabinet à l'autre ?",
    answer: "Les écarts de prix reflètent souvent des différences réelles : qualité et marque des implants utilisés, expérience du praticien, technologie de planification (guide chirurgical numérique ou non), matériau de la prothèse définitive, et étendue du suivi post-opératoire inclus. Un devis très inférieur à la moyenne du marché mérite d'être examiné attentivement sur ce que couvre réellement le prix affiché."
  },
  {
    question: "Le prix inclut-il la prothèse définitive en zircone ?",
    answer: "Chez le Dr Attuil, oui : le devis présenté en consultation de bilan inclut la totalité du parcours, de la consultation initiale à la prothèse définitive en zircone posée plusieurs mois après. Cette transparence permet d'éviter les coûts cachés qui apparaissent parfois en cours de traitement chez d'autres praticiens."
  },
  {
    question: "Existe-t-il des solutions de financement ?",
    answer: "Oui, un paiement échelonné sur plusieurs mois peut être proposé selon les cas. Le sujet est abordé en détail lors de la consultation de bilan, avec un devis transparent qui permet d'anticiper le budget total du traitement."
  },
  {
    question: "La Sécurité sociale et les mutuelles remboursent-elles une partie du prix ?",
    answer: "Le remboursement de la Sécurité sociale sur les implants dentaires reste très limité. Certaines mutuelles proposent en revanche des forfaits spécifiques \"implantologie\" qui peuvent prendre en charge une partie non négligeable du coût. Le détail de cette question est expliqué sur notre page dédiée au remboursement."
  },
]

export default function PrixBridgeCompletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Prix et coût' }
          ]} />
          <p className="page-eyebrow">Transparence sur le prix</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Prix d'un bridge complet sur implants : le détail réel
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            C'est souvent la question posée dès le premier appel. Voici une fourchette de prix honnête, ce qu'elle recouvre exactement, et les facteurs qui la font varier d'un patient à l'autre.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Un bridge complet sur implants coûte généralement entre <strong>12 000 € et 25 000 € par arcade</strong> en France, prothèse définitive en zircone incluse. Le prix exact dépend du nombre d'implants, d'une éventuelle greffe osseuse, et du matériau choisi. Un devis détaillé est établi après le bilan avec scanner 3D.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Ce que le prix inclut chez le Dr Attuil</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La transparence sur le devis est essentielle pour un traitement aussi engageant. Voici ce qui est systématiquement inclus dans le prix annoncé :
          </p>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>{item}</li>
            ))}
          </ul>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Ce qui fait varier le prix</h2>
          <div className="space-y-3 mb-10">
            {FACTORS.map((f) => (
              <div key={f.title} className="border-l-2 border-neutral-200 pl-4 py-1">
                <p className="font-semibold text-neutral-800 text-sm mb-1">{f.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi ce prix, comparé à un dentier ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Un bridge complet sur implants représente un investissement plus important qu'un dentier amovible classique à l'achat. Mais sur le long terme, sa durabilité (15 à 25 ans avec un entretien adapté), l'absence de renouvellement fréquent, et la qualité de vie retrouvée (mastication, confort, confiance en soi) en font une solution dont le coût réel, ramené à l'année, est souvent plus raisonnable qu'il n'y paraît. Notre page <Link href="/pourquoi-bridge-implants-si-cher" className="text-brand-600 hover:underline">"pourquoi le bridge sur implants coûte-t-il si cher ?"</Link> détaille cette question en profondeur.
          </p>

          <CTABox variant="inline"
            title="Obtenir un devis personnalisé et transparent"
            subtitle="Le prix exact de votre traitement est déterminé après l'analyse de votre scanner 3D."
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
                { label: 'Pourquoi est-ce si cher ?', href: '/pourquoi-bridge-implants-si-cher' },
                { label: 'Financement', href: '/financement-bridge-implants' },
                { label: 'Remboursement Sécu/mutuelle', href: '/remboursement-implants-secu-mutuelle' },
                { label: 'Bridge implants Turquie vs France', href: '/bridge-implants-turquie-vs-france' },
                { label: 'All-on-4', href: '/all-on-4' },
                { label: 'All-on-6', href: '/all-on-6' },
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
