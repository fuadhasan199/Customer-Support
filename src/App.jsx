import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Content from './components/Content'
import Namver from './components/Namver' 
import { Suspense } from 'react'


function App() {
  const [data,setData] =useState([])

  useEffect(()=>{
    fetch('data.json').then(res=>res.json()).then(json=>setData(json))
  },[])

  

  return (
    <> 

     <Suspense fallback={ <h1>Loading.....</h1>}> 

      


   <Namver></Namver> 

     <Content data={data}></Content>
    <Footer></Footer> 


     </Suspense>

    

     
     
   
   

    </>
  )
}

export default App
