# Bridge Implant Paris — Site Next.js

Site de référence sur le bridge complet sur implants, optimisé SEO et LLM.

---

## 🚀 Démarrage rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer en mode développement
```bash
npm run dev
```
→ Ouvrir http://localhost:3000

### 3. Builder pour la production
```bash
npm run build
```

---

## ⚙️ Configuration initiale obligatoire

Avant de mettre en ligne, ouvrir `/lib/seo.ts` et remplir :

```typescript
doctorName:    'Dr Prénom Nom',
address:       '12 rue de la Paix',
postalCode:    '75002',
phone:         '01 42 XX XX XX',
siteUrl:       'https://www.votre-domaine.fr',
googleMapsUrl: 'https://maps.google.com/?q=...',
doctolib:      'https://www.doctolib.fr/...',
```

---

## 📁 Architecture des fichiers

```
bridge-implant-paris/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx                # Layout global (header, footer, SEO)
│   ├── page.tsx                  # Page d'accueil
│   ├── sitemap.ts                # Sitemap auto-généré → /sitemap.xml
│   ├── robots.ts                 # robots.txt auto-généré
│   ├── globals.css               # Styles globaux + classes utilitaires
│   ├── bridge-complet-sur-implants/page.tsx   # Page pilier
│   ├── consultation-implants-paris/page.tsx   # Page de conversion
│   └── [150 autres pages à créer...]
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation sticky avec menus déroulants
│   │   └── Footer.tsx            # Footer avec CTA et liens
│   ├── ui/
│   │   ├── Breadcrumb.tsx        # Fil d'Ariane + Schema.org
│   │   └── CTABox.tsx            # Bloc appel à l'action réutilisable
│   └── sections/                 # Sections réutilisables (à créer)
│
├── lib/
│   └── seo.ts                    # ⭐ Config centrale SEO + helpers Schema.org
│
└── public/
    └── images/                   # Photos du docteur, cas cliniques...
```

---

## 📝 Ajouter une nouvelle page

1. Créer un dossier : `app/nom-de-la-page/`
2. Créer `page.tsx` en copiant le modèle ci-dessous
3. Ajouter l'URL dans `app/sitemap.ts`

### Modèle de page (copier-coller)

```tsx
import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/seo'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABox from '@/components/ui/CTABox'

export const metadata: Metadata = {
  title: 'Titre de la page | Dr Nom',
  description: 'Description de 155 caractères max avec mot-clé principal.',
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/url-de-la-page` },
}

export default function NomDeLaPage() {
  return (
    <>
      <div className="bg-neutral-50 border-b border-neutral-100 py-10 px-4">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Nom de la page' }]} />
          <h1 className="font-serif text-h1 font-bold">Titre H1</h1>
        </div>
      </div>

      <article className="section">
        <div className="container-content">
          {/* Votre contenu ici */}
          <CTABox />
        </div>
      </article>
    </>
  )
}
```

---

## 🌐 Déploiement sur Vercel (recommandé, gratuit)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre dépôt GitHub
3. Cliquer "Deploy" — c'est tout
4. Configurer votre nom de domaine dans les settings Vercel

---

## 🔍 SEO — Ce qui est déjà en place

- ✅ Métadonnées dynamiques par page (title, description, canonical)
- ✅ OpenGraph et Twitter Cards
- ✅ Schema.org JSON-LD : LocalBusiness/Dentist, MedicalProcedure, FAQPage, BreadcrumbList
- ✅ sitemap.xml auto-généré (toutes les 150 pages)
- ✅ robots.txt optimisé
- ✅ Polices Google optimisées (next/font — pas de CLS)
- ✅ Images responsive (à compléter avec vos photos)
- ✅ Structure H1 > H2 > H3 respectée sur chaque page

---

## 📞 Support

Pour ajouter des pages, modifier du contenu ou corriger un bug : utiliser Claude avec le prompt :
> "Je travaille sur mon site Next.js bridge-implant-paris. Voici mon fichier actuel [coller le code]. Je veux [votre demande]."
