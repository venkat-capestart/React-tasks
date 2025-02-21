import './App.css';
import Sample from './common_component.js';
import {GettingProps} from  './common_component.js';
import {Profile} from './common_component.js';
import { useState } from "react";
import Counter from './counter.js';
import WindowSize from "./window.size.js";

function UserProfile({name,description}){
 return <Profile  name={name} desc={description}/>;
}
function App() {
  const [countVariable, setCount] = useState(0);
  return (
    <div className='d-flex'>
      <div>
      Hello World! &nbsp;
      </div>
     <Sample/>
     <GettingProps sampleText = "Passing data from parent to child"/>
     <UserProfile name="Venkat" description="React Developer"/>
     <div className="counter-component">
    <Counter countVariable= {countVariable} setCount= {setCount} />
    <div>
      <h1 style={{ textAlign: "center" }}>React Lifecycle & Effects</h1>
      <WindowSize />
    </div>
     </div>
    </div>    
  );
}
export default App;


