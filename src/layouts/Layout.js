import React from 'react';
// SEO
import SEO from 'react-seo-component'
import { siteName, description } from '../siteconfig.json'

export default function App({ title, path, children }) {
  return (
    <div >
      <SEO
        title={title}
        titleTemplate={siteName}
        titleSeparator={`|`}
        description={description || 'nothin’'}
        pathname={path}
      />
      {children}
    </div>
  )
}