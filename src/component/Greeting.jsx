import React, { useEffect } from "react";

const Greeting = () => {
  useEffect (()=> {
    console.log("after mount")

    return () => {
      console.log("unmount")
    }
  }, [])
  useEffect(()=>{
    // after render 
    console.log("update 2")
    return(
      // before re-render 
    console.log('updated2')
    )
  })
  // truyền ? vao mảng biến cho chạy re-render các cái còn lại thì ko đc rerender 
  return (
    <h1>Greeting</h1>)
};

export default Greeting;
