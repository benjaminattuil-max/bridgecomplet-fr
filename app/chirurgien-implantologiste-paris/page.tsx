import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateDoctorPersonSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: `${SITE_CONFIG.doctorName} — Chirurgien Implantologiste Exclusif à Paris` },
  description: 'Le Dr Benjamin Attuil, chirurgien-dentiste exclusivement dédié à l\'implantologie depuis 15 ans à Paris 11e. Découvrez son parcours et sa philosophie.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/chirurgien-implantologiste-paris` },
  openGraph: {
    title: 'Dr Benjamin Attuil — Implantologiste exclusif à Paris',
    description: 'Parcours, philosophie de soin et technologies utilisées par le Dr Benjamin Attuil, spécialiste du bridge complet sur implants à Paris.',
    url: `${SITE_CONFIG.siteUrl}/chirurgien-implantologiste-paris`,
  },
}

const TECH = [
  { title: 'Scanner CBCT 3D', desc: 'Imagerie tridimensionnelle de haute précision pour analyser la densité osseuse et planifier chaque implant au dixième de millimètre près.' },
  { title: 'Guide chirurgical numérique', desc: 'Planification informatique du positionnement des implants, transférée en bouche via un guide imprimé sur mesure, pour une chirurgie plus précise et moins invasive.' },
  { title: 'Mise en charge immédiate', desc: 'Protocole permettant de poser une prothèse fixe provisoire le jour même de l\'intervention, sans période sans dents.' },
  { title: 'Sédation consciente', desc: 'Technique de relaxation profonde proposée aux patients anxieux, pour vivre l\'intervention dans un confort optimal.' },
]

const FAQS = [
  {
    question: "Le Dr Attuil pratique-t-il uniquement l'implantologie ?",
    answer: "Oui. Contrairement à un cabinet de dentisterie généraliste, l'activité du Dr Benjamin Attuil est exclusivement dédiée à l'implantologie et à la réhabilitation complète sur implants. Cette spécialisation permet une expertise technique approfondie et une pratique régulière des cas les plus complexes, notamment les bridges complets sur implants."
  },
  {
    question: "Depuis combien de temps le Dr Attuil pratique-t-il l'implantologie ?",
    answer: "Le Dr Benjamin Attuil pratique l'implantologie depuis plus de 15 ans, avec une activité concentrée sur les réhabilitations complètes (All-on-4, All-on-6, All-on-X) et les cas cliniques complexes nécessitant une expertise pointue en chirurgie osseuse."
  },
  {
    question: "Où se situe le cabinet du Dr Attuil ?",
    answer: `Le cabinet est situé au ${SITE_CONFIG.address}, dans le ${SITE_CONFIG.arrondissement}, facilement accessible en transports en commun depuis tout Paris et l'Île-de-France.`
  },
  {
    question: "Comment prendre rendez-vous avec le Dr Attuil ?",
    answer: "Vous pouvez prendre rendez-vous par téléphone, via Doctolib, ou en remplissant le formulaire de consultation en ligne. La première consultation de bilan permet d'analyser votre situation et de répondre à toutes vos questions, sans engagement."
  },
]

export default function ChirurgienPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateDoctorPersonSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Le chirurgien' }]} />
          <p className="page-eyebrow">Implantologie exclusive</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            {SITE_CONFIG.doctorName}, chirurgien implantologiste à Paris
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Une activité entièrement dédiée à l'implantologie et à la réhabilitation complète sur implants, au service d'un objectif simple : redonner des dents fixes et fonctionnelles à des patients qui pensaient parfois cette solution hors de portée.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <h2 className="font-serif text-h2 font-bold mb-4">Un parcours dédié à l'implantologie</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Après sa formation initiale en chirurgie dentaire, le Dr Benjamin Attuil a fait le choix de concentrer son exercice exclusivement sur l'implantologie — un choix rare parmi les chirurgiens-dentistes, dont la majorité conservent une pratique généraliste. Cette spécialisation lui permet de se former en continu aux techniques les plus avancées (mise en charge immédiate, chirurgie guidée, implants zygomatiques et ptérygoïdiens) et de traiter un volume de cas complexes bien supérieur à la moyenne.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Depuis plus de <strong>15 ans</strong>, il a accompagné de nombreux patients dans des réhabilitations complètes — souvent des personnes ayant perdu espoir de retrouver des dents fixes après des années de dentier ou de dents très abîmées.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Sa philosophie de soin</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Trois principes guident sa pratique : la <strong>transparence</strong> (un devis détaillé et honnête, sans coût caché), la <strong>rigueur technique</strong> (planification numérique systématique avant toute intervention), et l'<strong>écoute</strong> — en particulier pour les patients anxieux, pour qui un temps dédié aux questions et aux craintes est toujours prévu en consultation.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Cette approche est détaillée sur notre page consacrée à la <Link href="/peur-implants-dentaires" className="text-brand-600 hover:underline">peur des implants dentaires</Link>, qui répond sans détour aux appréhensions les plus fréquentes.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les technologies utilisées au cabinet</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {TECH.map((t) => (
              <div key={t.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{t.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-neutral-800 mb-3">Le cabinet</p>
            <address className="not-italic text-sm text-neutral-700 space-y-1">
              <p>{SITE_CONFIG.address}</p>
              <p>{SITE_CONFIG.postalCode} {SITE_CONFIG.city}</p>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-600 font-semibold hover:underline inline-block mt-2">{SITE_CONFIG.phone}</a>
            </address>
          </div>

          <CTABox variant="inline"
            title="Rencontrer le Dr Attuil"
            subtitle="La consultation de bilan est l'occasion d'échanger directement avec lui sur votre situation."
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
                { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
                { label: 'Témoignages patients', href: '/temoignages-patients-bridge-implants' },
                { label: 'Consultation', href: '/consultation-implants-paris' },
                { label: 'FAQ complète', href: '/faq-bridge-complet-implants' },
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
