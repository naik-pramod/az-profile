import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setmenuOpen}) {
    return (
        <div className={'topbar ' +(menuOpen && 'active')}>
           <div className='wrapper'>
               <div className='left'>
                   <a href='#intro' className='logo'>Pramod Naik</a>    
                   <div className='itemContainer'>
                    <Person className='icon'></Person>
                    <span>+91 9742600XXX</span>
                    <Mail className='icon'></Mail>
                    <span>pramodxxx@gmail.com</span>
                    </div>               
               </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setmenuOpen(!menuOpen)}>
                    <span className='span'></span>
                    <span className='span'></span>
                    <span className='span'></span>
                    </div>
                </div>
               </div>
  
        </div>
    )
}
