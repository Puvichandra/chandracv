import { Fragment } from "react";

import FooterComponent from "./footer-comp";
import MainHeader from "./main-header";






function Layout(props){
    return(
   
    <div className="bg-gradient-to-r from-lime-300 to-green-400">
  <MainHeader/>
    <main>
  
        {props.children}
       
        
    </main>
  
   
    <FooterComponent/> 
   

    </div>
    );
    
}
export default Layout;
