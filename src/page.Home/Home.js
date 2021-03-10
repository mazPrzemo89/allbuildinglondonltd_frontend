import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import SecHeader from './HeaderSecondary'
import MainPicture from './MainPicture'
import UpperContent from './UpperContent'
import css from './Home.module.css'
const LazyVideo = React.lazy(() => import('../Components/Video/videoComponent'))
const Home = () => {
  return (
    <Layout>
      <SecHeader></SecHeader>
      <MainPicture></MainPicture>
      <UpperContent></UpperContent>
      <div className={css.videoDiv}>
        <div className={css.videoQuote}>
          We can also provide custom made <br /> built-in furniture for any kind
          of space. <br />
          <Link to="/getquote" className={css.quoteLink}>
            Get a quote to find out more!
          </Link>
        </div>
        <div className={css.videoDimmensions}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyVideo />
          </Suspense>
        </div>
      </div>
      <p className={css.subquote}>
        All Building London ltd is working closley with Polish Roots Limited
        Company.
      </p>
      <p className={css.subquote}>Wanna see what our customers say about us?</p>
      <div className={css.sublinkDiv}>
        <a href="/comments" className={css.subquotelink}>
          Check out the comment section!
        </a>
      </div>
    </Layout>
  )
}

export default Home
