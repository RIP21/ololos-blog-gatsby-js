import { GatsbyNode } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const { createTypes } = actions
  // language=GraphQL
  const typeDefs = `
    
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter!
    }
    
    type MarkdownRemarkFrontmatter {
      date: Date! @dateformat
      path: String!
      tags: [String!]
      thumbnail: String!
      title: String!
    }
    
    type SiteSiteMetadata {
      title: String!
    }

    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }
  `
  createTypes(typeDefs)
}
