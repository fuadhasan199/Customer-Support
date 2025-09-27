import React from 'react';

const Namver = () => {
    return (
         <div> 
            <div className='flex justify-between p-4 bg-white shadow-lg '>

           
             <div className="logo font-bold text-2xl">CS — Ticket System</div> 
             <div className="icon hidden md:flex gap-10 items-center text-md">
                <a>Home</a>
                <a>FAQ</a>
                <a>Changelog</a>
                <a>Blog</a>
                <a>Dawnload</a>
                <a>Contact</a> 
                 </div>
                <button className='  bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 p-2 rounded-md text-white text-md'>+ New Ticket</button>
            



 </div>
         </div>
    );
};

export default Namver;