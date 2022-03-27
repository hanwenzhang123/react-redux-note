//pages/api/articles/index.js 

import { articles } from '../../../data'

export default function handler(req, res) {
  res.status(200).json(articles)    //resquest is success
}

//pages/api/articles/[id].js
import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {   //req.query.id -> destructuring
  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])   //send 200 code and send json data
  } else {    //when something goes wrong
    res
      .status(404)    //not found
      .json({ message: `Article with the id of ${id} is not found` })
  }
}


//pages/index.js 
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
  const res = await fetch(`${server}/api/articles`)   //fetch through api
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }


//config/index.js
const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
 
