import React, {useState} from 'react';
import {BiLeftArrowAlt} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export default function PageMenu() {

  
  return (
    <div className='page_menu'>
        <div className='left_arrow'>
             <NavLink to="/test"><BiLeftArrowAlt/></NavLink>
        </div>
        <nav>
            <ul>
                <li> <NavLink to="/test" activeClassName="active">Test</NavLink></li>
                <li><NavLink to="/lectures" activeClassName="active" >Lecture</NavLink></li>
                <li><NavLink to="/study" activeClassName="active" >Study material</NavLink></li>
                <li><NavLink to="/list" activeClassName="active" >List of student and teacher</NavLink></li>
            </ul>
        </nav>
        
    </div>
  )
}
