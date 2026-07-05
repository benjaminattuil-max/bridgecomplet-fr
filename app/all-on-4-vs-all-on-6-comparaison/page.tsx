import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'All-on-4 vs All-on-6 : Quelle Technique Choisir ? | Dr Attuil' },
  description: 'All-on-4 ou All-on-6 pour votre bridge complet sur implants ? Le Dr Benjamin Attuil compare les deux techniques : indications, avantages, prix et durabilité.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/all-on-4-vs-all-on-6-comparaison` },
  openGraph: {
    title: 'All-on-4 vs All-on-6 : comparaison complète',
    description: 'Comparaison détaillée entre All-on-4 et All-on-6 pour choisir la technique la plus adaptée à votre situation.',
    url: `${SITE_CONFIG.siteUrl}/all-on-4-vs-all-on-6-comparaison`,
  },
}

const CRITERIA = [
  { label: 'Nombre d\'implants', a4: '4 par arcade', a6: '6 par arcade' },
  { label: 'Greffe osseuse', a4: 'Rarement nécessaire', a6: 'Rarement nécessaire, un peu plus souvent qu\'en All-on-4' },
  { label: 'Répartition des forces', a4: 'Bonne', a6: 'Plus équilibrée' },
  { label: 'Durée de l\'intervention', a4: 'Plus courte', a6: 'Légèrement plus longue' },
  { label: 'Prix indicatif', a4: 'Généralement inférieur', a6: 'Légèrement supérieur' },
  { label: 'Redondance en cas d\'échec d\'un implant', a4: 'Bonne', a6: 'Meilleure (plus de piliers)' },
  { label: 'Indication privilégiée', a4: 'Os postérieur limité', a6: 'Volume osseux suffisant sur toute l\'arcade' },
]

const FAQS = [
  {
    question: "All-on-6 est-il toujours supérieur à All-on-4 ?",
    answer: "Non, ce n'est pas une hiérarchie systématique. All-on-6 offre une répartition des forces légèrement plus équilibrée et une redondance supérieure en cas d'échec d'un implant, mais All-on-4 reste tout à fait indiqué et fiable dans de nombreuses situations, notamment lorsque l'os postérieur est limité."
  },
  {
    question: "Le choix dépend-il uniquement de la quantité d'os disponible ?",
    answer: "C'est le facteur principal, mais pas le seul. La force masticatoire, la présence de bruxisme, et les préférences du patient en termes de budget et de durée d'intervention entrent aussi en compte dans la décision finale, prise conjointement avec le Dr Attuil après analyse du scanner 3D."
  },
  {
    question: "Peut-on passer d'un All-on-4 à un All-on-6 plus tard ?",
    answer: "Oui, il est possible d'ajouter des implants supplémentaires ultérieurement si la situation clinique le justifie, transformant de fait un All-on-4 initial en configuration à davantage d'implants. Cette décision se prend au cas par cas selon l'évolution du patient."
  },
  {
    question: "La différence de prix entre les deux techniques est-elle importante ?",
    answer: "L'écart existe mais reste généralement modéré, car il concerne surtout 2 implants supplémentaires et un temps opératoire légèrement plus long. Le devis détaillé de chaque option est présenté lors de la consultation de bilan."
  },
]

export default function ComparaisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'All-on-4 vs All-on-6' }
          ]} />
          <p className="page-eyebrow">Comparaison objective</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            All-on-4 vs All-on-6 : quelle technique choisir ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Il n'existe pas de technique universellement "meilleure" — seulement celle la mieux adaptée à votre anatomie. Voici une comparaison objective, critère par critère.
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
                  <th className="text-left py-3 pr-4 font-serif font-bold text-brand-700">All-on-4</th>
                  <th className="text-left py-3 font-serif font-bold text-neutral-800">All-on-6</th>
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map((c, i) => (
                  <tr key={i} className="border-b border-neutral-100">
                    <td className="py-3 pr-4 font-medium text-neutral-700">{c.label}</td>
                    <td className="py-3 pr-4 text-neutral-600">{c.a4}</td>
                    <td className="py-3 text-neutral-600">{c.a6}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Comment se fait le choix concrètement ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Après l'analyse de votre <Link href="/scanner-cbct-implants" className="text-brand-600 hover:underline">scanner 3D (CBCT)</Link>, le Dr Attuil identifie les zones osseuses disponibles et leur densité. Si l'os postérieur est insuffisant pour poser 6 implants dans de bonnes conditions, l'<Link href="/all-on-4" className="text-brand-600 hover:underline">All-on-4</Link> avec ses implants inclinés devient l'option privilégiée. Si le volume osseux est suffisant sur toute l'arcade, l'<Link href="/all-on-6" className="text-brand-600 hover:underline">All-on-6</Link> est souvent recommandé pour sa répartition des forces optimisée.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Dans tous les cas, cette décision est expliquée en détail et discutée avec vous — ce n'est jamais un choix imposé sans justification clinique claire.
          </p>

          <CTABox variant="inline"
            title="Quelle technique pour votre situation ?"
            subtitle="Le scanner 3D lors de la consultation de bilan permet de trancher objectivement."
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
                { label: 'All-on-4', href: '/all-on-4' },
                { label: 'All-on-6', href: '/all-on-6' },
                { label: 'All-on-X', href: '/all-on-x' },
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
