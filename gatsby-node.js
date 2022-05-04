const path = require('path')
const { get } = require('jquery')
const fs = require("fs")
const yaml = require("js-yaml")

const blogTemplate = path.resolve(`./src/templates/blogTemplate.js`)
const artTemplate = path.resolve(`./src/templates/artTemplate.js`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        tls: false,
        net: false,
      }
    }
  })
}

exports.createPages = async ({ graphql, actions, getNodes }) => {
    const { createPage } = actions
    const allNodes = getNodes()

    const result = await graphql(`
      query {
        posts: allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "post"}, published: {eq: true} } }
          sort: { fields: [frontmatter___updated] order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                permalink
                title
              }
            }
          }
        }
      }
    `)

    const posts = result.data.posts.edges
    posts.forEach(({node}, index) => {
      createPage({
        path: node.frontmatter.permalink,
        component: blogTemplate,
        context: {
          next: index === (posts.length - 1) ? null : posts[index + 1].node,
          previous: index === 0 ? null : posts[index - 1].node,
        },
      })
    })

    const art = yaml.load(fs.readFileSync("./src/content/art/art.yaml", "utf-8"))
    art.forEach(element => {
      createPage({
        path: element.path,
        component: artTemplate,
        context: {
          pageContent: element.content,
          pageTitle: element.title,
        },
      })
    })
}
