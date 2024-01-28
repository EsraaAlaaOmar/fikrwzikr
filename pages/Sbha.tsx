import React, {useState} from 'react'

const Sbha = () => {
  //set storage
  const[counter, setCounter]=useState(0)
  sessionStorage.setItem("سبحان الله", "0");
  sessionStorage.setItem("الحمد لله", "0");
  sessionStorage.setItem("لا اله الا الله", "0");
  sessionStorage.setItem("الله اكبر", "0");


        function addnum(element){
        element.innerHTML = parseInt(element.innerHTML)+1;

        //update number at session storage
        let zkrname= String(document.getElementById('zkr-name').innerHTML)
        sessionStorage.setItem(zkrname, parseInt(sessionStorage.getItem(zkrname)) + 1 ); 

          }
          function reset (id){
         document.getElementById(id).innerHTML = 0
          let zkrname= String(document.getElementById('zkr-name').innerHTML)
           sessionStorage.setItem(zkrname, 0);
         
         
          }

          function val(element){
           
            document.getElementById('sbha').innerHTML =  sessionStorage.getItem(element.value)
            document.getElementById('zkr-name').innerHTML = element.value
           
          }
  return (
    <>
 
    <div className="single-header category-header">
     <div className="container text-center">
      <div className="animatable fadeInUp">     
       <a href="index.html"><img src="/images/menu-logo.png" className="center-block" alt="logo" /></a>     
       <h3 className='red'>السبحة</h3>       
      </div>      
     </div>    
    </div>  
    {/* <!-- End Single Header -->
    <!-- Start Single Content -->
    
    <!-- End Single Content -->   */}
    
    <select name="zkr" id="select-zekr" className="select-zekr" onChange={val(this)}>
      <option value="سبحان الله" onClick={setCounter(counter + 1)}>سبحان الله</option>
      <option value="الحمد لله" onClick={setCounter(counter + 1)}>الحمد لله</option>
      <option value="لا اله الا الله" onClick={setCounter(counter + 1)}>لا اله الا الله</option>
      <option value="الله اكبر" onClick={setCounter(counter + 1)}>الله اكبر </option>
    </select>
    <div className="zkr-box">
        <div className="zkr-name" id="zkr-name">
         سبحان الله
        </div>
      
              <button className="zkr-button" id="sbha" onClick={addnum(this)}>0</button>
        <div onClick={reset('sbha')} className="sbha-reset">reset</div>
</div>


  
  
        
  </>
  )
}

export default Sbha