import { useState, useEffect } from 'react'
import { createTodo, getCategoryList, getStatuListByCategoryId, getTodoList } from '../services/endpoints'
import TodoList from './TodoList'

function Todo() {

    const [todoList, setTodoList] = useState([])
    const [text, setText] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [statusList, setstatusList] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState(1)
    const [selectedStatusId, setSelectedStatusId] = useState(1)


    useEffect(() => {
        getTodoList().then(response => {
            setTodoList(response.data)
        })
    }, [])

    useEffect(() => {
        getCategoryList().then(response => {
            setCategoryList(response.data)
            setSelectedCategoryId(response.data[0].id)
        })
    }, [])

    useEffect(() => {
        getStatuListByCategoryId(selectedCategoryId).then(response => {
            setstatusList(response.data)
            setSelectedStatusId(response.data[0].id)
        })
    }, [selectedCategoryId])

    const handleChangeCategory = (e) => {
        setSelectedCategoryId(e.target.value)
    }


    const handleAddTodo = () => {
        createTodo(text, selectedCategoryId, selectedStatusId)
        setTodoList([...todoList, { title: text, categoryId: selectedCategoryId, statusId: selectedStatusId }])
        setText("")
        setSelectedCategoryId("")
        setSelectedStatusId("")
    }


    return (
        <>
            <div className='add-todo-div'>
                <input placeholder='Write To Do...' onChange={(e) => { setText(e.target.value) }} value={text} />
                <select onChange={(e) => { handleChangeCategory(e) }} value={selectedCategoryId}>
                    {categoryList.map(item => (<option value={item.id}> {item.title} </option>))}
                </select>
                <select onChange={(e) => { setSelectedStatusId(e.target.value) }} value={selectedStatusId}>
                    {statusList.map(item => (<option value={item.id}> {item.title} </option>))}
                </select>
                <button onClick={() => { handleAddTodo() }} >Add</button>
            </div>
            <TodoList todoList={todoList}  />
        </>

    )
}

export default Todo