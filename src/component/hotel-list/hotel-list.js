import React from 'react'
import HotelListItem from '../hotel-list-item'
import './hotel-list.css'


const HotelList = ({content, rateValue, hotelName}) => {
    
    const elements = content.map( hotel => {
        
        if(hotel.rate == rateValue || rateValue == 1) {
            return (
                <li className = "hotel-list" key = {hotel.name}>
                     <HotelListItem item = { hotel }/> 
                </li>
            )
        }
    })


    return (
            <ul>
                { elements }
            </ul>
        )    
}

export default  HotelList