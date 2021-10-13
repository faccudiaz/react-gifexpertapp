import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGreed } from './components/GifGreed'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch'])
   
    // const handleAdd = (params) => {
    //     // setCategories([...categories, 'test'])
    //     setCategories( categs => [...categs, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
            {
                categories.map( (category, i) => 
                    <GifGreed 
                        key={category}
                        category={ category }
                    />
                )
            }
            </ol>
        </>
    )
}

