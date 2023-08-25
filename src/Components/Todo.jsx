import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/slice/todoSlice";

const Todo = () => {
    const todoSelector = useSelector((state) => state.todo.list)
    const dispatch = useDispatch()

    const [inputField, setInputField] = useState({
        todoName: ""
    });
    const [todoIndex, setTodoIndex] = useState();
    const [toggle, setToggle] = useState(false);



    const handleChange = (e) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (toggle) {
            dispatch(editTodo({ todoIndex, inputField }))
            setInputField({
                todoName: ""
            })
            setToggle(false)
        } else {
            dispatch(addTodo(inputField.todoName))
            setInputField({
                todoName: ""
            })
        }
    }

    const handleEdit = (id) => {
        setTodoIndex(id);
        setInputField({ todoName: todoSelector[id].list })
        setToggle(true)
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Todo :- </label>
                <input type="text" placeholder="enter todo hear ..." name="todoName" value={inputField.todoName} onChange={handleChange} />
                <button type="submit">Add Todo</button>
            </form>
            {todoSelector.map((element, index) => (
                <ul key={element.id}>
                    <div>
                        <li>{element.list}</li>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(element.id)}>delete</button>
                    </div>
                </ul>
            ))}

        </>
    )
};

export default Todo;
