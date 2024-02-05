import React, {useState} from 'react'
import Zikr from '../components/Zikr';

const Sbha = () => {

  const [zikr, setZikr] = useState('سبحان الله')
  // //set storage
  // const[counter, setCounter]=useState(0)
  // sessionStorage.setItem("سبحان الله", "0");
  // sessionStorage.setItem("الحمد لله", "0");
  // sessionStorage.setItem("لا اله الا الله", "0");
  // sessionStorage.setItem("الله اكبر", "0");


  //       function addnum(element){
  //       element.innerHTML = parseInt(element.innerHTML)+1;

  //       //update number at session storage
  //       let zkrname= String(document.getElementById('zkr-name').innerHTML)
  //       sessionStorage.setItem(zkrname, parseInt(sessionStorage.getItem(zkrname)) + 1 ); 

  //         }
  //         function reset (id){
  //        document.getElementById(id).innerHTML = 0
  //         let zkrname= String(document.getElementById('zkr-name').innerHTML)
  //          sessionStorage.setItem(zkrname, 0);
         
         
  //         }

  //         function val(element){
           
  //           document.getElementById('sbha').innerHTML =  sessionStorage.getItem(element.value)
  //           document.getElementById('zkr-name').innerHTML = element.value
           
  //         }
  // console.log(zikr)
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
    
    <select name="zkr" id="select-zekr" className="select-zekr" onChange={e=>setZikr(e.target.value)}>
      <option value="سبحان الله" >سبحان الله</option>
      <option value="الحمد لله">الحمد لله</option>
      <option value="لا اله الا الله">لا اله الا الله</option>
      // <option value="الله اكبر">الله اكبر </option>
    </select>
   { zikr=="سبحان الله"  && <Zikr zikrName="سبحان الله" />}
    {zikr== "الحمد لله" &&  <Zikr zikrName="الحمد لله" />}
     {zikr== "لا اله الا الله" && <Zikr zikrName="لا اله الا الله" />}
     {zikr=="الله اكبر" && <Zikr zikrName="الله اكبر"/>}



  
  
        
  </>
  )
}

export default Sbha