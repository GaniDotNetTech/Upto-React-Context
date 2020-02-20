import React,{useEffect,useRef,useContext} from 'react';
import AuthContext from '../context/AuthContext'

const hello = props =>{
  // creating ref
  const buttonref = useRef(null);
  //setting AuthContext global in component
  const context = useContext(AuthContext);
  useEffect(()=>{
    //alert("I'm excuted");
    //accessing ref
    //buttonref.current.click();
    console.log(props.name)
 return()=>{
   console.log('return invokes')
 }
  },[]
  );
  return(
    <div>
    <br/>
    <button ref={buttonref} onClick = {props.buttonClicked}>{props.name}</button>
        <br/><br/>
           <button onClick = {context.login}>Login </button>
    </div>
    );
}

export default React.memo(hello);