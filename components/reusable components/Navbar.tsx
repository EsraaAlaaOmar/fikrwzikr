import React,{useState,useRef} from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { BsListUl } from "react-icons/bs";
import { useOnClickOutside } from 'usehooks-ts'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  
  const ref = useRef(null)
  useOnClickOutside(ref, ()=>setShowSidebar(false))
  return (
    <div>  
{ showSidebar &&  <div className="side-nav" style={{right: "0px"}} ref={ref}>      
      <a href="javascript:void(0);" className="close-btn" onClick={()=>setShowSidebar(false)}><span>×</span></a>     
      <ul className="list-unstyled" id="accordion" role="tablist" aria-multiselectable="true">          
        <h3>القائمه</h3>  
        <li className="panel"><a href="index.html">الرئيسية</a></li>   
        <li className="panel">
         <a href="#one" data-toggle="collapse" data-parent="#accordion">القرآن الكريم <span className="caret"></span></a>
         <ul className="collapse" id="one">
          <li>
            <a href="#" className="level-2">الختمات القرآنية <span className="caret"></span></a>
            <ul className="list-unstyled wrapper-level">
             <li className="back"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i> الختمات القرآنية</a></li>    
             <li><a href="#">الختمة الدولية (67 قارئا من 67 دولة)</a></li>
             <li><a href="#">ختمة الشيخ محمود الخشت (مصر)</a></li>
             <li><a href="#">ختمة (وقرآنا فرقناه) المرتلة – قراء متنوعون</a></li>
             <li><a href="#">ختمة (وقرآنا فرقناه) المجودة – قراء متنوعون</a></li>    
            </ul>  
          </li>
          <li>
            <a href="#" className="level-2">قراء الأقطار <span className="caret"></span></a>
            <ul className="list-unstyled wrapper-level">
             <li className="back"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i> قراء الأقطار</a></li>    
             <li><a href="#"> القارئ الشيخ معاذ الدويك (المغرب)</a></li>
             <li><a href="#">القارئ الشيخ محمد خالد (اليمن)</a></li>
             <li><a href="#">القارئ الشيخ أحمد الحداد (مصر)</a></li>    
            </ul>     
          </li>
          <li>
            <a href="#" className="level-2">آيات المناسبات <span className="caret"></span></a>
            <ul className="list-unstyled wrapper-level">
             <li className="back"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i> آيات المناسبات</a></li>    
             <li><a href="#">آيات الحج في القرآن الكريم</a></li>
             <li><a href="#">آيات الصيام </a></li>  
            </ul> 
          </li>
          <li>
            <a href="#" className="level-2">آيات النبي ﷺ في القرآن الكريم <span className="caret"></span></a>
            <ul className="list-unstyled wrapper-level">
             <li className="back"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i> آيات النبي ﷺ في القرآن الكريم </a></li>    
             <li><a href="#">آيات النبي ﷺ بصوت شباب قراء العالم المعاصرين</a></li>
             <li><a href="#">آيات النبي ﷺ بصوت كبار قراء العالم المعاصرين</a></li>
             <li><a href="#">آيات النبي ﷺ بصوت كبار القراء الراحلين</a></li>    
            </ul>   
          </li>     
         </ul>    
        </li> 
        <li className="panel">
         <a href="#two" data-toggle="collapse" data-parent="#accordion">الأدعية والابتهالات الدينية <span className="caret"></span></a>
         <ul className="collapse" id="two">
          <li>
            <a href="#" className="level-2">أدعية القرآن الكريم <span className="caret"></span></a>
            <ul className="list-unstyled wrapper-level">
             <li className="back"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i> أدعية القرآن الكريم </a></li>    
             <li><a href="#">لولا دعاؤكم من القرآن الكريم</a></li>  
            </ul>             
          </li>
          <li>
            <a href="#" className="level-2">أدعية السنة النبوية <span className="caret"></span></a>
            <ul className="list-unstyled wrapper-level">
             <li className="back"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i> أدعية السنة النبوية</a></li>    
             <li><a href="#">لولا دعاؤكم من السنة النبوية</a></li>
             <li><a href="#">أذكار وأدعية مأثورة  ( فيصل اللبان )</a></li>
             <li><a href="#">أذكار وأدعية مأثورة ( محمد السوهاجي )</a></li>
             <li><a href="#">أذكار وأدعية مأثورة  (محمد عاطف )</a></li>     
            </ul>              
          </li>     
         </ul>    
        </li> 
        <li className="panel">
         <a href="#three" data-toggle="collapse" data-parent="#accordion">الرقائق الإيمانية <span className="caret"></span></a>
         <ul className="collapse" id="three">
          <li><a href="single-6.html">السيرة اليسيرة</a></li>
          <li><a href="single-7.html">نسمات</a></li>
          <li><a href="single-8.html">سلوة الأرواح</a></li>
          <li><a href="single-9.html">هيا بنا نؤمن ساعة</a></li>
          <li><a href="single-10.html">قد علم صلاته وتسبيحه</a></li>
          <li><a href="single-11.html">عندما تتحدث الدموع</a></li>     
         </ul>    
        </li> 
        <li className="panel">
         <a href="#four" data-toggle="collapse" data-parent="#accordion">الحديث الشريف <span className="caret"></span></a>
         <ul className="collapse" id="four">
          <li><a href="single-12.html">من وحي الأربعين</a></li>
          <li><a href="single-13.html">قصة حديث</a></li>
          <li><a href="single-14.html">مجالس الحديث</a></li>
          <li><a href="single-15.html">مصطلحات في علوم الحديث</a></li>
          <li><a href="single-16.html">رحلات المحدثين</a></li>     
         </ul>    
        </li>
        <li className="panel">
         <a href="#five" data-toggle="collapse" data-parent="#accordion">أفكار وأذكار <span className="caret"></span></a>
          <ul className="collapse" id="five">
           <li><a href="single-17.html">أفلا يتفكرون</a></li>
           <li><a href="single-18.html">هدى للناس</a></li>
           <li><a href="single-19.html">أسرار رمضانية</a></li>
           <li><a href="single-20.html">أنا جليس من ذكرني</a></li>      
         </ul>
        </li>                
        <li className="panel">
         <a href="#six" data-toggle="collapse" data-parent="#accordion">اكتشف نفسك <span className="caret"></span></a>
          <ul className="collapse" id="six">
           <li><a href="single-21.html">قيم حضارية</a></li>
           <li><a href="single-22.html">من عمل يده</a></li>
           <li><a href="single-23.html">مودة ورحمة</a></li>
           <li><a href="single-24.html">اكتشف نفسك</a></li>      
         </ul>
        </li>                     
        <li className="panel">
         <a href="#seven" data-toggle="collapse" data-parent="#accordion">كأنك تراه - ﷺ <span className="caret"></span></a>
          <ul className="collapse" id="seven">
           <li><a href="single-25.html">مقتنيات</a></li>
           <li><a href="single-26.html">أوسمة نبوية</a></li>
           <li><a href="single-27.html">من داخل الحجرات</a></li>
           <li><a href="single-28.html">سيدة نساء الجنة </a></li>
           <li><a href="single-29.html">تبسم</a></li>      
         </ul>
        </li>               
        <li className="panel">
         <a href="#eight" data-toggle="collapse" data-parent="#accordion">كأنك معه - ﷺ  <span className="caret"></span></a>
          <ul className="collapse" id="eight">
           <li><a href="single-30.html">ذاكرة الأماكن النبوية</a></li>
           <li><a href="single-31.html">في محراب النبوة</a></li>
           <li><a href="single-32.html">شجرة الجمال</a></li>
           <li><a href="single-33.html">علمني النبي</a></li>     
         </ul>
        </li>               
        <li className="panel">
         <a href="#nine" data-toggle="collapse" data-parent="#accordion">فيديو كليب <span className="caret"></span></a>
          <ul className="collapse" id="nine">
           <li><a href="single-34.html">أشعار وأنوار</a></li>
           <li><a href="single-35.html">أم القرى</a></li>
           <li><a href="single-36.html">تقول أمي</a></li>
           <li><a href="single-37.html">إنشاد ديني</a></li>
           <li><a href="single-38.html">إلهام السلام</a></li>
           <li><a href="single-39.html">العالم من غير محمد</a></li>
           <li><a href="single-40.html">تترات البرامج</a></li>      
         </ul>
        </li> 
        <li className="panel">
         <a href="#ten" data-toggle="collapse" data-parent="#accordion">خواطر الأحباب <span className="caret"></span></a>
          <ul className="collapse" id="ten">
           <li><a href="single-41.html">النبي في أعين الأطفال</a></li>
           <li><a href="single-42.html">كأنك معه - صلى الله عليه وسلم</a></li>
           <li><a href="single-43.html">لقاء خاص</a></li>
           <li><a href="single-44.html">سيرة عقل</a></li>    
         </ul>
        </li> 
      </ul>     
     </div>
     }
     <div className="menu affix" data-spy="affix" data-offset-top="100">
     <div className="container">
      <div className="row"> 
       <div className="col-sm-10 col-xs-9">
        <div className="links">  
          <ul className="list-inline">
        <li>
            <a href="javascript:void(0)" className="show-btn"  onClick={()=>setShowSidebar(true)}>    
            <span className='react-icon'><BsListUl /> </span> القائمة  
            </a>                
        </li>
        <li>
            <a href="subscribe.html">
            <span className='react-icon'>  <FaCircleUser /> </span>
                تسجيل دخول
            </a>
        </li>       
    </ul> 
         </div>  
       </div>
       <div className="col-sm-2 col-xs-3">
        <a href="index.html" className="menu-logo"><img src="images/ET_Logo.png" className="img-responsive" alt="logo"/></a>   
       </div>      
      </div>     
     </div>
         
    </div>
   
   
   </div>
  )
}

export default Navbar