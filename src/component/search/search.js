import React from 'react'
import Glass from '../../img/glass.png'

import './search.css'

export default class Search extends React.Component {
    
    state = {
        hotelName: ''
    }

    findHotel = (e) => {
        this.props.searchByHotelName(this.state.hotelName)
        this.setState({
            hotelName: e.target.value
        })
    }
    render() {
        const { hotelName } = this.state
        console.log(hotelName);
        
        return (
            <div className = "search-hotel">
                <span><b>Hotel Name</b></span>
                <div className="search">
                    <img src = {Glass}/>
                    <input 
                        value = {hotelName}
                        onChange = {this.findHotel}    
                        placeholder="Hotel name"
                    />
                </div>       
            </div>
        )
    }
}

