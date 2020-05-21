import Theme from '../styles/theme'
import Nav from '../components/Nav'

import { JsonLd } from 'react-schemaorg'

export default ({ Component, pageProps }) => (
  <Theme>
    <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://yoursite.com"
          }}
    />
    <Nav links={pageProps.menuItems} />
    <main>
      <Component {...pageProps} />
    </main>
  </Theme>
)