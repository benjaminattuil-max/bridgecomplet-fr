import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema, generateHowToSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge Complet sur Implants : Définition et Techniques | Dr Attuil' },
  description: 'Le bridge complet sur implants : une prothèse fixe vissée sur 4 à 8 implants pour des dents fixes en une journée. Guide par le Dr Attuil.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-complet-sur-implants` },
  openGraph: {
    title: 'Bridge Complet sur Implants — Guide complet du patient',
    description: 'Tout comprendre sur le bridge complet sur implants : principe, techniques, déroulement, durée de vie, prix. Dr Benjamin Attuil, Paris 11e.',
    url: `${SITE_CONFIG.siteUrl}/bridge-complet-sur-implants`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un bridge complet sur implants ?",
    answer: "Un bridge complet sur implants est une prothèse dentaire fixe et permanente, vissée sur 4 à 8 implants en titane ancrés dans l'os de la mâchoire. Elle remplace l'intégralité des dents d'une arcade — mâchoire supérieure, inférieure ou les deux — sans se retirer. Contrairement à un dentier amovible, ce bridge ne bouge pas, ne se décolle pas et se comporte comme de vraies dents."
  },
  {
    question: "Quelle est la différence entre bridge complet sur implants et dentier ?",
    answer: "Le bridge complet sur implants est une prothèse fixe vissée sur des implants — elle ne se retire pas et fonctionne comme de vraies dents. Un dentier (prothèse amovible) se retire la nuit, peut bouger en mangeant et repose sur les gencives, ce qui entraîne une résorption osseuse progressive. Le bridge sur implants préserve l'os de la mâchoire et offre un confort masticatoire proche de la dentition naturelle."
  },
  {
    question: "Peut-on vraiment avoir des dents fixes le jour même de la pose des implants ?",
    answer: "Oui. Grâce à la technique de mise en charge immédiate, une prothèse provisoire fixe est vissée sur les implants dans les heures qui suivent l'intervention. Le patient repart le soir même avec des dents fixes fonctionnelles. Cette prothèse provisoire est remplacée par la prothèse définitive en zircone 4 à 6 mois plus tard, une fois l'ostéointégration complète."
  },
  {
    question: "Combien d'implants sont nécessaires pour un bridge complet ?",
    answer: "En général, 4 à 8 implants par arcade suffisent pour soutenir un bridge complet sur implants. La technique All-on-4 utilise 4 implants, l'All-on-6 en utilise 6. Le nombre exact est déterminé par le chirurgien après analyse du scanner 3D (CBCT), en fonction de la qualité et de la quantité d'os disponible, et de l'anatomie du patient."
  },
  {
    question: "Combien de temps dure un bridge complet sur implants ?",
    answer: "Avec un entretien rigoureux (hygiène quotidienne, visites de contrôle annuelles), un bridge complet sur implants peut durer 20 à 25 ans, voire toute une vie. Les implants en titane, une fois ostéointégrés, sont définitifs. Seule la prothèse elle-même peut nécessiter un remplacement après 15 à 20 ans d'usure normale."
  },
  {
    question: "Le bridge complet sur implants est-il douloureux à poser ?",
    answer: "La pose d'un bridge complet sur implants est réalisée sous anesthésie locale, ce qui rend l'intervention indolore. Les suites opératoires comportent des douleurs modérées les 48 à 72 premières heures, gérées efficacement par des antalgiques classiques. La plupart des patients décrivent des suites moins douloureuses que ce qu'ils anticipaient."
  },
]

const HOW_TO_STEPS = [
  { name: "Bilan pré-implantaire", text: "Le Dr Benjamin Attuil réalise un scanner 3D (CBCT) et un bilan médical complet pour évaluer la qualité osseuse, planifier la position exacte des implants et établir un plan de traitement personnalisé." },
  { name: "Pose des implants", text: "Sous anesthésie locale (ou sédation consciente sur demande), 4 à 8 implants en titane sont posés dans l'os de la mâchoire en une seule séance. L'intervention dure généralement 2 à 4 heures selon les arcades traitées." },
  { name: "Mise en place de la prothèse provisoire", text: "Dans les heures qui suivent la pose, une prothèse fixe provisoire est vissée sur les implants. Le patient repart le soir même avec des dents fixes fonctionnelles." },
  { name: "Ostéointégration", text: "Pendant 4 à 6 mois, les implants fusionnent naturellement avec l'os (ostéointégration). Durant cette période, le patient porte la prothèse provisoire et peut manger normalement." },
  { name: "Prothèse définitive en zircone", text: "Une fois l'ostéointégration confirmée, la prothèse définitive en zircone — céramique haute résistance, esthétique et durable — est fabriquée sur mesure et vissée à la place de la provisoire." },
]

export default function BridgeCompletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Bridge complet sur implants',
          'Pose de 4 à 8 implants dentaires en titane par arcade permettant de fixer une prothèse complète fixe le jour même de l\'intervention. Technique réalisée par le Dr Benjamin Attuil, implantologiste exclusif à Paris 11e.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateHowToSchema(
          'Comment se déroule un bridge complet sur implants ?',
          'Le bridge complet sur implants se réalise en 5 étapes, de la consultation de bilan à la pose de la prothèse définitive en zircone.',
          HOW_TO_STEPS
        )
      )}} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Bridge complet sur implants' }]} />
          <p className="page-eyebrow">Le traitement de référence</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants : définition, techniques et résultats
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le bridge complet sur implants est la solution la plus durable pour remplacer toutes ses dents par une prothèse fixe et permanente — posée en une seule journée de traitement.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="tag">Activité exclusive depuis 15 ans</span>
            <span className="tag">800+ bridges réalisés</span>
            <span className="tag">Taux de succès 98%</span>
          </div>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Qu'est-ce qu'un bridge complet sur implants ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Un <strong>bridge complet sur implants</strong> est une prothèse dentaire fixe et permanente, vissée directement sur 4 à 8 implants en titane ancrés dans l'os de la mâchoire. Cette prothèse remplace l'intégralité des dents d'une arcade — mâchoire supérieure (maxillaire), mâchoire inférieure (mandibule), ou les deux arcades simultanément.
          </p>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Contrairement à un dentier amovible que l'on retire la nuit, le bridge complet sur implants <strong>ne se retire jamais</strong>. Il est vissé sur les implants, se nettoie comme de vraies dents et offre une mastication proche de la dentition naturelle. Les patients décrivent systématiquement un changement de vie radical dès les premiers jours.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce traitement s'adresse à tout patient adulte présentant un <strong>édentement total</strong> (toutes les dents absentes) ou un <strong>édentement imminent</strong> (dents condamnées devant être extraites). La grande majorité des patients sont de bons candidats, y compris ceux présentant une perte osseuse importante.
          </p>

          <CTABox variant="inline"
            title="Êtes-vous candidat au bridge complet sur implants ?"
            subtitle="Un scanner 3D suffit pour le savoir — consultation disponible au cabinet Paris 11e."
          />

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les 5 étapes du traitement</h2>
          <div className="space-y-4 mb-10">
            {HOW_TO_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4 p-5 border border-neutral-200 rounded-sm">
                <div className="w-9 h-9 rounded-full bg-brand-700 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-serif font-semibold text-neutral-900 mb-1">{step.name}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Les différentes techniques de bridge complet</h2>
          <p className="text-neutral-700 mb-6 leading-relaxed">
            Il n'existe pas une seule technique de bridge complet sur implants. Le nombre d'implants et leur positionnement sont adaptés à chaque patient selon son anatomie, la qualité de son os et son plan de traitement.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 my-6">
            {[
              {
                name: 'All-on-4',
                desc: '4 implants par arcade, dont 2 inclinés à l\'arrière pour éviter le sinus. Technique idéale pour les patients avec une bonne qualité osseuse antérieure.',
                href: '/all-on-4',
                detail: '4 implants / arcade'
              },
              {
                name: 'All-on-6',
                desc: '6 implants par arcade pour une répartition des forces plus équilibrée. Recommandée dans la majorité des cas, notamment quand l\'os postérieur est suffisant.',
                href: '/all-on-6',
                detail: '6 implants / arcade'
              },
              {
                name: 'All-on-X',
                desc: 'Nombre d\'implants entièrement personnalisé (4 à 8) selon l\'anatomie du patient. Solution sur-mesure pour les cas complexes ou les patients avec peu d\'os.',
                href: '/all-on-x',
                detail: '4 à 8 implants / arcade'
              },
            ].map((tech) => (
              <Link key={tech.name} href={tech.href}
                className="border border-neutral-200 rounded-sm p-5 hover:border-brand-400 hover:shadow-sm transition-all group block">
                <span className="tag mb-3 inline-block">{tech.detail}</span>
                <p className="font-serif font-bold text-lg text-brand-800 mb-2 group-hover:text-brand-600">{tech.name}</p>
                <p className="text-sm text-neutral-600 mb-3 leading-relaxed">{tech.desc}</p>
                <span className="text-xs font-semibold text-brand-600">Tout savoir sur le {tech.name} →</span>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Quels sont les avantages du bridge complet sur implants ?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Prothèse fixe et permanente', desc: 'Le bridge ne se retire jamais. Il est vissé sur les implants et fait partie de vous.' },
              { title: 'Mastication naturelle', desc: 'Vous pouvez manger tous les aliments — viande, pain croustillant, pommes. La force de mastication est proche de celle de vraies dents.' },
              { title: 'Préservation de l\'os', desc: 'Les implants stimulent l\'os de la mâchoire et empêchent la résorption osseuse qui survient inévitablement avec un dentier.' },
              { title: 'Esthétique irréprochable', desc: 'La prothèse définitive en zircone imite parfaitement l\'aspect des vraies dents — forme, couleur, transparence.' },
              { title: 'Traitement en une journée', desc: 'Grâce à la mise en charge immédiate, vous repartez avec des dents fixes le soir même de l\'intervention.' },
              { title: 'Durabilité exceptionnelle', desc: 'Avec un entretien correct, un bridge complet sur implants peut durer 20 à 25 ans, voire toute une vie.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 bg-neutral-50 rounded-sm">
                <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1">{item.title}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pour qui est-ce indiqué ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le bridge complet sur implants est indiqué pour tout patient adulte qui :
          </p>
          <ul className="space-y-2 mb-6 ml-4">
            {[
              'Est totalement édenté (toutes les dents absentes)',
              'Présente des dents condamnées devant être extraites',
              'Porte un dentier complet qu\'il supporte mal',
              'Souffre d\'une parodontite sévère avec mobilité dentaire importante',
              'A cassé ses dents à répétition et cherche une solution durable',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-neutral-700 text-sm">
                <span className="text-gold-500 font-bold mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La très grande majorité des patients sont de bons candidats. Même en cas de <Link href="/peu-os-implants-possible" className="text-brand-600 hover:underline">volume osseux insuffisant</Link>, des solutions existent : <Link href="/greffe-osseuse-bridge-implants" className="text-brand-600 hover:underline">greffe osseuse</Link>, <Link href="/implants-zygomatiques" className="text-brand-600 hover:underline">implants zygomatiques</Link> ou <Link href="/implants-pterygoidiens" className="text-brand-600 hover:underline">ptérygoïdiens</Link>. Seules quelques <Link href="/contre-indications-implants-dentaires" className="text-brand-600 hover:underline">contre-indications médicales strictes</Link> peuvent remettre en question ce traitement.
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
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Approfondir le sujet</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All-on-4 : la technique', href: '/all-on-4' },
                { label: 'All-on-6 : la technique', href: '/all-on-6' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Prix et financement', href: '/prix-bridge-complet-implants' },
                { label: 'Durée de vie', href: '/duree-vie-bridge-implants' },
                { label: 'Dentier vs bridge implant', href: '/dentier-vs-bridge-implants' },
                { label: 'Cas cliniques', href: '/temoignages-patients-bridge-implants' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="tag hover:bg-brand-100 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <CTABox
            title="Prenez rendez-vous pour un bilan implantaire"
            subtitle={`Cabinet du Dr Benjamin Attuil — ${SITE_CONFIG.address}, ${SITE_CONFIG.arrondissement}`}
          />
        </div>
      </article>
    </>
  )
}
