import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Alimentation après la Pose d\'un Bridge sur Implants | Dr Attuil' },
  description: 'Que peut-on manger après la pose d\'un bridge complet sur implants ? Le Dr Benjamin Attuil détaille les recommandations alimentaires semaine après semaine.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/alimentation-apres-bridge-implants` },
  openGraph: {
    title: 'Alimentation après la pose d\'un bridge sur implants',
    description: 'Ce que l\'on peut manger, semaine après semaine, après la pose d\'un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/alimentation-apres-bridge-implants`,
  },
}

const TIMELINE = [
  { period: 'J0 à J3', desc: 'Alimentation exclusivement liquide et très molle : soupes, compotes, purées, yaourts, smoothies. Éviter les températures très chaudes.' },
  { period: 'J4 à J14', desc: 'Alimentation molle : œufs, poisson, féculents bien cuits, légumes cuits écrasés. Éviter tout aliment dur, croquant ou collant.' },
  { period: 'Semaines 3 à 12', desc: 'Élargissement progressif vers des textures plus fermes, en restant prudent sur les aliments très durs ou croquants (pain croustillant, noix, viande dure).' },
  { period: 'Après la prothèse définitive', desc: 'Une fois la prothèse en zircone posée (4 à 6 mois après l\'intervention), une alimentation normale et variée est possible, avec une force masticatoire proche de la dentition naturelle.' },
]

const FAQS = [
  {
    question: "Pourquoi une alimentation molle est-elle nécessaire après la pose des implants ?",
    answer: "Pendant la période d'ostéointégration (fusion entre l'implant et l'os), il est essentiel de ne pas exercer de forces excessives sur les implants, qui n'ont pas encore atteint leur stabilité définitive. Une alimentation molle protège ce processus de cicatrisation biologique."
  },
  {
    question: "Peut-on manger normalement avec la prothèse provisoire ?",
    answer: "La prothèse provisoire est fonctionnelle mais nécessite une alimentation molle pendant toute la période où elle est portée (4 à 6 mois), justement pour protéger l'ostéointégration en cours. Une fois la prothèse définitive posée, l'alimentation redevient normale."
  },
  {
    question: "Quels aliments faut-il éviter en particulier ?",
    answer: "Les aliments durs (noix, bonbons durs), croquants (pain croustillant, chips) ou collants (caramel, chewing-gum) sont à éviter pendant toute la période d'ostéointégration, car ils exercent des forces importantes ou prolongées sur la prothèse et les implants."
  },
  {
    question: "Combien de temps avant de pouvoir manger normalement ?",
    answer: "Il faut généralement attendre la pose de la prothèse définitive, 4 à 6 mois après l'intervention, pour retrouver une alimentation totalement normale et variée, sans restriction particulière."
  },
]

export default function AlimentationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Alimentation après la pose' }
          ]} />
          <p className="page-eyebrow">Semaine après semaine</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Que manger après la pose d'un bridge complet sur implants ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            L'alimentation évolue progressivement au fil de la cicatrisation. Voici les recommandations précises, étape par étape.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="space-y-4 mb-12">
            {TIMELINE.map((t, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6">
                <span className="tag mb-3 inline-block">{t.period}</span>
                <p className="text-neutral-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette progression protège la <Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">mise en charge immédiate</Link> pendant toute la période d'ostéointégration. Voir aussi nos pages sur les <Link href="/suites-operatoires-implants" className="text-brand-600 hover:underline">suites opératoires</Link> et la <Link href="/prothese-provisoire-definitive-implants" className="text-brand-600 hover:underline">prothèse provisoire vs définitive</Link>.
          </p>

          <CTABox variant="inline"
            title="Des recommandations personnalisées"
            subtitle="Le Dr Attuil adapte ces consignes à votre situation lors du suivi post-opératoire."
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
                { label: 'Suites opératoires', href: '/suites-operatoires-implants' },
                { label: 'Prothèse provisoire vs définitive', href: '/prothese-provisoire-definitive-implants' },
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
