import React, { Component } from 'react'
import Layout from '../components/layout'

/* Pour un navigateur standard */
class DesktopContainer extends Component {
  render = () => (
    <Layout isHome={true}>
      <p>Page 1</p>
    </Layout>
  )
}

/* Contenu principal à placer ici */
const HomepageLayout = () => (
  <DesktopContainer>
    
  </DesktopContainer>
)

export default HomepageLayout