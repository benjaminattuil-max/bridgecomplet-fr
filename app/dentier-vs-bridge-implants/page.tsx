import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Dentier vs Bridge sur Implants : Comparaison Complète | Dr Attuil' },
  description: 'Dentier amovible ou bridge fixe sur implants : quelle solution choisir ? Le Dr Attuil compare confort, fonction, prix et durabilité.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/dentier-vs-bridge-implants` },
  openGraph: {
    title: 'Dentier vs bridge sur implants : comparaison complète',
    description: 'Comparaison détaillée entre dentier amovible et bridge fixe sur implants.',
    url: `${SITE_CONFIG.siteUrl}/dentier-vs-bridge-implants`,
  },
}

const CRITERIA = [
  { label: 'Fixation', dentier: 'Amovible, posée sur la gencive (parfois avec colle)', bridge: 'Fixe, vissée sur des implants ancrés dans l\'os' },
  { label: 'Stabilité en parlant/mangeant', dentier: 'Peut bouger légèrement', bridge: 'Totalement stable' },
  { label: 'Force masticatoire', dentier: 'Réduite, environ 20-30% d\'une dentition naturelle', bridge: 'Proche de la dentition naturelle' },
  { label: 'Impact sur l\'os de la mâchoire', dentier: 'N\'empêche pas la résorption osseuse progressive', bridge: 'Stimule l\'os comme des racines naturelles, freine la résorption' },
  { label: 'Entretien quotidien', dentier: 'Retrait, nettoyage à part, parfois colle à renouveler', bridge: 'Brossage sur place comme des dents naturelles' },
  { label: 'Investissement initial', dentier: 'Plus abordable', bridge: 'Plus élevé' },
  { label: 'Durée de vie', dentier: '5 à 8 ans avant renouvellement (l\'os évoluant)', bridge: '15 à 25 ans pour la prothèse, à vie pour les implants' },
]

const FAQS = [
  {
    question: "Le dentier est-il une mauvaise solution ?",
    answer: "Non, le dentier reste une solution valable pour certains patients, en particulier en cas de contre-indication médicale aux implants ou de préférence personnelle pour une solution moins invasive et moins coûteuse. Mais il présente des limites fonctionnelles et de confort que le bridge sur implants permet de dépasser."
  },
  {
    question: "Pourquoi le bridge sur implants est-il considéré comme supérieur fonctionnellement ?",
    answer: "Parce qu'il restitue une force masticatoire proche de la dentition naturelle et une stabilité totale, sans les compromis inhérents à une prothèse simplement posée sur la gencive comme le dentier."
  },
  {
    question: "Le bridge sur implants est-il rentable sur le long terme malgré son coût initial plus élevé ?",
    answer: "Oui dans de nombreux cas : un dentier nécessite d'être renouvelé ou rebasé régulièrement (tous les 5 à 8 ans) à mesure que l'os évolue, alors que les implants, une fois posés, durent potentiellement toute la vie avec un bon entretien, réduisant les coûts récurrents à long terme."
  },
  {
    question: "Peut-on passer du dentier au bridge sur implants à tout moment ?",
    answer: "Oui, il n'y a pas de délai imposé. Plus la transition est anticipée, mieux le volume osseux disponible est généralement préservé, mais un bilan par scanner 3D permet dans la plupart des cas de trouver une solution adaptée, quel que soit le moment."
  },
]

export default function DentierVsBridgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Dentier vs bridge sur implants' }
          ]} />
          <p className="page-eyebrow">Comparaison objective</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Dentier ou bridge fixe sur implants : la comparaison complète
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Deux solutions pour remplacer des dents manquantes, aux implications très différentes sur le confort et la fonction au quotidien.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-3 pr-4 font-serif font-bold text-neutral-800">Critère</th>
                  <th className="text-left py-3 pr-4 font-serif font-bold text-neutral-600">Dentier amovible</th>
                  <th className="text-left py-3 font-serif font-bold text-brand-700">Bridge sur implants</th>
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map((c, i) => (
                  <tr key={i} className="border-b border-neutral-100">
                    <td className="py-3 pr-4 font-medium text-neutral-700">{c.label}</td>
                    <td className="py-3 pr-4 text-neutral-600">{c.dentier}</td>
                    <td className="py-3 text-neutral-600">{c.bridge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-neutral-700 mb-8 leading-relaxed">
            Retrouvez plus de détails sur les problèmes concrets du dentier sur notre page <Link href="/deteste-dentier-alternative-fixe" className="text-brand-600 hover:underline">"je déteste mon dentier"</Link>, et sur le <Link href="/prix-bridge-complet-implants" className="text-brand-600 hover:underline">prix du bridge sur implants</Link> pour évaluer précisément votre investissement.
          </p>

          <CTABox variant="inline"
            title="Quelle solution pour votre situation ?"
            subtitle="Le bilan avec scanner 3D permet une comparaison personnalisée."
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
                { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
                { label: 'Passer de l\'appareil au bridge fixe', href: '/appareil-complet-bridge-implants' },
                { label: 'Prix du bridge complet', href: '/prix-bridge-complet-implants' },
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
