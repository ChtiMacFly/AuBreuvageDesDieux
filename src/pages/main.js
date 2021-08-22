import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
    <StaticQuery
        query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "chocolat1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)

/* Contenu central */
export default class MainContent extends Component {
    render() {

        return (
                <Image />
        )
    }
}