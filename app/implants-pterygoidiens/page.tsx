import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Implants Ptérygoïdiens : Traiter le Manque d\'Os Postérieur | Dr Attuil' },
  description: 'Les implants ptérygoïdiens permettent d\'ancrer un bridge complet à l\'arrière du palais sans greffe osseuse. Le Dr Attuil explique cette technique.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/implants-pterygoidiens` },
  openGraph: {
    title: 'Implants ptérygoïdiens : ancrage postérieur sans greffe',
    description: 'Comment les implants ptérygoïdiens permettent de traiter le manque osseux postérieur au maxillaire.',
    url: `${SITE_CONFIG.siteUrl}/implants-pterygoidiens`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un implant ptérygoïdien ?",
    answer: "C'est un implant positionné à l'arrière du palais, ancré dans l'os ptérygoïde (une structure osseuse dense située derrière le maxillaire), permettant de traiter un manque d'os dans la zone postérieure de la mâchoire supérieure sans recourir à une greffe osseuse ou à un sinus lift."
  },
  {
    question: "Dans quels cas les implants ptérygoïdiens sont-ils indiqués ?",
    answer: "Ils sont principalement indiqués lorsque le volume osseux est insuffisant à l'arrière du maxillaire supérieur, en particulier près du sinus maxillaire, et que l'on souhaite éviter une greffe osseuse ou un sinus lift pour raccourcir la durée du traitement."
  },
  {
    question: "Cette technique est-elle courante ?",
    answer: "Elle est moins fréquente que les techniques classiques (All-on-4, All-on-6), car elle nécessite une expertise chirurgicale spécifique liée à la proximité de structures anatomiques sensibles dans cette zone. Elle est réservée à des indications précises identifiées lors du bilan par scanner 3D."
  },
  {
    question: "Peut-on combiner implants ptérygoïdiens et implants classiques ?",
    answer: "Oui, c'est même la configuration la plus fréquente : les implants ptérygoïdiens sont utilisés en complément d'implants antérieurs classiques, pour obtenir un ancrage postérieur solide sans greffe, dans le cadre d'un bridge complet global sur l'arcade."
  },
]

export default function ImplantsPterygoidiensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'Implants ptérygoïdiens',
          'Implants dentaires ancrés dans l\'os ptérygoïde, à l\'arrière du palais, permettant de traiter le manque osseux postérieur au maxillaire supérieur sans greffe osseuse.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Implants ptérygoïdiens' }
          ]} />
          <p className="page-eyebrow">Ancrage postérieur sans greffe</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Implants ptérygoïdiens : traiter le manque d'os postérieur
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Quand l'arrière du maxillaire manque d'os, ancrer un implant plus loin, dans l'os ptérygoïde, permet souvent d'éviter greffe osseuse et sinus lift.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Le principe</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            L'arrière de la mâchoire supérieure est une zone où le volume osseux est fréquemment insuffisant, notamment en raison de la présence du sinus maxillaire. L'<strong>implant ptérygoïdien</strong> contourne cette difficulté en s'ancrant plus loin, dans l'os ptérygoïde — une structure osseuse dense située en arrière, au niveau de la base du crâne.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette approche permet d'obtenir un point d'ancrage postérieur solide sans avoir recours à un <Link href="/sinus-lift-implants" className="text-brand-600 hover:underline">sinus lift</Link> ou à une greffe osseuse classique, réduisant ainsi la durée totale du parcours de soin.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Une technique d'expertise</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            En raison de la proximité de structures anatomiques sensibles dans cette région (vaisseaux, nerfs), la pose d'implants ptérygoïdiens exige une expertise chirurgicale spécifique et une planification numérique rigoureuse. Cette technique est proposée uniquement lorsque l'analyse du scanner 3D en confirme la pertinence et la faisabilité sécurisée.
          </p>

          <CTABox variant="inline"
            title="Manque d'os à l'arrière de la mâchoire ?"
            subtitle="Le scanner 3D permet d'évaluer les solutions disponibles, avec ou sans greffe."
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
                { label: 'Implants zygomatiques', href: '/implants-zygomatiques' },
                { label: 'Sinus lift', href: '/sinus-lift-implants' },
                { label: 'Greffe osseuse', href: '/greffe-osseuse-bridge-implants' },
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
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
