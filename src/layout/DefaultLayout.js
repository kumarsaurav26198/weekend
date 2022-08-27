import React from 'react'
import CampignListTable from 'src/containers/CampignListTable'
import {  AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CampignListTable/>
          {/* <AppContent/> */}
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
