import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Suites Opératoires après Pose d\'Implants : Consignes | Dr Attuil' },
  description: 'Quelles consignes suivre après la pose d\'un bridge complet sur implants ? Le Dr Attuil détaille les recommandations pour une bonne cicatrisation.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/suites-operatoires-implants` },
  openGraph: {
    title: 'Suites opératoires : les consignes après la pose d\'implants',
    description: 'Consignes complètes pour bien gérer les suites opératoires après la pose d\'un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/suites-operatoires-implants`,
  },
}

const CONSIGNES = [
  { title: 'Alimentation', desc: 'Liquide et très molle les 3 premiers jours (soupes, compotes, purées), puis molle pendant plusieurs semaines. Éviter les aliments chauds les premières 24 heures.' },
  { title: 'Hygiène bucco-dentaire', desc: 'Bain de bouche antiseptique prescrit, à utiliser sans brosser directement la zone opérée les premiers jours. Reprise du brossage doux dès que la cicatrisation le permet, selon les consignes du Dr Attuil.' },
  { title: 'Repos et activité physique', desc: 'Éviter tout effort physique intense, se pencher en avant ou porter des charges lourdes pendant 3 à 5 jours pour ne pas aggraver le saignement ou le gonflement.' },
  { title: 'Tabac et alcool', desc: 'À éviter strictement pendant au moins 2 semaines : le tabac réduit la vascularisation et ralentit significativement la cicatrisation et l\'ostéointégration.' },
  { title: 'Médicaments prescrits', desc: 'Prendre les antalgiques et anti-inflammatoires de façon préventive et régulière, sans attendre l\'apparition de la douleur, selon la prescription remise à la sortie.' },
]

const FAQS = [
  {
    question: "Quelles sont les consignes principales après la pose des implants ?",
    answer: "Alimentation molle, hygiène douce avec bain de bouche antiseptique, repos physique, arrêt du tabac, et prise régulière des médicaments prescrits sont les cinq piliers d'une bonne récupération après la pose d'un bridge complet sur implants."
  },
  {
    question: "Combien de temps durent les suites opératoires ?",
    answer: "La phase la plus sensible dure environ 7 à 10 jours, avec un pic de gêne et de gonflement entre J+1 et J+2. Une amélioration progressive s'observe ensuite, avec un retour à une vie quasi normale à partir de la deuxième semaine."
  },
  {
    question: "Quand reprendre une hygiène bucco-dentaire normale ?",
    answer: "Le brossage doux de la prothèse peut généralement reprendre dès les premiers jours en évitant la zone directement opérée, puis normalement après une à deux semaines selon les consignes personnalisées données par le Dr Attuil lors du contrôle post-opératoire."
  },
  {
    question: "Que faire en cas de doute pendant les suites opératoires ?",
    answer: "Le Dr Attuil reste directement joignable après l'intervention pour toute question ou inquiétude concernant l'évolution de la cicatrisation, la douleur ou le gonflement."
  },
]

export default function SuitesOperatoiresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Suites opératoires' }
          ]} />
          <p className="page-eyebrow">Les consignes essentielles</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Suites opératoires : les consignes après la pose d'implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Une bonne récupération dépend en grande partie du respect de quelques consignes simples pendant les jours suivant l'intervention.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="space-y-4 mb-12">
            {CONSIGNES.map((c) => (
              <div key={c.title} className="border border-neutral-200 rounded-sm p-6">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{c.title}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-700 mb-8 leading-relaxed">
            Pour plus de détails sur ce que vous ressentirez précisément, consultez nos pages dédiées à la <Link href="/douleur-bridge-implants" className="text-brand-600 hover:underline">douleur</Link>, au <Link href="/gonflement-apres-implants" className="text-brand-600 hover:underline">gonflement</Link> et à l'<Link href="/alimentation-apres-bridge-implants" className="text-brand-600 hover:underline">alimentation</Link> après la pose.
          </p>

          <CTABox variant="inline"
            title="Des consignes personnalisées à votre profil"
            subtitle="Le Dr Attuil vous remet des instructions écrites détaillées après l'intervention."
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
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Gonflement après les implants', href: '/gonflement-apres-implants' },
                { label: 'Alimentation après la pose', href: '/alimentation-apres-bridge-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
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
