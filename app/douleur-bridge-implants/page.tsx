import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalConditionSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge sur Implants : Est-ce Douloureux ? | Dr Attuil' },
  description: 'La pose d\'un bridge complet sur implants fait-elle mal ? Le Dr Attuil détaille ce que l\'on ressent pendant et après, et comment la douleur est gérée.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/douleur-bridge-implants` },
  openGraph: {
    title: 'Est-ce douloureux ? La vérité sur la douleur du bridge complet sur implants',
    description: 'Ce que l\'on ressent réellement pendant et après la pose d\'un bridge complet sur implants, heure par heure et jour par jour.',
    url: `${SITE_CONFIG.siteUrl}/douleur-bridge-implants`,
  },
}

const TIMELINE = [
  { period: 'Pendant l\'intervention', level: 0, label: 'Aucune douleur', desc: 'L\'anesthésie locale (ou la sédation consciente) élimine toute sensation douloureuse. Vous pouvez ressentir des pressions ou des vibrations, jamais de douleur.' },
  { period: 'Jour de la pose (soir)', level: 2, label: 'Gêne légère à modérée', desc: 'À la levée de l\'anesthésie, une gêne apparaît progressivement. Elle est comparable à celle d\'une extraction dentaire. Les antalgiques prescrits, pris dès le retour à domicile, la contrôlent efficacement.' },
  { period: 'J+1 à J+2', level: 3, label: 'Pic de douleur modérée', desc: 'C\'est le moment le plus inconfortable, en général comparable à une rage de dents bien contrôlée par les médicaments — jamais une douleur incontrôlable. Le gonflement est également à son maximum durant cette période.' },
  { period: 'J+3 à J+5', level: 2, label: 'Diminution nette', desc: 'La douleur régresse rapidement. La plupart des patients réduisent ou arrêtent les antalgiques à ce stade. Une sensibilité résiduelle des gencives reste normale.' },
  { period: 'J+6 et au-delà', level: 1, label: 'Sensibilité résiduelle', desc: 'Une gêne légère peut persister lors de la mastication ou du brossage pendant 1 à 2 semaines, le temps que les tissus finissent de cicatriser. Elle ne nécessite généralement plus de médicament.' },
]

const FAQS = [
  {
    question: "La pose d'un bridge complet sur implants fait-elle mal ?",
    answer: "Non, pas pendant l'intervention. Elle se déroule sous anesthésie locale, éventuellement complétée par une sédation consciente pour les patients anxieux. Vous ne ressentez aucune douleur pendant la pose des implants, seulement des pressions ou vibrations. La gêne apparaît après, à la levée de l'anesthésie, et reste contrôlée par les antalgiques prescrits."
  },
  {
    question: "Est-ce plus douloureux qu'une extraction dentaire ?",
    answer: "Non. La grande majorité des patients décrivent une douleur post-opératoire comparable, voire inférieure, à celle d'une extraction de dent de sagesse. La pose d'implants est un geste chirurgical précis et peu traumatisant pour les tissus environnants, surtout lorsqu'elle est guidée numériquement."
  },
  {
    question: "Combien de temps dure la douleur après la pose ?",
    answer: "Le pic de douleur se situe généralement entre le 1er et le 2e jour après l'intervention. Elle diminue ensuite nettement à partir du 3e jour. Une sensibilité résiduelle légère peut persister 1 à 2 semaines, sans nécessiter de médicament au-delà de la première semaine dans la plupart des cas."
  },
  {
    question: "Quels médicaments sont prescrits contre la douleur ?",
    answer: "Le Dr Attuil prescrit systématiquement des antalgiques (paracétamol, parfois associé à un antalgique de palier 2) et des anti-inflammatoires pour les 3 à 5 premiers jours, ainsi qu'un bain de bouche antiseptique. Ce protocole est adapté à votre profil médical et à vos allergies éventuelles lors de la consultation de bilan."
  },
  {
    question: "Que faire si la douleur augmente au lieu de diminuer ?",
    answer: "Une douleur qui augmente après le 3e ou 4e jour, ou qui s'accompagne de fièvre, n'est pas normale et doit être signalée sans délai au cabinet. Cela peut indiquer une infection ou une complication qu'il faut traiter rapidement. Le Dr Attuil reste joignable directement après l'intervention pour ce type de situation."
  },
  {
    question: "La douleur est-elle la même pour tous les patients ?",
    answer: "Le seuil de tolérance à la douleur varie d'une personne à l'autre, tout comme l'ampleur de l'intervention (nombre d'implants, extractions associées, greffe éventuelle). C'est pourquoi le protocole antalgique est individualisé. Dans tous les cas, l'objectif du Dr Attuil est que vous ne ressentiez jamais une douleur non contrôlée."
  },
]

