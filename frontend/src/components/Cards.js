import React from 'react'
//import Card from '../components/Card'

export default function Cards(props) {
  return (
    <div className=' h-screen gap-5 flex flex-wrap '>
      {props.children}    
      </div>
  )
}
// grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 m-5