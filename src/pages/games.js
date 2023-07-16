import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import GameLogo from "../components/gameLogo"

import { graphql } from 'gatsby'

function GamesPage({data}) {
  
  return (
    <Layout>
      <section>
        <div class="mx-auto max-w-6xl px-4 py-16 flex flex-col mt-8">
          <h2 className="font-bold text-4xl mb-4">Games</h2>
          <p className="text-xl mb-3 max-w-2xl">
            Our developers have painstakingly developed, released, and maintained the following 
            games. These games are their passion, and we think they can be yours too.
          </p>
          <div class="grid gap-4 grid-cols-2 md:grid-cols-4 mt-6">
            {
              data?.allMarkdownRemark?.edges.map(i => GameLogo(i.node?.frontmatter))
            }
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Games" />

export const query = graphql`
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(/games/)/"  }}) {
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
          cover
          website
        }
      }
    }
  }
}
`

export default GamesPage
