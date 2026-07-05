import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Implants Dentaires et Diabète : Est-ce Compatible ? | Dr Attuil' },
  description: 'Peut-on poser des implants dentaires quand on est diabétique ? Le Dr Benjamin Attuil explique les conditions nécessaires et les précautions à prendre.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/implants-diabetes` },
  openGraph: {
    title: 'Implants dentaires et diabète : ce qu\'il faut savoir',
    description: 'Les conditions pour poser des implants dentaires en cas de diabète, et les précautions nécessaires.',
    url: `${SITE_CONFIG.siteUrl}/implants-diabetes`,
  },
}

const FAQS = [
  {
    question: "Peut-on poser des implants dentaires quand on est diabétique ?",
    answer: "Oui, dans la majorité des cas, à condition que le diabète soit bien équilibré au moment de l'intervention. Un diabète stabilisé n'est pas une contre-indication aux implants dentaires ; c'est un déséquilibre glycémique important et non contrôlé qui pose problème pour la cicatrisation."
  },
  {
    question: "Pourquoi le contrôle glycémique est-il si important ?",
    answer: "Un taux de sucre sanguin élevé et non maîtrisé peut ralentir la cicatrisation des tissus et augmenter le risque d'infection, deux facteurs qui peuvent compromettre l'ostéointégration des implants. Un diabète bien équilibré ne présente pas ce risque accru de façon significative."
  },
  {
    question: "Faut-il un avis du médecin traitant avant l'intervention ?",
    answer: "Oui, une coordination avec votre médecin traitant ou diabétologue est systématiquement recommandée avant un traitement implantaire, afin de confirmer que votre diabète est suffisamment stabilisé pour l'intervention et d'ajuster si besoin le suivi médical autour de la chirurgie."
  },
  {
    question: "Le taux de succès des implants est-il différent chez les patients diabétiques ?",
    answer: "Chez les patients diabétiques bien équilibrés, les études montrent des taux de succès très proches de la population générale. C'est principalement chez les patients dont le diabète est mal contrôlé que le risque de complications augmente sensiblement."
  },
]

export default function ImplantsDiabetePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Implants et diabète' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Implants dentaires et diabète : est-ce compatible ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le diabète n'est pas une contre-indication aux implants dentaires, à condition qu'il soit correctement équilibré. Voici ce qu'il faut savoir.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Oui, un <strong>diabète équilibré</strong> permet dans la grande majorité des cas de bénéficier d'implants dentaires en toute sécurité. Un <strong>bilan médical préalable</strong>, en lien avec votre médecin traitant, permet de confirmer cette compatibilité avant l'intervention.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Ce qui compte vraiment : l'équilibre glycémique</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Le diabète en lui-même n'est pas un obstacle aux implants. Ce qui importe, c'est le <strong>contrôle glycémique</strong> au moment de l'intervention. Un diabète bien géré, avec un taux d'HbA1c dans les valeurs recommandées par votre médecin, offre des conditions de cicatrisation comparables à celles d'un patient non diabétique.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            À l'inverse, un diabète mal contrôlé peut ralentir la cicatrisation osseuse et augmenter le risque infectieux, deux éléments déterminants pour la réussite de l'<Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">ostéointégration</Link>. C'est pourquoi une évaluation médicale précise est réalisée avant tout projet implantaire chez un patient diabétique.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Une prise en charge coordonnée</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Le Dr Attuil travaille en coordination avec votre médecin traitant ou diabétologue pour s'assurer que les conditions sont réunies avant l'intervention, et adapte si nécessaire le protocole (surveillance renforcée, antibioprophylaxie) pour sécuriser au maximum votre traitement.
          </p>

          <CTABox variant="inline"
            title="Diabète et projet d'implants : parlons-en"
            subtitle="Un bilan précis permet d'évaluer votre situation en toute transparence."
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
                { label: 'Contre-indications aux implants', href: '/contre-indications-implants-dentaires' },
                { label: 'Implants après chimiothérapie', href: '/implants-apres-chimiotherapie' },
                { label: 'Taux de succès des implants', href: '/taux-succes-implants-dentaires' },
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
