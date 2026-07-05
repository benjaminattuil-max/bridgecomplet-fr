import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Peu d\'Os pour des Implants : Est-ce Encore Possible ? | Dr Attuil' },
  description: 'On vous a dit que vous n\'aviez pas assez d\'os pour des implants ? Le Dr Attuil explique les solutions pour souvent éviter la greffe osseuse.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/peu-os-implants-possible` },
  openGraph: {
    title: 'Peu d\'os pour des implants : quelles solutions ?',
    description: 'Les techniques qui permettent de poser des implants même en cas de manque osseux, sans greffe systématique.',
    url: `${SITE_CONFIG.siteUrl}/peu-os-implants-possible`,
  },
}

const SOLUTIONS = [
  { title: 'Implants inclinés (All-on-4)', desc: 'En inclinant les implants postérieurs à 45°, on exploite l\'os antérieur souvent mieux préservé, sans greffe.' },
  { title: 'Implants zygomatiques', desc: 'Ancrés dans l\'os de la pommette, ils contournent totalement le manque d\'os du maxillaire.' },
  { title: 'Implants ptérygoïdiens', desc: 'Ancrés à l\'arrière du palais, ils permettent un ancrage postérieur solide sans greffe.' },
  { title: 'Implants courts', desc: 'Dans certains cas de manque osseux modéré, des implants de diamètre ou longueur adaptés suffisent sans augmentation osseuse.' },
  { title: 'Greffe ciblée et limitée', desc: 'Quand une greffe reste nécessaire, elle peut souvent être limitée à une zone précise plutôt qu\'à toute l\'arcade.' },
]

const FAQS = [
  {
    question: "On m'a dit que je n'avais pas assez d'os pour des implants, est-ce définitif ?",
    answer: "Pas nécessairement. Un second avis avec un scanner 3D récent permet souvent d'identifier des solutions alternatives (implants inclinés, zygomatiques, ptérygoïdiens) qui n'étaient peut-être pas envisagées lors du premier avis, notamment si celui-ci datait ou reposait sur une radiographie 2D moins précise."
  },
  {
    question: "Ces techniques sans greffe sont-elles aussi fiables qu'avec greffe osseuse ?",
    answer: "Oui, les études cliniques montrent des taux de succès comparables pour ces techniques alternatives lorsqu'elles sont bien indiquées et réalisées par un praticien expérimenté. Le choix dépend avant tout de l'anatomie précise de chaque patient."
  },
  {
    question: "Existe-t-il des cas où la greffe reste vraiment incontournable ?",
    answer: "Oui, en cas de résorption osseuse très sévère où même les implants zygomatiques ou ptérygoïdiens ne suffiraient pas à obtenir une stabilité suffisante. Ces cas restent minoritaires mais existent, et sont identifiés précisément lors du bilan par scanner 3D."
  },
  {
    question: "Combien de temps gagne-t-on en évitant la greffe osseuse ?",
    answer: "Une greffe osseuse importante nécessite 4 à 9 mois de cicatrisation avant la pose des implants. Les éviter grâce aux techniques alternatives permet souvent de repartir avec des dents fixes dès le jour de l'intervention."
  },
]

export default function PeuOsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peu d\'os, est-ce possible ?' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Peu d'os pour des implants : est-ce encore possible ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            On vous a peut-être dit non ailleurs. Les techniques actuelles permettent souvent de traiter des cas de manque osseux qui semblaient auparavant sans solution sans greffe lourde.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Dans la grande majorité des cas, <strong>oui, c'est possible</strong>, même avec un manque osseux important. Les <strong>implants inclinés</strong>, <strong>zygomatiques</strong> ou <strong>ptérygoïdiens</strong> permettent d'éviter la greffe osseuse dans la plupart des situations.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">Les solutions disponibles</h2>
          <div className="space-y-4 mb-10">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{s.title}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="On vous a dit non ailleurs ?"
            subtitle="Un second avis avec scanner 3D peut révéler des solutions non envisagées."
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
                { label: 'Implants zygomatiques', href: '/implants-zygomatiques' },
                { label: 'Implants ptérygoïdiens', href: '/implants-pterygoidiens' },
                { label: 'Greffe osseuse', href: '/greffe-osseuse-bridge-implants' },
                { label: 'Sinus lift', href: '/sinus-lift-implants' },
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
