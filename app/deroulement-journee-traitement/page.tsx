import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateHowToSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Déroulement de la Journée de Traitement | Dr Attuil' },
  description: 'Comment se passe la journée de pose d\'un bridge complet sur implants ? Le Dr Attuil détaille chaque étape, heure par heure.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/deroulement-journee-traitement` },
  openGraph: {
    title: 'La journée de pose de votre bridge complet — étape par étape',
    description: 'Tout savoir sur le déroulement de la journée de traitement : arrivée, anesthésie, pose des implants, prothèse provisoire, retour à domicile.',
    url: `${SITE_CONFIG.siteUrl}/deroulement-journee-traitement`,
  },
}

const STEPS = [
  {
    time: '8h30',
    title: 'Accueil et préparation',
    desc: 'Vous arrivez à jeun au cabinet. L\'équipe vous accueille, vérifie votre bilan pré-anesthésique et répond à vos dernières questions. Si vous avez opté pour la sédation consciente, le médicament anxiolytique est administré à ce moment. Vous pouvez être accompagné d\'un proche qui pourra vous ramener le soir.',
  },
  {
    time: '9h00',
    title: 'Anesthésie locale',
    desc: 'L\'anesthésie locale est réalisée progressivement pour garantir un confort total. Vous ne ressentez aucune douleur pendant toute l\'intervention. Si vous avez choisi la sédation consciente, vous êtes dans un état de relaxation profonde tout en restant éveillé et en contact avec l\'équipe.',
  },
  {
    time: '9h30',
    title: 'Extractions dentaires (si nécessaire)',
    desc: 'Si des dents résiduelles doivent être extraites, cette étape est réalisée sous la même anesthésie, avant la pose des implants. L\'extraction et l\'implantation dans la même séance — technique dite "extraction-implantation immédiate" — est le protocole privilégié quand c\'est possible car il réduit la durée totale du traitement.',
  },
  {
    time: '10h00',
    title: 'Pose des implants',
    desc: 'C\'est le cœur de l\'intervention. Les 4 à 8 implants en titane sont posés avec précision dans l\'os de la mâchoire, aux positions planifiées lors du bilan scanner. Grâce au guide chirurgical numérique, la pose est rapide, précise et minimalement invasive. Vous ne ressentez aucune douleur, seulement des pressions légères.',
  },
  {
    time: '12h00',
    title: 'Pause — contrôle radiographique',
    desc: 'Un contrôle radiographique vérifie la position des implants. Vous vous reposez pendant que l\'équipe prépare votre prothèse provisoire. C\'est le bon moment pour manger quelques aliments liquides ou très mous si vous le souhaitez.',
  },
  {
    time: '13h00',
    title: 'Vissage de la prothèse provisoire',
    desc: 'La prothèse provisoire fixe — fabriquée à partir des empreintes prises lors de la consultation de bilan — est ajustée, adaptée et vissée sur les implants. Cette étape prend 1 à 2 heures. Le résultat est vérifié : occlusion, esthétique, phonétique. Des retouches sont réalisées si nécessaire.',
  },
  {
    time: '15h00',
    title: 'Consultation post-opératoire et consignes',
    desc: 'Le Dr Benjamin Attuil vous présente votre nouveau sourire, répond à vos questions et vous remet une ordonnance (antalgiques, anti-inflammatoires, bain de bouche). Il vous explique les consignes d\'hygiène et d\'alimentation pour les premières semaines. Vous avez son contact direct en cas de question.',
  },
  {
    time: '15h30',
    title: 'Retour à domicile — avec vos nouvelles dents',
    desc: 'Vous repartez avec des dents fixes et fonctionnelles. La plupart des patients décrivent ce moment comme irréel — quitter le cabinet avec un sourire qu\'ils n\'avaient plus depuis des années. Il est recommandé de vous faire raccompagner si vous avez eu une sédation consciente.',
  },
]

