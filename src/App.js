import style from './style.css';
import { useEffect, useState } from 'react';
import Category from './components/Category';
import Todo from './components/Todo';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import userEvent from '@testing-library/user-event';

function App() {

  const [display, setDisplay] = useState("todo")
  const [user,setUser]=useState(false);
  const [register,setRegister] = useState(false);
  

  return (
    <>
    {user && 

    <div>
      <div className='container'>
        <div className='btn-div'>
          <button className='btn' onClick={()=>setDisplay("todo")}>Todos</button>
          <button className='btn' onClick={()=>setDisplay("category")}>Categories</button>
        </div>
        {display === "todo" ? <Todo  /> : <Category  />}





      </div>
    </div>
    }
    {!user && 
    <>
    {register?<Register setRegister={setRegister}/>:<Login setUser={setUser} setRegister={setRegister}/>}
    </>
    }
    </>
  );
}

export default App;
