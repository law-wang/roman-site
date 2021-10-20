import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
  query ProjectNavigationQuery {
      allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "project"}, published: {eq: true} } }
          sort: { fields: [frontmatter___updated] order: DESC }
      ) {
          edges {
              node {
                  frontmatter {
                      title
                      permalink
                      description
                      casestudy
                      link
                  }
                  id
              }
          }
      }
  }`)

  return (
    <Layout>
      <SEO title="Projects" />

        {data.allMarkdownRemark.edges.map((project, index) => (

          <div key={index}>
            {project.node.frontmatter.casestudy 
            ? 
              <h2><Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link></h2>
            :
              <h2><a href={project.node.frontmatter.link} target="_blank" rel="noopener noreferrer">{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</a></h2>
            } 
            
            {project.node.frontmatter.description}
          </div>

        ))}

    </Layout>
  )
}

export default ProjectPage
