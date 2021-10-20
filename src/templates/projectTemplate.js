import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const ProjectPostTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, link },
        excerpt: autoExcerpt,
        html,
    } = data.markdownRemark
    // const { next, previous } = pageContext

    return (
        <Layout>
            <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />

            <article className="project">

                <h2>{title.replace("&#58;", ":").replace("&amp;", "&")}</h2>
                <a href={link} target="_blank" rel="noreferrer">See It in Action &#x2197;&#xFE0E;</a>
                <div><Link to="/portfolio">Back to All Projects</Link></div>

                <div className="projectcontent">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>

            </article>

        </Layout>
    )
}

export default ProjectPostTemplate

export const postQuery = graphql`
    query ProjectPostQuery ($path: String) {
        markdownRemark(frontmatter: { permalink: { eq: $path } }) {
            frontmatter {
                title
                updated(formatString: "MMMM DD[,] YYYY")
                permalink
                timeframe
                tools
                link
                coverimage
            }
            id
            html
            excerpt
        }
    }
`
