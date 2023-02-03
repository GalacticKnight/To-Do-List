import React, { useState } from "react";

const Form = (props) => {
    const [todoText, setTodoText] = useState("")
    const {todoList, setTodoList} = props;
    const submitHandler = (e) =>{
        e.preventDefault();//
        setTodoList([...todoList, {//this part is confusing
            content:todoText,//this part is confusing
            MarkedDelete:false//this part is confusing 
        }])
    }
    return (
        <div>
            <form onSubmit={submitHandler}>{/* So when you submit this it will have a default action that will activate */}
                <input onChange={(e) =>setTodoText(e.target.value)} type="text"/>{/* the input will change based on the target's value. Anything saved will be caught by the setter*/}
                <button>Add</button>
            </form>
        </div>
    );
};

export default Form;