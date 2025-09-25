import React from 'react';
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"


const Content = ({data}) => { 
    console.log(data)
   
    return ( 

        <> 
         <div className='flex flex-col md:flex-row gap-4 m-5'>

            <div className='rounded-md p-5 text-white text-center bg-gray-500 h-[150px] w-full md:w-1/2 flex flex-col text-xl'   style={{ 
                backgroundImage:`linear-gradient(to right, rgba(99,46,227,0.7), rgba(159,98,242,0.7)), url(${vector1}),url(${vector2})`,backgroundRepeat:'repeat-x',backgroundSize:'contain',}}> 
             
              In-progress <span className='text-3xl'>0</span>
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

            {data.map(item=>  <div className='card bg-gray-100 p-5 rounded-md shadow-md '> 
                       <div className='flex justify-between w-full mb-2'> 
                      
                         <p className='font-bold text-md'>{item.title}</p> 
                           <p className='bg-green-300 p-2 text-md rounded-md'>{item.status}</p>
                                   </div> 
                  <p className='font-light'>{item.description}</p>   

                  <div className="flex justify-between mt-4">
                    
                   <p> Priority:{item.priority}</p> 
                   <p>Customer : {item.customer}</p>
                   <p>📅{item.createdAt}</p>
                    </div>              
             

                </div> )}
               
             



               

            


               


           </div> 


           <div className="Task-Status col-span-3 "></div>



          </section> 


          <aside>
           


          </aside>
       
       
       
       
       
       
        </>
       
    );
};

export default Content; 
