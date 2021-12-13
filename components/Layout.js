import Nav from './Nav'
import Meta from './Meta';
import Header from './Header';
import styles from '../styles/Home.module.css'

export default function Layout({children}) {
    return (
      <>
        <Meta/>
            <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header/>
            {children}
          </main>
        </div>
      </>
    );
}