import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/seo'

// ─── Liste exhaustive des 150 URLs ───────────────────────────────────────────
// Ajouter ici chaque nouvelle page créée — le sitemap.xml se régénère automatiquement

const STATIC_PAGES: { url: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  // Pages prioritaires
  { url: '/',                                       changeFrequency: 'weekly',  priority: 1.0 },
  { url: '/consultation-implants-paris',            changeFrequency: 'monthly', priority: 0.9 },
  { url: '/bridge-complet-sur-implants',            changeFrequency: 'monthly', priority: 0.95 },
  { url: '/all-on-4',                               changeFrequency: 'monthly', priority: 0.9 },
  { url: '/all-on-6',                               changeFrequency: 'monthly', priority: 0.9 },
  { url: '/prix-bridge-complet-implants',           changeFrequency: 'monthly', priority: 0.9 },
  { url: '/chirurgien-implantologiste-paris',       changeFrequency: 'monthly', priority: 0.85 },
  { url: '/faq-bridge-complet-implants',            changeFrequency: 'monthly', priority: 0.85 },
  { url: '/temoignages-patients-bridge-implants',   changeFrequency: 'monthly', priority: 0.85 },
  { url: '/glossaire-implantologie',                changeFrequency: 'monthly', priority: 0.6 },

  // Techniques
  { url: '/all-on-x',                              changeFrequency: 'monthly', priority: 0.8 },
  { url: '/all-on-4-vs-all-on-6-comparaison',      changeFrequency: 'monthly', priority: 0.75 },
  { url: '/prothese-provisoire-definitive-implants', changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-transvisse-implants',            changeFrequency: 'monthly', priority: 0.75 },
  { url: '/extraction-implantation-immediate',     changeFrequency: 'monthly', priority: 0.75 },
  { url: '/mise-en-charge-immediate',              changeFrequency: 'monthly', priority: 0.8 },
  { url: '/implants-zygomatiques',                 changeFrequency: 'monthly', priority: 0.75 },
  { url: '/implants-pterygoidiens',                changeFrequency: 'monthly', priority: 0.75 },
  { url: '/bridge-complet-une-journee',            changeFrequency: 'monthly', priority: 0.8 },
  { url: '/greffe-osseuse-bridge-implants',        changeFrequency: 'monthly', priority: 0.75 },
  { url: '/sinus-lift-implants',                   changeFrequency: 'monthly', priority: 0.75 },
  { url: '/scanner-cbct-implants',                 changeFrequency: 'monthly', priority: 0.7 },
  { url: '/guide-chirurgical-implants',            changeFrequency: 'monthly', priority: 0.7 },
  { url: '/materiaux-bridge-implants',             changeFrequency: 'monthly', priority: 0.7 },
  { url: '/duree-vie-bridge-implants',             changeFrequency: 'monthly', priority: 0.75 },
  { url: '/entretien-bridge-implants',             changeFrequency: 'monthly', priority: 0.7 },
  { url: '/sedation-consciente-implants',          changeFrequency: 'monthly', priority: 0.8 },
  { url: '/anesthesie-generale-bridge-implants',   changeFrequency: 'monthly', priority: 0.7 },
  { url: '/deroulement-journee-traitement',        changeFrequency: 'monthly', priority: 0.85 },
  { url: '/suites-operatoires-implants',           changeFrequency: 'monthly', priority: 0.75 },
  { url: '/alimentation-apres-bridge-implants',    changeFrequency: 'monthly', priority: 0.7 },

  // Situations cliniques
  { url: '/edenté-total-solution-implants',        changeFrequency: 'monthly', priority: 0.8 },
  { url: '/perdre-toutes-dents-solution',          changeFrequency: 'monthly', priority: 0.8 },
  { url: '/dents-qui-bougent-parodontite',         changeFrequency: 'monthly', priority: 0.75 },
  { url: '/parodontite-et-implants',               changeFrequency: 'monthly', priority: 0.75 },
  { url: '/appareil-complet-bridge-implants',      changeFrequency: 'monthly', priority: 0.8 },
  { url: '/deteste-dentier-alternative-fixe',      changeFrequency: 'monthly', priority: 0.8 },
  { url: '/peu-os-implants-possible',              changeFrequency: 'monthly', priority: 0.8 },
  { url: '/implants-diabetes',                     changeFrequency: 'monthly', priority: 0.7 },
  { url: '/implants-apres-chimiotherapie',         changeFrequency: 'monthly', priority: 0.7 },
  { url: '/contre-indications-implants-dentaires', changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-personnes-agees',       changeFrequency: 'monthly', priority: 0.75 },
  { url: '/implants-tabac-risques',                changeFrequency: 'monthly', priority: 0.7 },
  { url: '/dentier-vs-bridge-implants',            changeFrequency: 'monthly', priority: 0.75 },

  // Peurs
  { url: '/peur-implants-dentaires',               changeFrequency: 'monthly', priority: 0.85 },
  { url: '/douleur-bridge-implants',               changeFrequency: 'monthly', priority: 0.85 },
  { url: '/gonflement-apres-implants',             changeFrequency: 'monthly', priority: 0.75 },
  { url: '/parler-normalement-apres-implants',     changeFrequency: 'monthly', priority: 0.75 },
  { url: '/travailler-lendemain-pose-implants',    changeFrequency: 'monthly', priority: 0.75 },
  { url: '/echec-implant-que-faire',               changeFrequency: 'monthly', priority: 0.75 },
  { url: '/taux-succes-implants-dentaires',        changeFrequency: 'monthly', priority: 0.8 },

  // Coût
  { url: '/pourquoi-bridge-implants-si-cher',      changeFrequency: 'monthly', priority: 0.8 },
  { url: '/financement-bridge-implants',           changeFrequency: 'monthly', priority: 0.85 },
  { url: '/remboursement-implants-secu-mutuelle',  changeFrequency: 'monthly', priority: 0.8 },
  { url: '/bridge-implants-turquie-vs-france',     changeFrequency: 'monthly', priority: 0.75 },

  // Local SEO
  { url: '/bridge-implants-paris-centre',          changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-paris-rive-gauche',     changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-paris-grands-boulevards', changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-paris-sud',             changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-paris-ouest',           changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-ile-de-france',         changeFrequency: 'monthly', priority: 0.7 },
  { url: '/bridge-implants-province-paris',        changeFrequency: 'monthly', priority: 0.65 },

  // Pages légales
  { url: '/mentions-legales',                      changeFrequency: 'yearly',  priority: 0.3 },
  { url: '/politique-confidentialite',             changeFrequency: 'yearly',  priority: 0.3 },
  { url: '/plan-du-site',                          changeFrequency: 'monthly', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_PAGES.map(({ url, changeFrequency, priority }) => ({
    url: `${SITE_CONFIG.siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
