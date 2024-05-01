import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'


export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()
  return (
    <main className={styles.StoreLayout}>
      <nav className={styles.StoreLayout__list}>
        {
          collections.map((collection: any) => (<Link className={styles.StoreLayout__chip} key={collection.id} href={'/store/' + collection.handle} >{collection.title}</Link>))
        }
      </nav>
      {children}
    </main>
  )
}