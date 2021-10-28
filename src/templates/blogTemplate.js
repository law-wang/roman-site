import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const BlogTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, category },
        excerpt: autoExcerpt,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    return (
        <Layout>
            <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />

            <article className="post">
                <div className="title">{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                <div style={{marginBottom: "20px"}}>
                    <span>{updated}</span>
                    <span> in </span>
                    <span>{category}</span>
                </div>

                {next != null ?
                    <div className="postnav">
                        <div>Previous:</div>
                        <div><Link to={next.frontmatter.permalink}>{next.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link></div>
                    </div> :
                    null
                }
                {previous != null ?
                    <div className="postnav">
                        <div>Next:</div>
                        <div><Link to={previous.frontmatter.permalink}>{previous.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link></div>
                    </div> :
                    null
                }

                <div className="postnav">
                    <div></div>
                    <div><Link to="/blog">Back to All Posts</Link></div>
                </div>

                <div className="postcontent">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>

            </article>

        </Layout>
    )
}

export default BlogTemplate

export const postQuery = graphql`
    query BlogPostQuery ($path: String) {
        markdownRemark(frontmatter: { permalink: { eq: $path } }) {
            frontmatter {
                title
                updated(formatString: "MMMM DD[,] YYYY")
                tag
                category
                permalink
            }
            id
            html
            excerpt
        }
    }
`
