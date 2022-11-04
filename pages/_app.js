import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // You can add here any thing that will appear on
  // every page of your application like Navbar or Footer
  // This is essentially the layout page
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
