import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
    <footer>
    <div className="container">
     <div className="row">
      <div className="col-md-4">
       <h3>عن الموقع</h3>
       <ul className="list-unstyled">
        <li><a href="About">وصف الموقع</a></li><br/>
        <li><a href="Terms">الشروط و الأحكام</a></li><br/>
        <li><a href="UnSubConfirm">الغاء الاشتراك</a></li>   
       </ul> 
      </div> 
      <div className="col-md-4">
       <h3>خريطة الموقع</h3>
       <ul className="row">
        <li className="col-xs-6"><a href="Index"> الرئيسية</a></li>
        <li className="col-xs-5"><a href="Category?id=1">القرآن الكريم</a></li>
        <li className="col-xs-6"><a href="Category?id=18">الأدعية والابتهالات الدينية</a></li>
        <li className="col-xs-5"><a href="Category?id=26">الرقائق الإيمانية</a></li>
        <li className="col-xs-6"><a href="Category?id=33">الحديث الشريف</a></li>
        <li className="col-xs-5"><a href="Category?id=39">أفكار وأذكار</a></li>
        <li className="col-xs-6"><a href="Category?id=44">اكتشف نفسك</a></li>
        <li className="col-xs-5"><a href="Category?id=49">كأنك تراه - ﷺ</a></li>
        <li className="col-xs-6"><a href="Category?id=55">كأنك معه - ﷺ</a></li>
        <li className="col-xs-5"><a href="Category?id=60">فيديو كليب</a></li>
        <li className="col-xs-6"><a href="Category?id=68">خواطر الأحباب</a></li> 
       </ul> 
      </div>
      <div className="col-md-4">
       <h3>تابعنا عبر</h3>
       <ul className="list-inline">
        <li><a href="https://www.facebook.com/Ka2naktraho/" target="_blank" ><FaFacebookF /></a></li>
        <li><a href="https://twitter.com/ka2nak_traho/"  target="_blank" ><FaTwitter /></a></li>
        <li><a href="https://www.instagram.com/ka2naktraho/"  target="_blank" ><BsInstagram /></a></li>  
       </ul> 
      </div>    
     </div> 
   <div className="row sub-footer">
      <div className="col-sm-8 col-xs-6">
       <div className="copyright">
        <p> جميع الحقوق محفوظة © 2024 لدى شركة إيجيبت لينكس </p>    
       </div>             
      </div>
      <div className="col-sm-4 col-xs-6"> 
        <p>Produced By</p>
        <img src="images/elinx-logo.png" className="img-responsive" alt="egyptlinx" /> 
      </div>    
     </div>
    </div>   
   </footer>  
   </div>
  )
}

export default Footer