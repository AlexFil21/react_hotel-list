import React from 'react'
import StarChoice from '../star-choice'
import Freebies from '../freebies'
import Search from '../search'
import HotelList from '../hotel-list'
import Filter from '../filter'

import './app.css'

const json = require ('./data.json')

export default class App extends React.Component {

    state = {
        data: json,
        term: '1',
        hotelName: ''
    }
    
    getRateValue = (id) => {
        this.setState({
            term: id
        })
    }

    searchByHotelName = (name) => {
        this.setState({
            hotelName: name
        })
    }

    searchItems(items, search) {
        if (search.length === 0) {
          return items;
        }
    
        return items.filter((item) => {
          return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
      }


    render() {
        const { data, term, hotelName } = this.state;
        const visibleItems = this.searchItems(data.hotels, hotelName)
        
        return (
            <div className = "main-page">
                <div className = "search-panel">
                    <StarChoice
                        getRateValue = {this.getRateValue}   
                    />
                    <Freebies />
                    <Search 
                        searchByHotelName = {this.searchByHotelName}/>
                </div>
                <div className = "list-item">
                    <HotelList 
                        content = {visibleItems}
                        rateValue = {term}
                        hotelName = {hotelName}/>
                </div>
            </div>
        )
    }
}