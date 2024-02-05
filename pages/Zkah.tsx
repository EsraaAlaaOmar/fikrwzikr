import React, { useState } from 'react'

const Zkah = () => {
    function mal(val:any) {
        
        document.getElementById('output-mall').innerHTML= Math.ceil(val*.025)  +'.00 ج.م'
        console.log(val * .025)
         // add new  inputs at any change 
       var akarat1 = parseInt( document.getElementById('akarat-output').innerHTML.split('ج.م')[0]);
       var gold1 = parseInt(document.getElementById('output-gold').innerHTML.split('ج.م')[0]);
       var osolandmomtlkat1 =parseInt( document.getElementById('output-osolandmomtlkat').innerHTML.split('ج.م')[0]);
       var mall1 =  parseInt(document.getElementById('output-mall').innerHTML.split('ج.م')[0]);
      
      var mall = mall1>0 ? mall1 : 0;
      var gold = gold1>0 ? gold1 : 0;
      var osolandmomtlkat= osolandmomtlkat1>0 ? osolandmomtlkat1 :0 ;
      var akarat = akarat1>0 ? akarat1 :0 ;
      
       document.getElementById('output-total').innerHTML= parseInt(mall) + parseInt(gold) + parseInt( osolandmomtlkat) + parseInt(akarat )  +'.00 ج.م'
    }
    const setValues(e)=> {
        [e.target.name] = e.target.value
    }
      const[outputMall, setOuputMall] = useState(0)
  return (
    <div className="container ">
        <h2>احسب ذكاتك مع فكر وذكر </h2>
        <div className="zkah-input col-sm-8">
            <div className="zakah-box " >
              <div className="input-title">زكاة المال</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة المال الذى املكة</div>
                <input className="input-field" type="number" placeholder="القيمة هنا"  id="input-mall" onkeyup="mal(this.value)"/>
                 
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
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-ashom" onkeyup="osolandmomtlkat()"/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة السندات التي امتلكها فى السوق</div>
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-asol"  onkeyup="osolandmomtlkat()"/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الارباح التي حصلت عليها &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</div>
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-arbah"  onkeyup="osolandmomtlkat()"/>
                 
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
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-eighteen" onkeyup="gold()"/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب اليوم <br/>
1564 جنية مصري
             </div>
            </div>

            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">وزن الذهب الذي تملكة من عيار 21 بالجرام</div>
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-twentyone" onkeyup="gold()"/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب اليوم <br/>
1830 جنية مصري
             </div>
            </div>
           
 
            </div>
            <div className="zakah-box " >
              <div className="input-title">زكاة العقارات المملوكة</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الأسهم التي امتلكها فى السوق</div>
                <input className="input-field" type="number" placeholder="القيمة هنا"  onKeyUp="akarat(this.value)"/>
                 
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
                <span className="result" id="output-osolandmomtlkat">0.00 ج.م</span>
           </div>
            <div className="result-line">
                <span className="name">زكاة الذهب</span>
                <span className="result" id="output-gold">0.00 ج.م</span>
           </div>
            <div className="result-line">
                <span className="name">زكاة العقارات المملوكة</span>
                <span className="result" id="akarat-output">0.00 ج.م</span>
           </div>
           <div className="box-line"></div>
           <div>
            <span className="total">إجمالي مبلغ الزكاة</span>
            <span className="result" id="output-total">0.00 ج.م</span>
           </div>
        </div>
       

    </div>
  )
}

export default Zkah