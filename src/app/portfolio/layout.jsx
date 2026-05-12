import styles from './page.module.css'
export const metadata = {
  title: 'Our Works',
}

export default function Layout({ children }) {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}