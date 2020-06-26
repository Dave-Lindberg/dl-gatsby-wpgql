import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Post = ({ pageContext }) => {
  const { post, postId, title, date, author, featuredImage } = pageContext.post
  console.log({ pageContext })

  return (
    <Layout>
      <SEO title={pageContext.post.title} />
      <img
        src={featuredImage.sourceUrl}
        alt={featuredImage.altText}
        className="featured-image"
      />
      <h1> {pageContext.post.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.post.content }} />
    </Layout>
  )
}

export default Post
