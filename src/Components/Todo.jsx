import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/slice/todoSlice";

const Todo = () => {
    const todoSelector = useSelector((state) => state.todo.list)
    const dispatch = useDispatch()

    const [inputField, setInputField] = useState("");
    const [todoIndex, setTodoIndex] = useState();
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        setInputField(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (toggle) {
            if (inputField) {
                dispatch(editTodo({ todoIndex, inputField }))
                setInputField("")
                setToggle(false)
            }
        } else {
            if (inputField) {
                dispatch(addTodo(inputField))
                setInputField("")
                // console.log(inputField);
            }
        }
    }

    const handleEdit = (id) => {
        setTodoIndex(id);
        // console.log(id);
        setInputField(todoSelector)
        setToggle(true)
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Todo :- </label>
                <input type="text" placeholder="enter todo hear ..." name="todoName" value={inputField} onChange={handleChange} />
                <button type="submit" >{toggle ? "Edit" : "Add"} Todo</button>
            </form>

            {todoSelector.map((element, index) => (
                <ul key={index}>
                    <div>
                        <li>{element}</li>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)} disabled={toggle ? true : false}>delete</button>
                    </div>
                </ul>
            ))}
        </>
    )
};

export default Todo;
