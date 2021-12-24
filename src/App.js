import React,{useState} from "react";
import { fetachWeather } from "./api/fetchWeather";
import './App.scss'
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import Topbar from "./components/topbar/topbar";
import Menu from "./components/menu/menu";
import Works from "./components/works/works";

const App = () =>{
  
    const [query, setQuery] = useState('');
    const [menuOpen, setmenuOpen] = useState(false);

    const search = async(e)=>{
        if(e.key === 'Enter')
        {
            const data = await fetachWeather(query)

            console.log(data);
        }
    }


    return(
       <div className="app">
           <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}></Topbar> 
           <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}></Menu>
           <div className="section">
               <Intro></Intro>
               <Portfolio/>
               <Works></Works>
              
           </div>      
        
       </div>
    )
}


export default App;