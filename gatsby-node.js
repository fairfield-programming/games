const { graphql } = require("gatsby")

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/pages/)/"  }}) {
        edges {
          node {
            html
            headings {
              depth
              value
            }
            frontmatter {
              title
              color
              logo
              website
              slug
            }
          }
        }
      }
    }
    `)

    data.allMarkdownRemark.edges.forEach(edge => {
      const slug = edge.node?.frontmatter?.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/page.js`),
        context: { slug: slug },
      })
    })
  }