import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Peut-on Travailler le Lendemain de la Pose d\'Implants ? | Dr Attuil' },
  description: 'Faut-il prévoir un arrêt de travail après la pose d\'un bridge complet sur implants ? Le Dr Attuil détaille ses recommandations selon votre profession.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/travailler-lendemain-pose-implants` },
  openGraph: {
    title: 'Reprendre le travail après la pose d\'implants : ce qu\'il faut prévoir',
    description: 'Combien de jours d\'arrêt prévoir selon votre métier après la pose d\'un bridge complet sur implants ?',
    url: `${SITE_CONFIG.siteUrl}/travailler-lendemain-pose-implants`,
  },
}

const PROFILES = [
  {
    type: 'Travail de bureau / télétravail',
    delay: 'J+1 à J+2',
    color: 'brand',
    desc: 'La reprise est généralement possible dès le lendemain ou le surlendemain. Le gonflement étant à son maximum à J+1-J+2, prévoyez plutôt un retour en visioconférence ou en télétravail ces jours-là si l\'aspect du visage vous préoccupe pour des raisons professionnelles.',
  },
  {
    type: 'Métier avec contact public intense (vente, accueil, enseignement)',
    delay: 'J+3 à J+5',
    color: 'gold',
    desc: 'Le gonflement et une possible gêne pour bien articuler peuvent être visibles ou gênants dans un métier où la parole et le visage sont très sollicités face à un public. Un délai un peu plus long est recommandé pour reprendre sereinement.',
  },
  {
    type: 'Métier physique ou manuel (BTP, port de charges, sport)',
    delay: '3 à 7 jours',
    color: 'gold',
    desc: 'L\'effort physique intense augmente la pression sanguine et peut aggraver le saignement ou le gonflement post-opératoire. Un arrêt de travail de plusieurs jours est recommandé, la durée exacte dépendant de l\'intensité de l\'effort demandé par votre métier.',
  },
  {
    type: 'Conduite professionnelle',
    delay: 'Variable',
    color: 'gold',
    desc: 'Si une sédation consciente a été utilisée, la conduite est interdite pendant les 12 heures suivant l\'intervention. En dehors de cette période, la conduite est possible dès que vous vous sentez en pleine possession de vos moyens, généralement après 24 à 48 heures.',
  },
]

const FAQS = [
  {
    question: "Peut-on travailler le lendemain de la pose d'un bridge complet sur implants ?",
    answer: "Dans la majorité des cas, oui, pour un travail sédentaire de bureau. Les 48 premières heures comportent une gêne modérée et un gonflement, généralement bien gérés par les antalgiques prescrits et ne constituant pas un obstacle à un travail non physique. Pour un métier physique ou très exposé au public, un délai de quelques jours supplémentaires est préférable."
  },
  {
    question: "Le Dr Attuil délivre-t-il un arrêt de travail ?",
    answer: "Oui, un arrêt de travail peut être délivré si votre situation professionnelle le justifie. Sa durée est adaptée à votre métier et à l'ampleur de l'intervention : généralement 2 à 3 jours pour un métier sédentaire si nécessaire, jusqu'à une semaine pour les métiers physiques ou à forte exposition. Cette question est abordée lors de la consultation de bilan."
  },
  {
    question: "Faut-il prévenir son entourage professionnel avant l'intervention ?",
    answer: "C'est recommandé, notamment si votre métier implique un contact visuel fréquent avec le public ou des collègues, en raison du gonflement possible durant les premiers jours. Beaucoup de patients choisissent de planifier l'intervention en début de semaine ou juste avant un week-end prolongé pour optimiser leur récupération avant la reprise."
  },
  {
    question: "Peut-on parler et prendre des réunions dès le lendemain ?",
    answer: "Une légère gêne d'élocution est possible les premiers jours, le temps que la langue s'adapte à la prothèse (voir notre page dédiée à ce sujet). Pour des réunions ou appels importants, il est préférable de prévoir quelques jours de battement, ou de privilégier l'écrit durant les 48 premières heures si votre activité le permet."
  },
  {
    question: "Combien de jours d'arrêt sont pris en moyenne par les patients ?",
    answer: "En pratique, la majorité des patients du Dr Attuil avec un travail de bureau reprennent entre J+1 et J+3. Les patients avec un métier physique ou très exposé au public prennent en moyenne entre 3 et 7 jours. Chaque situation est différente et évaluée individuellement lors du bilan pré-opératoire."
  },
]

export default function TravaillerLendemainPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
            { label: 'Travailler le lendemain' }
          ]} />
          <p className="page-eyebrow">Organiser sa reprise</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Peut-on travailler le lendemain de la pose d'implants ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            La réponse dépend surtout de votre métier. Voici des recommandations concrètes selon votre situation professionnelle, pour organiser sereinement votre intervention et votre reprise.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Pour un <strong>travail sédentaire</strong>, une reprise dès le <strong>lendemain ou le surlendemain</strong> est généralement possible. Pour un métier <strong>physique</strong> ou avec un <strong>contact public intense</strong>, un arrêt de <strong>3 à 7 jours</strong> est recommandé, le temps que le gonflement se résorbe et que l'élocution se stabilise.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">Ce qu'il faut prévoir selon votre métier</h2>
          <div className="space-y-4 mb-10">
            {PROFILES.map((p, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6 flex flex-col sm:flex-row gap-4 sm:items-start">
                <div className="sm:w-40 flex-shrink-0">
                  <span className={`tag inline-block ${p.color === 'gold' ? 'bg-gold-100 text-gold-600' : ''}`}>{p.delay}</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 mb-2 text-sm">{p.type}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Ce que vous ressentirez pendant votre reprise</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Les premiers jours de reprise s'accompagnent le plus souvent d'une <Link href="/douleur-bridge-implants" className="text-brand-600 hover:underline">gêne modérée</Link>, contrôlée par les antalgiques, et d'un <Link href="/gonflement-apres-implants" className="text-brand-600 hover:underline">gonflement</Link> qui atteint son maximum à J+1-J+2. Une légère difficulté à bien articuler certains sons peut aussi se faire sentir, le temps que la langue s'adapte à la nouvelle prothèse.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ces éléments n'empêchent généralement pas un travail sédentaire, mais méritent d'être anticipés si votre activité implique une forte exposition au public, de nombreuses prises de parole, ou un effort physique.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Bien préparer sa reprise</h2>
          <ul className="space-y-2 text-neutral-700 mb-8 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Planifier l'intervention en <strong>début de semaine</strong> ou avant un week-end prolongé pour bénéficier de plus de temps de récupération</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Prévoir des <strong>repas mous</strong> faciles à préparer ou emporter au bureau les premiers jours</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Éviter de programmer des <strong>réunions ou rendez-vous critiques</strong> le lendemain immédiat</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Garder les <strong>antalgiques</strong> prescrits à portée de main sur le lieu de travail</li>
          </ul>

          <CTABox variant="inline"
            title="Besoin d'un arrêt de travail ?"
            subtitle="Le Dr Attuil adapte sa durée à votre métier lors de la consultation de bilan."
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
                { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Gonflement après les implants', href: '/gonflement-apres-implants' },
                { label: 'Parler normalement après les implants', href: '/parler-normalement-apres-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Suites opératoires', href: '/suites-operatoires-implants' },
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
