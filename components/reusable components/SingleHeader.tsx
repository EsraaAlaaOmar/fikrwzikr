import React from 'react'
interface props {
    pageName:string
}
const SingleHeader: React.FC<props> = ({pageName}) => {

  return (
  
    <div className="single-header category-header">
     <div className=" text-center">
      <div className="animatable fadeInUp" style={{width: '100vw'}}>     
       <a href="http://fikrwzikr.com/Index"><img src="images/menu-logo.png" className="center-block" alt="logo" /></a>     
       <h3>{pageName}</h3>       
      </div>      
     </div>    
    </div>  
  
  )
}

export default SingleHeader