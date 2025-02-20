import './App.css';
import Sample from './common_component.js';
import {GettingProps} from  './common_component.js';
import {Profile} from './common_component.js';

function UserProfile({name,description}){
 return <Profile  name={name} desc={description}/>;
}
function App() {
  return (
    <div className='d-flex'>
      <div>
      Hello World! &nbsp;
      </div>
     <Sample/>
     <GettingProps sampleText = "Passing data from parent to child"/>
     <UserProfile name="Venkat" description="React Developer"/>
    </div>    
  );
}
export default App;


