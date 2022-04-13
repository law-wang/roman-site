import React from 'react'
import { graphql } from 'gatsby'
import parse, { domToReact } from 'html-react-parser'

import SEO from '../components/seo'
import Layout from '../components/threelayout'

const BlogTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, category },
        excerpt: autoExcerpt,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    let newhtml = html.replace(/<p[^>]*>/g, "<p><span class='highlight'>").replace(/<\/p>/g, "</span></p>").replace(/<h2[^>]*>/g, "<h2><span class='highlight'>").replace(/<\/h2>/g, "</span></h2>")

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
                        <div><a href={next.frontmatter.permalink}><span className="highlight">{next.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</span></a></div>
                    </div> :
                    null
                }
                {previous != null ?
                    <div className="postnav">
                        <div><span className="highlight">Next:</span></div>
                        <div><a href={previous.frontmatter.permalink}><span className="highlight">{previous.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</span></a></div>
                    </div> :
                    null
                }

                <div className="postcontent">
                    <div dangerouslySetInnerHTML={{ __html: newhtml }} />
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
