import React, {useState} from 'react';
import {BiLeftArrowAlt} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function PageMenu() {
    //const [clicked, setClicked] = useState('');
     
  return (
    <div className='page_menu'>
        <div className='left_arrow'>
             <Link to="/test"><BiLeftArrowAlt/></Link>
        </div>
        <nav>
            <ul>
                <li> <Link to="/test" className='active'>Test</Link></li>
                <li><Link to="/lectures" >Lecture</Link></li>
                <li><Link to="/study" >Study material</Link></li>
                <li><Link to="/list" >List of student and teacher</Link></li>
            </ul>
        </nav>
        
    </div>
  )
}
