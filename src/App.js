import './App.css';
import React,{useState,useMemo,useEffect} from "react";
import UseMemoExample2 from './UseMemoExample2';
function App() {
  const[number,setNumber]=useState(0);
  const[dark,setDark]=useState(false);
  const theme=useMemo(()=>{ //internally chaching is using consume more memory and use only where ever nedded
    return {
      backgroundColor: dark? "black":"white",
      color:dark? "white":"black"
    }
  },[dark]);//increase performance without delaying
  const doubleNumber=useMemo(()=>{
    return slowFunction(number);},[number]);
    useEffect(()=>{
      console.log("theme changed");
    },[theme])
  return (
        <>
         <input type="number" 
         name="number" 
         id="number" 
         onChange={(e)=>setNumber(Number(e.target.value))}/>
         <button onClick={()=>setDark(!dark)}>Change Theme</button>
         <h3 style={theme}>The number:{doubleNumber}</h3>
         <hr/>
         <UseMemoExample2/>
         </>

  );
}
const slowFunction=(number)=>{
   for(let i=0;i<100000000;i++){}
    console.log("slow running function");
    return number*2;
   
}
export default App;
