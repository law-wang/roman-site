import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../styles/bloggrid.scss"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query BlogNavigationQuery {
        allMarkdownRemark (
            filter: { frontmatter: { type: {eq: "post"}, published: {eq: true} } }
            sort: { fields: [frontmatter___updated] order: DESC }
        ) {
            category:group(field: frontmatter___category) {
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

        {data.allMarkdownRemark.category.slice(0).reverse().map((category, index) => (

          <div className="category" key={index}>
            <div style={{fontSize: "30px"}} className="title">{category.fieldValue}</div>

            {category.edges.map(post => (
              <div key={post.node.id}>
                <div>{post.node.frontmatter.updated}</div> <Link to={post.node.frontmatter.permalink}>{post.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
              </div>
            ))}

          </div>

        ))}

      </section>

    </Layout>
  )
}

export default BlogPage
