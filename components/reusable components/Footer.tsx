import React,{useState,useEffect} from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';


const Footer = () => {
  const [Msdn,setMsdn]=useState<string>()
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   

  }, []);
  return (
    <div>
    <footer>
    <Container>
    <Row>
      <Col md={4}>
       <h3>عن الموقع</h3>
       <ul className="list-unstyled">
        <li><a href="About">وصف الموقع</a></li><br/>
        <li><a href="Terms">الشروط و الأحكام</a></li><br/>
        <li><a href="UnSubConfirm">الغاء الاشتراك</a></li>   
       </ul> 
      </Col> 
      <Col md={4}>
       <h3>خريطة الموقع</h3>
       <Row>
       <ul >
        <Col xs={6} />
        <li className="col-xs-6" ><a href="Index"> الرئيسية</a></li>
        <li className="col-xs-5"><Link href={`/Competition?MSISDN=${Msdn}`}>  مسابقة أفضل مرتل  </Link></li>
        <li className="col-xs-6"><Link href={`/Ramdan?MSISDN=${Msdn}`} >  رحلة التقرب الي الله </Link></li>
        <li className="col-xs-5"> <Link href={`/Zkah?MSISDN=${Msdn}`}> حساب الزكاة </Link></li>
        <li className="col-xs-6"><Link href={`/RamdanMeter?MSISDN=${Msdn}`}  > مقياس العبادات </Link></li>
        <li className="col-xs-5"><Link href={`/Sbha?MSISDN=${Msdn}`} > السبحة </Link></li>

        <li className="col-xs-6"><a href="https://ka2naktraho.com/Category?id=1">القرآن الكريم</a></li>
        <li className="col-xs-5" ><a href="https://ka2naktraho.com/Category?id=18">الأدعية والابتهالات الدينية</a></li>
        <li className="col-xs-6"><a href="https://ka2naktraho.com/Category?id=26">الرقائق الإيمانية</a></li>
        <li className="col-xs-5" ><a href="https://ka2naktraho.com/Category?id=33">الحديث الشريف</a></li>
        <li className="col-xs-6"><a href="https://ka2naktraho.com/Category?id=39">أفكار وأذكار</a></li>
        <li className="col-xs-5" ><a href="https://ka2naktraho.com/Category?id=44">اكتشف نفسك</a></li>
        <li className="col-xs-6"><a href="https://ka2naktraho.com/Category?id=49">كأنك تراه - ﷺ</a></li>
        <li className="col-xs-5" ><a href="https://ka2naktraho.com/Category?id=55">كأنك معه - ﷺ</a></li>
        <li className="col-xs-6"><a href="https://ka2naktraho.com/Category?id=60">إنشاد</a></li>
        <li className="col-xs-5" ><a href="https://ka2naktraho.com/Category?id=68">خواطر الأحباب</a></li> 
       </ul> 
       </Row>
      </Col>
      <Col md={4}>
       <h3>تابعنا عبر</h3>
       <ul className="list-inline">
        <li><a href="https://www.facebook.com/Ka2naktraho/" target="_blank" ><FaFacebookF /></a></li>
        <li><a href="https://twitter.com/ka2nak_traho/"  target="_blank" ><FaTwitter /></a></li>
        <li><a href="https://www.instagram.com/ka2naktraho/"  target="_blank" ><BsInstagram /></a></li>  
       </ul> 
       </Col> 
       </Row>
    
       <Row>
 
   <Col sm={8} xs={6}>
       <div className="copyright">
        <p> جميع الحقوق محفوظة © 2024 لدى شركة إيجيبت لينكس </p>    
       </div>     
  </Col>        
       <Col sm={4} xs={6}>
      
        <p>Produced By</p>
        <img src="images/elinx-logo.png" className="egyptlinx-logo" alt="egyptlinx" /> 
      </Col>    
      </Row>
    </Container>   
   </footer>  
   </div>
  )
}

export default Footer