import React from "react"
import TimeAgo from "react-timeago"

import AnchorLink from "./mdx/anchor-link"
import getCloudflareDocsConfig from "../utils/get-cloudflare-docs-config"

export default ({ page }) => {
  if (!page || !page.parent) return null

  const { modifiedTime, relativePath } = page.parent

  const { contentRepo, contentRepoFolder } = getCloudflareDocsConfig()
  const filePathPrefix = contentRepoFolder ? `${contentRepoFolder}/` : ""
  const pathToFile = `${filePathPrefix}src/content/${relativePath}`
  const editOnGithubURL = `https://github.com/${contentRepo}/blob/production/${pathToFile}`

  return (
    <footer className="DocsFooter">
      <div className="DocsFooter--content">
        
      </div>
    </footer>
  )
}
