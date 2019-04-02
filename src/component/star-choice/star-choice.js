import React from 'react'
import StarChoiceItem from '../star-choice-item'
import blueStar from '../../img/star-solid.svg'
import greyStar from '../../img/greyStar.svg'

import './star-choice.css'


export default class StarChoice extends React.Component {

    state = {
        starsArray: [
            {defoltStar : blueStar, id:1, spanCount : '0+', show : true},
            {defoltStar : greyStar, id:2, spanCount : '2',  show : false},
            {defoltStar : greyStar, id:3, spanCount : '3',  show : false},
            {defoltStar : greyStar, id:4, spanCount : '4',  show : false},
            {defoltStar : greyStar, id:5, spanCount : '5',  show : false}
        ],
        term: ''
    }

    toggleProperty = (arr, id, propName) => {
        const oldItem = arr[id-1];
        const value = !oldItem[propName];
        let item = { ...arr[id-1], [propName]: value }
        
        this.changeStarColor(id, value)
    
        return [
          ...arr.slice(0, id-1),
          item,
          ...arr.slice(id)
        ];
      };

      trueStarProperty = (arr, id, propName) => {
        const item = { ...arr[id-1], [propName]: blueStar } ;
        return [
          ...arr.slice(0, id-1),
          item,
          ...arr.slice(id)
        ];
      };
      
      falseStarProperty = (arr, id, propName) => {
        const item = { ...arr[id-1], [propName]: greyStar } ;
        return [
          ...arr.slice(0, id-1),
          item,
          ...arr.slice(id)
        ];
      };

      initialArrayValue (){
          const firstArray = [
            {defoltStar : blueStar, id:1, spanCount : '0+', show : true},
            {defoltStar : greyStar, id:2, spanCount : '2',  show : false},
            {defoltStar : greyStar, id:3, spanCount : '3',  show : false},
            {defoltStar : greyStar, id:4, spanCount : '4',  show : false},
            {defoltStar : greyStar, id:5, spanCount : '5',  show : false}
          ]
          this.setState({ starsArray: firstArray })
      }

    changeStar = (e) => {
        this.initialArrayValue()
        let elemId = e.target.parentNode.id;
        this.props.getRateValue(elemId)

        for(let id=elemId; id>0; id--) {
            this.setState((state) => {
                const newArray = this.toggleProperty(state.starsArray, id, 'show')
                return { 
                    starsArray: newArray,
                    term: elemId
                 }
            })  
        }
    }

    changeStarColor = (id, value) => { 
            if(value) {
                this.setState(state => {
                const updateArray = this.trueStarProperty(state.starsArray, id, 'defoltStar')
                return { 
                    starsArray: updateArray
                    }
                })
            }   
            else if(value == false && id != 1){
                this.setState(state => {
                const updateArray = this.falseStarProperty(state.starsArray, id, 'defoltStar')
                return { 
                    starsArray: updateArray
                    }
                })
            }
    } 

        render() {
            const {  starsArray, term } = this.state
            const { getRateValue } = this.props
            
            return (
                <div className = "stars-panel"
                    //onClick = {()=> getRateValue(term)}
                    >
                    <span ><b>Stars</b></span>
                    <StarChoiceItem 
                        changeStar = {this.changeStar}
                        items = {starsArray}/>
                </div>
            )
        }
}