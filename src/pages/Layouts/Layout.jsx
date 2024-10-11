import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';

export default function Layout() {
  return (
    <div>
         <NavBar/>

        {/* dyanmic data  */}
        <div className='max-w-6xl mx-auto p-3'> 
        <Outlet/>
        </div>
        
    </div>
  )
}
