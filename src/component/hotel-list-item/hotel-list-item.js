import React from 'react'
import emptyStar from '../../img/star.png'
import blackStar from '../../img/black.png'

import './hotel-list-item.css'


export default class HotelListItem extends React.Component {

    state = {
        starsRate: this.props.item.rate,
        starsArray: [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar]
    }

    componentWillMount() {
        const newStarArray = []
        for (let i = 0; i < this.state.starsRate; i++) {
            newStarArray.push(blackStar)
        }
        while(newStarArray.length < 5) {
            newStarArray.push(emptyStar)
        }
        this.setState({starsArray: newStarArray});
    }

    render() {
        const { item } = this.props
        const { starsArray } = this.state
        const starsLine = starsArray.map(star => {
                return (
                    <img src = {star} />
                )
                
        })

        return (
           <div className = 'hotel-list-item'>
                <div className = "hotel-img">
                    <img src = {item.img}/>
                </div>
               <div className = "hotel-description">
                    <span className = "hotel-title">
                        {item.name}
                    </span>
                    
                    <span className = "destination">
                        {item.address}
                    </span>
                    <span className = "rate">
                      { starsLine }
                    </span>
               </div> 
               <div className = "hotel-deal">
                        <span className = "hotel-price">
                            <b>$ {item.price.single}</b>
                        </span>
                        <span className = "deal">
                            View deal
                        </span>
               </div>
           </div>
        )
    }
}