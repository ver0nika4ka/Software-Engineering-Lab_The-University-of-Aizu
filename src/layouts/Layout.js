import React from 'react';
// SEO
import SEO from 'react-seo-component'
import { siteName, description } from '../siteconfig.json'
import "../styles/layout/Layout.scss"

const Layout = ({ title, path, fillWidth, children }) => {
  return (
    <>
      <SEO
        title={title === '' ? siteName : title}
        titleTemplate={title === '' ? '' : siteName}
        titleSeparator={title === '' ? ' ' : '|'}
        description={description || 'nothin’'}
        pathname={path}
      />
      <div className={`container ${fillWidth ? "fillWidth" : ""}`}>
        {children}
      </div>
    </>
  )
}

export default Layout