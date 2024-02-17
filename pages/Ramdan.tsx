import React from 'react'

const Ramdan = () => {
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
                <input type="checkbox" id="checkbox-aa" />
                <label for="checkbox-aa"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-a" />
                <label for="checkbox-a"></label>
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
                <input type="checkbox" id="checkbox-bb" />
                <label for="checkbox-bb"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-b" />
                <label for="checkbox-b"></label>
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
                <input type="checkbox" id="checkbox-cc" />
                <label for="checkbox-cc"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-c" />
                <label for="checkbox-c"></label>
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
                <input type="checkbox" id="checkbox-dd" />
                <label for="checkbox-dd"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-d" />
                <label for="checkbox-d"></label>
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
                <input type="checkbox" id="checkbox-ee" />
                <label for="checkbox-ee"></label>
              </div>                
            </div>  
            <div className="col-md-2 col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-e" />
                <label for="checkbox-e"></label>
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
                <input type="checkbox" id="checkbox-1" />
                <label for="checkbox-1"></label>
              </div>                
            </div>   
           </div>
           <div className="item-col">
            <div className="col-xs-9">
             <h5>الظهر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-2" />
                <label for="checkbox-2"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9">
             <h5>العصر</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-3" />
                <label for="checkbox-3"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9">
             <h5>المغرب</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-4" />
                <label for="checkbox-4"></label>
              </div>                
            </div>   
           </div>  
           <div className="item-col">
            <div className="col-xs-9">
             <h5>العشاء</h5>    
            </div>
            <div className="col-xs-3">
              <div className="round">
                <input type="checkbox" id="checkbox-5" />
                <label for="checkbox-5"></label>
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