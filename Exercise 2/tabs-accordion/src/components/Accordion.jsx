import React, { useState } from 'react';
import data from '../data.json';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export const Accordion = () => {

    const [tabs, setTabs] = useState(data[0].title);
    const [value, setValue] = useState(tabs);


  return (
    <div className='accordion section'>
        <h1>Accordion </h1>
        <div className="underline"></div>
      <div  className='accordion-titles btn-container-accordion'>
            {data.map(person => {
              return (
              <div className='acc-container'>
                <button 
                key={person.title} 
                onClick={() => {
                  setTabs(person.title); 
                  setValue(person.title)}}  
                className={`job-btn ${person.title  === value && "active-btn"}`} > 
                {person.title} 
                {person.title === value? <IoIosArrowUp /> :  <IoIosArrowDown />}  
                </button>
                 <div> {
                    tabs === person.title &&   <div  dangerouslySetInnerHTML={{__html: person.content}}></div>
                  }
                  </div>
                </div>
              )
            })}
     
        
        
      </div>
    </div>
  )
}
