import React from 'react';
import { FiChevronDown  } from 'react-icons/fi';

export default function LecturePage() {
  return (
     <div>
         <div className='select-wrapper'>
        <div className='select-area'>
           <p>Select</p>
           <hr />
        <select name="test">
            <option vlaue="none" >Past test </option><FiChevronDown className='mr-3' />
            <option value="futeure test">Future test </option>
            <option value="present test">Present test </option>
        </select>
        </div>
        <div className='schedule'>
            <p><a href="">Schedule new test</a> </p>
        </div>
    </div>
        <div className='lecture-card-wrapper'>
            <div className='lecture_single_card' >
                <div className='topic'>
                    <p><small>Topic:</small></p>
                    <h3>Typography</h3>
                </div>
                <div className='date'>
                  <p className='small'><span>Start date</span><span>-End date</span></p>  
                  <p><span>02/03/2022</span><span>-04/02/2022</span></p>  
                </div>
                <div className='time'>
                    <p className='small'><span>Start date</span><span>-End date</span></p>  
                  <p><span>02/03/2022</span><span>-04/02/2022</span></p> 
                </div>
                <div className='view_recording'>
                    <p> <a>View Recording</a> </p>
                </div>
            </div>
            <hr />
            <div className='lecture_single_card' >
                <div className='topic'>
                    <p><small>Topic:</small></p>
                    <h3>Typography</h3>
                </div>
                <div className='date'>
                  <p className='small'><span>Start date</span><span>-End date</span></p>  
                  <p><span>02/03/2022</span><span>-04/02/2022</span></p>  
                </div>
                <div className='time'>
                    <p className='small'><span>Start date</span><span>-End date</span></p>  
                  <p><span>02/03/2022</span><span>-04/02/2022</span></p> 
                </div>
                <div className='view_recording'>
                    <p> <a>View Recording</a> </p>
                </div>
            </div>
            <hr />
        </div>
       
    </div>
  )
}
