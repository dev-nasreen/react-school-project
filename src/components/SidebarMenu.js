import React from 'react'
import { MdOutlineDashboard, MdOutlinePayments, MdOutlineEventAvailable  } from 'react-icons/md';
import { BiMessageDetail  } from 'react-icons/bi';
import { FiUsers} from 'react-icons/fi';
import { AiOutlineSetting} from 'react-icons/ai';

export default function SidebarMenu() {
  return (
    <div className='sideMenu'>
        <div className='logo'>
             <a href="#"><img src="images/logo.png" alt="logo" /></a>
        </div>
      <ul>
          <li><a href="#"> <MdOutlineDashboard/> </a></li>
          <li><a href="#"> <BiMessageDetail/> </a></li>
          <li><a href="#"> <FiUsers/> </a></li>
          <li><a href="#"> <MdOutlinePayments/> </a></li>
          <li><a href="#"> <MdOutlineEventAvailable/> </a></li>
          <li><a href="#"> <AiOutlineSetting/> </a></li>

      </ul>
        
    </div>
  )
}
