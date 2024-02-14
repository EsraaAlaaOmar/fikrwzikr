import React,{useState} from 'react'
import Frood from '../components/meterComponents/Frood'
import Sonan from '../components/meterComponents/Sonan'
import Quraan from '../components/meterComponents/Quraan'

const RamdanMeter = () => {
    const[showfrood,setShowFrood] = useState(false)
    const[showsonan,setShowSonan] = useState(false)
    const[showquran,setShowQuran] = useState(false)
  return (
    <>
<div className="progress-container">
  <h2 className="ramadan-meter-title">تفاصيل  عباداتك خلال رمضان</h2>
   {/* <!-- salah --> */}
 <div className="progress-category">
  <div className="progress-title">
     الصلاة
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "75"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  <div id="prodress-salah-more"className="progress-more" onClick={()=>setShowFrood(true)} >
    معلومات أكثر
  </div>

 {showfrood && <Frood />}
  
</div>

{/* <!-- sonan --> */}
<div className="progress-category">
  <div className="progress-title">
    السنن
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  <div id="prodress-sonan-more"className="progress-more" onClick={()=>setShowSonan(true)} >
    معلومات أكثر
  </div>
{showsonan&& <Sonan />}
  
</div>


{/* <!-- quran --> */}

<div className="progress-category">
  <div className="progress-title">
    القرآن
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  <div id="prodress-quran-more"className="progress-more"  onClick={()=>setShowQuran(true)}>
    معلومات أكثر
  </div>
  {showquran && <Quraan />}
  
</div>


{/* <!-- zakah --> */}

<div className="progress-category">
  <div className="progress-title">
    الزكاة
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  <div className="progress-more" >
    لقد قمت بأداء الزكاة
  </div>
 
  
</div>


{/* <!-- sbha --> */}

<div className="progress-category">
  <div className="progress-title">
     التسبيح
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  {/* <div id="prodress-sbha-more"className="progress-more" >
    معلومات أكثر
  </div>
  <div id="prodress-sbha-les" className="progress-less"  >
    أقل
  </div> */}
  {/* <table id="sbha-table" style={{width:"100%"}} className="progress-table">
    <tr>
      <th></th>
      <th>سبحان الله <br/><span className="not-bold"> 100 مرة </span></th>
      <th>الحمد لله <span className="not-bold"> 100 مرة </span></th>
      <th>لا اله الا الله <span className="not-bold"> 100 مرة </span></th>
      <th>الله اكبر <span className="not-bold"> 100 مرة </span></th>
      
      <th>المجموع</th>

    </tr>
    <tr>
      <td>1</td>
      <td>✔</td>
      <td>✔</td>
      <td>✘</td>
      <td>✔</td>
     
      <td  rowSpan={30} style={{fontWeight: "bold", fontSize: "18px"}}>75%</td>
    </tr>
    <tr>
      <td>2</td>
      <td>✔</td>
      <td>✔</td>
      <td>✘</td>
      <td>✔</td>
   
    </tr>
    <tr>
      <td>3</td>
      <td>✔</td>
      <td>✔</td>
      <td>✘</td>
      <td>✔</td>
    
    </tr>
    <tr>
      <td>4</td>
      <td>✔</td>
      <td>✔</td>
      <td>✘</td>
      <td>✔</td>

    </tr>
    <tr>
      <td>5</td>
      <td>✔</td>
      <td>✔</td>
      <td>✘</td>
      <td>✔</td>
      
    </tr>
 
  </table> */}
  
</div>


</div>
</>
  )
}

export default RamdanMeter