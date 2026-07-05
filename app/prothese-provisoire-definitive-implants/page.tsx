import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Prothèse Provisoire vs Définitive sur Implants : Différences | Dr Attuil' },
  description: 'Quelle différence entre prothèse provisoire et définitive d\'un bridge complet sur implants ? Le Dr Attuil explique les deux étapes du traitement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/prothese-provisoire-definitive-implants` },
  openGraph: {
    title: 'Prothèse provisoire vs définitive sur implants',
    description: 'Les différences entre la prothèse provisoire posée le jour de l\'intervention et la prothèse définitive en zircone.',
    url: `${SITE_CONFIG.siteUrl}/prothese-provisoire-definitive-implants`,
  },
}

const COMPARISON = [
  { label: 'Moment de la pose', prov: 'Le jour même de la chirurgie', def: '4 à 6 mois plus tard' },
  { label: 'Matériau', prov: 'Résine renforcée (PMMA)', def: 'Zircone (céramique haute résistance)' },
  { label: 'Fonction', prov: 'Fixe et fonctionnelle immédiatement', def: 'Fixe, plus résistante et durable' },
  { label: 'Alimentation recommandée', prov: 'Molle exclusivement', def: 'Tous les aliments progressivement' },
  { label: 'Durée d\'utilisation', prov: '4 à 6 mois', def: '15 à 25 ans avec un bon entretien' },
  { label: 'Ajustements possibles', prov: 'Fréquents, pour affiner esthétique et confort', def: 'Ponctuels, lors des contrôles annuels' },
]

const FAQS = [
  {
    question: "Pourquoi ne pas poser directement la prothèse définitive ?",
    answer: "La prothèse définitive en zircone doit être posée une fois l'ostéointégration des implants confirmée, un processus biologique qui prend 4 à 6 mois. La prothèse provisoire permet d'avoir des dents fixes et fonctionnelles pendant toute cette période d'attente, sans jamais rester sans dents."
  },
  {
    question: "La prothèse provisoire est-elle solide ?",
    answer: "Oui, elle est conçue pour être fonctionnelle au quotidien, mais avec une alimentation molle recommandée pendant toute sa durée d'utilisation, le temps de ne pas solliciter excessivement les implants en cours d'ostéointégration."
  },
  {
    question: "Peut-on ajuster l'esthétique entre la provisoire et la définitive ?",
    answer: "Oui, c'est même l'un des grands avantages de cette étape intermédiaire : la période avec la prothèse provisoire permet d'évaluer et d'ajuster la forme, la teinte et la longueur des dents avant la fabrication de la prothèse définitive, pour un résultat final optimal."
  },
  {
    question: "La transition entre provisoire et définitive est-elle une nouvelle intervention chirurgicale ?",
    answer: "Non, aucune nouvelle chirurgie n'est nécessaire. Le passage à la prothèse définitive consiste à dévisser la prothèse provisoire et à visser la nouvelle prothèse en zircone sur les mêmes implants, après prise d'empreintes et essayages préalables."
  },
]

export default function ProtheseProvisoireDefinitivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Prothèse provisoire vs définitive' }
          ]} />
          <p className="page-eyebrow">Deux étapes, un seul objectif</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Prothèse provisoire et définitive : quelles différences ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le parcours du bridge complet sur implants comprend deux prothèses successives, chacune avec un rôle précis. Voici ce qui les distingue.
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
                  <th className="text-left py-3 pr-4 font-serif font-bold text-brand-700">Prothèse provisoire</th>
                  <th className="text-left py-3 font-serif font-bold text-neutral-800">Prothèse définitive</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((c, i) => (
                  <tr key={i} className="border-b border-neutral-100">
                    <td className="py-3 pr-4 font-medium text-neutral-700">{c.label}</td>
                    <td className="py-3 pr-4 text-neutral-600">{c.prov}</td>
                    <td className="py-3 text-neutral-600">{c.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi cette étape intermédiaire est essentielle</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Grâce à la <Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">mise en charge immédiate</Link>, la prothèse provisoire est vissée sur les implants dès la fin de l'intervention. Vous ne passez ainsi jamais une journée sans dents fixes, pendant que l'<strong>ostéointégration</strong> — la fusion biologique entre les implants et l'os — se déroule sur 4 à 6 mois.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette période sert aussi de test grandeur nature : elle permet d'ajuster la forme, la teinte, la longueur des dents et le confort d'élocution avant la conception de la prothèse définitive, pour un résultat final parfaitement adapté à vos attentes.
          </p>

          <CTABox variant="inline"
            title="Comprendre les deux étapes de votre traitement"
            subtitle="Le Dr Attuil détaille ce parcours en consultation de bilan."
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
                { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
                { label: 'Matériaux du bridge sur implants', href: '/materiaux-bridge-implants' },
                { label: 'Durée de vie du bridge sur implants', href: '/duree-vie-bridge-implants' },
                { label: 'Parler normalement après les implants', href: '/parler-normalement-apres-implants' },
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
