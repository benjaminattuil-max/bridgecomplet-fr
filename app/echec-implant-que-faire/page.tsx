import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateMedicalConditionSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Échec d\'un Implant Dentaire : Causes, Signes et Solutions | Dr Attuil' },
  description: 'Que se passe-t-il si un implant échoue dans un bridge complet ? Le Dr Attuil explique le taux de succès réel, les signes d\'alerte et les solutions.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/echec-implant-que-faire` },
  openGraph: {
    title: 'Échec d\'implant dentaire : ce qu\'il faut vraiment savoir',
    description: 'Taux de succès réel, signes d\'alerte, causes et solutions en cas d\'échec d\'un implant dans un bridge complet.',
    url: `${SITE_CONFIG.siteUrl}/echec-implant-que-faire`,
  },
}

const SIGNS = [
  { title: 'Mobilité de l\'implant', desc: 'Un implant correctement intégré est totalement immobile. Une sensation de mouvement, même minime, doit être signalée au cabinet.' },
  { title: 'Douleur persistante ou croissante', desc: 'Contrairement à la gêne post-opératoire normale qui diminue avec le temps, une douleur qui persiste au-delà de 2 semaines ou qui s\'aggrave doit alerter.' },
  { title: 'Inflammation ou saignement de la gencive', desc: 'Une gencive rouge, gonflée ou qui saigne facilement autour d\'un implant, en dehors de la période post-opératoire immédiate, peut signaler une péri-implantite.' },
  { title: 'Perte osseuse visible à la radiographie', desc: 'Détectée lors des contrôles radiographiques de routine, une résorption osseuse autour de l\'implant est un signe objectif suivi de près par le praticien.' },
]

const CAUSES = [
  { title: 'Tabagisme actif', desc: 'Le tabac réduit significativement la vascularisation osseuse et multiplie par 2 à 3 le risque d\'échec implantaire. C\'est le facteur de risque le plus documenté.' },
  { title: 'Hygiène bucco-dentaire insuffisante', desc: 'Une plaque dentaire non contrôlée autour des implants peut évoluer vers une péri-implantite, l\'équivalent d\'une parodontite appliquée aux implants.' },
  { title: 'Bruxisme non traité', desc: 'Le grincement ou serrement des dents non pris en charge (par exemple avec une gouttière de protection) exerce des forces excessives sur les implants.' },
  { title: 'Maladies générales déséquilibrées', desc: 'Un diabète mal contrôlé ou certaines pathologies osseuses peuvent ralentir la cicatrisation et l\'ostéointégration.' },
  { title: 'Surcharge occlusale ou infection', desc: 'Une répartition inadéquate des forces de mastication, ou une infection locale non traitée, peuvent compromettre la stabilité d\'un implant.' },
]

const FAQS = [
  {
    question: "Quel est le taux de succès réel des implants dentaires ?",
    answer: "Les études cliniques publiées font état d'un taux de succès de 95 à 98% à 10 ans pour les implants dentaires posés dans de bonnes conditions. Le Dr Benjamin Attuil, qui pratique l'implantologie exclusivement depuis plus de 15 ans, constate un taux de succès personnel comparable, proche de 98%."
  },
  {
    question: "Que se passe-t-il si un implant échoue dans un bridge complet ?",
    answer: "C'est précisément l'un des avantages structurels du bridge complet sur 4 à 8 implants : si un implant isolé ne s'intègre pas, la prothèse reste généralement stable grâce aux autres implants qui la soutiennent. L'implant en échec est déposé, la zone cicatrise, puis un nouvel implant peut être posé quelques mois plus tard, souvent sans interruption de l'usage de la prothèse existante."
  },
  {
    question: "Comment reconnaît-on un implant en échec ?",
    answer: "Les signes principaux sont une mobilité de l'implant, une douleur qui persiste ou s'aggrave au-delà de la période post-opératoire normale, une inflammation ou un saignement inhabituel de la gencive, et une perte osseuse visible sur les radiographies de contrôle. Ces signes doivent être signalés rapidement au cabinet."
  },
  {
    question: "Un échec précoce est-il différent d'un échec tardif ?",
    answer: "Oui. Un échec précoce survient avant ou pendant l'ostéointégration (dans les premières semaines à mois), le plus souvent lié à une stabilité primaire insuffisante ou une infection. Un échec tardif survient des années après, généralement lié à une péri-implantite (infection chronique autour d'un implant déjà bien intégré) ou une surcharge mécanique."
  },
  {
    question: "Peut-on remplacer un implant qui a échoué ?",
    answer: "Oui, dans la grande majorité des cas. Après la dépose de l'implant en échec, la zone doit cicatriser pendant 2 à 4 mois, parfois avec une greffe osseuse complémentaire si nécessaire. Un nouvel implant peut ensuite être posé avec de bonnes chances de succès, à condition d'avoir identifié et traité la cause de l'échec initial."
  },
  {
    question: "Comment réduire le risque d'échec de ses implants ?",
    answer: "Les leviers principaux sont : choisir un praticien expérimenté en implantologie, arrêter le tabac avant et après l'intervention, maintenir une hygiène bucco-dentaire rigoureuse avec les brossettes adaptées, traiter un éventuel bruxisme, et respecter les visites de contrôle annuelles qui permettent de détecter précocement tout signe d'alerte."
  },
]

