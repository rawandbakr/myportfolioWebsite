import React from 'react'

export default function Card(props) {


  return (
    <div className=' h-auto w-auto shadow-2xl  flex flex-col rounded-t-2xl  hover:bg-secondary1'>
        <h3 className=' bg-primary1 text-white rounded-t-2xl p-2'>{props.data.title}</h3>
        <article className='p-2'>{props.data.tech} </article>
        <article className='p-2'>{props.data.gitlink}</article>
    </div>
  )
}
