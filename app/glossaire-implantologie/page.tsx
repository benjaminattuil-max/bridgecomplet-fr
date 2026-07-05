import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Glossaire de l\'Implantologie Dentaire | Dr Attuil' },
  description: 'Ostéointégration, All-on-4, CBCT... Le lexique des termes d\'implantologie dentaire expliqués simplement par le Dr Attuil, Paris.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/glossaire-implantologie` },
  openGraph: {
    title: 'Glossaire de l\'implantologie dentaire',
    description: 'Tous les termes techniques de l\'implantologie dentaire expliqués simplement.',
    url: `${SITE_CONFIG.siteUrl}/glossaire-implantologie`,
  },
}

const TERMS = [
  { term: 'All-on-4', def: 'Technique implantaire posant 4 implants par arcade, dont 2 inclinés à 45° à l\'arrière, pour soutenir un bridge complet fixe sans greffe osseuse dans la majorité des cas.', href: '/all-on-4' },
  { term: 'All-on-6', def: '6 implants par arcade, positionnés de façon plus droite, offrant une répartition des forces masticatoires plus équilibrée qu\'un All-on-4.', href: '/all-on-6' },
  { term: 'Bridge complet sur implants', def: 'Prothèse dentaire fixe qui remplace toutes les dents d\'une arcade, vissée de façon permanente sur plusieurs implants.', href: '/bridge-complet-sur-implants' },
  { term: 'CBCT (Cone Beam CT)', def: 'Scanner dentaire 3D à faible dose d\'irradiation, permettant d\'analyser précisément le volume et la densité osseuse avant la pose d\'implants.', href: '/scanner-cbct-implants' },
  { term: 'Extraction-implantation immédiate', def: 'Technique consistant à poser un implant directement dans l\'alvéole d\'une dent qui vient d\'être extraite, dans la même séance, réduisant la durée totale du traitement.', href: '/extraction-implantation-immediate' },
  { term: 'Guide chirurgical', def: 'Gouttière imprimée sur mesure, issue de la planification numérique, qui guide le chirurgien pour positionner chaque implant exactement selon le plan de traitement.', href: '/guide-chirurgical-implants' },
  { term: 'Implant dentaire', def: 'Vis en titane insérée dans l\'os de la mâchoire, servant de racine artificielle pour ancrer une couronne, un bridge ou une prothèse complète.', href: null },
  { term: 'Implant ptérygoïdien', def: 'Implant positionné vers l\'arrière du palais, ancré dans l\'os ptérygoïde, permettant de traiter certains cas de manque osseux postérieur sans greffe.', href: '/implants-pterygoidiens' },
  { term: 'Implant zygomatique', def: 'Implant long ancré dans l\'os de la pommette (os zygomatique), utilisé lorsque l\'os maxillaire est insuffisant pour poser des implants classiques.', href: '/implants-zygomatiques' },
  { term: 'Mise en charge immédiate', def: 'Protocole consistant à visser une prothèse provisoire fixe sur les implants dans les heures suivant leur pose, sans attendre les 4 à 6 mois d\'ostéointégration.', href: '/mise-en-charge-immediate' },
  { term: 'Ostéointégration', def: 'Processus biologique de fusion entre l\'implant en titane et l\'os environnant, qui se déroule sur 4 à 6 mois et assure la stabilité définitive de l\'implant.', href: null },
  { term: 'Péri-implantite', def: 'Infection inflammatoire chronique des tissus autour d\'un implant, pouvant entraîner une perte osseuse progressive si elle n\'est pas traitée. Principale cause d\'échec tardif des implants.', href: '/echec-implant-que-faire' },
  { term: 'Prothèse provisoire', def: 'Prothèse fixe temporaire, généralement en résine renforcée, posée le jour de l\'intervention et portée pendant la période d\'ostéointégration.', href: '/prothese-provisoire-definitive-implants' },
  { term: 'Prothèse définitive en zircone', def: 'Prothèse finale en céramique haute résistance, posée après confirmation de l\'ostéointégration, conçue pour durer 15 à 25 ans.', href: '/prothese-provisoire-definitive-implants' },
  { term: 'Sédation consciente', def: 'Technique pharmacologique de relaxation profonde utilisée pour les patients anxieux, permettant de vivre l\'intervention dans un état de détente tout en restant éveillé.', href: '/sedation-consciente-implants' },
  { term: 'Sinus lift (comblement sinusien)', def: 'Greffe osseuse réalisée au niveau du sinus maxillaire pour augmenter le volume osseux disponible avant la pose d\'implants au maxillaire supérieur postérieur.', href: '/sinus-lift-implants' },
  { term: 'Stabilité primaire', def: 'Solidité mécanique immédiate d\'un implant dans l\'os au moment de sa pose, mesurée pour déterminer si une mise en charge immédiate est possible.', href: '/mise-en-charge-immediate' },
]

const FAQS = [
  {
    question: "Pourquoi les termes d'implantologie sont-ils si techniques ?",
    answer: "L'implantologie est une discipline chirurgicale précise, qui emprunte son vocabulaire à la fois à la médecine et à l'ingénierie (planification numérique, biomécanique). Ce glossaire a pour but de rendre ces termes accessibles à tous les patients, sans formation médicale préalable."
  },
  {
    question: "Un terme n'est pas listé ici, où trouver sa définition ?",
    answer: "N'hésitez pas à poser la question directement lors de la consultation de bilan avec le Dr Attuil, qui prend toujours le temps d'expliquer chaque terme technique employé dans votre plan de traitement."
  },
]

export default function GlossairePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Glossaire' }]} />
          <p className="page-eyebrow">Le vocabulaire de l'implantologie, expliqué simplement</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Glossaire de l'implantologie dentaire
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            All-on-4, ostéointégration, CBCT... Voici tous les termes techniques que vous pourriez rencontrer, expliqués en langage clair.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">
          <div className="space-y-4 mb-12">
            {TERMS.map((t) => (
              <div key={t.term} className="border border-neutral-200 rounded-sm p-6">
                <h2 className="font-serif text-h3 font-bold text-neutral-900 mb-2">{t.term}</h2>
                <p className="text-neutral-600 text-sm leading-relaxed mb-2">{t.def}</p>
                {t.href && (
                  <Link href={t.href} className="text-sm font-semibold text-brand-600 hover:underline">
                    En savoir plus →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="Une question sur ces termes techniques ?"
            subtitle="Le Dr Attuil vous explique chaque étape de votre plan de traitement en langage clair."
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
                { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
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
