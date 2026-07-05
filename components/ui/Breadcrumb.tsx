import Link from 'next/link'
import { generateBreadcrumbSchema } from '@/lib/seo'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Accueil', href: '/' }, ...items]
  const schemaItems = allItems.map(i => ({ name: i.label, url: i.href || '#' }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)) }}
      />
      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-neutral-300">/</span>}
            {item.href && i < allItems.length - 1 ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="text-neutral-600" aria-current="page">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
