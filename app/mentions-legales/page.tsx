import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: { absolute: 'Mentions Légales | Dr Attuil' },
  description: `Mentions légales du site ${SITE_CONFIG.siteUrl.replace('https://', '')}, cabinet du ${SITE_CONFIG.doctorName}.`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/mentions-legales` },
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-white border-b border-neutral-100 py-10 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Mentions légales' }]} />
          <h1 className="font-serif text-h1 font-bold mb-3">Mentions légales</h1>
        </div>
      </div>

      <article className="section px-4">
        <div className="container-content">

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Éditeur du site</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            {SITE_CONFIG.doctorName}<br />
            {SITE_CONFIG.doctorTitle}<br />
            {SITE_CONFIG.address}, {SITE_CONFIG.postalCode} {SITE_CONFIG.city}<br />
            Téléphone : {SITE_CONFIG.phone}<br />
            Email : {SITE_CONFIG.email}<br />
            Ordre de rattachement : Conseil départemental de Paris de l'Ordre des chirurgiens-dentistes
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Directeur de la publication</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">{SITE_CONFIG.doctorName}</p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Hébergement du site</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Vercel Inc.<br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">vercel.com</a>
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Nature des informations publiées</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Les informations médicales présentes sur ce site sont fournies à titre informatif et pédagogique. Elles ne remplacent en aucun cas une consultation, un diagnostic ou un avis médical personnalisé. Seule une consultation avec {SITE_CONFIG.doctorName} ou un autre professionnel de santé qualifié permet d'évaluer une situation individuelle.
          </p>
          <p className="text-neutral-700 text-sm leading-relaxed mt-3">
            Conformément aux règles déontologiques encadrant la communication des professionnels de santé en France (Code de la santé publique, Code de déontologie des chirurgiens-dentistes), ce site a une vocation d'information loyale, claire et non trompeuse, et ne constitue pas une publicité comparative ou dénigrante envers d'autres praticiens ou établissements de santé.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Propriété intellectuelle</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            L'ensemble des contenus présents sur ce site (textes, images, logos, mise en page) est protégé au titre du droit d'auteur et de la propriété intellectuelle. Toute reproduction, même partielle, sans autorisation préalable est interdite.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Limitation de responsabilité</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            {SITE_CONFIG.doctorName} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir l'exhaustivité ou l'absence d'erreur. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site.
          </p>

          <h2 className="font-serif text-h3 font-bold mt-8 mb-3">Contact</h2>
          <p className="text-neutral-700 text-sm leading-relaxed">
            Pour toute question relative à ces mentions légales, vous pouvez contacter le cabinet au {SITE_CONFIG.phone} ou par email à {SITE_CONFIG.email}.
          </p>
        </div>
      </article>
    </div>
  )
}
