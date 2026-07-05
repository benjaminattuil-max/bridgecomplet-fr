import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Peur des Implants Dentaires : Toutes les Réponses | Dr Attuil' },
  description: 'Douleur, gonflement, parler, travail, échec d\'implant... Le Dr Attuil répond sans détour à toutes les appréhensions avant un bridge complet sur implants.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/peur-implants-dentaires` },
  openGraph: {
    title: 'Peur des implants dentaires ? Toutes les réponses, sans tabou',
    description: 'Un guide honnête pour répondre à toutes les craintes avant la pose d\'un bridge complet sur implants : douleur, gonflement, parole, travail, échec.',
    url: `${SITE_CONFIG.siteUrl}/peur-implants-dentaires`,
  },
}

const FEARS = [
  {
    href: '/douleur-bridge-implants',
    title: 'La douleur',
    question: 'Est-ce que ça fait mal ?',
    answer: 'Aucune douleur pendant l\'intervention grâce à l\'anesthésie. Une gêne modérée les 2 premiers jours, bien contrôlée par les antalgiques.',
  },
  {
    href: '/gonflement-apres-implants',
    title: 'Le gonflement',
    question: 'Vais-je avoir le visage déformé ?',
    answer: 'Un gonflement normal, maximal à J+1-J+2, qui disparaît presque totalement en 7 à 10 jours.',
  },
  {
    href: '/parler-normalement-apres-implants',
    title: 'Parler normalement',
    question: 'Vais-je zozoter ou parler bizarrement ?',
    answer: 'Une courte période d\'adaptation de quelques jours à 2-3 semaines, raccourcie par des exercices simples.',
  },
  {
    href: '/travailler-lendemain-pose-implants',
    title: 'Reprendre le travail',
    question: 'Combien de jours d\'arrêt prévoir ?',
    answer: 'De J+1 pour un métier de bureau à une semaine pour un métier physique ou très exposé au public.',
  },
  {
    href: '/echec-implant-que-faire',
    title: 'L\'échec d\'un implant',
    question: 'Et si ça ne prend pas ?',
    answer: 'Un risque rare (2 à 5%) et, en cas d\'échec isolé, une prothèse qui reste généralement stable grâce aux autres implants.',
  },
  {
    href: '/taux-succes-implants-dentaires',
    title: 'Le taux de succès',
    question: 'Quelles sont mes vraies chances de réussite ?',
    answer: '95 à 98% de succès à 10 ans dans les études cliniques, un taux comparable à l\'expérience personnelle du Dr Attuil.',
  },
]

const FAQS = [
  {
    question: "Est-il normal d'avoir peur avant la pose d'implants dentaires ?",
    answer: "Oui, tout à fait. La peur des implants dentaires est l'une des appréhensions les plus fréquentes exprimées en consultation, qu'il s'agisse de la douleur, de l'aspect du visage après l'intervention ou du risque d'échec. Cette peur est légitime et mérite des réponses précises plutôt que des formules rassurantes vagues — c'est l'objet de cette page et des pages détaillées qu'elle regroupe."
  },
  {
    question: "Quelle est la plus grande crainte des patients avant un bridge complet sur implants ?",
    answer: "La douleur arrive en tête, suivie de près par la peur de l'échec de l'implant et celle de ne plus pouvoir manger ou parler normalement. Dans la pratique du Dr Attuil, ces craintes sont presque toujours plus importantes que la réalité vécue par les patients après l'intervention."
  },
  {
    question: "Comment le Dr Attuil aide-t-il les patients anxieux ?",
    answer: "Un temps dédié aux questions et aux craintes est systématiquement prévu lors de la consultation de bilan. Pour les patients particulièrement anxieux, une sédation consciente peut être proposée le jour de l'intervention afin de vivre ce moment dans un état de relaxation profonde."
  },
]

export default function PeurImplantsDentairesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires' }
          ]} />
          <p className="page-eyebrow">Sans tabou, sans langue de bois</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Peur des implants dentaires ? Toutes les réponses
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Douleur, gonflement, capacité à parler ou travailler, risque d'échec — presque tous les patients se posent ces questions avant de franchir le pas. Le Dr Benjamin Attuil y répond avec précision, sans minimiser ni dramatiser.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Pourquoi cette page existe</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              La peur est une réaction normale face à une intervention chirurgicale, quelle qu'elle soit. Plutôt que des formules rassurantes génériques, cette page rassemble des <strong>réponses factuelles et détaillées</strong> à chacune des grandes craintes exprimées par les patients avant la pose d'un bridge complet sur implants.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">Les 6 craintes les plus fréquentes</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {FEARS.map((fear) => (
              <Link
                key={fear.href}
                href={fear.href}
                className="block border border-neutral-200 rounded-sm p-6 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <span className="tag mb-3 inline-block">{fear.title}</span>
                <h3 className="font-serif font-semibold text-neutral-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {fear.question}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-3">{fear.answer}</p>
                <span className="text-sm font-semibold text-brand-600">Lire la réponse complète →</span>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi ces craintes sont presque toujours plus grandes que la réalité</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Dans l'expérience du Dr Benjamin Attuil, la quasi-totalité des patients rapportent, après leur intervention, que <strong>l'appréhension ressentie avant était plus intense que ce qu'ils ont réellement vécu</strong>. Ce décalage s'explique en grande partie par le manque d'information précise : sans savoir exactement à quoi s'attendre, l'imagination comble le vide, souvent de façon disproportionnée.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            C'est pour cette raison que chaque page de cette rubrique donne une <strong>chronologie précise</strong> — heure par heure ou jour par jour — plutôt que des généralités. Savoir exactement ce qui va se passer, et quand, est le meilleur antidote à l'anxiété.
          </p>

          <CTABox variant="inline"
            title="Une crainte qui n'est pas listée ici ?"
            subtitle="La consultation de bilan est aussi l'occasion de poser toutes vos questions, sans exception."
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
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
                { label: 'Suites opératoires', href: '/suites-operatoires-implants' },
                { label: 'Témoignages patients', href: '/temoignages-patients-bridge-implants' },
                { label: 'FAQ complète', href: '/faq-bridge-complet-implants' },
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
