import React, { useEffect, useState } from 'react';
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Content = ({data}) => { 
    // console.log(data) 

    const[inProgress ,setInProgress]=useState(0)
    const[statusTask,setStatusTask]=useState([]) 
    const [tickets,setTickets]=useState(data) 

    useEffect(()=>{
      setTickets(data)
    },[data])

   

    const handleClick=(itemId)=>{
   
        const clickItem=tickets.find(item=>item.id===itemId)
           if (!clickItem) return 

        setStatusTask([...statusTask,clickItem.title])
        setInProgress(inProgress+1)
        setTickets(tickets.filter(item=>item.id !==itemId)) 

        toast.success(` Task Status Adding  `)


    }

  




   
    return ( 


  

<> 
 


 




         <div className='flex flex-col md:flex-row gap-4 m-5'>

            <div className='rounded-md p-5 text-white text-center bg-gray-500 h-[150px] w-full md:w-1/2 flex flex-col text-xl'   style={{ 
                backgroundImage:`linear-gradient(to right, rgba(99,46,227,0.7), rgba(159,98,242,0.7)), url(${vector1}),url(${vector2})`,backgroundRepeat:'repeat-x',backgroundSize:'contain',}}> 
             
              In-progress <span className='text-3xl'>{inProgress}</span>
                </div>  

                 <div className='rounded-md p-5 text-white text-center bg-gray-500 h-[150px] w-full md:w-1/2 flex flex-col text-xl' style={{backgroundImage:`linear-gradient(to right, rgba(144,238,144,0.6), rgba(0,128,0,0.8)), url(${vector1}),url(${vector2})`,backgroundRepeat:'repeat-x',backgroundSize:'contain'}}> Resolved <span className='text-3xl'> 0 </span> 


                </div> 

            </div> 
        
       
          <div className="font-bold text-2xl flex justify-between m-2">

            <p>Customer Tickets</p>
            <p>Task Status</p>
          </div> 

          <section className='grid grid-cols-1 md:grid-cols-10 gap-3 mt-5 p-5'>

           <div className="customer-ticket col-span-1 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 "> 




    {
        tickets.map(item=>  <div key={item.id} className='card bg-gray-100 p-5 rounded-md shadow-md '
           
           onClick={()=> handleClick(item.id)} > 
           



       <div className='flex justify-between w-full mb-2'> 
                      
           <p className='font-bold text-md'>{item.title}</p> 
           <p className='bg-green-300 p-2 text-md rounded-md'>● {item.status}</p>
                                   </div> 
         <p className='font-light'>{item.description}</p>   

           <div className="flex justify-between mt-4">
                    
                   <p> Priority:{item.priority}</p> 
                   <p className='font-light'>Customer : {item.customer}</p>
                   <p className='font-light'>📅{item.createdAt}</p>
                    </div>              
             

                </div> )}
                </div>  


                 <div className="task-status col-span-1 md:col-span-3 bg-gray-100 p-5 rounded-md shadow-md h-auto"> 
                     
                   <div> 

                        <h2 className='font-bold text-2xl text-center '> Task Status</h2> 
                     <hr className="my-2" />

             {
                       statusTask.map((title,index) => (

        <div key={index} className='mt-3 p-2 bg-gray-200 rounded-md'> <p className='font-bold'>{title} </p></div>
   )
          
   )
       }




          <p>Title</p> 
      <button className='w-full bg-green-500 p-2 mt-1'> Complete</button>

       </div> 

           <div className='mt-5 '>

             <h2 className="text-2xl font-bold text-center"> Resolve task</h2> 
           <div className='bg-green-200'> 

                   <p>Title solve</p> 
              <p>Status complite</p>
                    </div>

                   </div>

                  
                




                 </div>


           
         </section> 

      
       
       
       
       
         <ToastContainer />
       
        </>
       
    );
};

export default Content;
