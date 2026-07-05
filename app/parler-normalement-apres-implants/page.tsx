import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, generateHowToSchema, generateFAQSchema } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: { absolute: 'Peut-on Parler Normalement Après un Bridge sur Implants ? | Dr Attuil' },
  description: 'La prothèse fixe sur implants modifie-t-elle la façon de parler ? Le Dr Attuil explique l\'adaptation phonétique et les exercices pour la raccourcir.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/parler-normalement-apres-implants` },
  openGraph: {
    title: 'Parler normalement avec un bridge complet sur implants : le vrai délai',
    description: 'Combien de temps faut-il pour retrouver une élocution normale après la pose d\'un bridge complet sur implants ? Réponse et exercices pratiques.',
    url: `${SITE_CONFIG.siteUrl}/parler-normalement-apres-implants`,
  },
}

const EXERCISES = [
  { name: 'Lecture à voix haute', text: 'Lisez un texte à voix haute pendant 10 à 15 minutes par jour, en articulant volontairement chaque mot. Cet exercice, simple et efficace, est le plus recommandé par les praticiens pour accélérer la réadaptation neuromusculaire de la langue et des lèvres.' },
  { name: 'Répétition des sons difficiles', text: 'Isolez les sons qui vous paraissent les plus délicats — souvent les "S", "F", "V" et "T" — et répétez des mots ou phrases qui les contiennent plusieurs fois de suite, lentement puis à vitesse normale.' },
  { name: 'Enregistrement de sa propre voix', text: 'Enregistrez-vous en train de lire un texte puis réécoutez-vous. Cette technique permet de repérer objectivement les sons qui posent encore difficulté et de mesurer vos progrès de semaine en semaine.' },
  { name: 'Conversation active', text: 'Ne réduisez pas les échanges oraux par appréhension : plus vous parlez, plus la langue et les lèvres s\'adaptent vite à la nouvelle géométrie de la prothèse. Privilégiez les appels téléphoniques et les conversations, particulièrement efficaces pour cet apprentissage.' },
]

const FAQS = [
  {
    question: "Va-t-on parler différemment avec un bridge complet sur implants ?",
    answer: "Temporairement, oui, dans une mesure généralement modeste. La prothèse introduit un nouveau volume en bouche que la langue et les lèvres doivent apprendre à contourner pour articuler certains sons. Cette période d'adaptation est transitoire : la grande majorité des patients retrouvent une élocution totalement normale."
  },
  {
    question: "Combien de temps dure la période d'adaptation phonétique ?",
    answer: "Elle varie selon les patients, mais se situe généralement entre quelques jours et 2 à 3 semaines. Les premiers jours sont souvent les plus marqués, avec une nette amélioration progressive. Les exercices de lecture à voix haute et de conversation active permettent de raccourcir sensiblement ce délai."
  },
  {
    question: "Le bridge du haut affecte-t-il plus la parole que celui du bas ?",
    answer: "Oui, en général. Le bridge maxillaire (mâchoire du haut) recouvre une partie du palais, une zone directement impliquée dans l'articulation de nombreux sons, notamment les 'S' et 'T'. Le bridge mandibulaire (mâchoire du bas) a généralement moins d'impact sur la phonétique, car il ne modifie pas la voûte palatine."
  },
  {
    question: "La prothèse provisoire pose-t-elle plus de difficultés que la définitive ?",
    answer: "Les deux sont conçues pour optimiser la phonétique dès leur pose. Cependant, la prothèse définitive en zircone, réalisée après un ajustement précis basé sur le retour d'expérience de la période provisoire, offre souvent un résultat encore plus proche d'une élocution naturelle."
  },
  {
    question: "Peut-on faire ajuster la prothèse si la gêne pour parler persiste ?",
    answer: "Oui. Si un inconfort phonétique persiste au-delà de quelques semaines, le Dr Attuil peut réaliser des ajustements ciblés — modification de l'épaisseur ou du contour de la prothèse au niveau du palais notamment — pour améliorer le confort d'élocution, aussi bien sur la prothèse provisoire que définitive."
  },
  {
    question: "Est-ce grave si l'on zozote ou chuinte les premiers jours ?",
    answer: "Non, c'est un phénomène très fréquent et temporaire, sans aucune gravité. Il touche la majorité des patients porteurs d'une nouvelle prothèse fixe, qu'elle soit sur implants ou non. Il disparaît avec la pratique, à mesure que la langue mémorise les nouveaux repères en bouche."
  },
]

