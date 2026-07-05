import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Je Vais Perdre Toutes mes Dents : Quelles Solutions ? | Dr Attuil' },
  description: 'Vos dents sont trop abîmées pour être sauvées ? Le Dr Attuil explique comment anticiper cette perte avec une solution fixe planifiée.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/perdre-toutes-dents-solution` },
  openGraph: {
    title: 'Je vais perdre toutes mes dents : quelles solutions ?',
    description: 'Comment anticiper la perte de toutes ses dents avec une solution fixe planifiée à l\'avance.',
    url: `${SITE_CONFIG.siteUrl}/perdre-toutes-dents-solution`,
  },
}

const FAQS = [
  {
    question: "Mon dentiste me dit que mes dents sont perdues, que faire ?",
    answer: "C'est le moment idéal pour envisager un bridge complet sur implants, planifié à l'avance plutôt que subi dans l'urgence. Une consultation de bilan permet d'évaluer précisément votre situation et de préparer sereinement la transition vers des dents fixes."
  },
  {
    question: "Peut-on extraire toutes les dents et poser les implants le même jour ?",
    answer: "Oui, c'est l'approche privilégiée dans la majorité des cas grâce à l'extraction-implantation immédiate : les dents condamnées sont extraites et les implants posés au cours de la même intervention, avec une prothèse provisoire fixe le jour même."
  },
  {
    question: "Vaut-il mieux attendre de perdre toutes ses dents naturellement ?",
    answer: "Non, il est généralement préférable d'anticiper. Attendre que les dents se déchaussent ou s'infectent naturellement peut aggraver la perte osseuse et compliquer le traitement implantaire ultérieur. Une planification anticipée permet d'obtenir un meilleur résultat."
  },
  {
    question: "Que faire en attendant la date de l'intervention ?",
    answer: "Selon l'état de vos dents, une prothèse amovible transitoire peut être proposée pour la période précédant l'intervention, le temps d'organiser le bilan complet et la planification numérique du traitement."
  },
]

export default function PerdreToutesDentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Je vais perdre mes dents' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Je vais perdre toutes mes dents : quelles solutions ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Apprendre que ses dents sont condamnées est une épreuve. Anticiper cette transition avec un plan clair transforme une situation subie en un nouveau départ maîtrisé.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Anticiper plutôt que subir</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Lorsque des dents très abîmées (caries profondes, parodontite avancée, fractures) ne peuvent plus être conservées, la tentation est parfois de les traiter une par une jusqu'à l'échec final. Une approche plus sereine consiste à <strong>planifier la transition</strong> vers un bridge complet sur implants, en anticipant le moment où les dents seront extraites.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Grâce à l'<Link href="/extraction-implantation-immediate" className="text-brand-600 hover:underline">extraction-implantation immédiate</Link>, les dents condamnées peuvent être retirées et remplacées par des implants au cours de la <strong>même intervention</strong>, avec une prothèse provisoire fixe posée le jour même — vous ne passez jamais par une période sans dents.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi anticiper améliore le résultat</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Une planification anticipée permet d'analyser votre situation par scanner 3D avant que la situation ne se dégrade davantage, de préserver au mieux le volume osseux disponible, et d'éviter les complications infectieuses parfois associées à des dents trop longtemps conservées en mauvais état.
          </p>

          <CTABox variant="inline"
            title="Anticiper sereinement cette transition"
            subtitle="Une consultation de bilan permet d'établir un plan clair, à votre rythme."
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
                { label: 'Édentement total : solutions', href: '/edenté-total-solution-implants' },
                { label: 'Extraction-implantation immédiate', href: '/extraction-implantation-immediate' },
                { label: 'Dents qui bougent (parodontite)', href: '/dents-qui-bougent-parodontite' },
                { label: 'Bridge complet en 1 journée', href: '/bridge-complet-une-journee' },
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
