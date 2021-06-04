import React from "react"

import CloudflareLogo from "./cloudflare-logo"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline" href="https://medvideos.su/">
      <DocsNavLogoLockup
        small={true}
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

export default DocsMobileHeader
