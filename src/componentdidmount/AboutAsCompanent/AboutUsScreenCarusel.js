import React,{useState,useEffect} from "react";
import "./AboutUsScreenCarusel.css";



const AboutUsTopSectionCarusel =  () =>{

   const [flipCarusel , setFlipCarusel] = useState(false)
   console.log(flipCarusel)

    return(

           <div 
          
           className="about-us-top-animation-section">
               {/* <div > */}
               <div  style={{bottom:flipCarusel ? "0" : ""}} className="animation-lina lina-top"></div>
               <div style={{left:flipCarusel ? "0" :  ""}} className="animation-lina lina-bottom"></div>
                     <div className="animation-carusel-slide-wrapper">
                     <div  onScroll={(e)=>{
                    
                         setFlipCarusel(!flipCarusel)
                         }}  className="animation-carusel-slide">
                <div style={{bottom:flipCarusel ? "0%" : "99%"}} className="animation-carusel-lin">
                 <div className="animation-carusel-img-flip" style={{background:`url(/caruselanimationfoto/animationFoto.jpg)`}}></div>
                 <div className="animation-carusel-img-flip"></div>
              </div>
              </div>
            </div> 
            {/* </div>    */}
           </div>
    )
}

export default AboutUsTopSectionCarusel;