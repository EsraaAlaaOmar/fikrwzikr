import React,{useState} from 'react'
import Frood from '../components/meterComponents/Frood'
import Sonan from '../components/meterComponents/Sonan'
import Quraan from '../components/meterComponents/Quraan'
import axios from 'axios'
import { useQuery } from 'react-query'
import SingleHeader from '../components/reusable components/SingleHeader'

const RamdanMeter = () => {
    const[showfrood,setShowFrood] = useState(false)
    const[showsonan,setShowSonan] = useState(false)
    const[showquran,setShowQuran] = useState(false)
    var MobileNumbr = '01126214650';
    const fetchData = async () => {
      const response = await axios.post(`https://vf.alerting.services/fekrwzekrApis/Users/GetUserProfile?MobileNumbr=${MobileNumbr}`, {
        headers: {
          'content-type': 'text/json'
        }
      });
      return response.data;
    };
 const { isLoading, data, isError, error, isFetching, refetch } = useQuery("profile", fetchData)
  
 console.log(data?.description._FurdDVView)
  return (
    <>
<div className="progress-container">
<SingleHeader pageName='تفاصيل عبادتك'/>
  <h2 className="ramadan-meter-title">تفاصيل  عباداتك خلال رمضان</h2>
   {/* <!-- salah --> */}
 <div className="progress-category">
  <div className="progress-title">
     الصلاة
  </div>
  <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  {!showfrood && <div id="prodress-salah-more"className="progress-more" onClick={()=>setShowFrood(true)} >
    معلومات أكثر
  </div>}

 {showfrood && <Frood  hide={setShowFrood} />}
  
</div>

{/* <!-- sonan --> */}
<div className="progress-category">
  <div className="progress-title">
    السنن
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
  {!showsonan && <div id="prodress-sonan-more"className="progress-more" onClick={()=>setShowSonan(true)} >
    معلومات أكثر
  </div>}
{showsonan && <Sonan  hide={setShowSonan}  />}
  
</div>


{/* <!-- quran --> */}

<div className="progress-category">
  <div className="progress-title">
    القرآن
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
 {!showquran && <div id="prodress-quran-more"className="progress-more"  onClick={()=>setShowQuran(true)}>
    معلومات أكثر
  </div>}
  {showquran && <Quraan  hide={setShowQuran} />}

  
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




</div>
</>
  )
}

export default RamdanMeter