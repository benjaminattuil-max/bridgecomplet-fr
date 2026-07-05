import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Scanner CBCT avant Implants Dentaires : Rôle et Déroulement | Dr Attuil' },
  description: 'Le scanner CBCT 3D est l\'examen indispensable avant tout traitement implantaire. Le Dr Attuil explique son rôle et son déroulement.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/scanner-cbct-implants` },
  openGraph: {
    title: 'Scanner CBCT avant implants : à quoi sert-il ?',
    description: 'Le rôle central du scanner 3D dans la planification d\'un bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/scanner-cbct-implants`,
  },
}

const FAQS = [
  {
    question: "Qu'est-ce qu'un scanner CBCT ?",
    answer: "Le CBCT (Cone Beam Computed Tomography) est un scanner dentaire 3D à faisceau conique, spécifiquement conçu pour l'imagerie maxillo-faciale. Il produit des images en trois dimensions de la mâchoire, révélant le volume, la densité et la forme exacte de l'os disponible, avec une irradiation bien plus faible qu'un scanner médical classique."
  },
  {
    question: "Pourquoi ce scanner est-il indispensable avant la pose d'implants ?",
    answer: "Une radiographie panoramique classique, en deux dimensions, ne permet pas d'évaluer précisément l'épaisseur et la densité de l'os, ni la position exacte de structures sensibles comme le nerf dentaire inférieur ou le sinus maxillaire. Le CBCT fournit ces informations en trois dimensions, indispensables pour planifier chaque implant avec précision et sécurité."
  },
  {
    question: "L'examen est-il irradiant ?",
    answer: "Le CBCT délivre une dose de rayons X nettement inférieure à un scanner médical conventionnel, tout en offrant une résolution suffisante pour la planification implantaire. Il est réalisé selon le principe de précaution radiologique, avec la dose la plus faible possible permettant un diagnostic fiable."
  },
  {
    question: "Comment se déroule l'examen ?",
    answer: "L'examen est rapide (quelques dizaines de secondes) et totalement indolore. Vous restez debout ou assis pendant que l'appareil tourne autour de votre tête. Les images en 3D sont ensuite directement intégrées au logiciel de planification implantaire utilisé par le Dr Attuil."
  },
]

export default function ScannerCBCTPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Scanner CBCT' }
          ]} />
          <p className="page-eyebrow">L'examen qui conditionne tout le traitement</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Le scanner CBCT : l'étape indispensable avant les implants
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Avant toute pose d'implant, un examen d'imagerie 3D précis permet de planifier l'intervention au dixième de millimètre près. Voici son rôle exact.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi la 3D change tout</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Contrairement à une radiographie panoramique classique, qui offre une image plate en deux dimensions, le <strong>scanner CBCT</strong> reconstruit un volume tridimensionnel complet de votre mâchoire. Cette précision permet au Dr Attuil de mesurer exactement la hauteur et l'épaisseur d'os disponibles à chaque emplacement potentiel d'implant, et de repérer précisément les structures anatomiques à éviter.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ces données sont ensuite directement exploitées dans un logiciel de planification numérique, qui permet de positionner virtuellement chaque implant avant même l'intervention, puis de générer un <Link href="/guide-chirurgical-implants" className="text-brand-600 hover:underline">guide chirurgical</Link> sur mesure pour transférer cette planification en bouche avec précision.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Ce que révèle le scanner</h2>
          <ul className="space-y-2 text-neutral-700 mb-10 text-sm">
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Le <strong>volume et la densité osseuse</strong> disponibles pour chaque implant</li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>La position exacte du <strong>nerf dentaire inférieur</strong> et du <strong>sinus maxillaire</strong></li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>La nécessité éventuelle d'une <Link href="/greffe-osseuse-bridge-implants" className="underline">greffe osseuse</Link> ou d'un <Link href="/sinus-lift-implants" className="underline">sinus lift</Link></li>
            <li className="flex gap-2"><span className="text-brand-600 font-bold flex-shrink-0">•</span>Le nombre et l'inclinaison optimale des implants (<Link href="/all-on-4" className="underline">All-on-4</Link>, <Link href="/all-on-6" className="underline">All-on-6</Link>)</li>
          </ul>

          <CTABox variant="inline"
            title="Passer le scanner de bilan"
            subtitle="Première étape essentielle de votre plan de traitement personnalisé."
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
                { label: 'Guide chirurgical numérique', href: '/guide-chirurgical-implants' },
                { label: 'All-on-4 vs All-on-6', href: '/all-on-4-vs-all-on-6-comparaison' },
                { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
                { label: 'Consultation de bilan', href: '/consultation-implants-paris' },
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
