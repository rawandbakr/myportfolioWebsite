import React from 'react'
//import Card from '../components/Card'

export default function Cards(props) {
  return (
    <div className=' h-screen grid auto-rows-min lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2  m-5 gap-5'>
      {props.children}    
      </div>
  )
}