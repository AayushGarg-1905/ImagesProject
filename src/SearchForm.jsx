import React, { useState } from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {

  const {setSearchTerm}=useGlobalContext()
    const handleSubmit=(e)=>{
        e.preventDefault();

        // here we access the all the form components using e.target.elements 
        // now we can see the result by logging this.
        // to access the input value there is a property of search(this is value we set in the name attributre of input element) inside which has a property value => this contains the value enetered by user
        // console.log(e.target.elements)
        const searchValue=e.target.elements.search.value;
        if(!searchValue){
          return;
        }
        setSearchTerm(searchValue)
        
    }
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
    <input type='text' className='form-input search-input' name='search' placeholder='cat'/>
    <button type='submit' className='btn'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm