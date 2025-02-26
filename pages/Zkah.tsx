import axios, { Axios } from 'axios';
import React, { useState ,useEffect} from 'react'
import SingleHeader from '../components/reusable components/SingleHeader';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
const Zkah = () => {
  const [Msdn,setMsdn]=useState('')
  const[zkah,setZkah] = useState(false)
  const router = useRouter();
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   

  }, []);
  const fetchData = async () => {
    const response = await axios.post(`https://vf.alerting.services/fekrwzekrApis/Users/GetUserTodayProfile?MobileNumbr=${Msdn}`, {
      headers: {
        'content-type': 'text/json'
      }
    });
    return response.data.description;
  };
  const queryKey = Msdn ? ["profile", Msdn] : ["myvideos"];
  const {  data:pofileData,isLoading:profileLoading} = useQuery(
    queryKey,
    fetchData)
    useEffect(() => {
      const arr = pofileData&&JSON.parse(pofileData);
      setZkah(arr?._Zakaa)
    }, [pofileData]);
   
    
  const AddZakaa = async (e:any) => {
    console.log(e.target.value)
    setZkah(!zkah)
    const response = await axios.post(
      `https://vf.alerting.services/fekrwzekrApis/Users/AddZakaa?MobileNumber=${Msdn}&status=${e.target.checked}
      `,
      {},
      {
    
      }
    );
    return response.data;
  };
  //calculat zkah 
  const [mall, seTMall] = useState<number>(0)
  const [Ashoom, seTAShoom] = useState<number>(0)
  const [sndat, seTSndat] = useState<number>(0)
  const [arbah, seTArbah] = useState<number>(0)
  const [gold18, seTGold18] = useState<number>(0)
  const [gold21, seTGold21] = useState<number>(0)
  const [gold18Price, seTGold18Price] = useState<number>(0)
  const [gold21Price, seTGold21Price] = useState<number>(0)
  const[akarat, seTAkarat] = useState<number>(0)

  var  outputMall = 0 
   outputMall =!isNaN(mall) ? Math.ceil( mall*0.025) : 0
   var outputSum =(!isNaN(Ashoom)?Ashoom:0) +( !isNaN(sndat) ? sndat : 0) +( !isNaN(arbah)? arbah :0)
   var outputAsoolwmomtlkat = Math.ceil(outputSum* 0.025)
   var outoutGoldSum =  (!isNaN(gold18)?gold18:0) * (!isNaN(gold18Price)? gold18Price :0) + ( !isNaN(gold21) ? gold21:0) *  (!isNaN(gold21Price)? gold21Price : 0) 
   var outputGold=Math.ceil((outoutGoldSum)*.025)
   var outputAkarat = !isNaN(mall) ? Math.ceil(akarat*0.025) :0
//




  return (
    <div style={{backgroundColor:"#f5f3f0"}} >
     <SingleHeader pageName=' حساب الزكاة'/>
     {/* <div className="pageIcon-top"> <h3>الزكاة<img src='/images/zkah.png' /></h3></div> */}
    
    <div className="row zakah-body"  >
 
    <div className="container " onClick={()=>{!Msdn || Msdn=='NA' || Msdn=='undefined' ? router.push(`http://fikrwzikr.com/SignIn` ) : ''}}>
    
        <h3>احسب زكاتك مع  كأنك تراه </h3>
        <div className="zkah-input col-sm-8" >
            <div className="zakah-box " >
              <div className="input-title">زكاة المال</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة المال الذى املكة</div>
              <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-mall" onChange={(e:any)=>seTMall(parseFloat(e.target.value))} />
                 
             </div>
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
           
 
            </div>

            <div className="zakah-box " >
              <div className="input-title">زكاة الاصول والممتلكات</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الأسهم التي امتلكها فى السوق</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-ashom"onChange={(e:any)=>seTAShoom(parseFloat(e.target.value))}/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة السندات التي امتلكها فى السوق</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-asol" onChange={(e:any)=>seTSndat(parseFloat(e.target.value))}/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الارباح التي حصلت عليها &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-arbah" onChange={(e:any)=>seTArbah(parseFloat(e.target.value))}/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
           
 
            </div>

            <div className="zakah-box " >
              <div className="input-title">زكاة الذهب </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">وزن الذهب الذي تملكة لغير الوينة  عيار 18 بالجرام</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-eighteen" onChange={(e:any)=>seTGold18(parseFloat(e.target.value))}/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب عيار 18 اليوم <br/>
<input className="input-field gold-price" type='number' min="0" onChange={(e:any)=>seTGold18Price(parseFloat(e.target.value))}  />
             </div>
            </div>

            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">وزن الذهب الذي تملكة لغير الزينة عيار 21 بالجرام</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-twentyone" onChange={(e:any)=>seTGold21(parseFloat(e.target.value))}/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب عيار 21 اليوم <br/>
<input className="input-field gold-price" type='number' min="0" onChange={(e:any)=>seTGold21Price(parseFloat(e.target.value))} />
             </div>
            </div>
           
 
            </div>
            <div className="zakah-box " >
              <div className="input-title">زكاة العقارات المملوكة</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الأسهم التي امتلكها فى السوق</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا"  onChange={(e:any)=>seTAkarat(parseFloat(e.target.value))}/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
       
           
 
            </div>
            
            
          
         </div>
      
        <div className="zkah-result col-sm-4 zakah-box">
           <div className="zakah-title">قيمة الزكاة </div>
           <div className="box-line"></div>
           <div className="result-line">
                <span className="name">زكاة المال</span>
                <span className="result" id="output-mall">{outputMall} ج.م</span>
           </div>
            <div className="result-line">
                <span className="name">زكاة الاصول والممتلكات</span>
          <span className="result" id="output-osolandmomtlkat">{outputAsoolwmomtlkat} ج.م</span>
           </div>
            <div className="result-line">
                <span className="name">زكاة الذهب</span>
                <span className="result" id="output-gold">{outputGold} ج.م</span>
           </div> 
            <div className="result-line">
                <span className="name">زكاة العقارات المملوكة</span>
                <span className="result" id="akarat-output">{outputAkarat} ج.م</span>
           </div>
           <div className="box-line"></div>
           <div>
            <span className="total">إجمالي مبلغ الزكاة</span>
            <span className="result" id="output-total">{outputMall+outputAkarat+outputAsoolwmomtlkat+outputGold}ج.م</span>
           </div>
       <br/>
           <input type="checkbox" id="done" checked={zkah} name="done"  onChange={(e)=>AddZakaa(e)}/>
           <label htmlFor="done" className="done">لقد اديت الزكاة</label><br/>
          
        </div>
  
        </div>
        <br/>
    </div>    
  </div>
  )
}

export default Zkah