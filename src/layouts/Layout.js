import React from 'react';
// SEO
import SEO from 'react-seo-component'
import { siteName, description } from '../siteconfig.json'
import "../styles/layout/Layout.scss"

const Layout = ({ title, path, children }) => {
  return (
    <>
      <SEO
        title={title === '' ? siteName : title}
        titleTemplate={title === '' ? '' : siteName}
        titleSeparator={title === '' ? ' ' : '|'}
        description={description || 'nothin’'}
        pathname={path}
      />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout