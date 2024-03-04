import axios from 'axios';
import React,{useState} from 'react'
import { Col } from 'react-bootstrap';
import SingleHeader from '../components/reusable components/SingleHeader';

interface CheckboxState {
  [key: string]: boolean;
}
const Ramdan = () => {
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
  "mobileNumber": "01126214650",
  _ActiviteView: checkboxKeys.map((checkboxKey:string, index) => ({
      activitId: index+1, // You can adjust this according to your requirements
      status: checkboxValues[checkboxKey]
  }))
};
console.log(requestData)  
const handleCheckboxChange = (event:any) => {
    const { id, checked } = event.target;
    addProfile(event)
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
  };
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
 

  return (
    <div className="wrapper">
      <SingleHeader pageName='30 يوم
رحلة التقرب إلي الله'/>
          <section className="single-content ramdan-content">
     <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="prayer-box">
          <h3>مواقيت الصلاة</h3> 
          <div className="content">
           <div className="row">
           <Col xs={6} md={7} >
                <h4> 1 رمضان 1441 هجريا</h4>
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
              <li className="col-md-3 col-xs-12">3:08 صباحا</li>     
             </ul>   
            </Col>
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-aa" />
                <label htmlFor="checkbox-aa"></label>
              </div>                
            </Col>  
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-a" />
                <label htmlFor="checkbox-a"></label>
                <span className="suna">ركعتين قبل</span>  
              </div>                
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">الظهر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">11:54 صباحا</li>     
             </ul>   
            </Col>
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-bb" />
                <label htmlFor="checkbox-bb"></label>
              </div>                
            </Col>  
            <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-b" />
                <label htmlFor="checkbox-b"></label>
                <span className="suna"> ركعتين قبل <br/> 4 بعد</span>  
              </div>                
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">العصر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">3:30 مساء</li>     
             </ul>   
            </Col>
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-cc" />
                <label htmlFor="checkbox-cc"></label>
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
              <li className="col-md-3 col-xs-12">6:54 مساء</li>     
             </ul>   
            </Col>
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-dd" />
                <label htmlFor="checkbox-dd"></label>
              </div>                
            </Col>  
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-d" />
                <label htmlFor="checkbox-d"></label>
                <span className="suna">ركعتين بعد</span>  
              </div>                
            </Col>                 
           </div>   
           <div className="col row">
           <Col xs={6} md={7} className="col-md-7 col-s-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">العشاء</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">8:27 مساء</li>     
             </ul>   
            </Col>
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-ee" />
                <label htmlFor="checkbox-ee"></label>
              </div>                
            </Col>  
               <Col xs={3} md={2}>
              <div className="round">
                <input type="checkbox" id="checkbox-e" />
                <label htmlFor="checkbox-e"></label>
                <span className="suna">ركعتين بعد</span>  
              </div>                
            </Col>                 
           </div> 
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">موعد الامساك</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">2:50 صباحا</li>     
             </ul>   
            </div>                 
           </div>  
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">موعد الافطار</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">6:54 مساء</li>     
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
              <input type="checkbox" id="checkbox_f" checked={checkboxValues.checkbox_f} onChange={handleCheckboxChange} />
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
              <input type="checkbox" id="checkbox_g" checked={checkboxValues.checkbox_g} onChange={handleCheckboxChange} />
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
              <input type="checkbox" id="checkbox_h" checked={checkboxValues.checkbox_h} onChange={handleCheckboxChange} />
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
              <input type="checkbox" id="checkbox_i" checked={checkboxValues.checkbox_i} onChange={handleCheckboxChange} />
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
              <input type="checkbox" id="checkbox_j" checked={checkboxValues.checkbox_j} onChange={handleCheckboxChange} />
                <label htmlFor="checkbox_j"></label>
              </div>                
            </div>   
           </div>                
          </div>     
         </div> 
        </div>    
      </div>       
     </div>  
    </section>

    </div>
  )
}

export default Ramdan