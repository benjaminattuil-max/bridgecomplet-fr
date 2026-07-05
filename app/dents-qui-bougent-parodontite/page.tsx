import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Dents qui Bougent : Signe de Parodontite — Solutions | Dr Attuil' },
  description: 'Vos dents bougent et se déchaussent ? Le Dr Benjamin Attuil explique ce signe de parodontite avancée et les solutions, dont le bridge complet sur implants.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/dents-qui-bougent-parodontite` },
  openGraph: {
    title: 'Dents qui bougent : que faire face à la parodontite ?',
    description: 'Comprendre pourquoi les dents bougent et quelles solutions envisager, dont le bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/dents-qui-bougent-parodontite`,
  },
}

const FAQS = [
  {
    question: "Pourquoi mes dents bougent-elles ?",
    answer: "La mobilité dentaire est généralement le signe d'une parodontite avancée : une infection chronique des tissus de soutien de la dent (gencive et os) qui détruit progressivement l'ancrage naturel de la dent. D'autres causes sont possibles (traumatisme, bruxisme sévère), mais la parodontite reste la plus fréquente."
  },
  {
    question: "Peut-on sauver des dents qui bougent ?",
    answer: "Cela dépend du degré d'atteinte osseuse. Un traitement parodontal peut stabiliser des cas modérés, mais lorsque la perte osseuse est trop importante, la mobilité devient irréversible et l'extraction, suivie d'un remplacement par implants, devient la solution la plus fiable à long terme."
  },
  {
    question: "Peut-on poser des implants si l'on a eu une parodontite ?",
    answer: "Oui, dans la majorité des cas, à condition que la parodontite ait été traitée et stabilisée au préalable. Le Dr Attuil évalue systématiquement ce point lors du bilan, car un contrôle de l'infection est indispensable avant la pose d'implants."
  },
  {
    question: "Le bridge complet sur implants peut-il remplacer des dents mobiles sur toute une arcade ?",
    answer: "Oui, c'est une indication fréquente : lorsque plusieurs dents sont mobiles sur une même arcade en raison d'une parodontite avancée, leur extraction complète suivie de la pose d'implants permet de retrouver une arcade stable et fixe, sans dépendre de dents fragilisées."
  },
]

export default function DentsQuiBougentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Dents qui bougent' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Vos dents bougent ? Comprendre la parodontite et les solutions
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Une mobilité dentaire n'est jamais anodine. Voici ce qu'elle signifie et les options qui s'offrent à vous, y compris lorsque plusieurs dents sont concernées.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Ce que signifie une dent qui bouge</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Une dent naturelle est ancrée par un ligament qui la maintient fermement dans son alvéole osseuse. Lorsqu'une <Link href="/parodontite-et-implants" className="text-brand-600 hover:underline">parodontite</Link> (infection chronique des gencives et de l'os de soutien) évolue sans être traitée, cet ancrage se détériore progressivement, provoquant une mobilité de plus en plus marquée, jusqu'à la perte de la dent.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce processus touche rarement une seule dent isolément : lorsque plusieurs dents deviennent mobiles simultanément, cela traduit généralement une atteinte parodontale généralisée sur l'arcade concernée.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Quelles solutions ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Si la parodontite est prise à temps et traitée, certaines dents peuvent être stabilisées et conservées. Lorsque l'atteinte osseuse est trop avancée, l'extraction des dents devenues non fonctionnelles, suivie de la pose d'implants, permet de retrouver une arcade stable et fixe — sans dépendre de dents fragilisées qui continueraient de se détériorer.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette transition peut souvent être réalisée en une seule intervention grâce à l'<Link href="/extraction-implantation-immediate" className="text-brand-600 hover:underline">extraction-implantation immédiate</Link>, avec une prothèse fixe posée le jour même.
          </p>

          <CTABox variant="inline"
            title="Vos dents bougent et vous inquiètent ?"
            subtitle="Un bilan précis permet de déterminer ce qui peut être sauvé et ce qui doit être remplacé."
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
                { label: 'Parodontite et implants', href: '/parodontite-et-implants' },
                { label: 'Je vais perdre mes dents', href: '/perdre-toutes-dents-solution' },
                { label: 'Extraction-implantation immédiate', href: '/extraction-implantation-immediate' },
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
