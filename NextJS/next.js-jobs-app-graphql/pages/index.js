import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const  home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jobs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pragmatic Reviews Sample Jobs App
        </h1>

        <ul>
      <li>
        <Link href="/jobs/111">
          <a>Go to pages/post/[jobId].js</a>
        </Link>
      </li>
      <li>
        <Link href="/jobs/111?location=Remote">
          <a>Also goes to pages/jobs/[jobId].js</a>
        </Link>
      </li>
      <li>
        <Link href="/jobs/111/some-question-id">
          <a>Go to pages/jobs/[jobId]/[questionId].js</a>
        </Link>
      </li>
    </ul>        



      </main>

      <footer className={styles.footer}>
          Powered by Pragmatic Reviews
      </footer>
    </div>
  )
}

export default home;