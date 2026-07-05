import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalConditionSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Gonflement Après la Pose d\'Implants : À Quoi s\'Attendre | Dr Attuil' },
  description: 'Le visage gonfle-t-il après la pose d\'implants ? Le Dr Attuil explique la chronologie normale du gonflement, comment le réduire, et quand s\'inquiéter.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/gonflement-apres-implants` },
  openGraph: {
    title: 'Gonflement après la pose d\'implants : normal, temporaire, et maîtrisable',
    description: 'Chronologie précise du gonflement post-opératoire après un bridge complet sur implants, et conseils pour le limiter.',
    url: `${SITE_CONFIG.siteUrl}/gonflement-apres-implants`,
  },
}

const CHRONOLOGY = [
  { period: 'Jour de l\'intervention', title: 'Gonflement discret', desc: 'Le visage commence à peine à gonfler le soir même. À ce stade, la différence est souvent à peine visible pour l\'entourage.' },
  { period: 'J+1 à J+2', title: 'Pic du gonflement', desc: 'C\'est le moment où le gonflement est le plus marqué — parfois surprenant pour les patients qui ne s\'y attendent pas. Il touche la joue, parfois le pourtour des lèvres et le bas du visage, de façon souvent asymétrique.' },
  { period: 'J+3 à J+4', title: 'Stabilisation puis décrue', desc: 'Le gonflement cesse d\'augmenter et commence à diminuer visiblement. La peau peut prendre une teinte jaunâtre ou légèrement violacée (ecchymose) — un phénomène normal lié à la résorption des petits hématomes sous-cutanés.' },
  { period: 'J+7 à J+10', title: 'Disparition quasi complète', desc: 'Dans la grande majorité des cas, le visage a retrouvé son aspect normal en une semaine à dix jours. Une légère fermeté résiduelle des tissus peut persister quelques jours de plus.' },
]

const FAQS = [
  {
    question: "Le gonflement après la pose d'implants est-il normal ?",
    answer: "Oui, c'est une réaction inflammatoire normale et attendue de l'organisme face à l'acte chirurgical, quel que soit le geste réalisé en bouche. Son absence totale serait même plus surprenante que sa présence. Le gonflement n'est pas un signe de complication — il fait partie du processus normal de cicatrisation."
  },
  {
    question: "Combien de temps dure le gonflement ?",
    answer: "Le gonflement augmente progressivement jusqu'à J+2, se stabilise vers J+3-4, puis diminue nettement. Dans la grande majorité des cas, il a quasiment disparu au bout de 7 à 10 jours. Sa durée et son intensité varient selon l'ampleur de l'intervention et la sensibilité individuelle de chacun."
  },
  {
    question: "Le gonflement peut-il être asymétrique ?",
    answer: "Oui, c'est très fréquent et parfaitement normal. Un côté du visage peut gonfler davantage que l'autre, notamment si l'intervention a nécessité plus de gestes d'un côté (extraction, greffe localisée). Cette asymétrie se résorbe avec le reste du gonflement."
  },
  {
    question: "Comment réduire le gonflement après la pose des implants ?",
    answer: "Application de glace (15 minutes toutes les heures) sur la joue durant les 24 à 48 premières heures, tête légèrement surélevée même la nuit, respect scrupuleux du traitement anti-inflammatoire prescrit, et repos avec absence d'effort physique intense pendant 2 à 3 jours. Ces mesures simples réduisent significativement l'intensité et la durée du gonflement."
  },
  {
    question: "Un gonflement qui persiste ou empire est-il grave ?",
    answer: "Un gonflement qui continue d'augmenter après J+4, s'accompagne de fièvre, de rougeur chaude et douloureuse ou d'un écoulement, n'est pas dans l'évolution normale et doit être signalé au cabinet sans attendre. Cela peut indiquer une infection nécessitant un traitement adapté. En dehors de ces signes, le gonflement qui suit son cours normal ne doit pas inquiéter."
  },
  {
    question: "Peut-on prévoir le gonflement dans son emploi du temps ?",
    answer: "Oui, c'est même recommandé. Puisque le pic se situe à J+1-J+2, il est conseillé de prévoir les événements sociaux ou professionnels importants au moins une semaine après l'intervention, le temps que le visage retrouve son aspect habituel."
  },
]

