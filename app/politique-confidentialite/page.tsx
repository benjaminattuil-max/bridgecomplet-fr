import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: { absolute: 'Politique de Confidentialité | Dr Attuil' },
  description: `Politique de confidentialité et protection des données personnelles du site ${SITE_CONFIG.siteUrl.replace('https://', '')}.`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/politique-confidentialite` },
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-white border-b border-neutral-100 py-10 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Politique de confidentialité' }]} />
          <h1 className="font-serif text-h1 font-bold mb-3">Politique de confidentialité</h1>
        </div>
      </div>

      <article className="section px-4">
        <div className="container-content">

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Responsable du traitement</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            {SITE_CONFIG.doctorName}, {SITE_CONFIG.address}, {SITE_CONFIG.postalCode} {SITE_CONFIG.city}, est responsable du traitement des données personnelles collectées via ce site, au sens du Règlement Général sur la Protection des Données (RGPD).
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Données collectées</h2>
          <p className="text-neutral-700 text-sm leading-relaxed mb-2">
            Lorsque vous utilisez le formulaire de prise de rendez-vous, les données suivantes sont collectées :
          </p>
          <ul className="text-neutral-700 text-sm leading-relaxed list-disc list-inside space-y-1">
            <li>Prénom et nom</li>
            <li>Numéro de téléphone</li>
            <li>Adresse email (facultative)</li>
            <li>Situation clinique déclarée et message éventuel</li>
          </ul>
          <p className="text-neutral-700 text-sm leading-relaxed mt-3">
            Ces données, dont certaines peuvent constituer des données de santé, bénéficient d'une protection renforcée conformément à l'article 9 du RGPD et sont traitées avec la plus stricte confidentialité, dans le respect du secret médical.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Finalité du traitement</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Ces données sont utilisées exclusivement pour traiter votre demande de rendez-vous ou d'information, vous recontacter, et assurer le suivi de votre prise en charge le cas échéant. Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Base légale</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Le traitement repose sur votre consentement explicite, recueilli lors de la soumission du formulaire, ainsi que sur l'intérêt légitime du cabinet à répondre aux demandes de prise de contact.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Durée de conservation</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Les données des demandes de contact non suivies d'une prise en charge sont conservées pendant une durée maximale de 3 ans. Les données des patients suivis au cabinet sont conservées conformément aux obligations légales de conservation des dossiers médicaux.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Vos droits</h2>
          <p className="text-neutral-700 text-sm leading-relaxed mb-2">
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul className="text-neutral-700 text-sm leading-relaxed list-disc list-inside space-y-1">
            <li>Droit d'accès et de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p className="text-neutral-700 text-sm leading-relaxed mt-3">
            Pour exercer ces droits, contactez le cabinet à {SITE_CONFIG.email} ou par courrier à l'adresse du cabinet. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Cookies</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement préalable, conformément à la réglementation en vigueur.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Hébergement des données</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Le site est hébergé par Vercel Inc. (États-Unis). Les demandes de contact transmises via le formulaire sont traitées conformément aux normes de sécurité applicables aux données de santé.
          </p>
        </div>
      </article>
    </div>
  )
}
