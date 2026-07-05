import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/seo'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.doctorName} — Spécialiste Bridge Complet sur Implants Paris`,
  description: 'Retrouvez des dents fixes en une seule journée grâce au bridge complet sur implants. Chirurgien-dentiste exclusivement dédié à l\'implantologie à Paris.',
  alternates: { canonical: SITE_CONFIG.siteUrl },
}

const REASSURANCE_ITEMS = [
  { num: '15+', label: 'Années d\'expérience exclusive en implantologie' },
  { num: '800+', label: 'Bridges complets sur implants réalisés' },
  { num: '98%', label: 'Taux de succès implantaire à 5 ans' },
  { num: '1 jour', label: 'Pour retrouver des dents fixes permanentes' },
]

const SITUATIONS = [
  { label: 'Je suis totalement édenté', href: '/edenté-total-solution-implants', icon: '○' },
  { label: 'Je vais perdre toutes mes dents', href: '/perdre-toutes-dents-solution', icon: '○' },
  { label: 'Je déteste mon dentier', href: '/deteste-dentier-alternative-fixe', icon: '○' },
  { label: 'Mes dents bougent', href: '/dents-qui-bougent-parodontite', icon: '○' },
  { label: 'J\'ai peu d\'os', href: '/peu-os-implants-possible', icon: '○' },
  { label: 'J\'ai peur des implants', href: '/peur-implants-dentaires', icon: '○' },
]

const FAQ_HOME = [
  { q: 'Est-ce douloureux ?', href: '/douleur-bridge-implants' },
  { q: 'Combien ça coûte ?', href: '/prix-bridge-complet-implants' },
  { q: 'Combien de temps dure le traitement ?', href: '/deroulement-journee-traitement' },
  { q: 'Puis-je avoir des implants si j\'ai peu d\'os ?', href: '/peu-os-implants-possible' },
  { q: 'Vais-je pouvoir travailler le lendemain ?', href: '/travailler-lendemain-pose-implants' },
  { q: 'Y a-t-il un financement possible ?', href: '/financement-bridge-implants' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="bg-brand-900 text-white py-20 md:py-28 px-4">
        <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <p className="page-eyebrow text-gold-400">Spécialiste exclusif · Paris</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-display font-bold leading-tight mb-6">
              Retrouvez des dents{' '}
              <span className="text-gold-400">fixes et permanentes</span>{' '}
              en une seule journée
            </h1>
            <p className="text-lead text-brand-200 mb-8">
              Le bridge complet sur implants (All-on-4, All-on-6) permet de poser 4 à 8 implants
              et de repartir avec des dents fixes le jour même.
              Une activité exclusivement dédiée à l'implantologie depuis plus de 15 ans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation-implants-paris" className="btn-phone">
                Prendre rendez-vous
              </Link>
              <Link href="/bridge-complet-sur-implants" className="btn-secondary border-white text-white hover:bg-brand-800">
                Découvrir le traitement
              </Link>
            </div>
          </div>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 gap-4">
            {REASSURANCE_ITEMS.map((item) => (
              <div key={item.num} className="bg-brand-800 border border-brand-700 rounded-sm p-6 text-center">
                <p className="font-serif text-4xl font-bold text-gold-400 mb-2">{item.num}</p>
                <p className="text-sm text-brand-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOTRE SITUATION ──────────────────────────────────────────────────── */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="page-eyebrow">Votre situation</p>
            <h2 className="font-serif text-h1 font-bold text-neutral-900 mb-4">
              Quelle est votre situation aujourd'hui ?
            </h2>
            <p className="text-lead text-neutral-600 max-w-2xl mx-auto">
              Chaque patient arrive avec une histoire différente. Retrouvez votre situation
              pour accéder aux informations qui vous correspondent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITUATIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white border border-neutral-200 rounded-sm p-6 flex items-center gap-4 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold group-hover:bg-brand-700 group-hover:text-white transition-all flex-shrink-0">→</span>
                <span className="font-medium text-neutral-800 group-hover:text-brand-700 transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE TRAITEMENT ────────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="page-eyebrow">Le bridge complet sur implants</p>
            <h2 className="font-serif text-h1 font-bold mb-6">
              Des dents fixes en une journée : comment est-ce possible ?
            </h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              Le bridge complet sur implants repose sur la pose de 4 à 8 implants en titane
              directement dans l'os de la mâchoire. Ces implants servent de racines artificielles
              sur lesquelles une prothèse fixe est immédiatement vissée.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Contrairement aux dentiers, cette prothèse ne bouge pas, ne se décolle pas et
              se nettoie comme de vraies dents. Les patients quittent le cabinet avec des dents
              fixes le soir même de l'intervention.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Pose de 4 à 8 implants en titane sous anesthésie locale',
                'Prothèse provisoire fixée le jour même',
                'Prothèse définitive en zircone posée 4 à 6 mois plus tard',
                'Durée de vie de 20 ans et plus avec un bon entretien',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-neutral-700 text-sm">{step}</p>
                </div>
              ))}
            </div>
            <Link href="/bridge-complet-sur-implants" className="btn-primary">
              Tout comprendre sur le traitement
            </Link>
          </div>

          {/* Placeholder visuel */}
          <div className="bg-neutral-100 rounded-sm aspect-square flex items-center justify-center text-neutral-400 text-sm">
            [Photo : schéma bridge complet sur implants]
          </div>
        </div>
      </section>

      {/* ── QUESTIONS FRÉQUENTES ─────────────────────────────────────────────── */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="page-eyebrow">Questions fréquentes</p>
            <h2 className="font-serif text-h1 font-bold mb-4">Les questions que tout le monde se pose</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {FAQ_HOME.map((faq) => (
              <Link
                key={faq.href}
                href={faq.href}
                className="bg-white border border-neutral-200 rounded-sm p-5 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <p className="font-medium text-neutral-800 group-hover:text-brand-700 transition-colors mb-1">{faq.q}</p>
                <span className="text-xs text-brand-600 font-medium">Lire la réponse →</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq-bridge-complet-implants" className="btn-secondary">
              Voir toutes les questions (50+)
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-content">
          <CTABox
            title="Vous avez un projet d'implants ? Parlons-en."
            subtitle={`Consultation de diagnostic à ${SITE_CONFIG.arrondissement} — disponibilités sous 48h`}
          />
        </div>
      </section>
    </>
  )
}
