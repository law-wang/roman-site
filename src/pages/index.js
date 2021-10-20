import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
      blog: allMarkdownRemark (
          filter: { frontmatter: { tag: {in: "Featured"}, type: {eq: "post"} } }
          sort: { fields: [frontmatter___updated] order: DESC }
      ) {
          edges {
              node {
                  frontmatter {
                      title
                      permalink
                      description
                  }
                  id
              }
          }
      }
      project: allMarkdownRemark (
        filter: { frontmatter: { type: {eq: "project"}, published: {eq: true} } }
        sort: { fields: [frontmatter___updated] order: DESC }
      ) {
          edges {
              node {
                  frontmatter {
                      title
                      permalink
                  }
                  id
              }
          }
      }
  }`)

  return (
    <Layout>
      <SEO title="Home" />

      <section>

         <div>
          I'm interested in the intersection between computer science and design, as well as structures of economy and power. Currently studying Computer Science + Economics and Political Science at Yale. Aspiring to be someone who draws, codes, and writes.
          </div>

        <h2>I Build Things (For Fun, Most of the Time)</h2>
        {data.project.edges.map(project => (
          <div key={`one-of-${project.node.id}`}>
            &#x219D; &nbsp; <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
          </div>
        ))}
        <div><Link to="/portfolio">All Projects</Link></div>

        <h2>I Also Write (Occasionally)</h2>
        {data.blog.edges.map(post => (
          <div key={`one-of-${post.node.id}`}>
            &#x219D; &nbsp; <Link to={post.node.frontmatter.permalink}>{post.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
            {/* <p>{post.node.frontmatter.description}</p> */}
          </div>
        ))}
        <div><Link to="/blog">All Writing</Link></div>

      </section>

    </Layout>
  )
}


export default IndexPage
