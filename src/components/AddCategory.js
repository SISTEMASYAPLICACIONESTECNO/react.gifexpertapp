import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [InputValue, setInputValue] = useState('');

    const handleInputchange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        if (InputValue.trim().length>0) {
            setCategories( cats => [InputValue, ...cats]);
            setInputValue("");
        }
       
    }


    return (
        <form onSubmit={handleSubmit}>
        <h5>{InputValue}</h5>
          <input type='text' value = {InputValue} onChange={handleInputchange} /> 
        </form>
    )
}




AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}