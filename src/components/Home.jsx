import React from 'react'
import { useState } from 'react'

const Home = () => {

  const [title, settitle] = useState("")
  const head=function(evt){
    settitle(evt)
  }

  const [desc, setdesc] = useState("")
  const descFun=function(evt){
    setdesc(evt)
  }

 const [Task, setTask] = useState([])
 
 const formSub=function(elm){
    elm.preventDefault();
    console.log("Form is Submitted");
    const NewTask=[...Task]
    NewTask.push({title,desc})
    setTask(NewTask)
    
    settitle("")
    setdesc("")
  }

  function deleteTask(key){
    const CopyTask=[...Task]
    CopyTask.splice(key,1)
    setTask(CopyTask)
  }
  return (
    <div className='flex'>
      <div id='left' className='text-white bg-zinc-800 h-screen w-1/2 '>
        <div className='flex flex-col'>
        <form onSubmit={(elm)=>{
            formSub(elm)
        }} >
          <h1 className='px-10 mt-10 text-4xl font-bold'>Add Notes</h1>

          <input onChange={(evt)=>{
            head(evt.target.value)
          }} value={title} className=' border-2  mx-10 mt-5 px-6 py-2 w-140 focus:outline-none' type="text" placeholder='Enter Notes Heading' />

          <textarea onChange={(evt)=>{
            descFun(evt.target.value)
          }} value={desc} className='border-2 mx-10 mt-5 w-140 h-48 px-6 py-2 focus:outline-none' type="text" placeholder='Write details here' />

          <button className='bg-white text-black mx-10 mt-5 w-140 py-1 text-xl'>Add Note</button>
        </form>
        </div>
      </div>

      <div id='right'className='border-l border-white bg-gray-800 h-screen w-1/2'>
        <h1 className='px-10 mt-10 text-4xl font-bold text-white'>Recent Notes</h1>
        <div className='mx-5 mt-5 h-125 flex flex-wrap overflow-y-auto '>
            {Task.map(function(elm,key){
                return <div key={key} className='w-36 h-50  flex flex-col bg-[url(https://tinyurl.com/29r6ahwk)] bg-cover m-5'>
                  <h1 className='mt-6 mx-3 font-bold'>{elm.title}</h1>
                  <p className='px-3 pt-1'>{elm.desc}</p>
                  <button onClick={function(){
                    deleteTask(key)
                  }} className='bg-red-500 text-white px-9 mx-3 mb-3 mt-auto rounded-lg text-sm'>Delete</button>   

                </div>
            })}
        </div>
      </div>
    </div>
  )
}


export default Home
