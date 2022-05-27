import { useState, useEffect } from 'react'
import { createCategory, getCategoryList } from '../services/endpoints'
import CategoryList from './CategoryList'

function Category() {

    const [categoryList, setCategoryList] = useState([])
    const [text, setText] = useState('')
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        getCategoryList().then(response => {
            setCategoryList(
                response.data.map((category) => ({
                    title: category.title,
                    id: category.id
                })).slice(0, 50)
            )
        })
    }, [changed])

    const handleAddCategory = () => {
        createCategory(text)
        setText("")
        setCategoryList([...categoryList, { title: text }])
    }

    return (
        <>
            <div className='add-cat-div'>
                <input placeholder='Write Category...' onChange={(e) => { setText(e.target.value) }} value={text} />

                <button onClick={() => { handleAddCategory() }} >Add</button>
            </div>

            <CategoryList categoryList={categoryList} setChanged={setChanged} changed={changed} />
        </>
    )
}

export default Category