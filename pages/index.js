import Head from 'next/head'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      
      <h1>Welcome to Next</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}