import { useState } from 'react'
import { updateCategory } from '../services/endpoints'
import StatusModal from "./StatusModal"

function CategoryList({ categoryList, changed, setChanged }) {

    const [displayModal, setDisplayModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({'title':'', 'id':''})
    const [displayUpdateBtn, setdisplayUpdateBtn] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [text, setText] = useState('')

    const handleDisplayModal = (e) => {
        setDisplayModal(e);
    }

    const editStatuses = (categoryTitle, categoryId) => {
        setSelectedCategory({'title':categoryTitle, 'id':categoryId})
        
    }

    const handleUpdate = (id) => {
        setSelectedId(id);
        setdisplayUpdateBtn(true);
    }

    const handleUpdateCategory = () =>{
        updateCategory(selectedId, text)
        setText("")
        setdisplayUpdateBtn(false)
        setSelectedId(null)
        setChanged(!changed)
    }


    return (
        <>
            <ul className="todo-ul">
                {categoryList.map((category, idx) => (
                    <li key={idx} className="todo-item">

                        {(displayUpdateBtn && category.id == selectedId) ?
                            <div className='upd-Cat'>
                                <input  placeholder='Write New Title...' onChange={(e) => { setText(e.target.value) }} value={text} />
                                <button className="btn" onClick={()=>{handleUpdateCategory()}}>Save</button>
                            </div>
                            :
                            <>
                                {category.title}
                                <div>
                                    <button className="btn" onClick={() => { handleDisplayModal(true); editStatuses(category.title, category.id) }}>See Status</button>
                                    <button className="btn" onClick={() => handleUpdate(category.id)}>Update</button>
                                </div>
                            </>
                        }
                    </li>
                ))}
            </ul>

            {!!displayModal ? <StatusModal categoryList={categoryList} onDisplayModal={handleDisplayModal} selectedCategory={selectedCategory}  /> : null}
        </>
    )
}
export default CategoryList