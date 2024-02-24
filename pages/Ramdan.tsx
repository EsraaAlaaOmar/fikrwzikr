import React,{useState} from 'react'

const Ramdan = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox_aa: false,
    checkbox_a: false,
    checkbox_bb: false,
    checkbox_b: false,
    checkbox_cc: false,
    checkbox_c: false,
    checkbox_dd: false,
    checkbox_d: false,
    checkbox_ee: false,
    checkbox_e: false,
    checkbox_f: false,
    checkbox_g: false,
    checkbox_h: false,
    checkbox_i: false,
    checkbox_j: false,
  });
console.log(checkboxValues)
    // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Checkbox values:', checkboxValues);
    // You can send the checkbox values to the server or perform any other action here
  };
  return (
    <>
          <section className="single-content ramdan-content">
     <div className="container">
      <div className="row">
        <div className="col-md-12">
         <div className="prayer-box">
          <h3>مواقيت الصلاة</h3> 
          <div className="content">
           <div className="row">
            <div className="col-md-7 col-xs-6">
                <h4> 1 رمضان 1441 هجريا</h4>
                <p>مواقيت الصلاة حسب مدينة القاهرة</p>  
            </div>
            <div className="col-md-2 col-xs-3 text-center"><h4>فرض</h4></div>
            <div className="col-md-2 col-xs-3 text-center"><h4>سنة</h4></div>   
           </div>          
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">الفجر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">3:08 صباحا</li>     
             </ul>   
            </div>
            <div className="col-md-2 col-xs-3">
              <div className="round">
                 <input type="checkbox" id="checkbox_aa" checked={checkboxValues.checkbox_aa} onChange={handleCheckboxChange} />
                <label for="checkbox_aa"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_a" checked={checkboxValues.checkbox_a} onChange={handleCheckboxChange} />
                <label for="checkbox_a"></label>
                <span className="suna">ركعتين قبل</span>  
              </div>                
            </div>                 
           </div>   
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">الظهر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">11:54 صباحا</li>     
             </ul>   
            </div>
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_bb" checked={checkboxValues.checkbox_bb} onChange={handleCheckboxChange} />
                <label for="checkbox_bb"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_b" checked={checkboxValues.checkbox_b} onChange={handleCheckboxChange} />
                <label for="checkbox_b"></label>
                <span className="suna"> ركعتين قبل <br/> 4 بعد</span>  
              </div>                
            </div>                 
           </div>   
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">العصر</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">3:30 مساء</li>     
             </ul>   
            </div>
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_cc" checked={checkboxValues.checkbox_cc} onChange={handleCheckboxChange} />
                <label for="checkbox_cc"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_c" checked={checkboxValues.checkbox_c} onChange={handleCheckboxChange} />
                <label for="checkbox_c"></label>
                <span className="suna"></span>  
              </div>                
            </div>                 
           </div>   
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">المغرب</li>
              <li className="col-md-6 hidden-xs">-</li>   
              <li className="col-md-3 col-xs-12">6:54 مساء</li>     
             </ul>   
            </div>
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_dd" checked={checkboxValues.checkbox_dd} onChange={handleCheckboxChange} />
                <label for="checkbox_dd"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_d" checked={checkboxValues.checkbox_d} onChange={handleCheckboxChange} />
                <label for="checkbox_d"></label>
                <span className="suna">ركعتين بعد</span>  
              </div>                
            </div>                 
           </div>   
           <div className="col row">
            <div className="col-md-7 col-xs-6">
             <ul className="list-inline row">
              <li className="col-md-3 col-xs-12">العشاء</li>
              <li className="col-md-6 hidden-xs">-</li>  
              <li className="col-md-3 col-xs-12">8:27 مساء</li>     
             </ul>   
            </div>
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_ee" checked={checkboxValues.checkbox_ee} onChange={handleCheckboxChange} />
                <label for="checkbox_ee"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_e" checked={checkboxValues.checkbox_e} onChange={handleCheckboxChange} />
                <label for="checkbox_e"></label>
                <span className="suna">ركعتين بعد</span>  
              </div>                
            </div>                 
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
          <div className="content-read row">
           <div className="col-xs-3 col-xs-offset-9 text-center">
            <span className="quran-pages">4 صفحات</span>   
           </div>      
           <div className="item-col">
            <div className="col-xs-9">
             <h5>الفجر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_f" checked={checkboxValues.checkbox_f} onChange={handleCheckboxChange} />
                <label for="checkbox_f"></label>
                
              </div>                
            </div>   
           </div>
           <div className="item-col">
            <div className="col-xs-9">
             <h5>الظهر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_g" checked={checkboxValues.checkbox_g} onChange={handleCheckboxChange} />
                <label for="checkbox_g"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9">
             <h5>العصر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_h" checked={checkboxValues.checkbox_h} onChange={handleCheckboxChange} />
                <label for="checkbox_h"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9">
             <h5>المغرب</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_i" checked={checkboxValues.checkbox_i} onChange={handleCheckboxChange} />
                <label for="checkbox_i"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9">
             <h5>العشاء</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
              <input type="checkbox" id="checkbox_j" checked={checkboxValues.checkbox_j} onChange={handleCheckboxChange} />
                <label for="checkbox_j"></label>
              </div>                
            </div>   
           </div>                
          </div>     
         </div> 
        </div>    
      </div>       
     </div>  
    </section>
    </>
  )
}

export default Ramdan