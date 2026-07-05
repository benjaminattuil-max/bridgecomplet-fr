import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalProcedureSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'All-on-4 : Technique, Avantages et Résultats | Dr Attuil' },
  description: 'L\'All-on-4 : bridge complet sur 4 implants par arcade dont 2 inclinés, pour des dents fixes en une journée. Guide complet par le Dr Attuil, Paris 11e.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/all-on-4` },
  openGraph: {
    title: 'All-on-4 : 4 implants pour un bridge complet — Dr Attuil Paris',
    description: 'Tout savoir sur la technique All-on-4 : principe, avantages, cas indiqués, déroulement et résultats. Spécialiste exclusif à Paris.',
    url: `${SITE_CONFIG.siteUrl}/all-on-4`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce que la technique All-on-4 ?",
    answer: "La technique All-on-4 (ou Tout-sur-4) consiste à poser 4 implants dentaires en titane par arcade pour soutenir un bridge complet fixe. Deux implants droits sont placés à l'avant de la mâchoire, et deux implants inclinés à 45° sont placés à l'arrière, ce qui permet d'éviter le sinus maxillaire et de maximiser l'ancrage osseux sans greffe osseuse dans la majorité des cas."
  },
  {
    question: "Quelle est la différence entre All-on-4 et All-on-6 ?",
    answer: "L'All-on-4 utilise 4 implants par arcade, dont 2 inclinés à l'arrière. L'All-on-6 utilise 6 implants en position plus droite, offrant une répartition des forces légèrement plus équilibrée. L'All-on-4 est souvent indiqué quand l'os postérieur est insuffisant pour placer des implants supplémentaires. Le choix entre les deux techniques dépend de l'analyse du scanner 3D de chaque patient."
  },
  {
    question: "L'All-on-4 nécessite-t-il une greffe osseuse ?",
    answer: "Dans la majorité des cas, non. C'est précisément l'un des grands avantages de la technique All-on-4 : les deux implants postérieurs inclinés à 45° permettent d'éviter le sinus maxillaire et d'utiliser l'os disponible à l'avant de la mâchoire, souvent mieux préservé. Certains cas très complexes peuvent néanmoins nécessiter une augmentation osseuse préalable."
  },
  {
    question: "Quel est le taux de succès de l'All-on-4 ?",
    answer: "Le taux de succès de la technique All-on-4 à 10 ans est supérieur à 95% dans les études cliniques publiées. Ce taux dépend du respect des consignes d'hygiène, de l'absence de tabagisme actif et des visites de contrôle annuelles. Le Dr Benjamin Attuil pratique cette technique depuis plus de 15 ans avec un taux de succès personnel de 98%."
  },
  {
    question: "Peut-on manger normalement avec un All-on-4 ?",
    answer: "Oui, à terme. Dans les 3 premiers mois suivant la pose, une alimentation molle est recommandée pour ne pas solliciter les implants pendant l'ostéointégration. Une fois la prothèse définitive posée (4 à 6 mois après), il est possible de manger tous les aliments — viande, pain croustillant, légumes crus — avec une force masticatoire proche de la dentition naturelle."
  },
  {
    question: "Combien coûte un All-on-4 ?",
    answer: "Le prix d'un All-on-4 varie selon le praticien, la région et les matériaux utilisés. En France, le coût d'un All-on-4 par arcade se situe généralement entre 12 000 € et 20 000 €, prothèse incluse. Ce prix comprend la consultation de bilan, le scanner 3D, la pose des implants, la prothèse provisoire et la prothèse définitive. Le Dr Benjamin Attuil fournit un devis détaillé et transparent lors de la consultation."
  },
]

