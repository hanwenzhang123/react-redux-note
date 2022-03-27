import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {  //fetch the data here
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,    //return as props to the page that pass in to the component as props
//     },
//   }
// }


//pages/article/[id]/index.js
import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  // const router = useRouter()         //contain the parameter in the route
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {    //error if without getStaticPaths
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {   //getStaticPaths is required for dynamic static site generate pages
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))    //format to the string for params

  return {
    paths,
    fallback: false,  //return 404 if not exist
  }
}

// export const getServerSideProps = async (context) => {   //each time we go to the page, getServerSideProps runs
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article
