import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalConditionSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Parodontite et Implants Dentaires : Est-ce Compatible ? | Dr Attuil' },
  description: 'Peut-on poser des implants après une parodontite ? Le Dr Benjamin Attuil explique les conditions nécessaires et les précautions à prendre.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/parodontite-et-implants` },
  openGraph: {
    title: 'Parodontite et implants dentaires : ce qu\'il faut savoir',
    description: 'Les conditions pour poser des implants après une parodontite, et les précautions nécessaires.',
    url: `${SITE_CONFIG.siteUrl}/parodontite-et-implants`,
  },
}

const FAQS = [
  {
    question: "Peut-on poser des implants si l'on a eu une parodontite ?",
    answer: "Oui, dans la majorité des cas, à condition que la parodontite ait été traitée et stabilisée au préalable. Une infection active non traitée est en revanche une contre-indication temporaire à la pose d'implants, le temps de l'assainir complètement."
  },
  {
    question: "La parodontite augmente-t-elle le risque d'échec des implants ?",
    answer: "Un antécédent de parodontite traitée et stabilisée n'empêche pas la réussite du traitement implantaire, mais nécessite une surveillance accrue, car ces patients présentent un risque légèrement plus élevé de développer une péri-implantite (l'équivalent de la parodontite au niveau des implants) s'ils ne maintiennent pas une hygiène rigoureuse."
  },
  {
    question: "Faut-il traiter la parodontite avant ou après la pose des implants ?",
    answer: "Toujours avant. La parodontite doit être diagnostiquée et traitée en amont de tout projet implantaire, afin d'assainir les tissus buccaux et de créer les meilleures conditions possibles pour la réussite et la pérennité des implants."
  },
  {
    question: "Un suivi particulier est-il nécessaire pour les patients ayant eu une parodontite ?",
    answer: "Oui, des visites de contrôle plus rapprochées et une hygiène bucco-dentaire particulièrement rigoureuse sont recommandées pour ces patients, afin de prévenir tout risque de péri-implantite sur le long terme."
  },
]

export default function ParodontitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalConditionSchema(
          'Parodontite',
          'Infection chronique des tissus de soutien de la dent (gencive et os alvéolaire), pouvant entraîner une mobilité dentaire puis la perte des dents si elle n\'est pas traitée.',
          'Traitement parodontal préalable, puis réhabilitation par bridge complet sur implants une fois l\'infection stabilisée'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Parodontite et implants' }
          ]} />
          <p className="page-eyebrow">Votre situation</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Parodontite et implants dentaires : est-ce compatible ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Avoir eu une parodontite ne ferme pas la porte aux implants, mais impose certaines conditions préalables. Voici lesquelles.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Oui, il est possible de poser des implants après une <strong>parodontite traitée et stabilisée</strong>. Une infection active doit d'abord être assainie. Un <strong>suivi renforcé</strong> et une hygiène rigoureuse sont ensuite recommandés pour prévenir tout risque de péri-implantite.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi traiter la parodontite avant les implants</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La parodontite est une infection chronique qui touche les tissus de soutien des dents. Si elle n'est pas contrôlée avant la pose d'implants, les bactéries responsables de l'infection peuvent compromettre la cicatrisation et l'ostéointégration des nouveaux implants. C'est pourquoi un assainissement parodontal complet est un préalable indispensable.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Une fois cette infection stabilisée, le passage à un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur implants</Link> permet souvent de tourner définitivement la page des dents naturelles fragilisées, en retrouvant une arcade stable et fixe.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Un suivi adapté sur le long terme</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Les patients ayant eu une parodontite restent statistiquement plus exposés au risque de <Link href="/echec-implant-que-faire" className="text-brand-600 hover:underline">péri-implantite</Link>. C'est pourquoi un suivi renforcé, avec des contrôles plus rapprochés et une hygiène rigoureuse détaillée sur notre page <Link href="/entretien-bridge-implants" className="text-brand-600 hover:underline">entretien du bridge sur implants</Link>, est systématiquement mis en place pour ce profil de patients.
          </p>

          <CTABox variant="inline"
            title="Une parodontite dans votre passé ?"
            subtitle="Le bilan permet d'évaluer précisément votre éligibilité aux implants."
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
                { label: 'Dents qui bougent', href: '/dents-qui-bougent-parodontite' },
                { label: 'Entretien du bridge sur implants', href: '/entretien-bridge-implants' },
                { label: 'Échec d\'implant : que faire ?', href: '/echec-implant-que-faire' },
                { label: 'Contre-indications aux implants', href: '/contre-indications-implants-dentaires' },
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
