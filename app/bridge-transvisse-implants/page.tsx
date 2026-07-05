import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Transvissé sur Implants : Principe et Avantages | Dr Attuil' },
  description: 'Qu\'est-ce qu\'un bridge transvissé sur implants ? Le Dr Attuil explique ce mode de fixation et ses avantages par rapport au scellement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-transvisse-implants` },
  openGraph: {
    title: 'Bridge transvissé sur implants : principe et avantages',
    description: 'Le mode de fixation transvissé, standard pour le bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/bridge-transvisse-implants`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un bridge transvissé ?",
    answer: "Un bridge transvissé est une prothèse dentaire fixée sur les implants à l'aide de vis traversant la prothèse jusqu'au corps de l'implant, plutôt que d'être collée (scellée) avec un ciment dentaire. C'est le mode de fixation standard pour un bridge complet sur implants."
  },
  {
    question: "Pourquoi préférer le transvissage au scellement pour un bridge complet ?",
    answer: "Le transvissage permet de déposer la prothèse en cas de besoin (contrôle, réparation, ajustement) sans l'endommager, contrairement à une prothèse scellée qui doit parfois être découpée pour être retirée. C'est un avantage majeur sur le long terme pour la maintenance du bridge complet."
  },
  {
    question: "Les vis peuvent-elles se desserrer avec le temps ?",
    answer: "C'est un événement possible mais rare et sans gravité : un léger relâchement peut survenir après plusieurs années d'usage. Un simple resserrage lors d'une visite de contrôle suffit à résoudre le problème, sans nécessiter de nouvelle intervention chirurgicale."
  },
  {
    question: "Voit-on les vis de fixation sur le bridge transvissé ?",
    answer: "Non. Les puits d'accès aux vis, situés sur la face masticatoire de la prothèse (invisible en bouche fermée), sont comblés par un matériau composite de la même teinte que la prothèse après le serrage final, les rendant indétectables esthétiquement."
  },
]

export default function BridgeTransvissePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Bridge transvissé sur implants',
          'Prothèse dentaire complète fixée sur des implants par vissage plutôt que par scellement, permettant sa dépose non destructive pour la maintenance et le contrôle.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Bridge transvissé' }
          ]} />
          <p className="page-eyebrow">Le mode de fixation standard</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Le bridge transvissé sur implants : principe et avantages
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Vissé plutôt que collé : ce détail technique a des conséquences importantes sur la maintenance et la pérennité de votre bridge complet. Voici pourquoi c'est le standard recommandé.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Transvissé ou scellé : quelle différence ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Il existe deux façons de fixer une prothèse sur des implants : le <strong>scellement</strong>, qui utilise un ciment dentaire comme pour une couronne classique, et le <strong>transvissage</strong>, qui utilise des vis traversant la prothèse jusqu'au corps de l'implant. Pour un bridge complet sur implants, le transvissage est très largement privilégié.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La raison principale : la <strong>réversibilité</strong>. Une prothèse transvissée peut être déposée par le praticien en dévissant simplement les vis d'accès, sans endommager ni la prothèse ni les implants. Une prothèse scellée, en revanche, doit parfois être sectionnée pour être retirée en cas de problème.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les avantages du transvissage pour un bridge complet</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Maintenance facilitée', desc: 'Le praticien peut déposer la prothèse pour un contrôle, un nettoyage professionnel approfondi ou une réparation, puis la revisser à l\'identique.' },
              { title: 'Pas de résidu de ciment', desc: 'Le scellement peut laisser des résidus de ciment sous la gencive, facteur de risque de péri-implantite. Le transvissage élimine ce risque.' },
              { title: 'Ajustements possibles', desc: 'En cas d\'évolution de l\'occlusion ou de besoin d\'ajustement mineur, la prothèse peut être retravaillée sans être remplacée entièrement.' },
              { title: 'Sécurité en cas d\'urgence', desc: 'En cas de complication nécessitant un accès rapide à un implant, la dépose non destructive de la prothèse facilite grandement l\'intervention.' },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{item.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="Une question sur la conception de votre prothèse ?"
            subtitle="Le Dr Attuil explique chaque choix technique lors de la consultation de bilan."
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
                { label: 'Matériaux du bridge sur implants', href: '/materiaux-bridge-implants' },
                { label: 'Entretien du bridge sur implants', href: '/entretien-bridge-implants' },
                { label: 'Durée de vie du bridge sur implants', href: '/duree-vie-bridge-implants' },
                { label: 'Prothèse provisoire vs définitive', href: '/prothese-provisoire-definitive-implants' },
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