export default function EchecImplantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateMedicalConditionSchema(
          'Échec d\'implant dentaire',
          'Absence d\'ostéointégration ou perte secondaire d\'un implant dentaire, situation rare (2 à 5% des cas) qui peut survenir précocement ou tardivement après la pose.',
          'Dépose de l\'implant, cicatrisation osseuse puis repose d\'un nouvel implant après traitement de la cause identifiée'
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
            { label: 'Échec d\'implant' }
          ]} />
          <p className="page-eyebrow">La peur du pire scénario</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Échec d'implant : que faire, et quel est le vrai risque ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            C'est souvent la crainte silencieuse derrière la décision de se faire poser des implants. Voici les chiffres réels, les signes qui doivent alerter, et — surtout — pourquoi un échec isolé n'est presque jamais une catastrophe dans un bridge complet.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Le taux de succès des implants dentaires est de <strong>95 à 98% à 10 ans</strong>. En cas d'échec d'un implant isolé au sein d'un bridge complet, la prothèse reste généralement stable grâce aux autres implants — l'implant concerné est <strong>déposé puis remplacé</strong> après cicatrisation, sans tout recommencer.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Le taux de succès réel des implants dentaires</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Contrairement à une idée reçue, l'échec implantaire est <strong>rare</strong>. Les études cliniques internationales publiées convergent vers un taux de succès de <strong>95 à 98% à 10 ans</strong> pour des implants posés dans de bonnes conditions par un praticien expérimenté. Le Dr Benjamin Attuil, dont l'activité est exclusivement dédiée à l'implantologie depuis plus de 15 ans, constate un taux de succès personnel comparable.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce taux dépend directement de trois facteurs bien identifiés : la <strong>rigueur du bilan pré-opératoire</strong> (scanner 3D, planification numérique), l'<strong>expérience du praticien</strong>, et le <strong>respect des consignes</strong> par le patient après l'intervention (hygiène, suivi, absence de tabac).
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Pourquoi un échec isolé n'est presque jamais dramatique dans un bridge complet</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            C'est un point que beaucoup de patients ignorent, et qui change complètement la perspective sur cette peur : dans un bridge complet posé sur <strong>4 à 8 implants</strong>, ceux-ci sont solidarisés entre eux par la prothèse. Cette architecture répartit les forces sur l'ensemble des piliers.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Si un implant isolé venait à échouer, la prothèse reste dans la grande majorité des cas <strong>stable et fonctionnelle</strong> grâce aux implants restants, le temps qu'une solution soit mise en place. Ce n'est en rien comparable à l'échec d'un implant unitaire (une seule dent), où le remplacement est plus immédiatement nécessaire.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les signes qui doivent alerter</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {SIGNS.map((s) => (
              <div key={s.title} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-semibold text-neutral-800 mb-2 text-sm">{s.title}</p>
                <p className="text-neutral-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Un échec <strong>précoce</strong> survient avant ou pendant l'ostéointégration (les premières semaines à mois), le plus souvent lié à une stabilité primaire insuffisante ou une infection. Un échec <strong>tardif</strong> survient parfois des années après, généralement lié à une péri-implantite ou une surcharge mécanique — d'où l'importance des <strong>visites de contrôle annuelles</strong>.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">Les causes principales d'échec</h2>
          <div className="space-y-3 mb-10">
            {CAUSES.map((c, i) => (
              <div key={i} className="flex gap-4 border-l-2 border-neutral-200 pl-4 py-1">
                <div>
                  <p className="font-semibold text-neutral-800 text-sm mb-1">{c.title}</p>
                  <p className="text-neutral-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="Minimiser le risque avant même la pose"
            subtitle="Un bilan rigoureux et un praticien expérimenté sont les meilleures garanties de succès."
          />

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Que faire concrètement en cas d'échec ?</h2>
          <ol className="space-y-3 text-neutral-700 mb-8 text-sm list-decimal list-inside">
            <li><strong>Dépose de l'implant</strong> concerné, geste simple et rapide sous anesthésie locale.</li>
            <li><strong>Cicatrisation osseuse</strong> de la zone, sur une durée de 2 à 4 mois, parfois accompagnée d'une greffe osseuse complémentaire si nécessaire.</li>
            <li><strong>Repose d'un nouvel implant</strong>, une fois la cause de l'échec identifiée et traitée, avec de bonnes chances de succès.</li>
            <li><strong>Suivi renforcé</strong> pour s'assurer de la bonne intégration du nouvel implant.</li>
          </ol>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Pendant tout ce processus, la prothèse reste, dans la très grande majorité des cas, en place et fonctionnelle grâce aux implants restants.
          </p>

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
                { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
                { label: 'Taux de succès des implants', href: '/taux-succes-implants-dentaires' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Durée de vie du bridge sur implants', href: '/duree-vie-bridge-implants' },
                { label: 'Entretien du bridge sur implants', href: '/entretien-bridge-implants' },
                { label: 'Implants et tabac', href: '/implants-tabac-risques' },
                { label: 'Parodontite et implants', href: '/parodontite-et-implants' },
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
