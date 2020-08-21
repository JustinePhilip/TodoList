import React from 'react'
import TodoRoll from './TodoRoll'
import TodoBentley from './TodoBentley'
import TodoBenz from './TodoBenz'
import TodoBMW from './TodoBMW'
import TodoHon from './TodoHon'
import TodoPont from './TodoPont'
import TodoToyo from './TodoToyo'
import TodoVol from './TodoVol'

function MainContent (){

    return(
        <div className ="todo-list">
        <h2>Please select your preffered Car</h2>
        <TodoRoll/>
        <TodoBentley/>
        <TodoBenz/>
        <TodoBMW/>
        <TodoHon/>
        <TodoPont/>
        <TodoToyo/>
        <TodoVol/>
       
      </div>
    )
}


export default MainContent