export default function GonflementApresImplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalConditionSchema(
          'Gonflement (œdème) après la pose de bridge complet sur implants',
          'Réaction inflammatoire normale du visage suite à la chirurgie implantaire, atteignant son maximum entre 24 et 72 heures après l\'intervention puis se résorbant progressivement en une à deux semaines.',
          'Application de froid local, anti-inflammatoires prescrits, repos et position surélevée de la tête'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
            { label: 'Gonflement après la pose' }
          ]} />
          <p className="page-eyebrow">À quoi s'attendre</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Le gonflement après la pose d'implants : ce qui est normal
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Beaucoup de patients redoutent de "ressembler à un hamster" pendant plusieurs semaines. En réalité, le gonflement suit une évolution prévisible et se résorbe rapidement. Voici sa chronologie précise et comment le limiter.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Oui, un gonflement du visage est normal et attendu après la pose d'un bridge complet sur implants. Il atteint son maximum entre <strong>J+1 et J+2</strong>, puis diminue progressivement pour disparaître presque totalement en <strong>7 à 10 jours</strong>. Le froid et les anti-inflammatoires permettent de bien le limiter.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi le visage gonfle-t-il ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le gonflement — appelé œdème en terme médical — est la réaction naturelle de l'organisme face à toute agression tissulaire, y compris chirurgicale. Le corps envoie davantage de sang et de liquide vers la zone traitée pour amorcer la cicatrisation : c'est ce surplus de liquide dans les tissus qui provoque le gonflement visible.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce phénomène est particulièrement visible sur le visage car les tissus de la joue et des lèvres sont souples et peu compressés par l'os sous-jacent — contrairement, par exemple, à une intervention sur le bras. Cela ne reflète en rien la gravité ou la qualité de l'intervention : un patient peut avoir un gonflement marqué après une chirurgie parfaitement réussie, et inversement.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Chronologie précise du gonflement</h2>
          <div className="relative mb-10">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-neutral-200 hidden sm:block" />
            <div className="space-y-6">
              {CHRONOLOGY.map((item, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="hidden sm:flex items-start justify-center w-8 relative z-10 mt-1 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-brand-700 ring-4 ring-white" />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="tag mb-2 inline-block">{item.period}</span>
                    <h3 className="font-serif font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Ce qui influence l'intensité du gonflement</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            L'ampleur du gonflement varie selon plusieurs facteurs propres à chaque intervention et à chaque patient : le <strong>nombre d'implants</strong> posés, la réalisation d'<strong>extractions</strong> dans la même séance, une éventuelle <strong>greffe osseuse</strong> associée, et la sensibilité individuelle de chacun face à l'inflammation.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Une intervention plus étendue (par exemple un All-on-6 avec extractions multiples) entraîne généralement un gonflement plus marqué qu'une pose d'implants sur une arcade déjà édentée. Le Dr Attuil vous donne une estimation personnalisée lors de la consultation de bilan, en fonction de votre situation.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Comment limiter le gonflement</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Glace dès le retour à domicile', desc: '15 minutes d\'application sur la joue, 15 minutes de pause, à répéter durant les 24 à 48 premières heures.' },
              { title: 'Tête surélevée', desc: 'Dormir avec un ou deux oreillers supplémentaires les premières nuits limite l\'accumulation de liquide dans les tissus du visage.' },
              { title: 'Anti-inflammatoires prescrits', desc: 'Pris de façon préventive et régulière, sans attendre l\'apparition de la gêne, selon la prescription du Dr Attuil.' },
              { title: 'Repos et absence d\'effort', desc: 'Éviter tout effort physique intense, se pencher en avant ou porter des charges lourdes pendant 2 à 3 jours.' },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{item.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="Vous avez un événement important à prévoir ?"
            subtitle="Le Dr Attuil peut vous aider à planifier la date de l'intervention en conséquence."
          />

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Quand s'inquiéter</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le gonflement suit normalement une courbe simple : il augmente jusqu'à J+2, puis diminue. Certains signes sortent de cette évolution normale et justifient un contact avec le cabinet :
          </p>
          <ul className="space-y-2 text-neutral-700 mb-8 text-sm">
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Un gonflement qui <strong>continue d'augmenter après J+4</strong></li>
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Une zone <strong>rouge, chaude et douloureuse</strong> au toucher</li>
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Une <strong>fièvre</strong> associée supérieure à 38,5°C</li>
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Une difficulté à ouvrir la bouche ou à avaler qui s'aggrave</li>
          </ul>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ces situations restent rares. Le Dr Attuil reste directement joignable après l'intervention pour évaluer toute évolution qui vous semblerait anormale.
          </p>

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
                { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Travailler le lendemain', href: '/travailler-lendemain-pose-implants' },
                { label: 'Parler normalement après les implants', href: '/parler-normalement-apres-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Suites opératoires', href: '/suites-operatoires-implants' },
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
