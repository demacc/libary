import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./style.css"

export default function Layout() {

  let location =useLocation();
  // console.log(location.pathname)
  return (
    <div>
         <NavBar/>

        {/* dyanmic data  */}

        <SwitchTransition>
          <CSSTransition classNames='fade' timeout={300} key={location.pathname} >
          <div className='max-w-6xl mx-auto p-3'> 
        <Outlet/>
        </div>
          </CSSTransition>
        </SwitchTransition>
        
        
    </div>
  )
}
