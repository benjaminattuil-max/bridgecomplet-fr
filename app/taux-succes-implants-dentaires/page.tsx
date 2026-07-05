import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Taux de Succès des Implants Dentaires : Les Vrais Chiffres | Dr Attuil' },
  description: 'Quel est le taux de réussite réel des implants dentaires à 5, 10 et 20 ans ? Le Dr Attuil détaille les chiffres des études cliniques.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/taux-succes-implants-dentaires` },
  openGraph: {
    title: 'Taux de succès des implants dentaires : les chiffres réels',
    description: 'Données cliniques sur le taux de réussite des implants dentaires à long terme, et facteurs qui l\'influencent.',
    url: `${SITE_CONFIG.siteUrl}/taux-succes-implants-dentaires`,
  },
}

const FACTORS = [
  { title: 'Expérience du praticien', impact: 'Fort', desc: 'Le nombre d\'implants posés par un chirurgien est directement corrélé à son taux de succès. Une activité exclusivement dédiée à l\'implantologie, comme celle du Dr Attuil, est un facteur favorable documenté.' },
  { title: 'Tabagisme', impact: 'Fort', desc: 'Le tabac réduit la vascularisation osseuse et peut diviser par deux le taux de succès à long terme. L\'arrêt du tabac avant et après l\'intervention améliore significativement le pronostic.' },
  { title: 'Hygiène bucco-dentaire', impact: 'Fort', desc: 'Un brossage rigoureux et l\'utilisation de brossettes interdentaires adaptées préviennent la péri-implantite, principale cause d\'échec tardif.' },
  { title: 'Qualité et quantité osseuse', impact: 'Modéré', desc: 'Évaluée par scanner 3D avant l\'intervention, elle conditionne la stabilité primaire des implants. Une greffe osseuse préalable peut compenser un déficit.' },
  { title: 'Suivi et contrôles réguliers', impact: 'Modéré', desc: 'Les visites de contrôle annuelles permettent de détecter et traiter précocement tout signe d\'alerte, avant qu\'il ne compromette l\'implant.' },
  { title: 'Maladies générales (diabète...)', impact: 'Variable', desc: 'Un diabète bien équilibré n\'est pas un obstacle majeur. Un diabète mal contrôlé peut ralentir la cicatrisation et augmenter légèrement le risque.' },
]

const FAQS = [
  {
    question: "Quel est le taux de succès des implants dentaires ?",
    answer: "Les études cliniques internationales convergent vers un taux de succès de 95 à 98% à 10 ans pour des implants posés dans de bonnes conditions. À 15-20 ans, ce taux reste élevé, généralement entre 90 et 95%, avec un suivi régulier. Le Dr Benjamin Attuil, spécialisé exclusivement en implantologie depuis plus de 15 ans, constate un taux de succès personnel comparable, proche de 98%."
  },
  {
    question: "Le taux de succès est-il le même pour un bridge complet que pour un implant unitaire ?",
    answer: "Les taux publiés sont globalement comparables. Un avantage spécifique au bridge complet sur 4 à 8 implants est que ceux-ci sont solidarisés par la prothèse : si un implant isolé venait à échouer, l'ensemble reste généralement stable, contrairement à un implant unitaire qui supporte seul une dent."
  },
  {
    question: "Comment le taux de succès évolue-t-il avec le temps ?",
    answer: "La majorité des échecs implantaires surviennent soit précocement (dans les 3 à 6 premiers mois, liés à un défaut d'ostéointégration), soit après plusieurs années (liés à une péri-implantite ou une surcharge mécanique). Passé la première année, le taux de survie annuel des implants est très élevé, généralement supérieur à 99% par an."
  },
  {
    question: "Ces taux de succès s'appliquent-ils à tous les patients ?",
    answer: "Les taux publiés sont des moyennes sur de larges populations. Le pronostic individuel dépend de facteurs propres à chaque patient : qualité osseuse, tabagisme, hygiène, maladies générales. Le bilan pré-opératoire permet d'estimer un pronostic personnalisé plutôt que de se fier uniquement aux statistiques générales."
  },
  {
    question: "Où trouver les données scientifiques sur le taux de succès des implants ?",
    answer: "De nombreuses études sont publiées dans des revues spécialisées comme le International Journal of Oral & Maxillofacial Implants ou Clinical Oral Implants Research. Le Dr Attuil se tient informé des données les plus récentes et peut vous présenter les références pertinentes à votre situation lors de la consultation."
  },
]

export default function TauxSuccesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
            { label: 'Taux de succès' }
          ]} />
          <p className="page-eyebrow">Les chiffres, sans enjolivure</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Taux de succès des implants dentaires : les vrais chiffres
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Avant de s'engager dans un traitement, il est légitime de vouloir des données précises plutôt que des promesses vagues. Voici ce que disent réellement les études cliniques sur la réussite des implants dentaires.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Le taux de succès des implants dentaires est de <strong>95 à 98% à 10 ans</strong>, et reste généralement supérieur à <strong>90%</strong> à 15-20 ans avec un suivi régulier. Ces chiffres, issus d'études cliniques internationales, sont comparables à l'expérience personnelle du Dr Benjamin Attuil, qui pratique l'implantologie exclusivement depuis plus de 15 ans.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">D'où viennent ces chiffres ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Les taux de succès implantaire sont établis à partir de larges cohortes de patients suivis sur plusieurs années, publiées dans des revues scientifiques à comité de lecture. Le "succès" est défini par des critères précis : absence de mobilité de l'implant, absence de douleur persistante, absence de perte osseuse significative autour de l'implant, et absence d'infection chronique.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ces critères stricts expliquent pourquoi les taux publiés (95-98% à 10 ans) sont considérés comme fiables : ils ne se contentent pas de mesurer si l'implant est "encore en bouche", mais s'il fonctionne réellement sans complication.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les facteurs qui influencent le taux de succès</h2>
          <div className="space-y-3 mb-10">
            {FACTORS.map((f, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className={`tag flex-shrink-0 sm:w-28 text-center ${f.impact === 'Fort' ? 'bg-gold-100 text-gold-600' : ''}`}>{f.impact === 'Fort' ? 'Impact fort' : f.impact === 'Modéré' ? 'Impact modéré' : 'Impact variable'}</span>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1 text-sm">{f.title}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Pourquoi le bridge complet a un avantage structurel</h2>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Dans un <Link href="/bridge-complet-sur-implants" className="text-brand-600 hover:underline">bridge complet sur 4 à 8 implants</Link>, les implants sont solidarisés entre eux par la prothèse. Si l'un d'eux venait à échouer — un événement rare — la prothèse reste généralement stable grâce aux autres. C'est une différence importante avec un implant unitaire, qui supporte seul une dent et n'offre pas cette redondance. Pour en savoir plus sur la conduite à tenir en cas d'échec, consultez notre page dédiée à <Link href="/echec-implant-que-faire" className="text-brand-600 hover:underline">l'échec d'implant</Link>.
          </p>

          <CTABox variant="inline"
            title="Quel est votre pronostic personnel ?"
            subtitle="Le bilan avec scanner 3D permet d'estimer votre taux de succès individuel."
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
                { label: 'Échec d\'implant : que faire ?', href: '/echec-implant-que-faire' },
                { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
                { label: 'Durée de vie du bridge sur implants', href: '/duree-vie-bridge-implants' },
                { label: 'Entretien du bridge sur implants', href: '/entretien-bridge-implants' },
                { label: 'Le chirurgien', href: '/chirurgien-implantologiste-paris' },
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
