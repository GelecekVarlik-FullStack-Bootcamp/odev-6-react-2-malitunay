

function TodoList({ todoList }) {


    return (

        <ul className="todo-ul">
            {todoList.map((todo) => (<li key={todo.id} className="todo-item">{todo.title} <button className="btn">Update</button></li>))}
        </ul>

    )
}

export default TodoList