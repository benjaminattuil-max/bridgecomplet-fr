import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Pourquoi le Bridge sur Implants Coûte-t-il si Cher ? | Dr Attuil' },
  description: 'Le prix d\'un bridge complet sur implants surprend souvent. Le Dr Attuil détaille ce qui justifie ce coût : matériel, temps, expertise et technologie.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/pourquoi-bridge-implants-si-cher` },
  openGraph: {
    title: 'Pourquoi le bridge complet sur implants coûte-t-il si cher ?',
    description: 'Le détail de ce qui compose réellement le prix d\'un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/pourquoi-bridge-implants-si-cher`,
  },
}

const COST_DRIVERS = [
  { title: 'Le matériel implantaire', desc: 'Les implants en titane de qualité médicale, leurs composants prothétiques et les instruments chirurgicaux dédiés représentent un coût matière élevé, garant de la fiabilité à long terme.' },
  { title: 'La technologie de planification', desc: 'Scanner 3D, logiciel de planification implantaire et guide chirurgical imprimé sur mesure : ces outils, indispensables à la précision et à la sécurité de l\'intervention, ont un coût d\'investissement et d\'utilisation important.' },
  { title: 'Le temps opératoire et le plateau technique', desc: 'La pose d\'un bridge complet mobilise le praticien, souvent un assistant, et un plateau technique stérile pendant plusieurs heures — bien plus qu\'un soin dentaire courant.' },
  { title: 'La prothèse sur mesure', desc: 'La prothèse provisoire puis la prothèse définitive en zircone sont conçues et fabriquées sur mesure par un laboratoire de prothèse dentaire, avec plusieurs itérations d\'ajustement.' },
  { title: 'L\'expertise du praticien', desc: 'Une formation continue exigeante et une pratique répétée des cas complexes sont nécessaires pour maîtriser ces techniques avec un haut niveau de sécurité et de résultat esthétique.' },
  { title: 'Le suivi à long terme', desc: 'Les consultations de contrôle après la pose, incluses dans le prix chez le Dr Attuil, garantissent la détection précoce de toute complication pendant les années suivant le traitement.' },
]

const FAQS = [
  {
    question: "Pourquoi un bridge sur implants coûte-t-il plus cher qu'un dentier ?",
    answer: "Un dentier amovible repose simplement sur la gencive, sans chirurgie ni matériel implantaire. Un bridge sur implants nécessite une intervention chirurgicale, des implants en titane, une planification numérique par scanner 3D, et une prothèse fixe sur mesure — d'où un investissement initial plus élevé, compensé par une durabilité et un confort très supérieurs sur le long terme."
  },
  {
    question: "Le prix reflète-t-il uniquement la marge du praticien ?",
    answer: "Non. Une part significative du prix couvre des coûts directs : matériel implantaire, laboratoire de prothèse, technologie de planification, stérilisation, et temps de plusieurs professionnels (chirurgien, assistant, prothésiste). Un devis transparent permet de comprendre la répartition de ces coûts."
  },
  {
    question: "Un prix plus bas signifie-t-il une moins bonne qualité ?",
    answer: "Pas nécessairement, mais un écart de prix important par rapport à la moyenne du marché mérite d'être examiné : marque et qualité des implants utilisés, matériau de la prothèse définitive, expérience du praticien, et étendue du suivi inclus sont des éléments déterminants pour la durabilité du résultat."
  },
  {
    question: "Comment rendre ce traitement plus accessible financièrement ?",
    answer: "Un paiement échelonné peut être mis en place dans de nombreux cas, et certaines mutuelles proposent des forfaits implantologie avantageux. Ces options sont détaillées lors de la consultation de bilan, avec un devis complet et transparent."
  },
]

export default function PourquoiSiCherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Prix et coût', href: '/prix-bridge-complet-implants' },
            { label: 'Pourquoi si cher ?' }
          ]} />
          <p className="page-eyebrow">Comprendre le prix, pas seulement le subir</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Pourquoi le bridge complet sur implants coûte-t-il si cher ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            C'est une question légitime face à un investissement important. Voici, poste par poste, ce qui compose réellement ce prix — sans mystère ni marketing.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Le prix reflète des coûts réels et importants : <strong>matériel implantaire</strong> de qualité médicale, <strong>technologie de planification 3D</strong>, <strong>temps opératoire</strong> significatif, <strong>prothèse sur mesure</strong> fabriquée en laboratoire, et <strong>expertise</strong> d'un praticien spécialisé. Ce n'est pas un prix arbitraire.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">Ce qui compose le prix, poste par poste</h2>
          <div className="space-y-4 mb-10">
            {COST_DRIVERS.map((c) => (
              <div key={c.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{c.title}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Un investissement à mettre en perspective</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Ramené sur sa durée de vie réelle — <Link href="/duree-vie-bridge-implants" className="text-brand-600 hover:underline">15 à 25 ans</Link> pour la prothèse, potentiellement à vie pour les implants avec un bon entretien — le coût annuel d'un bridge complet sur implants est souvent inférieur à celui du renouvellement répété d'un dentier amovible, sans compter le gain en qualité de vie, en mastication et en confiance en soi.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Des solutions de <Link href="/financement-bridge-implants" className="text-brand-600 hover:underline">financement échelonné</Link> et certains <Link href="/remboursement-implants-secu-mutuelle" className="text-brand-600 hover:underline">forfaits mutuelle</Link> permettent souvent de rendre ce traitement plus accessible qu'il n'y paraît au premier abord.
          </p>

          <CTABox variant="inline"
            title="Comprendre votre devis en détail"
            subtitle="Le Dr Attuil explique chaque poste de votre devis lors de la consultation de bilan."
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
                { label: 'Prix du bridge complet', href: '/prix-bridge-complet-implants' },
                { label: 'Financement', href: '/financement-bridge-implants' },
                { label: 'Remboursement Sécu/mutuelle', href: '/remboursement-implants-secu-mutuelle' },
                { label: 'Bridge implants Turquie vs France', href: '/bridge-implants-turquie-vs-france' },
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
