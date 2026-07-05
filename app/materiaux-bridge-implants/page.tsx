import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Matériaux du Bridge Complet sur Implants : Titane, Zircone... | Dr Attuil' },
  description: 'Titane, zircone, résine renforcée : quels matériaux composent un bridge complet sur implants ? Le Dr Attuil explique leurs propriétés.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/materiaux-bridge-implants` },
  openGraph: {
    title: 'Les matériaux du bridge complet sur implants',
    description: 'Titane des implants, zircone de la prothèse définitive : le détail des matériaux utilisés et pourquoi.',
    url: `${SITE_CONFIG.siteUrl}/materiaux-bridge-implants`,
  },
}

const MATERIALS = [
  { name: 'Titane (implants)', desc: 'Métal biocompatible de référence en implantologie depuis plus de 50 ans, capable de fusionner avec l\'os (ostéointégration) sans provoquer de rejet. Sa résistance mécanique et sa longévité en font le matériau standard des implants dentaires dans le monde entier.' },
  { name: 'Zircone (prothèse définitive)', desc: 'Céramique haute résistance, à la fois solide et esthétique, utilisée pour la prothèse définitive. Elle imite fidèlement la teinte naturelle des dents tout en résistant à l\'usure sur 15 à 25 ans d\'utilisation quotidienne.' },
  { name: 'Résine renforcée / PMMA (prothèse provisoire)', desc: 'Matériau plus léger et plus facile à ajuster que la zircone, utilisé pour la prothèse provisoire portée pendant les 4 à 6 mois d\'ostéointégration. Il permet des retouches rapides pendant cette phase d\'adaptation.' },
  { name: 'Titane grade 5 (pilier prothétique)', desc: 'Alliage de titane utilisé pour les piliers qui relient l\'implant à la prothèse, choisi pour sa résistance mécanique aux forces de mastication répétées sur le long terme.' },
]

const FAQS = [
  {
    question: "Pourquoi le titane est-il utilisé pour les implants ?",
    answer: "Le titane possède une propriété unique appelée biocompatibilité : l'os humain accepte de fusionner directement avec sa surface, un phénomène appelé ostéointégration. Cette caractéristique, associée à une excellente résistance mécanique et à une absence de corrosion en milieu buccal, en fait le matériau de référence depuis plusieurs décennies."
  },
  {
    question: "La zircone est-elle plus solide que la céramique classique ?",
    answer: "Oui, la zircone est une céramique technique nettement plus résistante à la fracture que les céramiques dentaires traditionnelles, ce qui la rend particulièrement adaptée à une prothèse complète soumise à des forces de mastication importantes et répétées sur de nombreuses années."
  },
  {
    question: "Peut-on être allergique au titane ou à la zircone ?",
    answer: "Les allergies au titane sont extrêmement rares et la zircone, matériau céramique inerte, ne provoque quasiment jamais de réaction allergique. En cas d'antécédent de sensibilité connue, ce point est systématiquement discuté lors du bilan médical préalable."
  },
  {
    question: "La couleur de la zircone est-elle personnalisable ?",
    answer: "Oui, la teinte de la prothèse en zircone est choisie avec vous pour correspondre à vos préférences esthétiques et s'harmoniser avec votre visage, votre teint et vos éventuelles dents naturelles restantes."
  },
]

export default function MateriauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Matériaux utilisés' }
          ]} />
          <p className="page-eyebrow">La qualité au cœur de la durabilité</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Les matériaux du bridge complet sur implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Titane, zircone, résine renforcée : chaque matériau a un rôle précis dans la durabilité et la fonction de votre bridge complet.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="space-y-4 mb-12">
            {MATERIALS.map((m) => (
              <div key={m.name} className="border border-neutral-200 rounded-sm p-6">
                <h2 className="font-serif text-h3 font-bold text-neutral-900 mb-2">{m.name}</h2>
                <p className="text-neutral-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-neutral-700 mb-8 leading-relaxed">
            Retrouvez plus de détails sur le passage entre les deux prothèses sur notre page <Link href="/prothese-provisoire-definitive-implants" className="text-brand-600 hover:underline">prothèse provisoire vs définitive</Link>, ainsi que sur l'<Link href="/entretien-bridge-implants" className="text-brand-600 hover:underline">entretien quotidien</Link> qui garantit la longévité de ces matériaux.
          </p>

          <CTABox variant="inline"
            title="Des matériaux de qualité médicale, sans compromis"
            subtitle="Le Dr Attuil sélectionne des matériaux reconnus et documentés scientifiquement."
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
                { label: 'Prothèse provisoire vs définitive', href: '/prothese-provisoire-definitive-implants' },
                { label: 'Durée de vie du bridge sur implants', href: '/duree-vie-bridge-implants' },
                { label: 'Entretien du bridge sur implants', href: '/entretien-bridge-implants' },
                { label: 'Bridge transvissé', href: '/bridge-transvisse-implants' },
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
