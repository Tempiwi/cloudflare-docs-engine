import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://medvideos.su">
      <DocsNavLogoLockup
        logo={<CloudflareLogo/>}
        text={(
          <>
            <span data-text="MedVideos">MedVideos</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Docs</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection
