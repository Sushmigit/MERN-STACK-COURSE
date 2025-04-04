import React, { useEffect, useState } from 'react'

const Home = () => {
  const[count,setcount] = useState(1)
  //useeffect in mounting phase
  useEffect(()=>{
    console.log('I am in')
    ap()
  },[])
  function add(){
    setcount(count+1);
  }
  //()=>{} =>Anonymous function
  //useeffect when updating a particular state here that is count
  useEffect(()=>{
    console.log('Update')
  },[count])
  //useeffect on unmounting
  useEffect(()=>{
    return() => {
      console.log('I am out')
    }
  },[])
  function ap(){

  }
  return (
    <div>
      I am HOME
      <button onClick={add}>Click me</button>
      {count}
    </div>
  )
}

export default Home
