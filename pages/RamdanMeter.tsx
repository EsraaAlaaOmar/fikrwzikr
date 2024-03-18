import React,{useEffect, useState} from 'react'
import Frood from '../components/meterComponents/Frood'
import Sonan from '../components/meterComponents/Sonan'
import Quraan from '../components/meterComponents/Quraan'
import axios from 'axios'
import { useQuery } from 'react-query'
import SingleHeader from '../components/reusable components/SingleHeader'
import { BsArrowUpLeft } from "react-icons/bs";
import Loader from '../components/competitioncomponents/Loader'
import { useRouter } from 'next/router';
const RamdanMeter = () => {
  const router = useRouter();
  const [Msdn,setMsdn]=useState('')
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
  console.log(queryParams.get('MSISDN'))
  console.log(Msdn)

  }, []);
    const[showfrood,setShowFrood] = useState(false)
    const[showsonan,setShowSonan] = useState(false)
    const[showquran,setShowQuran] = useState(false)
 
    const fetchData = async () => {
      const response = await axios.post(`https://vf.alerting.services/fekrwzekrApis/Users/GetUserProfile?MobileNumbr=${Msdn}`, {
        headers: {
          'content-type': 'text/json'
        }
      });
      return response.data.description;
    };
    const queryKey = Msdn ? ["profile", Msdn] : ["myvideos"];
    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
      queryKey,
      fetchData)
//  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("profile", fetchData)
  
 const arr = data&&JSON.parse(data);
 
   var _FurdDVView=arr?._FurdDVView;
   var _FurdRatio=arr?._FurdRatio;
   var  _SunahDVView=arr?._SunahDVView;
   var  _SunahRatio=arr?._SunahRatio;
   var _QuranVIEW=arr?._QuranVIEW;
   var _QuranRatio=arr?._QuranRatio;

 console.log(arr)
 return (
   <>
<div className="progress-container">
<SingleHeader pageName='تفاصيل عبادتك'/>
 <h2 className="ramadan-meter-title">تفاصيل  عباداتك خلال رمضان</h2>
 {isLoading? <Loader /> : <>
  {/* <!-- salah --> */}
<div className="progress-category">
 <div className="progress-title">
    الصلاة
 </div>
 <div className="progress">
 <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
 </div>
 {!showfrood && <div id="prodress-salah-more"className="progress-more" onClick={()=>!Msdn || Msdn=='NA' || Msdn=='undefined' ? router.push(`https://ka2naktraho.com/SignIn` ) :setShowFrood(true)} >
  اعرف المزيد <span className='arrow'><BsArrowUpLeft />
</span>
 </div>}

{showfrood && <Frood  hide={setShowFrood} froodData={_FurdDVView} precentage={_FurdRatio} />}
 
</div>

{/* <!-- sonan --> */}
<div className="progress-category">
 <div className="progress-title">
   السنن
 </div>
 <div className="progress">
   <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
 </div>
 {!showsonan && <div id="prodress-sonan-more"className="progress-more" onClick={()=>!Msdn || Msdn=='NA' || Msdn=='undefined' ? router.push(`https://ka2naktraho.com/SignIn` ) :setShowSonan(true)} >
  اعرف المزيد <span className='arrow'><BsArrowUpLeft />
</span>
 </div>}
{showsonan && <Sonan sunanData={_SunahDVView}  hide={setShowSonan} precentage={_SunahRatio} />}
 
</div>


{/* <!-- quran --> */}

<div className="progress-category">
 <div className="progress-title">
   القرآن
 </div>
 <div className="progress">
   <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
 </div>
{!showquran && <div id="prodress-quran-more"className="progress-more"  onClick={()=>!Msdn || Msdn=='NA' || Msdn=='undefined' ? router.push(`https://ka2naktraho.com/SignIn` ) :setShowQuran(true)}>
  اعرف المزيد <span className='arrow'><BsArrowUpLeft />
</span>
 </div>}
 {showquran && <Quraan  hide={setShowQuran}    qurandata={_QuranVIEW} precentage={_QuranRatio} />}

 
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

</>}
{/* <!-- sbha --> */}




</div>
</>
 )
}

export default RamdanMeter
