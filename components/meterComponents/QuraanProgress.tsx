import React,{useState} from 'react'
import Quraan from './Quraan'

const QuraanProgress = () => {
    const[showquran,setShowQuran] = useState(false)
    {console.log(showquran)}
  return (
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
   {showquran&&  <Quraan />}
  
    
  </div>
  )
}

export default QuraanProgress