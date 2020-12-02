import React from 'react';
// SEO
import SEO from 'react-seo-component'
import { siteName, description } from '../siteconfig.json'
import "../styles/layout/Layout.scss"

export default function App({ title, path, children }) {
  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteName}
        titleSeparator={`|`}
        description={description || 'nothin’'}
        pathname={path}
      />
      <div className="container">
        {children}
      </div>
    </>
  )
}