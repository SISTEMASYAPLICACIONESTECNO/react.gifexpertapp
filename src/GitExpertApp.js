import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GirexpertApp = () => {
// const cateries = ['One Punch','Samruria X','Dragon Ball']
const [categories, setCategories] = useState(['One Punch']);

/* const handleAdd = () => {
    // setCategories(['HunterXhunter',...categories]);
    // setCategories([...categories,'HunterXhunter']);
    setCategories( cats => [...cats,'HuterXhunter'])
}; */

return(
    <>
        <h2>GirexpertApp</h2>
        <AddCategory setCategories = {setCategories} />
        <hr/>
 
        <ol>
            {
                // categories.map( (category) => {return <li key={category}>{category}</li>})
                categories.map(  (category) => (
                        <GifGrid 
                        key={category} 
                        category={category} 
                        />
                    ))
            }
        </ol>
    </>
)


};

export default GirexpertApp;