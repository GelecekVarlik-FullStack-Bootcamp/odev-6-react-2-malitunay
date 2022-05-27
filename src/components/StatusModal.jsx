import { useState, useEffect } from 'react'
import { createStatus, deleteStatus, getStatus, updateStatusColor } from '../services/endpoints'

function StatusModal({ categoryList, onDisplayModal, selectedCategory }) {

    const [statusList, setStatusList] = useState([])
    const [text, setText] = useState('')
    const [color, setColor] = useState('')
    const [newColor, setNewColor] = useState('')
    const [selectedStatusId, setSelectedStatusId] = useState(null)
    const [displayColor, setDisplayColor] = useState(true)
    const [changed, setChanged] = useState(false);

    const handleAddStatus = (title, categoryId, color) => {
        createStatus(title, categoryId, color)
        setStatusList([...statusList, { title: title, color: color }])
        setText("")
        setColor("")
        setDisplayColor(false)
    }

    useEffect(() => {
      setTimeout(() => {
        getStatus(selectedCategory.id).then(response => {
            // setStatusList(
            //     response.data.map((status) => ({
            //         title: status.title,
            //         color: status.color,
            //         id : status.id                  
            //     })).slice(0, 50)
            // )
            setStatusList(response.data)
        })
          
      }, 100); 
    }, [changed])
    
    const handleDisplayColor = (stausId) => {
        setDisplayColor(true)
        setSelectedStatusId(stausId)
    }

    const handleChangeColor = (stausId) =>{
        updateStatusColor(stausId,newColor)
        setNewColor("")
        handleDisplayColor(false)
        setChanged(!changed)      
    }

    const handleDeleteColor = (statusId) => {
        deleteStatus(statusId)
    }


    return (
        <>
            <div className="modal">

                <div className="modal-header">
                    <h3>{selectedCategory.title}</h3>
                    <h3 onClick={() => onDisplayModal(false)}>X</h3>
                </div>
                <hr />

                <div className='add-status-div'>
                    <input placeholder='Write Status...' onChange={(e) => { setText(e.target.value) }} value={text} />
                    <input placeholder='Enter Color...' onChange={(e) => { setColor(e.target.value) }} value={color} />
                    <button onClick={() => { handleAddStatus(text, selectedCategory.id, color); }} >Add</button>
                </div>


                <ul className="todo-ul">
                    {statusList.map((status) => (
                        <li style={{ backgroundColor: status.color }} key={status.number} className="todo-item">{status.title} - {status.color}
                            <div>
                                {(displayColor && selectedStatusId == status.id) ?
                                    <>
                                        <input  placeholder='Write New Color...' onChange={(e) => { setNewColor(e.target.value) }} value={newColor} />
                                        <button className="btn" onClick={() => { handleChangeColor(status.id); }} >Update</button>
                                    </>
                                    :
                                    <>
                                        <button className="btn" onClick={() => { handleDisplayColor(status.id) }}>Change Color</button>
                                        <button className="btn" onClick={() => { handleDeleteColor(status.id) }}>Delete</button>
                                    </>
                                }
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default StatusModal