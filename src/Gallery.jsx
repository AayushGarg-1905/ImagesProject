import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'

const url=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;


const Gallery = () => {

  const {searchTerm}=useGlobalContext()
  const response=useQuery({
    queryKey:['images',searchTerm],
    queryFn:async ()=>{
      const result=await axios.get(`${url}&query=${searchTerm}`);
      return result.data
    },
   
  })
  // console.log(response)

  // basically when working with api always try to setUp these functionalities
  if(response.isLoading){
    return <section className='image-container'>
      <h4>Loading...</h4>
    </section>
  }
  if(response.isError){
    return <section className='image-container'>
      <h4>Error occured...</h4>
    </section>
  }

  // we are checking wheter any value is returned or not . as sometimes image related to our search result is not present
  const results=response.data.results; // you can see the properties by logging the response abpve . we get an object which has nested object of data which conatins a proeprty of results which has array of image ids
  if(results.length<1){
    return <section className='image-container'>
      <h4>No Result Found</h4>
    </section>
  }
  return (
    <section className='image-container'>
      {results.map((item)=>{
        // we did optional chaining to prevent error in case any property is missing
        const url=item?.urls?.regular 
        return <img src={url} key={item.id} alt={item.alt_description} className='img'/>
      })}
    </section>
  )
}

export default Gallery



