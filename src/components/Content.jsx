import React from 'react';
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"
const Content = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 m-5'>

            <div className='rounded-md p-5 text-white text-center bg-gray-500 h-[150px] w-full md:w-1/2 flex flex-col text-xl'   style={{ 
                backgroundImage:`linear-gradient(to right, rgba(99,46,227,0.7), rgba(159,98,242,0.7)), url(${vector1}),url(${vector2})`,backgroundRepeat:'repeat-x',backgroundSize:'contain',}}> 
             
              In-progress <span className='text-3xl'>0</span>
                </div>  

                 <div className='rounded-md p-5 text-white text-center bg-gray-500 h-[150px] w-full md:w-1/2 flex flex-col text-xl' style={{backgroundImage:`linear-gradient(to right, rgba(144,238,144,0.6), rgba(0,128,0,0.8)), url(${vector1}),url(${vector2})`,backgroundRepeat:'repeat-x',backgroundSize:'contain'}}> Resolved <span className='text-3xl'> 0 </span>
                </div> 

             









        </div>
    );
};

export default Content;