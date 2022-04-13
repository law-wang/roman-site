import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/threelayout"
import SEO from "../components/seo"

// import "../styles/bloggrid.scss"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query BlogNavigationQuery {
        allMarkdownRemark (
            filter: { frontmatter: { type: {eq: "post"}, published: {eq: true} } }
            sort: { fields: [frontmatter___updated] order: DESC }
        ) {
            year:group(field: frontmatter___year) {
                fieldValue
                edges {
                    node {
                        frontmatter {
                            title
                            permalink
                            updated(formatString: "YYYY[/]MM[/]DD ")
                        }
                        id
                    }
                }
            }
        }
    }`)

  return (
    <Layout>
      <SEO title="Blog" />
      <section style={{marginTop: "30px"}}>

        {data.allMarkdownRemark.year.slice(0).reverse().map((year, index) => (

          <div className="category highlight" key={index}>
            <div style={{fontSize: "30px"}} className="title">{year.fieldValue}</div>

            {year.edges.map(post => (
              <div className="highlight" key={post.node.id}>
                <div>{post.node.frontmatter.updated.substring(5, 11)}</div> <Link to={post.node.frontmatter.permalink}>{post.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
              </div>
            ))}

          </div>

        ))}

      </section>

    </Layout>
  )
}

export default BlogPage
