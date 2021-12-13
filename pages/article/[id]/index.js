import Meta from '../../../components/Meta';
import { server } from '../../../config';
import Link from 'next/link'
import { useRouter } from "next/router";

const article = ({ article }) => {
  console.log(article)
    // const router = useRouter()
    // const {id} = router.query
    // <div>This is an article no . {id} </div>;
    return (
      <>
        <Meta title={article.title} description={article.excerpt}/>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}


export const getStaticProps = async (context) => { //we cant call like this it will throw an error saying getStaticPaths is required for dynamic SSG Pages
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  // );
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json();
  // console.log(article)
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => { //Now we just have 6 articles in homepage but if we type in url article 16 . It loads bc we have fetched all posts here
    // const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts`
    // );
  const res = await fetch(`${server}/api/articles`)
  console.log(res)
    const articles = await res.json();
    const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))
  console.log(paths)
    return {
        paths,
        fallback : false, //This means if we go to articles/15 which is not there it will show up 404 page
    }
}

// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     // console.log(article)
//     return {
//         props: {
//             article
//         }
//     }
// } 


//For not showing 404 
export default article;