export default function AllOn4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalProcedureSchema(
          'All-on-4 — Bridge complet sur 4 implants',
          'Technique implantaire permettant de poser un bridge complet fixe sur 4 implants en titane par arcade, dont 2 inclinés à 45° pour maximiser l\'ancrage osseux sans greffe. Dents fixes posées le jour même de l\'intervention.'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'All-on-4' }
          ]} />
          <p className="page-eyebrow">Technique — 4 implants par arcade</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            All-on-4 : 4 implants pour un bridge complet fixe
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            L'All-on-4 est une technique chirurgicale qui permet de poser un bridge complet fixe sur seulement 4 implants par arcade — sans greffe osseuse dans la majorité des cas — et de repartir avec des dents fixes le jour même.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Qu'est-ce que la technique All-on-4 ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La technique <strong>All-on-4</strong> (ou "Tout-sur-4") est un protocole chirurgical développé dans les années 1990 par le Dr Paulo Malo au Portugal, aujourd'hui standardisé et pratiqué dans le monde entier. Son principe : poser <strong>4 implants en titane par arcade</strong> pour soutenir un bridge complet fixe de 12 à 14 dents.
          </p>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La particularité de l'All-on-4 réside dans le positionnement des implants : <strong>2 implants droits</strong> sont placés à l'avant de la mâchoire, là où l'os est le plus dense, et <strong>2 implants inclinés à 45°</strong> sont placés en zone postérieure. Cette inclinaison permet d'éviter le sinus maxillaire à la mâchoire supérieure, et d'utiliser au maximum l'os disponible sans nécessiter de greffe dans la majorité des cas.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            L'All-on-4 est une technique de <strong>mise en charge immédiate</strong> : une prothèse provisoire fixe est vissée sur les 4 implants dans les heures qui suivent l'intervention. Le patient repart avec des dents fixes le soir même.
          </p>

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-3">Le principe des implants inclinés — pourquoi c'est important</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              En inclinant les implants postérieurs à 45°, le chirurgien peut les ancrer dans une zone osseuse plus dense et plus antérieure, tout en obtenant un appui éloigné qui améliore la stabilité du bridge. C'est l'équivalent mécanique d'un tabouret à 4 pieds légèrement évasés : plus stable qu'un tabouret aux pieds parfaitement droits et rapprochés.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">All-on-4 vs All-on-6 : comment choisir ?</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border-2 border-brand-200 rounded-sm p-6">
              <p className="font-serif font-bold text-lg text-brand-800 mb-1">All-on-4</p>
              <span className="tag mb-4 inline-block">4 implants / arcade</span>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Évite souvent la greffe osseuse</li>
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Intervention plus courte</li>
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Coût légèrement inférieur</li>
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Idéal si l'os postérieur est insuffisant</li>
                <li className="flex gap-2"><span className="text-neutral-400 flex-shrink-0">→</span>Nécessite une bonne qualité osseuse antérieure</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-sm p-6">
              <p className="font-serif font-bold text-lg text-neutral-800 mb-1">All-on-6</p>
              <span className="tag mb-4 inline-block">6 implants / arcade</span>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Répartition des forces plus équilibrée</li>
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Ancrage renforcé — prothèse plus stable</li>
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Recommandé dans la majorité des cas</li>
                <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">✓</span>Meilleure longévité sur le long terme</li>
                <li className="flex gap-2"><span className="text-neutral-400 flex-shrink-0">→</span>Nécessite un volume osseux suffisant</li>
              </ul>
            </div>
          </div>
          <p className="text-neutral-600 text-sm mb-10 italic">
            Le choix entre All-on-4 et All-on-6 est déterminé après analyse du scanner 3D. Il n'y a pas de "meilleure" technique universelle — il y a la technique la mieux adaptée à votre anatomie.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Qui peut bénéficier d'un All-on-4 ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La technique All-on-4 est particulièrement adaptée aux patients qui présentent une <strong>résorption osseuse en zone postérieure</strong> — situation très fréquente chez les patients édentés depuis plusieurs années. L'os antérieur, généralement mieux préservé, suffit dans la majorité des cas à ancrer les 4 implants sans greffe préalable.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Les patients <Link href="/implants-tabac-risques" className="text-brand-600 hover:underline">fumeurs</Link>, <Link href="/implants-diabetes" className="text-brand-600 hover:underline">diabétiques équilibrés</Link> ou présentant une <Link href="/parodontite-et-implants" className="text-brand-600 hover:underline">parodontite traitée</Link> peuvent également bénéficier de cette technique, sous réserve d'un bilan médical préalable. Seules quelques <Link href="/contre-indications-implants-dentaires" className="text-brand-600 hover:underline">contre-indications strictes</Link> peuvent remettre en question ce traitement.
          </p>

          <CTABox variant="inline"
            title="Êtes-vous candidat à l'All-on-4 ?"
            subtitle="Un scanner 3D permet de répondre à cette question en une consultation."
          />

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Questions fréquentes sur l'All-on-4</h2>
          <div className="space-y-4 mb-12">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-6">
                <h3 className="font-serif font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-100 mb-12">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Pages liées</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All-on-6', href: '/all-on-6' },
                { label: 'All-on-X', href: '/all-on-x' },
                { label: 'All-on-4 vs All-on-6 : comparaison', href: '/all-on-4-vs-all-on-6-comparaison' },
                { label: 'Prix du bridge complet', href: '/prix-bridge-complet-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
                { label: 'Puis-je éviter la greffe osseuse ?', href: '/peu-os-implants-possible' },
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
