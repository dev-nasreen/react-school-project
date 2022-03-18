import React from 'react';
import { FiChevronDown  } from 'react-icons/fi';

export default function TestPage() {
const tests = [
    {
        id: 1,
        title: "Typography test",
        description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer toolley of type and scrambled it to make a type specimen book",
        endDate: "5th march 2022",
        endTime:"02:45pm"
    },
    {
        id: 2,
        title: "Typography test",
        description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer toolley of type and scrambled it to make a type specimen book",
        endDate: "5th march 2022",
        endTime:"02:45pm"
    }
]


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
        <div className='test-card-wrapper'>
           
            <div className='test_single_card' >
                <h3>Typography test</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer toolley of type and scrambled it to make a type specimen book</p>
               <div className='date'>
                   <p><span>End date</span>5th march 2022</p>
                   <p><span>End time</span>02:45pm</p>
               </div>
            </div>
            <div className='test_single_card' >
                <h3>Typography test</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer toolley of type and scrambled it to make a type specimen book</p>
               <div className='date'>
                   <p><span>End date</span>5th march 2022</p>
                   <p><span>End time</span>02:45pm</p>
               </div>
            </div>
          
           
        </div>
    </div>
  )
}
