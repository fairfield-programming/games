import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import DeveloperLogo from "../components/developerLogo"

import { graphql } from 'gatsby'

export default function DevelopersPage({data}) {
  
  return (
    <Layout>
      <section>
        <div class="mx-auto max-w-6xl px-4 py-16 flex flex-col mt-8">
          <h2 className="font-bold text-4xl mb-4">Developers</h2>
          <p className="text-xl mb-3 max-w-2xl">
            FPA Games is home to developers from around the world. We help them with everything 
            from raising money to creating new features.
          </p>
          <div class="grid gap-4 grid-cols-2 md:grid-cols-4 mt-6">
            {
              data?.allMarkdownRemark?.edges.map(i => DeveloperLogo(i.node?.frontmatter))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Developers" />

export const query = graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/developers/)/"  }}) {
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
        }
      }
    }
  }
}
`
