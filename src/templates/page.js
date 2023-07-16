import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function MarkdownPage({ data, pageContext }) {

    const post = data.markdownRemark

    return (
        <Layout>
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            {post.frontmatter.title}
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-4xl mx-auto pb-16 px-4 flex flex-col" dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
    }
  }
}
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />