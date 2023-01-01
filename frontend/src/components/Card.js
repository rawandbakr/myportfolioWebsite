import React from 'react'
import moment from 'moment'

export default function Card(props) {


  return (
    <div className=' h-52 shadow-2xl  flex flex-col rounded-t-2xl  hover:bg-secondary1'>
        <h3 className=' bg-primary1 text-white rounded-t-2xl p-2'>{props.data.title}</h3>
        <p className='p-2'>{props.data.tech} </p>
        <p className='p-2'>{props.data.gitlink}</p>
        <p className=' text-xs text-black text-opacity-25 align-bottom'>{moment(props.data.createdAt).fromNow()}</p>
    </div>
  )
}
