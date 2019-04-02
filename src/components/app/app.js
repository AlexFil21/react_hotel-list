import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './index.css'

export default class  App extends React.Component {
  
    maxId = 100

    state = {
      todoData: [
        {label: 'Drink Coffee', important: false, id:1},
        {label: 'Make Awesome App', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3}
      ],
      term: ''
    }
    
    deleteItem  = (id) => {
      this.setState(({ todoData }) => {
          const idx = todoData.findIndex((el) => el.id === id)
        
          const newArray = [
              ...todoData.slice(0, idx),
              ...todoData.slice(idx +1)
          ]
          
          return {
            todoData: newArray
          }
          
      })
    }

    addItem = (text) => {
        const newItem = {
          label: text,
          important: false,
          id: this.maxId++
        }

        this.setState (({ todoData }) => {
            const newArray = [
              ...todoData,
              newItem
            ]

            return {
              todoData: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        console.log('togl imp ', id);
    }

    onToggleDone = (id) => {
      console.log('togl done ', id);
    }

    search = (items, term) => {
      if(term.length === 0) {
        return items
      }

      items.filter((item) => {
        return item.label.indexOf(term) > -1
      })

    }


    render () {

      const {todoData, term} = this.state
      const visibleItems = this.search(todoData, term)
      const doneCount = todoData.filter((el) => el.done).length
      const todoCount = todoData.length - doneCount

      return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
    
        <TodoList
          todos={this.state.todoData}
          onDeleted = { this.deleteItem }
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
        />
         <ItemAddForm 
         onItemAdded = {this.addItem}/>
      </div>
      )
    }
}
