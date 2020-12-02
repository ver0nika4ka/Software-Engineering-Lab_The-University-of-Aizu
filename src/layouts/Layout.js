import React from 'react';
// SEO
import SEO from 'react-seo-component'
import { siteName, description } from '../siteconfig.json'

export default function App({ title, pathname, children }) {
  return (
    <div >
      <SEO
        title={title.title}
        titleTemplate={siteName}
        titleSeparator={`|`}
        description={description || 'nothin’'}
        pathname={pathname}
      />
      {children}
    </div>
  )
}