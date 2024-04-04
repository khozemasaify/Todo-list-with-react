"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [maintask, setmaintask] = useState([])
  const formhandliing = (e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,description}])
    settitle("")
    setdescription("")
    console.log(maintask);
}
const deletetask = (i)=>{
  let copytask = [...maintask]
  copytask.splice(i,1)
  setmaintask(copytask)
}
  let rendertask = <h2> no task available</h2>
  if (maintask.length>0) {
    rendertask = maintask.map((t,i)=>{
      return( <div className='flex w-screen [padding-inline:5vw;] bg-slate-700 justify-between'>
        <h4 className='p-4 bg-slate-300 text-zinc-600 rounded-xl'>{t.title}</h4>
        <h4 className='p-4 bg-slate-300 text-zinc-600 rounded-xl'>{t.description}</h4>
        <button className='p-4 bg-slate-300 text-zinc-600  rounded-xl' onClick={()=>{deletetask(i)}}>delete</button>
      </div>
      )
    })
  }
  return (
    <div className="h-[100vh] bg-cover w-full bg-[url('https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className='flex w-full h-[4vw] bg-[#C9D7DD] items-center px-4 '>
        <img className=' h-10' src='https://images.unsplash.com/photo-1678846851728-f7a8f94702e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <h1 className='text-2xl p-3 capitalize font-bold text-[#474F7A]'>to do list</h1>
      </div>
      <div className=' rounded flex items-center gap-8 [padding-inline:4vw;] w-full h-[15vh] bg-[#637A9F]'>
        <form onSubmit={formhandliing} className='flex items-center gap-[5vw]' method='post'>
          <input className='px-12 rounded-lg py-3 capitalize' type='text' value={title} onChange={(e)=>{settitle(e.target.value);}} placeholder='enter your title'></input>
          <input className='px-12 py-3 rounded-lg capitalize' type='text' value={description} onChange={(e)=>{setdescription(e.target.value);}} placeholder='enter your description'></input>
          <button className='py-3 px-6 text-gray-100 capitalize  bg-[#265073] rounded-xl'>submit</button>
        </form>
      </div>
      <div className='gap-4 flex items-center justify-center p-5 uppercase font-bold text-orange-200 bg-slate-700'>
        <ul className=' flex flex-col gap-5 items-center  w-screen h-fit'>
          {rendertask}
        </ul>
      </div>
    </div>
  )
}

export default page