import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import imgA from '../images/sunset.jpg';
import imgB from '../images/brg.jpg';
import imgC from '../images/my_qr.png';

const AboutPage = ({ location, data }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo title="About" />
      <h1>About minion</h1>
      <div className="aboutstyle">
      <p><img alt="iPhone_01" src={imgB} width='600' height='400'/></p>
      <p>
          안녕하세요<br/>
          다양한 미니언을 공유하는 블로그입니다.
      </p>
      <p>급변하는 시대에서 필요한 미니언들을 접목하여 새로운 미니언들을 창출할 수 있도록 노력합니다.</p>
      <p>미니언을 공유하고 더 나은 미니언으로 나아가는 것을 추구합니다.</p>
      <p><img src={imgA} alt="iPhone_11" /></p>
      <p>
          QR Code<br/>
          <img src={imgC} alt="qr" width="150"/>
      </p>
      </div>
    </Layout>
  )
  
  export default AboutPage
  
  export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `