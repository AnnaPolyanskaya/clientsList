import React from 'react';
import './SearchForm.css';

const SearchForm = ( {getInputValue, getClientList}) => {
    return (
        <div className='search-form-container'>
            <input onChange={getInputValue} type='text' />
        </div>    
    )
}

export default SearchForm;