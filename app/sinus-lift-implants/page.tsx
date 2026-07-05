import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Sinus Lift (Comblement Sinusien) avant Implants | Dr Attuil' },
  description: 'Qu\'est-ce qu\'un sinus lift ? Le Dr Benjamin Attuil explique cette greffe osseuse spécifique au maxillaire supérieur, ses indications et son déroulement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/sinus-lift-implants` },
  openGraph: {
    title: 'Sinus lift : le comblement sinusien avant implants',
    description: 'Principe, indications et déroulement du sinus lift avant la pose d\'implants au maxillaire supérieur.',
    url: `${SITE_CONFIG.siteUrl}/sinus-lift-implants`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un sinus lift ?",
    answer: "Le sinus lift, ou comblement sinusien, est une intervention consistant à soulever la membrane du sinus maxillaire et à combler l'espace créé avec du matériau osseux, afin d'augmenter le volume d'os disponible pour poser des implants dans la zone postérieure du maxillaire supérieur."
  },
  {
    question: "Pourquoi le sinus maxillaire pose-t-il problème pour les implants ?",
    answer: "Après la perte des dents postérieures supérieures, l'os situé sous le sinus maxillaire a tendance à se résorber, tandis que le sinus lui-même peut légèrement s'agrandir. Cette combinaison réduit le volume osseux disponible pour ancrer solidement un implant dans cette zone."
  },
  {
    question: "Le sinus lift est-il systématiquement nécessaire pour un bridge complet ?",
    answer: "Non. Les techniques comme l'All-on-4 avec implants inclinés à l'arrière évitent précisément la zone du sinus maxillaire, permettant souvent de se passer d'un sinus lift pour un bridge complet. Cette intervention reste néanmoins pertinente dans certaines configurations spécifiques."
  },
  {
    question: "Combien de temps faut-il attendre après un sinus lift avant de poser les implants ?",
    answer: "Le délai de cicatrisation est généralement de 4 à 9 mois selon l'ampleur du comblement réalisé, avant que les implants puissent être posés dans de bonnes conditions de stabilité. Dans certains cas de comblement limité, implant et sinus lift peuvent être réalisés en une seule séance."
  },
]

export default function SinusLiftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Sinus lift (comblement sinusien)',
          'Intervention chirurgicale consistant à augmenter le volume osseux disponible sous le sinus maxillaire, en vue de la pose d\'implants dentaires dans la zone postérieure du maxillaire supérieur.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Sinus lift' }
          ]} />
          <p className="page-eyebrow">Une technique ciblée, pas systématique</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Sinus lift : le comblement sinusien avant implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Une technique précise pour traiter un manque d'os spécifique à la mâchoire supérieure, à ne pas confondre avec une greffe osseuse générale.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Le principe</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le sinus maxillaire est une cavité aérienne située au-dessus des racines des dents postérieures supérieures. Après la perte de ces dents, l'os situé entre la bouche et le sinus a tendance à s'amincir avec le temps, rendant parfois insuffisant le volume disponible pour ancrer un implant.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le <strong>sinus lift</strong> consiste à accéder délicatement à cet espace, à soulever la fine membrane qui tapisse le sinus (la membrane sinusienne), et à combler l'espace ainsi créé avec du matériau osseux. Après quelques mois de cicatrisation, ce nouvel os permet la pose d'implants dans de bonnes conditions de stabilité.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Sinus lift interne ou externe</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Selon le volume osseux manquant, deux approches existent : le <strong>sinus lift interne</strong> (par voie crestale), moins invasif, réalisable parfois en même temps que la pose de l'implant lorsque le manque d'os est modéré ; et le <strong>sinus lift externe</strong> (par voie latérale), plus étendu, nécessaire pour les augmentations osseuses plus importantes, avec un délai de cicatrisation avant la pose des implants.
          </p>

          <CTABox variant="inline"
            title="Le sinus lift est-il nécessaire dans votre cas ?"
            subtitle="De nombreuses techniques permettent aujourd'hui de l'éviter — le scanner 3D permet de le déterminer."
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
                { label: 'Greffe osseuse', href: '/greffe-osseuse-bridge-implants' },
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
                { label: 'Implants zygomatiques', href: '/implants-zygomatiques' },
                { label: 'All-on-4', href: '/all-on-4' },
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
