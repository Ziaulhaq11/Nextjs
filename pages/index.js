import { server } from '../config';
import ArticleList from '../components/Articles'
 //It should be module.css only for styling

export default function Home({ articles }) {
  return (
    <div >
      <ArticleList articles={articles} />

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

//Three Methods to fetch the data. 
//GetStaticProps which fetch it build time
//GetServerSideProps -- fetch data at the request rather than static props which fetch at build time
//GetStaticPaths -- Dynamically generate paths based on type of data we are fetching

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }