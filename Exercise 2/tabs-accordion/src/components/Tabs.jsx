import React, { useState } from 'react';
import data from '../data.json';



export const Tabs = () => {


    const [tabs, setTabs] = useState(data[0].title);
    const [value, setValue] = useState(tabs);

    let text = data.find((el) => el.title === tabs && el )
  return (
    <div className='tabs section'>
        <h1>Tabs</h1>
        <div className="underline"></div>
      <div  className='titles btn-container'>
            {data.map((item, index) => {
              return (
                <button 
                key={item.title} onClick={() => {setTabs(item.title); setValue(item.title)}}  className={`job-btn ${item.title  === value && "active-btn"}`} > {item.title}</button>
              )
            })}
      </div>
        <div> { tabs === text.title &&   <p  dangerouslySetInnerHTML={{__html: text.content}}></p>}</div>
    </div>
  )
}
