import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Page = ({ pageContext }) => {
  const { page, pageId, title, date, author, featuredImage } = pageContext.page
  console.log({ pageContext })

  return (
    <Layout>
      <SEO title={pageContext.page.title} />
      <img
        src={featuredImage.sourceUrl}
        alt={featuredImage.altText}
        className="featured-image"
      />

      <h1>{pageContext.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.page.content }} />
    </Layout>
  )
}

export default Page
