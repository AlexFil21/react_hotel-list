import React from 'react'
import FreebiesItem from '../freebies-item'
import './freebies.css'

export default class Freebies extends React.Component {

    state  = {
        item: [
            {typeOfFree : 'Free Breakfest', value : 707 },
            {typeOfFree : 'Free Parking', value : 376 },
            {typeOfFree : 'Free Internet', value : 2340 },
            {typeOfFree : 'Free Cancellation', value : 864 },
            {typeOfFree : 'Free Airport Shuttle', value : 7 }
        ]
    }

    render() {
        return (
            <div className = "freebies-item">
                <span className = "freebies-item_title"><b>Freebies</b></span>
                <FreebiesItem items = {this.state.item}/>
            </div>
             
        )
    }
}