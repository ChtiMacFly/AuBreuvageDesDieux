import React from 'react'
import SEO from './seo'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Pour gérer l'image de fond d'écran
import BackgroundImage from 'gatsby-background-image'

// Styles
import '../css/app.css'

const DefaultLayout = ({ data, children, isHome }) => {
  // Raccourci pour éviter d'avoir à taper
  const site = data.site.siteMetadata

  // Si on utilise Facebook ou Twitter
  const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
  const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

  return (
    <>
      {/* Pour nos métadonnées*/}
      <SEO title="Home" keywords={[`chocolat`, `beauraing`]} />

      {/* Page séparées en 3 parties : header, main, footer*/}
      <div className="viewport">
        <div className="viewport-top">
          <header className="site-head">
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Link className="site-nav-button" to="/">Accueil</Link>
                </div>
                <div className="site-mast-right">
                  {site.twitter && <a href={twitterUrl} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="../images/icons/twitter.svg" alt="Twitter" /></a>}
                  {site.facebook && <a href={facebookUrl} className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="../images/icons/facebook.svg" alt="Facebook" /></a>}
                </div>
              </div>
              {isHome ?
                <div className="site-banner">
                    <h1 className="site-banner-title">{site.title}</h1>
                    <p className="site-banner-desc">{site.description}</p>
                </div> :
                null}
              <nav className="site-nav">
                <div className="site-nav-left">
                  {/* Les liens de navigation */}
                  <p>???</p>
                </div>
                <div className="site-nav-right">
                  <Link className="site-nav-button" to="/about">A propos</Link>
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {children}
          </main>
        </div>

        {/* The footer at the very bottom of the screen */}
        <div className="viewport-bottom">
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                <Link to="/">{site.title}</Link> © 2019
        </div>
              <div className="site-foot-nav-right">

              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

// Voir https://www.gatsbyjs.org/packages/gatsby-background-image/
const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query SiteSettings {
        site {
          siteMetadata {
            title
            description
            twitter
            facebook
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
//export default BackgroundSection