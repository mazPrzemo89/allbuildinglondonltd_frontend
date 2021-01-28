import React from 'react'
import Layout from '../Components/Layout/Layout'
import SecHeader from './HeaderSecondary'
import MainPicture from './MainPicture'
import UpperContent from './UpperContent'
import css from './Home.module.css'

const Home = () => (
  <Layout>
    <SecHeader></SecHeader>
    <MainPicture></MainPicture>
    <UpperContent></UpperContent>
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

export default Home
