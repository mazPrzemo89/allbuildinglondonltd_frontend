import React from 'react'
import Layout from '../Layout/Layout'
import SecHeader from '../HeaderSecondary/HeaderSecondary'
import MainPicture from '../MainPicture/MainPicture'
import UpperContent from '../UpperContent/UpperContent'
import css from './Home.module.css'

const Home = () => (
  <Layout>
    <SecHeader></SecHeader>
    <MainPicture></MainPicture>
    <UpperContent></UpperContent>
    <p className={css.subquote}>Wanna see what our customers say about us?</p>
    <div className={css.sublinkDiv}>
      <a href="/comments" className={css.subquotelink}>
        Check out the comment section!
      </a>
    </div>
  </Layout>
)

export default Home
