import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import DeveloperLogo from "../components/developerLogo"
import GameLogo from "../components/gameLogo"

function IndexPage() {

  const markdownFiles = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
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
            cover
          }
        }
      }
    }
  }
  `).allMarkdownRemark?.edges || []

  const developers = markdownFiles.filter(i => i.node?.fileAbsolutePath.includes('/developers/'))
  const games = markdownFiles.filter(i => i.node?.fileAbsolutePath.includes('/games/'))

  return (
    <Layout>
      <section>
        <div
          class="relative h-[calc(100vh-8rem)] lg:flex lg:items-center overflow-hidden bg-black"
        >
          <img className="absolute w-full opacity-60" src="https://images-ext-2.discordapp.net/external/UbcOLZ9oHXqx6oGkSBtvG0KVpUXCH9_N8n-ejU3-49I/https/i.pinimg.com/originals/e7/d6/75/e7d675f9e14e789b01c67f9fd47df0b0.jpg?width=1896&height=952" />
          <div>
            <p>Open-Source Game</p>
            <p>Developed by Preponderous Software in partnership with Unity Technologies.</p>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-6xl px-4 py-16 flex flex-col mt-8">
          <h2 className="font-bold text-4xl mb-4">Games</h2>
          <p className="text-xl mb-3 max-w-2xl">
          Our developers have painstakingly developed, released, and maintained the following 
            games. These games are their passion, and we think they can be yours too.
          </p>
          <div class="grid gap-4 grid-cols-2 md:grid-cols-4 mt-6">
            {
              games.map(i => GameLogo(i.node?.frontmatter))
            } 
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto max-w-6xl px-4 py-16 flex flex-col mt-8">
          <h2 className="font-bold text-4xl mb-4">Developers</h2>
          <p className="text-xl mb-3 max-w-2xl">
            FPA Games is home to developers from around the world. We help them with everything 
            from raising money to creating new features.
          </p>
          <div class="grid gap-4 grid-cols-2 md:grid-cols-4 mt-6">
            {
              developers.map(i => DeveloperLogo(i.node?.frontmatter))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