const FAQS = [
  {
    question: "Faut-il être à jeun pour la pose d'un bridge complet sur implants ?",
    answer: "Oui, il est recommandé d'être à jeun depuis 6 heures avant l'intervention si une sédation consciente est prévue. En cas d'anesthésie locale seule, un léger repas 2 heures avant est toléré. Le Dr Attuil vous donnera des instructions personnalisées lors de la consultation pré-opératoire."
  },
  {
    question: "Peut-on venir seul le jour de la pose ?",
    answer: "Si vous n'avez pas de sédation consciente, vous pouvez venir seul et repartir seul. Si vous avez une sédation consciente, vous devez impérativement être accompagné car vous ne pouvez pas conduire dans les 12 heures suivant la prise du médicament. Dans tous les cas, il est conseillé d'être accompagné pour ce jour important."
  },
  {
    question: "Que ressent-on pendant la pose des implants ?",
    answer: "Sous anesthésie locale, vous ne ressentez aucune douleur pendant la pose. Des sensations de pression, de vibrations légères liées aux instruments rotatifs et d'inconfort de position peuvent être perçues, mais rien de douloureux. Si une sensation vous incommode, signalez-la immédiatement : l'anesthésie peut être complétée à tout moment."
  },
  {
    question: "Peut-on travailler le lendemain de la pose ?",
    answer: "Dans la majorité des cas, oui — pour un travail de bureau ou sédentaire. Les 48 premières heures comportent des douleurs modérées et un léger gonflement, bien gérés par les antalgiques prescrits. Un arrêt de travail de 2 à 3 jours est recommandé pour les professions physiques ou exposées. Chaque cas est différent et le Dr Attuil vous donnera une recommandation personnalisée."
  },
  {
    question: "La prothèse provisoire posée le jour même est-elle fonctionnelle ?",
    answer: "Oui. La prothèse provisoire fixe est conçue pour être immédiatement fonctionnelle : vous pouvez parler, sourire et manger des aliments mous dès le soir même. Une alimentation exclusivement molle est recommandée pendant les 3 premiers mois pour ne pas solliciter les implants pendant l'ostéointégration. La prothèse définitive en zircone, posée 4 à 6 mois plus tard, permet de manger tous les aliments."
  },
]

export default function DeroulementJourneePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateHowToSchema(
          'Déroulement de la journée de pose d\'un bridge complet sur implants',
          'Description heure par heure de la journée de traitement du bridge complet sur implants : de l\'arrivée au cabinet jusqu\'au retour à domicile avec des dents fixes.',
          STEPS.map(s => ({ name: `${s.time} — ${s.title}`, text: s.desc }))
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Déroulement de la journée' }
          ]} />
          <p className="page-eyebrow">Le jour J — heure par heure</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Comment se passe la journée de pose du bridge complet ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            L'une des grandes angoisses des patients est de ne pas savoir ce qui les attend. Voici le déroulement précis et honnête de cette journée — heure par heure — pour que vous arriviez au cabinet en sachant exactement ce qui va se passer.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Ce que cette page vous apprend</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La journée de pose d'un bridge complet sur implants dure généralement <strong>6 à 8 heures</strong>. Elle comprend la pose des implants, l'ajustement de la prothèse provisoire et une consultation post-opératoire. Vous repartez avec des dents fixes le soir même. Voici comment cela se passe concrètement au cabinet du Dr Benjamin Attuil.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">La journée, étape par étape</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-neutral-200 hidden sm:block" />
            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-2 py-1 rounded inline-block">
                      {step.time}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-start justify-center w-4 relative z-10 mt-1">
                    <div className="w-3 h-3 rounded-full bg-brand-700 ring-4 ring-white flex-shrink-0" />
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="font-serif font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CTABox variant="inline"
            title="Des questions sur le déroulement ?"
            subtitle="Le Dr Attuil répond à toutes vos questions lors de la consultation de bilan."
          />

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Les jours suivants</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Les <strong>48 à 72 premières heures</strong> comportent des douleurs modérées et un gonflement du visage, particulièrement le lendemain et le surlendemain. Ces effets sont normaux et attendus — ils témoignent que la cicatrisation est en cours. Les antalgiques prescrits permettent de les gérer confortablement.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            À partir du <strong>4e jour</strong>, la grande majorité des patients reprennent une vie normale. Les douleurs diminuent, le gonflement se résorbe et la prothèse provisoire devient de plus en plus confortable à mesure que vous vous habituez à vos nouvelles dents.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { period: 'J+1 à J+3', title: 'Repos recommandé', desc: 'Douleurs modérées gérées par antalgiques. Gonflement maximal à J+2. Alimentation liquide et molle exclusivement.' },
              { period: 'J+4 à J+7', title: 'Reprise progressive', desc: 'Diminution des douleurs et du gonflement. Reprise du travail sédentaire possible. Alimentation molle.' },
              { period: 'Semaine 2+', title: 'Vie normale', desc: 'Douleurs résiduelles légères ou absentes. Alimentation molle pendant 3 mois. Hygiène avec les brossettes adaptées.' },
            ].map((item) => (
              <div key={item.period} className="border border-neutral-200 rounded-sm p-5">
                <span className="tag mb-3 inline-block">{item.period}</span>
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{item.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

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
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Puis-je travailler le lendemain ?', href: '/travailler-lendemain-pose-implants' },
                { label: 'Alimentation après la pose', href: '/alimentation-apres-bridge-implants' },
                { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
                { label: 'Suites opératoires', href: '/suites-operatoires-implants' },
                { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
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
