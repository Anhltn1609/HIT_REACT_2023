import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectLayout = () => {
    const [count, setCount] =useState(0)
    const handleCount =()=> {
        setCount(count+1)
    }
    useLayoutEffect(()=>{
        
        if(count > 3){
            setTimeout(() => {
                setCount(0)
            }, 3000);
             setCount(0)
        }
    }, [count])
    return (
        <div>
        <div>{count}</div>   
        <button onClick={handleCount}>plus</button> 
        </div>
    );
};

export default UseEffectLayout;