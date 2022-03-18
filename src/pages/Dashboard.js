import React from 'react'
import HeaderTop from '../components/HeaderTop'
import PageBody from '../components/PageBody'
import SidebarMenu from '../components/SidebarMenu'

export default function Dashboard() {
  return (
      
          <div className='row'>
              <div className='col-md-1 pe-0'>
                  <SidebarMenu/>
              </div>
              <div className='col-md-11 ps-0 pe-0'>
                <HeaderTop />
                <PageBody />
              </div>
          </div>
     
  )
}
