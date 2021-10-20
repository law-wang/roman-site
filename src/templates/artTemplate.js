import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArtTemplate = props => {
    const { pageContext } = props
    const { pageContent, pageTitle } = pageContext

    const imageQuery = useStaticQuery(graphql`
        query {
            traditional: allFile(filter: { sourceInstanceName: { eq: "traditional" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            design: allFile(filter: { sourceInstanceName: { eq: "design" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            digital: allFile(filter: { sourceInstanceName: { eq: "digital" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `)

    const traditional = []
    imageQuery.traditional.edges.map(data => (
        traditional.push(getImage(data.node))
    ))
    const design = []
    imageQuery.design.edges.map(data => (
        design.push(getImage(data.node))
    ))
    const digital = []
    imageQuery.digital.edges.map(data => (
        digital.push(getImage(data.node))
    ))

    let images = []

    if (pageTitle === "Traditional") {
        images = traditional
    } else if (pageTitle === "Design") {
        images = design.reverse()
    } else if (pageTitle === "Digital") {
        images = digital.reverse()
    }

    return (
        <Layout>
            <SEO title={pageTitle} />

            <section className="gallery">
                <div><Link to="/art/design">Design</Link></div>
                <div><Link to="/art/traditional">Traditional</Link></div>
                <div><Link to="/art/digital">Digital</Link></div>

                <div className="gallery-container">
                    {images.map((data, index) => (

                        <div className="gallery-image" key={index}>
                            <GatsbyImage image={data} alt={data.name} />
                        </div>

                    ))}
                </div>
            </section>

        </Layout>
    )
}

export default ArtTemplate