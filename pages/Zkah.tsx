import axios, { Axios } from 'axios';
import React, { useState } from 'react'

const Zkah = () => {
  const AddZakaa = async () => {
    const response = await axios.post(
      'https://vf.alerting.services/fekrwzekrApis/Users/AddZakaa?MobileNumber=01126214650',
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
  const[akarat, seTAkarat] = useState<number>(0)

  var  outputMall = 0 
   outputMall = Math.ceil(mall*0.025)
   var outputAsoolwmomtlkat = Math.ceil((Ashoom + sndat + arbah )* 0.025)
   var outputGold=Math.ceil((gold18*3107 + gold21*3625)*.025)
   var outputAkarat = Math.ceil(akarat*0.025)
//




  return (
    <div className="container ">
        <h2>احسب ذكاتك مع فكر وذكر </h2>
        <div className="zkah-input col-sm-8">
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
              <div className="input-title">زكاة الذهب</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">وزن الذهب الذي تملكة من عيار 18 بالجرام</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-eighteen" onChange={(e:any)=>seTSndat(parseFloat(e.target.value))}/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب اليوم <br/>
3107 جنية مصري
             </div>
            </div>

            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">وزن الذهب الذي تملكة من عيار 21 بالجرام</div>
                <input className="input-field" type="number" min="0" placeholder="القيمة هنا" id="input-twentyone" onChange={(e:any)=>seTGold21(parseFloat(e.target.value))}/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب اليوم <br/>
3625 جنية مصري
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
       
           <input type="checkbox" id="done" name="done" value="Bike" onChange={()=>AddZakaa()}/>
           <label for="done">لقد اديت الزكاة</label><br/>
          
        </div>
       

    </div>
  )
}

export default Zkah