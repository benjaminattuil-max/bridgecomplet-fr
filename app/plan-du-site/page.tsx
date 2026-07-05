import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: { absolute: 'Plan du Site | Dr Attuil' },
  description: `Retrouvez l'ensemble des pages du site ${SITE_CONFIG.siteUrl.replace('https://', '')}.`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/plan-du-site` },
}

const SECTIONS = [
  {
    title: 'Pages principales',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
      { label: 'All-on-4', href: '/all-on-4' },
      { label: 'All-on-6', href: '/all-on-6' },
      { label: 'Prix du bridge complet', href: '/prix-bridge-complet-implants' },
      { label: 'Le chirurgien', href: '/chirurgien-implantologiste-paris' },
      { label: 'FAQ complète', href: '/faq-bridge-complet-implants' },
      { label: 'Cas cliniques', href: '/temoignages-patients-bridge-implants' },
      { label: 'Glossaire', href: '/glossaire-implantologie' },
      { label: 'Consultation / Prendre RDV', href: '/consultation-implants-paris' },
    ],
  },
  {
    title: 'Techniques',
    links: [
      { label: 'All-on-X', href: '/all-on-x' },
      { label: 'All-on-4 vs All-on-6', href: '/all-on-4-vs-all-on-6-comparaison' },
      { label: 'Prothèse provisoire vs définitive', href: '/prothese-provisoire-definitive-implants' },
      { label: 'Bridge transvissé', href: '/bridge-transvisse-implants' },
      { label: 'Extraction-implantation immédiate', href: '/extraction-implantation-immediate' },
      { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
      { label: 'Implants zygomatiques', href: '/implants-zygomatiques' },
      { label: 'Implants ptérygoïdiens', href: '/implants-pterygoidiens' },
      { label: 'Bridge complet en 1 journée', href: '/bridge-complet-une-journee' },
      { label: 'Greffe osseuse', href: '/greffe-osseuse-bridge-implants' },
      { label: 'Sinus lift', href: '/sinus-lift-implants' },
      { label: 'Scanner CBCT', href: '/scanner-cbct-implants' },
      { label: 'Guide chirurgical numérique', href: '/guide-chirurgical-implants' },
      { label: 'Matériaux utilisés', href: '/materiaux-bridge-implants' },
      { label: 'Durée de vie', href: '/duree-vie-bridge-implants' },
      { label: 'Entretien au quotidien', href: '/entretien-bridge-implants' },
      { label: 'Sédation consciente', href: '/sedation-consciente-implants' },
      { label: 'Anesthésie générale', href: '/anesthesie-generale-bridge-implants' },
      { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
      { label: 'Suites opératoires', href: '/suites-operatoires-implants' },
      { label: 'Alimentation après la pose', href: '/alimentation-apres-bridge-implants' },
    ],
  },
  {
    title: 'Situations cliniques',
    links: [
      { label: 'Édentement total', href: '/edenté-total-solution-implants' },
      { label: 'Je vais perdre mes dents', href: '/perdre-toutes-dents-solution' },
      { label: 'Dents qui bougent (parodontite)', href: '/dents-qui-bougent-parodontite' },
      { label: 'Parodontite et implants', href: '/parodontite-et-implants' },
      { label: 'Appareil complet vers bridge fixe', href: '/appareil-complet-bridge-implants' },
      { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe' },
      { label: 'Peu d\'os, est-ce possible ?', href: '/peu-os-implants-possible' },
      { label: 'Implants et diabète', href: '/implants-diabetes' },
      { label: 'Implants après chimiothérapie', href: '/implants-apres-chimiotherapie' },
      { label: 'Contre-indications', href: '/contre-indications-implants-dentaires' },
      { label: 'Bridge implants et personnes âgées', href: '/bridge-implants-personnes-agees' },
      { label: 'Implants et tabac', href: '/implants-tabac-risques' },
      { label: 'Dentier vs bridge sur implants', href: '/dentier-vs-bridge-implants' },
    ],
  },
  {
    title: 'Peurs et appréhensions',
    links: [
      { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
      { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
      { label: 'Gonflement après les implants', href: '/gonflement-apres-implants' },
      { label: 'Parler normalement', href: '/parler-normalement-apres-implants' },
      { label: 'Travailler le lendemain', href: '/travailler-lendemain-pose-implants' },
      { label: 'Échec d\'implant : que faire ?', href: '/echec-implant-que-faire' },
      { label: 'Taux de succès des implants', href: '/taux-succes-implants-dentaires' },
    ],
  },
  {
    title: 'Coût et financement',
    links: [
      { label: 'Pourquoi si cher ?', href: '/pourquoi-bridge-implants-si-cher' },
      { label: 'Financement', href: '/financement-bridge-implants' },
      { label: 'Remboursement Sécu / mutuelle', href: '/remboursement-implants-secu-mutuelle' },
      { label: 'Bridge implants Turquie vs France', href: '/bridge-implants-turquie-vs-france' },
    ],
  },
  {
    title: 'Zones géographiques',
    links: [
      { label: 'Paris Centre', href: '/bridge-implants-paris-centre' },
      { label: 'Rive Gauche', href: '/bridge-implants-paris-rive-gauche' },
      { label: 'Grands Boulevards', href: '/bridge-implants-paris-grands-boulevards' },
      { label: 'Paris Sud', href: '/bridge-implants-paris-sud' },
      { label: 'Paris Ouest', href: '/bridge-implants-paris-ouest' },
      { label: 'Île-de-France', href: '/bridge-implants-ile-de-france' },
      { label: 'Patients de province', href: '/bridge-implants-province-paris' },
    ],
  },
  {
    title: 'Informations légales',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { label: 'Plan du site', href: '/plan-du-site' },
    ],
  },
]

export default function PlanDuSitePage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-white border-b border-neutral-100 py-10 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Plan du site' }]} />
          <h1 className="font-serif text-h1 font-bold mb-3">Plan du site</h1>
          <p className="text-lead text-neutral-600">Retrouvez ici l'ensemble des pages du site, classées par thématique.</p>
        </div>
      </div>

      <section className="section px-4">
        <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-h3 font-bold text-neutral-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-neutral-600 hover:text-brand-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
