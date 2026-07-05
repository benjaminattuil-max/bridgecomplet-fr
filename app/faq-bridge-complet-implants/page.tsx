import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'FAQ Bridge Complet sur Implants : Toutes les Réponses | Dr Attuil' },
  description: 'Plus de 30 questions-réponses sur le bridge complet sur implants : technique, douleur, prix, durée, entretien. Toutes les réponses du Dr Attuil.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/faq-bridge-complet-implants` },
  openGraph: {
    title: 'FAQ complète — Bridge complet sur implants',
    description: 'Toutes les réponses aux questions les plus posées sur le bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/faq-bridge-complet-implants`,
  },
}

const CATEGORIES = [
  {
    name: 'Le traitement',
    items: [
      { q: "Qu'est-ce qu'un bridge complet sur implants ?", a: "C'est une prothèse dentaire fixe complète, remplaçant toutes les dents d'une arcade, fixée de façon permanente sur 4 à 8 implants en titane insérés dans l'os de la mâchoire. Contrairement à un dentier amovible, elle ne se retire pas.", href: '/bridge-complet-sur-implants' },
      { q: "Quelle est la différence entre All-on-4 et All-on-6 ?", a: "L'All-on-4 utilise 4 implants par arcade dont 2 inclinés, souvent sans greffe osseuse. L'All-on-6 utilise 6 implants pour une répartition des forces plus équilibrée. Le choix dépend de l'analyse du scanner 3D.", href: '/all-on-4' },
      { q: "Peut-on poser le bridge en une seule journée ?", a: "Oui, grâce à la mise en charge immédiate : les implants sont posés le matin et une prothèse provisoire fixe est vissée le jour même, avant le retour à domicile.", href: '/bridge-complet-une-journee' },
      { q: "Faut-il une greffe osseuse avant la pose des implants ?", a: "Pas systématiquement. Les techniques All-on-4, les implants inclinés ou les implants zygomatiques permettent souvent d'éviter la greffe. Le scanner 3D détermine si elle est nécessaire.", href: '/peu-os-implants-possible' },
    ],
  },
  {
    name: 'Douleur et suites opératoires',
    items: [
      { q: "La pose est-elle douloureuse ?", a: "Non pendant l'intervention, réalisée sous anesthésie locale. Une gêne modérée apparaît ensuite, avec un pic à J+1-J+2, bien contrôlée par les antalgiques prescrits.", href: '/douleur-bridge-implants' },
      { q: "Le visage gonfle-t-il après la pose ?", a: "Oui, un gonflement normal apparaît, maximal à J+1-J+2, qui se résorbe en 7 à 10 jours.", href: '/gonflement-apres-implants' },
      { q: "Peut-on travailler le lendemain ?", a: "Pour un travail de bureau, souvent oui. Pour un métier physique ou très exposé au public, un arrêt de quelques jours est recommandé.", href: '/travailler-lendemain-pose-implants' },
      { q: "Va-t-on parler normalement avec la nouvelle prothèse ?", a: "Après une courte période d'adaptation de quelques jours à 2-3 semaines, l'élocution redevient normale.", href: '/parler-normalement-apres-implants' },
    ],
  },
  {
    name: 'Prix et financement',
    items: [
      { q: "Combien coûte un bridge complet sur implants ?", a: "Entre 12 000 € et 25 000 € par arcade en France, prothèse définitive incluse, selon la technique et les matériaux choisis.", href: '/prix-bridge-complet-implants' },
      { q: "La Sécurité sociale rembourse-t-elle les implants ?", a: "Le remboursement de la Sécurité sociale reste très limité sur les implants. Certaines mutuelles proposent des forfaits spécifiques plus avantageux.", href: '/remboursement-implants-secu-mutuelle' },
      { q: "Existe-t-il un paiement échelonné ?", a: "Oui, des solutions de financement peuvent être mises en place et sont discutées lors de la consultation de bilan.", href: '/financement-bridge-implants' },
    ],
  },
  {
    name: 'Durée et fiabilité',
    items: [
      { q: "Combien de temps dure un bridge complet sur implants ?", a: "Avec un entretien adapté, la prothèse dure généralement 15 à 25 ans, et les implants en titane peuvent durer toute la vie.", href: '/duree-vie-bridge-implants' },
      { q: "Quel est le taux de succès des implants dentaires ?", a: "95 à 98% à 10 ans dans les études cliniques, un taux comparable à l'expérience personnelle du Dr Attuil.", href: '/taux-succes-implants-dentaires' },
      { q: "Que se passe-t-il en cas d'échec d'un implant ?", a: "Rare (2 à 5% des cas), l'échec d'un implant isolé n'affecte généralement pas la stabilité du bridge complet grâce aux autres implants. L'implant concerné peut être remplacé.", href: '/echec-implant-que-faire' },
    ],
  },
  {
    name: 'Situations particulières',
    items: [
      { q: "Suis-je candidat si je n'ai plus de dents du tout ?", a: "C'est précisément l'indication principale du bridge complet sur implants, la solution de référence pour l'édentement total.", href: '/edenté-total-solution-implants' },
      { q: "Puis-je bénéficier d'implants si j'ai du diabète ?", a: "Oui dans la majorité des cas, à condition que le diabète soit équilibré. Un bilan médical préalable est nécessaire.", href: '/implants-diabetes' },
      { q: "Y a-t-il un âge limite pour les implants ?", a: "Non, l'âge en soi n'est pas une contre-indication. C'est l'état de santé général et la qualité osseuse qui sont déterminants.", href: '/bridge-implants-personnes-agees' },
    ],
  },
]

const ALL_FAQS = CATEGORIES.flatMap((cat) => cat.items.map((item) => ({ question: item.q, answer: item.a })))

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(ALL_FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'FAQ complète' }]} />
          <p className="page-eyebrow">Toutes les réponses, au même endroit</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            FAQ complète : bridge complet sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Une réponse rapide à chaque question, avec un lien vers la page détaillée pour aller plus loin. Si votre question n'apparaît pas ici, posez-la directement lors de la consultation de bilan.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="mb-12">
              <h2 className="font-serif text-h2 font-bold mb-6">{cat.name}</h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.q} className="border border-neutral-200 rounded-sm p-6">
                    <h3 className="font-serif font-semibold text-neutral-900 mb-2">{item.q}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-3">{item.a}</p>
                    <Link href={item.href} className="text-sm font-semibold text-brand-600 hover:underline">
                      Lire la réponse complète →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <CTABox
            title="Votre question n'est pas listée ici ?"
            subtitle="Posez-la directement lors de la consultation de bilan — réponse garantie sous 24h."
          />
        </div>
      </article>
    </>
  )
}
