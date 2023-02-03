import React, { useState } from "react";

const Display = ({todoList,setTodoList}) => {
    const toChange = (item) =>{
        item.complete =  !item.complete//!makes false reverse
        setTodoList([...todoList])//we are going to deconstruct this???
    }

    const toRemove = (item) =>{
        setTodoList( todoList.filter(e=>(e!==item)) )//this removes this {content:"target",complete : false}
    }

    return(
        <div>
            {
                todoList.map((item,index) => (//we are going over each item to print it out
                    <li>
                        <input type="checkbox" onChange={e=>toChange(item)}/>{/* this will be our checkbox */}
                        <span className={(item.complete)?"strike-through": null}>{/*item.complete = true then it will activate the strike-through*/}
                        {/* if false, the strike through css dissappears */}
                        {item.content}
                        </span>
                        <button onClick={e=> toRemove(item)}>
                            Remove
                        </button>
                    </li>
                ))
            }
        </div>
    )
};

export default Display;