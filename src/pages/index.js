import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Gotta cope with laif"
        src="https://gumlet.assettype.com/afkgaming%2F2021-08%2F79649079-d0e7-4acd-853b-6a2b92797da3%2Fcopium_png.png?format=auto"
      />
      <StaticImage
        alt="Pepe Is Sad"
        src="../images/feelsbadman.png"
      />
      </Layout>
    </main>
  )
}

export default IndexPage