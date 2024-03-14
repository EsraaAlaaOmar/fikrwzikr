import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Col } from 'react-bootstrap';
import SingleHeader from '../components/reusable components/SingleHeader';
import { useQuery } from 'react-query';
import Loader from '../components/competitioncomponents/Loader';

interface CheckboxState {
  [key: string]: boolean;
}
const Ramdan = () => {
   
  const [Msdn,setMsdn]=useState('')
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   console.log(Msdn)

  }, []);
  const [checkboxValues, setCheckboxValues] = useState<CheckboxState>({
    checkbox_a: false,
    checkbox_aa: false,
    checkbox_b: false, 
    checkbox_bb: false,
    checkbox_c: false,
    checkbox_cc: false,
    checkbox_d: false,
    checkbox_dd: false,
    checkbox_e: false,
    checkbox_ee: false,
  
  
    checkbox_f: false,
    checkbox_g: false,
    checkbox_h: false,
    checkbox_i: false,
    checkbox_j: false,
  });
  const checkboxKeys = [
    'checkbox_aa','checkbox_a',  'checkbox_bb', 'checkbox_b','checkbox_cc', 'checkbox_c',
    'checkbox_dd',  'checkbox_d', 'checkbox_ee','checkbox_e', 
    'checkbox_f', 'checkbox_g', 'checkbox_h', 'checkbox_i', 'checkbox_j'
];

const requestData = {
  "mobileNumber": Msdn,
  _ActiviteView: checkboxKeys.map((checkboxKey:string, index) => ({
      activitId: index+1, // You can adjust this according to your requirements
      status: checkboxValues[checkboxKey]
  }))
};
console.log(checkboxValues)

console.log(requestData)  
const handleCheckboxChange = (event:any) => {
  
  console.log('Checkbox changed');
  console.log
    const { id, checked } = event.target;
   
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
    addProfile(event)
   
  };
 
  const fetchPrayersTime = async () => {
    const response = await axios.post(`https://vf.alerting.services/fekrwzekrApis/Users/GetTodayPrayers?MobileNumber=${Msdn}`, {
      headers: {
        'content-type': 'text/json'
      }
    });
    return response.data.TodayPrayers;
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('prayers', fetchPrayersTime, {
    enabled: !!Msdn // Only fetch data when Msdn is not an empty string
  });

//calculate imsak time 
const timeArray =data&&data[0].PrayerTime.substring(0, 5).split(':');
let hours = timeArray&&parseInt(timeArray[0]);
let minutes = timeArray&&parseInt(timeArray[1]);

// Subtract 20 minutes
minutes -= 20;
if (minutes < 0) {
    minutes += 60;
    hours -= 1;
}
if (hours < 0) {
    hours += 24;
}

// Format the hours and minutes
const formattedHours = (hours < 10 ? '0' : '') + hours;
const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;




  const addProfile = async (event:any) => {
    
 
    event.preventDefault(); 
      try {
        const response = await axios.post("https://vf.alerting.services/fekrwzekrApis/Users/AddProfile",requestData ,{ headers: {
     
          'content-type': 'text/json'
        }});
      
        if (response.status === 200) {
       
            // router.push('/myvideos');
       
        } else {
          // Handle upload error
        }
      } catch (error) {
        // Handle network error or any other error
      }
     
    }
var date =new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
useEffect(() => {
  console.log(checkboxValues);
}, [checkboxValues]);
  return (
    <div className="wrapper">
      <SingleHeader pageName='30 يوم
رحلة التقرب إلي الله'/>
        {isLoading? <Loader /> :  <section className="single-content ramdan-content">
     <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="prayer-box">
          <h3>مواقيت الصلاة</h3> 
          <div className="content">
           <div className="row">
           <Col xs={6} md={7} >
                <h4>{date}</h4>
                <p>مواقيت الصلاة حسب مدينة القاهرة</p>  
            </Col>
            <Col xs={3} md={2} className="col-md-2 col-xs-3 text-center"><h4>فرض</h4></Col>
            <Col xs={3} md={2} className="col-md-2 col-xs-3 text-center"><h4>سنة</h4></Col>   
           </div>          
           <div className="col row">
            <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">الفجر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">{data&&data[0].PrayerTime.substring(0, 5)} صباحا</li>     
             </ul>   
            </Col>
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_aa"  checked={checkboxValues.checkbox_aa}  onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_aa"></label>
              </div>                
            </Col>  
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_a" checked={checkboxValues.checkbox_a}  onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_a"></label>
                <span className="suna">ركعتين قبل</span>  
              </div>                
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">الظهر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">{data&&data[2].PrayerTime.substring(0, 5)}  مساء</li>     
             </ul>   
            </Col>
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_bb" checked={checkboxValues.checkbox_bb} onChange={(e)=>handleCheckboxChange(e)}/>
                <label htmlFor="checkbox_bb"></label>
              </div>                
            </Col>  
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_b" checked={checkboxValues.checkbox_b}  onChange={(e)=>handleCheckboxChange(e)}/>
                <label htmlFor="checkbox_b"></label>
                <span className="suna"> ركعتين قبل <br/> 4 بعد</span>  
              </div>                
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">العصر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">	
              {data&&data[3].PrayerTime.substring(0, 5)}  مساء</li>     
             </ul>   
            </Col>
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_cc" checked={checkboxValues.checkbox_cc} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_cc"></label>
              </div>                
            </Col>  
               <Col xs={3} md={2}>
              {/* <div className="round">
                <input type="checkbox" id="checkbox-c" />
                <label htmlFor="checkbox-c"></label>
                <span className="suna"></span>  
              </div>                 */}
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">المغرب</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">{data&&data[4].PrayerTime.substring(0, 5)}  مساء</li>     
             </ul>   
            </Col>
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_dd" checked={checkboxValues.checkbox_dd} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_dd"></label>
              </div>                
            </Col>  
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_d" checked={checkboxValues.checkbox_d} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_d"></label>
                <span className="suna">ركعتين بعد</span>  
              </div>                
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">العشاء</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">	
              {data&&data[5].PrayerTime.substring(0, 5)}  مساء</li>     
             </ul>   
            </Col>
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_ee" checked={checkboxValues.checkbox_ee} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_ee"></label>
              </div>                
            </Col>  
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox_e" checked={checkboxValues.checkbox_e} onChange={(e)=>handleCheckboxChange(e)}/>
                <label htmlFor="checkbox_e"></label>
                <span className="suna">ركعتين بعد</span>  
              </div>                
            </Col>                 
           </div> 
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">موعد الامساك</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">{`${formattedHours}:${formattedMinutes}`} صباحا</li>     
             </ul>   
            </div>                 
           </div>  
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">موعد الافطار</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">{data&&data[4].PrayerTime.substring(0, 5)} مساء</li>     
             </ul>   
            </div>                 
           </div>                
          </div>     
         </div>     
        </div>
        <div className="col-md-6">
         <div className="box-item" id="zikr">
          <h3>ذكر اليوم</h3> 
          <p>100 مرة سبحان الله</p>     
         </div> 
         <div className="box-item doaa" id="doaa">
          <h3>دعاء</h3> 
          <p>
           <strong>دعاء الإستخارة</strong> 
           <span>” اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم، فإنك تعلم ولا أعلم، وتقدر ولا أقدر، وأنت علّام الغيوب، اللّهم إن كنت تعلم أن هذا الأمر -ويسميه، كأن يتزوج: بفلانة، سفري إلى البلد الفلانيّة، تجارتي في هذا الشّيء، يسمّيه- خير لي في ديني ومعاشي وعاقبة أمري فيسره لي ثم بارك لي فيه، وإن كنت تعلم أن هذا الأمر -ويسميه باسمه- شرٌّ لي في ديني ومعاشي وعاقبة أمري فاصرفه عنّي واصرفني عنه، وقدّر لي الخير حيث كان ثم أرضني به “</span>      
          </p>     
         </div>             
        </div>
        <div className="col-md-6">
         <div className="box-item" id="goza">
          <h3>قراءة جزء</h3>
          <div className="content-read ">
           <div className="col-xs-3 col-xs-offset-9 text-center">
            <span className="quran-pages">4 صفحات</span>   
           </div>      
           <div className="item-col">
            <div className="">
            <div className="col-xs-9 text-center">
             <h5>الفجر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_f" checked={checkboxValues.checkbox_f} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_f"></label>
                
              </div>                
            </div>  
            </div> 
           </div>
           <div className="item-col">
            <div className="col-xs-9 text-center">
             <h5>الظهر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_g" checked={checkboxValues.checkbox_g} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_g"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9 text-center">
             <h5>العصر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_h" checked={checkboxValues.checkbox_h} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_h"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9 text-center">
             <h5>المغرب</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_i" checked={checkboxValues.checkbox_i} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_i"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9 text-center">
             <h5>العشاء</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_j" checked={checkboxValues.checkbox_j} onChange={(e)=>handleCheckboxChange(e)} />
                <label htmlFor="checkbox_j"></label>
              </div>                
            </div>   
           </div>                
          </div>     
         </div> 
        </div>    
      </div>       
     </div>  
    </section>}

    </div>
  )
}

export default Ramdan