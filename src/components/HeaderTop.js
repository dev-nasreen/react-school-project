import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsEnvelope } from 'react-icons/bs';
import { FiSettings} from 'react-icons/fi';

export default function HeaderTop() {
  return (
    <div className='header-top'>
        <div className='header-top_title'>
            <h2>Dashboard</h2>
        </div>
        <div className='header-top_icons'>
            <ul>
                <li><a href="#"><IoMdNotificationsOutline /></a></li>
                <li><a href="#"><BsEnvelope /></a></li>
                <li><a href="#"><FiSettings /></a></li>
                <li><a href="#" className='user_profile'><img src="images/user.png" alt="user" /></a></li>
            </ul>
        </div>
    </div>
  )
}
