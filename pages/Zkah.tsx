import React, { useState } from 'react'

const Zkah = () => {
  const [mall, seTMall] = useState(0)
  const [Ashoom, seTAShoom] = useState(0)
  const [sndat, seTSndat] = useState(0)
  const [arbah, seTArbah] = useState(0)
  const [gold18, seTGold18] = useState(0)
  const [gold21, seTGold21] = useState(0)
  const[akarat, seTAkarat] = useState(0)
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
              <input className="input-field" type="number" placeholder="القيمة هنا" id="input-mall" onChange={(e:any)=>seTMall(e.target.value)} />
                 
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
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-ashom"onChange={(e:any)=>seTAShoom(e.target.value)}/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة السندات التي امتلكها فى السوق</div>
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-asol" onChange={(e:any)=>seTSndat(e.target.value)}/>
                 
             </div>
             
             <div className="box-unit ">
                    العملة <br/>
                    جنيه مصري 
             </div>
            </div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الارباح التي حصلت عليها &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</div>
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-arbah" onChange={(e:any)=>seTArbah(e.target.value)}/>
                 
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
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-eighteen" onChange={(e:any)=>seTGold18(e.target.value)}/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب اليوم <br/>
1564 جنية مصري
             </div>
            </div>

            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">وزن الذهب الذي تملكة من عيار 21 بالجرام</div>
                <input className="input-field" type="number" placeholder="القيمة هنا" id="input-twentyone" onChange={(e:any)=>seTGold21(e.target.value)}/>
                 
             </div>
             <div className="box-unit ">
                  
قيمة الذهب اليوم <br/>
3600 جنية مصري
             </div>
            </div>
           
 
            </div>
            <div className="zakah-box " >
              <div className="input-title">زكاة العقارات المملوكة</div>
            <div className="zakah-row">
              <div className=" box-input">
                <div className="title">قيمة الأسهم التي امتلكها فى السوق</div>
                <input className="input-field" type="number" placeholder="القيمة هنا"  onChange={(e:any)=>seTAkarat(e.target.value)}/>
                 
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
                <span className="result" id="output-mall">{Math.ceil(mall*0.025)} ج.م</span>
           </div>
            <div className="result-line">
                <span className="name">زكاة الاصول والممتلكات</span>
          <span className="result" id="output-osolandmomtlkat">{Math.ceil((Ashoom + sndat + arbah ) * 0.025)}0.00 ج.م</span>
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