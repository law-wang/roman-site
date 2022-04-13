import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/threelayout'

const BlogTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, category },
        excerpt: autoExcerpt,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    // let newhtml = html.replace(/<\/?p[^>]*>/g, "")
    console.log(html)

    return (
        <Layout>
            <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />

            <article className="post">
                <div><span className="title highlight">{title.replace("&#58;", ":").replace("&amp;", "&")}</span></div>
                <div style={{marginBottom: "20px"}}>
                    <span className="highlight">{updated}</span>
                    <span className="highlight"> in </span>
                    <span className="highlight">{category}</span>
                </div>

                {next != null ?
                    <div className="postnav">
                        <div><span className="highlight">Previous:</span></div>
                        <div className="highlight"><a href={next.frontmatter.permalink}>{next.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</a></div>
                    </div> :
                    null
                }
                {previous != null ?
                    <div className="postnav">
                        <div><span className="highlight">Next:</span></div>
                        <div className="highlight"><a href={previous.frontmatter.permalink}>{previous.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</a></div>
                    </div> :
                    null
                }

                <div className="postcontent">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>

                <div><a href="/blog"><span className="highlight">Back to All Posts</span></a></div>

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
