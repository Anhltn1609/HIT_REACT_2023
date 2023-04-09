
import './App.css';
import React, { useState } from "react";
import Greeting from './component/Greeting';
import UseEffect from './component/UseEffect/UseEffect';
import UseEffectLayout from './component/UseEffect/UseEffectLayout';
import UI from './component/UI/UI';
// import FeatureList from './component/feature/featureList';
// import Headerr from './component/header/header';
// import Toggle from './component/toggle/toggle';
// import Greeting from './component/greeting';
function App() {
  // const [toggle , setToggle] = useState(false)

  // const handleToggleBtn = () => {
  //   setToggle(!toggle)
  //   // console.log()

  // }

  return (
   
   <div>
   {/* <Toggle></Toggle> */}
   {/* <button className='my_4' 
   type='button' onClick={() => handleToggleBtn() } >123</button> */}
   {/* <Greeting></Greeting> */}
   {/* {toggle && <Greeting></Greeting>}  */}
   {/* <UseEffect></UseEffect> */}
   {/* <UseEffectLayout></UseEffectLayout> */}
   <UI></UI>
   {/*ss logic thuongwf */}
   </div>
   
  );
}

export default App;