export default function DouleurBridgeImplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalConditionSchema(
          'Douleur post-opératoire après pose de bridge complet sur implants',
          'Inconfort et douleur ressentis après la pose chirurgicale d\'un bridge complet sur implants dentaires, généralement modérés et concentrés sur les 48 premières heures.',
          'Protocole antalgique et anti-inflammatoire prescrit, associé à des mesures locales (glace, repos)'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
            { label: 'Est-ce douloureux ?' }
          ]} />
          <p className="page-eyebrow">La peur la plus fréquente</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants : est-ce douloureux ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            C'est la question que pose presque chaque patient en consultation. La réponse honnête : non pendant l'intervention, et une gêne modérée et bien contrôlée pendant les jours qui suivent. Voici ce que l'on ressent réellement, étape par étape.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La pose des implants elle-même <strong>n'est pas douloureuse</strong> : elle se déroule sous anesthésie locale, complétée si besoin par une sédation consciente. La gêne survient après l'intervention, avec un <strong>pic modéré entre J+1 et J+2</strong>, contrôlé par les antalgiques prescrits. Elle diminue nettement dès le 3e jour.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pendant l'intervention : pourquoi vous ne sentirez rien</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La pose d'implants est réalisée sous <strong>anesthésie locale</strong>, la même technique que pour un soin dentaire classique, appliquée progressivement pour un confort total. Les terminaisons nerveuses de la zone traitée sont totalement endormies : vous ne ressentez aucune douleur pendant toute la durée de l'intervention.
          </p>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Pour les patients particulièrement anxieux, une <Link href="/sedation-consciente-implants" className="text-brand-600 hover:underline">sédation consciente</Link> peut être proposée : elle procure un état de relaxation profonde tout en gardant le patient éveillé et coopérant. Beaucoup de patients sédatés n'ont ensuite aucun souvenir de l'intervention.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce que vous pouvez ressentir pendant la pose : des <strong>pressions</strong>, des <strong>vibrations</strong> liées aux instruments rotatifs, parfois un inconfort de position lié au fait de garder la bouche ouverte longtemps. Rien de douloureux. Si la moindre sensation vous incommode, signalez-le : l'anesthésie peut être complétée immédiatement.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Après l'intervention : la chronologie réelle de la douleur</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La gêne post-opératoire suit un schéma prévisible. Voici comment elle évolue jour après jour pour la grande majorité des patients :
          </p>
          <div className="space-y-4 mb-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="sm:w-48 flex-shrink-0">
                  <span className="tag mb-2 inline-block">{item.period}</span>
                  <div className="flex gap-1 mt-2" aria-hidden="true">
                    {[0, 1, 2, 3].map((n) => (
                      <span key={n} className={`h-1.5 w-6 rounded-full ${n < item.level ? 'bg-gold-500' : 'bg-neutral-200'}`} />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-neutral-600 mt-2">{item.label}</p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Comment la douleur est gérée</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Un protocole antalgique est systématiquement prescrit avant même votre sortie du cabinet : <strong>antalgiques</strong>, <strong>anti-inflammatoires</strong> et <strong>bain de bouche antiseptique</strong>, à prendre de façon préventive dès le retour à domicile — sans attendre l'apparition de la douleur. Le froid (poche de glace sur la joue, 15 minutes toutes les heures) complète efficacement ce protocole durant les 48 premières heures.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce protocole est ajusté à votre profil médical, vos traitements en cours et vos éventuelles allergies lors de la consultation de bilan. L'objectif du Dr Attuil est simple : que vous ne traversiez jamais un moment de douleur non maîtrisée.
          </p>

          <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-neutral-800 mb-3">Comparaison utile</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La majorité des patients qui ont déjà vécu une extraction de dent de sagesse ou une extraction dentaire classique décrivent la douleur post-implantaire comme <strong>équivalente, voire inférieure</strong>. La chirurgie implantaire est un geste précis, souvent moins traumatisant pour les tissus mous qu'une extraction complexe.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Quand s'inquiéter et contacter le cabinet</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Certains signaux ne sont pas normaux et doivent être signalés sans attendre :
          </p>
          <ul className="space-y-2 text-neutral-700 mb-8 text-sm">
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Une douleur qui <strong>augmente</strong> au lieu de diminuer après le 3e-4e jour</li>
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Une <strong>fièvre</strong> supérieure à 38,5°C</li>
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Un gonflement qui continue de croître après J+3 (voir <Link href="/gonflement-apres-implants" className="text-brand-600 hover:underline">gonflement après implants</Link>)</li>
            <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">•</span>Une douleur non soulagée par les antalgiques prescrits</li>
          </ul>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le Dr Attuil reste directement joignable après l'intervention pour ce type de situation, et peut vous recevoir en urgence si nécessaire.
          </p>

          <CTABox variant="inline"
            title="Encore des doutes sur la douleur ?"
            subtitle="Le Dr Attuil vous explique le protocole exact adapté à votre cas lors de la consultation."
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
                { label: 'Gonflement après les implants', href: '/gonflement-apres-implants' },
                { label: 'Travailler le lendemain', href: '/travailler-lendemain-pose-implants' },
                { label: 'Parler normalement après les implants', href: '/parler-normalement-apres-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
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
