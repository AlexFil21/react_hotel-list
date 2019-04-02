import React from 'react';

import './freebies-item.css';

const FreebiesItem = ({items}) => {
    
    const content = items.map(item => {

        return (
            <div key = {item.value}>
                <input type = "checkbox"/>
                <span> 
                    {item.typeOfFree}
                </span>
                <span className = "value">
                    {item.value}
                </span>
            </div>
           
        )
    })

        return (
            <span>
                    { content }
            </span>

        )
}

export default FreebiesItem