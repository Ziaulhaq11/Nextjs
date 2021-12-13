import Layout from '../components/Layout'
import '../styles/globals.css'

// npm i -g serve
//serve -s out -p 8000  -- out is a folder which comes after we do npm run build with export. p is a port number which we mention 8000 here.
function MyApp({ Component, pageProps }) {
  return (
    //Component is our page here
    // We can use any header here which will work for all pages
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
