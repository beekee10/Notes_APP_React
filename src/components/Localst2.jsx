import React from 'react'


const localst2 = () => {
  localStorage.setItem("name","Abhishek");
  

  localStorage.setItem("Age",24)
  

  localStorage.removeItem("name")
    

  const arr={
    name:"Aman",
    age:24
  }

  localStorage.setItem("user",JSON.stringify(arr))
  const a=JSON.parse(localStorage.getItem('user'))
  console.log(a)

  return (
    <div>
      
    </div>
  )
}

export default localst2
