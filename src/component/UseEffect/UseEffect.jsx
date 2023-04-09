import React, { useEffect, useState } from 'react';

const UseEffect = () => {

  const [count, setCount] = useState(0);
  const[post, setPosts] = useState([])

  // Tương tự như componentDidMount và componentDidUpdate:
//   useEffect(() => {
//     // Cập nhập document title sử dụng browser API
//     document.title = `You clicked ${count} times`;
//     console.log("loading" + count)
//   }, [count]);
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => { 
        setPosts(posts)
        console.log(posts)
       })
    
},[])

  return (
    <div>
      <div>
    {post.length > 0 && 
        post.map((posts, index) => {
            return(
        <div key= {post.id}>
        <h1>{posts.id}</h1>
        <p >{posts.title}</p>
        </div>)
    })}
    </div>
    </div>
  );

};

export default UseEffect;
