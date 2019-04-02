import React from 'react'

import './star-choice-item.css'

const StarChoiceItem = ({ items, changeStar}) => {
        
    const elements = items.map(item => {
        const { id } = item

        let classname = ''

        if(item.id == 1) {
           classname = "default"
        }
        else if(item.show){
            classname = "show "
        }
            return (
                <div id = {id}
                     key={id+1}
                     className = {classname}
                >
                    <img src = {item.defoltStar} />
                    <span >{item.spanCount}</span>
                </div>
            )
    })
    
    return (
            <div className = "stars-line" 
                    onClick = { changeStar }
                    >
                    {elements}    
            </div>
        )
        
}

export default StarChoiceItem