export default function ParlerNormalementApresImplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateHowToSchema(
          'Retrouver une élocution normale après la pose d\'un bridge complet sur implants',
          'Exercices recommandés pour accélérer la période d\'adaptation phonétique après la pose d\'une prothèse fixe sur implants dentaires.',
          EXERCISES
        )
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }} />

      <div className="bg-neutral-50 border-b border-neutral-100 py-12 px-4">
        <div className="container-content">
          <Breadcrumb items={[
            { label: 'Bridge complet sur implants', href: '/bridge-complet-sur-implants' },
            { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
            { label: 'Parler normalement' }
          ]} />
          <p className="page-eyebrow">Une peur peu exprimée, très fréquente</p>
          <h1 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
            Peut-on parler normalement avec un bridge complet sur implants ?
          </h1>
          <p className="text-lead text-neutral-600 max-w-2xl">
            Beaucoup de patients redoutent en silence de "parler bizarrement" avec leur nouvelle prothèse — une inquiétude légitime mais rarement abordée spontanément. Voici la réalité du délai d'adaptation et comment le raccourcir.
          </p>
        </div>
      </div>

      <article className="section">
        <div className="container-content">

          <div className="bg-brand-50 border border-brand-100 rounded-sm p-6 mb-10">
            <p className="font-serif font-semibold text-brand-800 mb-2">Réponse courte</p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Oui, on parle normalement avec un bridge complet sur implants — après une <strong>courte période d'adaptation</strong> de quelques jours à 2-3 semaines. La langue et les lèvres doivent simplement se réhabituer à un nouveau volume en bouche, exactement comme lors du port d'un premier appareil dentaire.
            </p>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4">Pourquoi la phonétique change-t-elle temporairement ?</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            Beaucoup de sons de la langue française — les "S", "T", "D", "L", "N" notamment — sont articulés grâce au contact précis de la langue contre le palais et l'arrière des dents du haut. Lorsqu'une nouvelle prothèse est posée, elle introduit un léger changement de volume et de relief en bouche, le temps que le cerveau et les muscles de la langue mémorisent ces nouveaux repères.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            Ce phénomène n'est pas spécifique aux implants : il se produit avec n'importe quelle nouvelle prothèse dentaire, un appareil orthodontique, ou même une gouttière de nuit. La différence avec un bridge sur implants, c'est que la prothèse est <strong>fixe et stable</strong> dès le premier jour — contrairement à un dentier amovible qui peut bouger en parlant, ce qui, paradoxalement, facilite souvent l'adaptation phonétique.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Bridge du haut vs bridge du bas : une différence importante</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border-2 border-brand-200 rounded-sm p-6">
              <p className="font-serif font-bold text-lg text-brand-800 mb-3">Mâchoire supérieure</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                La prothèse recouvre une partie du palais, zone essentielle pour l'articulation des "S" et "T". L'adaptation demande généralement un peu plus de temps qu'à la mâchoire inférieure, mais reste courte.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-sm p-6">
              <p className="font-serif font-bold text-lg text-neutral-800 mb-3">Mâchoire inférieure</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                La voûte palatine n'est pas concernée par la prothèse mandibulaire. L'impact sur la phonétique est généralement plus discret et l'adaptation souvent plus rapide.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-h2 font-bold mb-4 mt-12">Prothèse provisoire, puis définitive : deux étapes pensées pour la phonétique</h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            La <Link href="/mise-en-charge-immediate" className="text-brand-600 hover:underline">prothèse provisoire</Link>, posée le jour de l'intervention, est déjà conçue en tenant compte de l'esthétique et de la phonétique. Elle vous permet de commencer immédiatement à vous réadapter, sans attendre la prothèse définitive.
          </p>
          <p className="text-neutral-700 mb-8 leading-relaxed">
            La <strong>prothèse définitive en zircone</strong>, réalisée plusieurs mois plus tard, bénéficie du retour d'expérience accumulé pendant la période provisoire : le Dr Attuil peut affiner le volume et le contour de la prothèse au niveau du palais pour un confort d'élocution encore optimisé.
          </p>

          <h2 className="font-serif text-h2 font-bold mb-6 mt-12">4 exercices pour accélérer l'adaptation</h2>
          <div className="space-y-4 mb-10">
            {EXERCISES.map((ex, i) => (
              <div key={i} className="flex gap-4 border border-neutral-200 rounded-sm p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-700 text-white flex items-center justify-center font-serif font-bold text-sm">{i + 1}</span>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1 text-sm">{ex.name}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{ex.text}</p>
                </div>
              </div>
            ))}
          </div>

          <CTABox variant="inline"
            title="Une gêne pour parler qui persiste ?"
            subtitle="Un simple ajustement de la prothèse suffit souvent à résoudre le problème."
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
                { label: 'Peur des implants dentaires', href: '/peur-implants-dentaires' },
                { label: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
                { label: 'Travailler le lendemain', href: '/travailler-lendemain-pose-implants' },
                { label: 'Mise en charge immédiate', href: '/mise-en-charge-immediate' },
                { label: 'Prothèse provisoire vs définitive', href: '/prothese-provisoire-definitive-implants' },
                { label: 'Déroulement de la journée', href: '/deroulement-journee-traitement' },
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
