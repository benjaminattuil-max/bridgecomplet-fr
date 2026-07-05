import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Bridge sur Implants : Turquie ou France ? Ce qu\'il Faut Savoir | Dr Attuil' },
  description: 'Faire poser son bridge complet sur implants à l\'étranger pour un prix plus bas : les points à examiner avant de décider, par le Dr Attuil.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/bridge-implants-turquie-vs-france` },
  openGraph: {
    title: 'Bridge complet sur implants : Turquie ou France ?',
    description: 'Les points essentiels à examiner avant de choisir où faire poser son bridge complet sur implants.',
    url: `${SITE_CONFIG.siteUrl}/bridge-implants-turquie-vs-france`,
  },
}

const POINTS = [
  {
    title: 'Le prix affiché',
    france: 'Généralement 12 000 € à 25 000 € par arcade, incluant le suivi complet sur place.',
    abroad: 'Souvent 40 à 60% moins cher en apparence, mais vérifier si le prix inclut vraiment le suivi, les contrôles et la prothèse définitive.',
  },
  {
    title: 'Le suivi post-opératoire',
    france: 'Consultations de contrôle facilement accessibles, sans frais de déplacement, en cas de question ou de complication.',
    abroad: 'Un aller-retour est nécessaire pour chaque contrôle ou ajustement, ce qui peut représenter un coût et une contrainte logistique non négligeables.',
  },
  {
    title: 'La gestion d\'une complication',
    france: 'Prise en charge rapide par le praticien qui connaît votre dossier complet et votre historique clinique.',
    abroad: 'Une complication survenant après le retour en France peut nécessiter un nouveau déplacement, ou une prise en charge par un praticien français qui ne connaît pas le dossier initial — parfois complexe à réaliser sans toutes les données d\'origine.',
  },
  {
    title: 'Le recours juridique',
    france: 'Cadre juridique français clair, avec des instances de médiation et de recours en cas de litige (Ordre des chirurgiens-dentistes, assurance responsabilité civile professionnelle).',
    abroad: 'Le recours en cas de litige est régi par le droit du pays où l\'acte a été réalisé, ce qui peut compliquer les démarches en cas de désaccord sur la qualité du traitement.',
  },
  {
    title: 'La continuité du dossier médical',
    france: 'Dossier clinique et radiographique conservé et directement accessible pour tout praticien amené à intervenir par la suite.',
    abroad: 'La transmission du dossier (radios, plan de traitement, références des implants posés) dépend de la rigueur de la clinique étrangère et peut être incomplète.',
  },
]

const FAQS = [
  {
    question: "Pourquoi les prix sont-ils si différents entre la Turquie et la France ?",
    answer: "Les écarts de coût de la vie, des charges sociales et des loyers professionnels expliquent une partie de la différence de prix. Cela ne signifie pas nécessairement que la qualité des soins est inférieure à l'étranger — mais cela justifie un examen attentif de ce que le prix inclut réellement (suivi, garanties, matériaux utilisés)."
  },
  {
    question: "Quelles questions poser avant de faire poser ses implants à l'étranger ?",
    answer: "Il est essentiel de demander : la marque et l'origine des implants utilisés, ce qui est inclus dans le prix (nombre de contrôles, prothèse définitive ou seulement provisoire), les modalités de prise en charge en cas de complication après le retour en France, et la possibilité d'obtenir un dossier médical complet et transmissible."
  },
  {
    question: "Peut-on faire suivre en France un traitement commencé à l'étranger ?",
    answer: "Dans certains cas oui, mais cela dépend de la qualité et de la complétude du dossier médical fourni par la clinique étrangère. Un praticien français peut être plus réticent à intervenir sur un travail dont il ne connaît pas tous les détails techniques (marque des implants, protocole utilisé)."
  },
  {
    question: "Le Dr Attuil peut-il donner un avis objectif sur mon projet ?",
    answer: "Oui, une consultation de bilan permet d'évaluer votre situation clinique et de vous présenter un devis détaillé pour un traitement réalisé en France, avec toutes les données nécessaires pour comparer objectivement les options qui s'offrent à vous."
  },
]

export default function TurquieVsFrancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Prix et coût', href: '/prix-bridge-complet-implants' },
            { label: 'Turquie vs France' }
          ]} />
          <p className="page-eyebrow">Une décision à prendre en connaissance de cause</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Bridge complet sur implants : Turquie ou France ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Le tourisme dentaire attire par des prix très inférieurs. Voici, sans parti pris, les points concrets à examiner avant de faire votre choix — au-delà du seul montant du devis.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Le prix plus bas à l'étranger est réel, mais il faut comparer ce qui est <strong>réellement inclus</strong> (suivi, garanties, prothèse définitive) et anticiper la <strong>gestion d'une complication</strong> une fois de retour en France. Ce n'est pas qu'une question de prix, mais de parcours de soin complet.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-6">Comparaison point par point</h2>
          <div className="space-y-4 mb-10">
            {POINTS.map((p) => (
              <div key={p.title} className="border border-neutral-200 rounded-sm p-6">
                <p className="font-semibold text-neutral-800 mb-3 text-sm">{p.title}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border-l-2 border-brand-300 pl-3">
                    <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1">En France</p>
                    <p className="text-neutral-600 text-xs leading-relaxed">{p.france}</p>
                  </div>
                  <div className="border-l-2 border-neutral-300 pl-3">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">À l'étranger</p>
                    <p className="text-neutral-600 text-xs leading-relaxed">{p.abroad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Les bonnes questions à se poser</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Au-delà du prix, un traitement de cette ampleur mérite d'être évalué sur l'ensemble du parcours : qui gère le suivi les mois suivants, que se passe-t-il en cas de douleur ou de complication à J+10, quelle est la marque des implants posés (certaines marques sont peu documentées ou peu disponibles en France pour un entretien futur), et le dossier médical est-il complet et transmissible.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ces questions ne visent pas à décourager un choix à l'étranger, mais à s'assurer qu'il est fait en toute connaissance de cause, avec une vision complète du parcours de soin et pas seulement du prix affiché.
          </p>

          <CTABox variant="inline"
            title="Obtenir un avis et un devis en France"
            subtitle="Comparez objectivement, avec toutes les données en main."
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
                { label: 'Pourquoi si cher ?', href: '/pourquoi-bridge-implants-si-cher' },
                { label: 'Financement', href: '/financement-bridge-implants' },
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
