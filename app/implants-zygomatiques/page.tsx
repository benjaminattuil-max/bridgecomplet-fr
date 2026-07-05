import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Implants Zygomatiques : Solution sans Greffe Osseuse | Dr Attuil' },
  description: 'Les implants zygomatiques permettent de poser un bridge complet même en cas de manque osseux sévère, sans greffe. Le Dr Attuil explique cette technique.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/implants-zygomatiques` },
  openGraph: {
    title: 'Implants zygomatiques : quand la greffe osseuse n\'est pas une option',
    description: 'Comment les implants zygomatiques permettent d\'éviter la greffe osseuse en cas de manque d\'os sévère.',
    url: `${SITE_CONFIG.siteUrl}/implants-zygomatiques`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un implant zygomatique ?",
    answer: "C'est un implant beaucoup plus long qu'un implant classique (30 à 50 mm), ancré non pas dans l'os maxillaire mais dans l'os zygomatique (l'os de la pommette), qui est dense et généralement bien préservé même en cas de résorption osseuse sévère de la mâchoire."
  },
  {
    question: "Dans quels cas propose-t-on des implants zygomatiques ?",
    answer: "Cette technique est réservée aux situations de manque osseux sévère au maxillaire supérieur, lorsque le volume d'os disponible est insuffisant pour poser des implants classiques, même avec une greffe osseuse. Elle évite une greffe lourde et ses mois de cicatrisation associés."
  },
  {
    question: "L'intervention est-elle plus complexe qu'une pose d'implants classique ?",
    answer: "Oui, elle nécessite une expertise chirurgicale spécifique et une planification très précise en raison de la proximité de structures anatomiques sensibles (orbite, sinus). Elle est généralement réalisée sous anesthésie générale ou sédation profonde, dans un cadre chirurgical adapté."
  },
  {
    question: "Peut-on avoir une mise en charge immédiate avec des implants zygomatiques ?",
    answer: "Oui, c'est même l'un des grands intérêts de cette technique : grâce à l'excellente stabilité primaire obtenue dans l'os zygomatique dense, une prothèse provisoire fixe peut généralement être posée le jour même de l'intervention."
  },
]

export default function ImplantsZygomatiquesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Implants zygomatiques',
          'Implants dentaires de grande longueur ancrés dans l\'os zygomatique, permettant de traiter les cas de manque osseux sévère au maxillaire supérieur sans greffe osseuse préalable.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Implants zygomatiques' }
          ]} />
          <p className="page-eyebrow">Solution avancée sans greffe</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Implants zygomatiques : une solution quand la greffe n'est pas envisageable
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Pour les cas de manque osseux sévère, ancrer les implants ailleurs que dans la mâchoire elle-même permet d'éviter une greffe lourde. Voici comment fonctionne cette technique.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Le principe des implants zygomatiques</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Lorsque l'os de la mâchoire supérieure est trop résorbé pour accueillir des implants classiques — même avec une greffe osseuse — une alternative existe : ancrer des implants beaucoup plus longs dans l'<strong>os zygomatique</strong>, l'os solide de la pommette, situé au-dessus et en arrière du maxillaire.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ces implants, mesurant de 30 à 50 mm (contre 8 à 14 mm pour un implant classique), traversent la structure osseuse pour trouver un ancrage stable dans une zone que la résorption osseuse épargne généralement, même après de nombreuses années d'édentement.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi éviter la greffe osseuse dans ces cas ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Une <Link href="/greffe-osseuse-bridge-implants" className="text-brand-600 hover:underline">greffe osseuse</Link> massive, nécessaire pour compenser une résorption sévère, implique plusieurs mois de cicatrisation supplémentaires avant même de pouvoir poser les implants — parfois plus d'un an au total. Les implants zygomatiques permettent de contourner cette étape, avec un bénéfice majeur : une prothèse fixe peut souvent être posée <strong>le jour même</strong> de l'intervention.
          </p>

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Une technique de recours, pas une solution systématique</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Les implants zygomatiques sont réservés aux cas de résorption osseuse sévère où les alternatives classiques ne sont pas suffisantes. Pour la majorité des patients, un All-on-4, All-on-6 ou une greffe osseuse ciblée reste la solution adaptée. Le scanner 3D permet de déterminer précisément si cette technique avancée est nécessaire dans votre cas.
            </p>
          </div>

          <CTABox variant="inline"
            title="Vous avez été orienté vers une greffe osseuse lourde ?"
            subtitle="Un second avis avec scanner 3D peut révéler des alternatives moins invasives."
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
                { label: 'Implants ptérygoïdiens', href: '/implants-pterygoidiens' },
                { label: 'Greffe osseuse', href: '/greffe-osseuse-bridge-implants' },
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
                { label: 'Sinus lift', href: '/sinus-lift-implants' },
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
