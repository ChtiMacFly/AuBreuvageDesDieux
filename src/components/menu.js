import React, { Component } from 'react'
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Pour avoir les liens dans les menus avec la classe active
/*

const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const Praline = () => (
    <StaticQuery
        query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "piano-choco-320.png" }) {
            childImageSharp {
              fixed(width: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
        render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
    />
)
*/

/* Bandeau du haut avec le menu */
/*
export default class MenuBandeau extends Component {
    render() {
        return (
            <Segment inverted >
                <Menu inverted>
                    <LinkedItem to="/">Accueil</LinkedItem>
                    <LinkedItem to="/markdown/pralines">
                        <Praline />&nbsp;
                    Mes pralines</LinkedItem>
                    <LinkedItem to="/markdown/confiseries">Mes confiseries</LinkedItem>
                    <LinkedItem to="/markdown/sculptures">Mes sculptures en chocolat</LinkedItem>
                </Menu>
            </Segment >
        )
    }
}
*/