import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Video from '../components/competitioncomponents/Video'

import Link from 'next/link'
import Image from 'next/image'
import Loader from '../components/competitioncomponents/Loader';
import PaginationCom from '../components/reusable components/PaginationComp';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
interface VideoData {
  // Define the properties of the video data you are expecting
  // id: number;
  // title: string;
  // url: string;
  // Add other properties as needed
    DateIn: string;
  Deleted: Boolean;
  Description: string;
  NViews: number;
  TalentId: number;
  Title: string;
  Url: string;
  VideoId: number;
  Votes:[]
}

const Competition = () => {
 
  useEffect(() => {
    alert(`شروط وأحكام المسابقة
    1. هذه المسابقة تحت إشراف وزارة التضامن الاجتماعي برقم 9999999 وجهاز حماية المستهلك برقم 9999999.
    2. يقوم المتسابق بتسجيل فيديو بنفسه بجودة عالية يتضمن تسجيل صوتي لتلاوة القرآن الكريم أو الدعاء أو الأناشيد.
    3. لا يجب أن تزيد مدة الفيديو عن دقيقة واحدة.
    4. يقوم المتسابق بتحميل المحتوى الذي تم تسجيله على الموقع.
    5. سيتم تعليق الفيديو حتى يتم مراجعته من قبل الفريق المختص قبل نشره على الموقع.
    6. بعد نشر الفيديو على الموقع، يقوم باقي المشتركين بالتصويت للفيديو الذي يعتبر صاحب الصوت الأفضل.
    7. يتم تحديد الفائزين المحتملين بناءً على أعلى نسبة تصويت من المشتركين الآخرين على الموقع.
    8. يقوم الفريق الخاص بالدكتور "علي جمعة" بمشاهدة الفيديوهات التي حصلت على أعلى نسبة تصويت لتحديد الأفضل من الناحية اللغوية والمحتوى الديني.
    9. الفيديو الحاصل على أعلى نسبة تصويت من المشتركين في المسابقة بالإضافة إلى التقييم الخاص من قبل الدكتور "علي جمعة" سيحصل على جنيه من الذهب.
    10. يفوز متسابقان لهما أعلى تصويت وتقييم خلال شهر رمضان المبارك، ويتم استلام الجائزة خلال 15 يومًا من انتهاء الشهر الكريم.
    11. يمكن إضافة عدد من الفيديوهات المختلفة لنفس المتسابق لزيادة فرص الفوز، ولكن يُسمح بحد أقصى بـ10 فيديوهات، وبفيديو واحد فقط يوميًا من نفس رقم المحمول المشترك في المسابقة.
    12. يجب على المتسابق دفع الاشتراك اليومي الخاص بالموقع (1.5 جنيه يوميًا) من أول يوم اشتراك وحتى إعلان النتيجة، ليكون مستحقًا لاستلام الجائزة في حال الفوز.
    13. عند إلغاء الاشتراك في الموقع قبل نهاية شهر رمضان يفقد المشترك فرصة الفوز.
    14. يُعتبر تحميل المحتوى على الموقع عن طريق المتسابق هو بمثابة تأكيد منه بمنح الإدارة الحق في استغلال ونشر المحتوى الخاص به على الموقع وفي جميع منصات التواصل الاجتماعي.
    15. في حال فوز أي من المتسابقين، يُسمح له بالمشاركة مرة أخرى عن طريق تحميل محتوى جديد في المسابقات المستقبلية.
   ` );
    
    
  }, []);
  
  return (
  
   
      <>


          <br style={{clear: "both"}}/>
      
          <div className='page-hierarchy'>
                <span className='parent'>
                        <Link href='/' style={{color:"#000"}}>
                            الرئيسية 
                        </Link>
                        
                    <span className='arow-icon'><MdOutlineKeyboardArrowLeft /></span>
                    </span>
                    <span className='child'>مسابقة رمضان </span>

                    <br />
      
    </div>
        <Link className='my-videos-link-div' href='/Myvideos' style={{color:"#000"}}>
          <button className="my-videos-link" >
       فديوهاتي
        </button>
        </Link>
          <div className='videos-grid '>
      
              {/* {renderedVideos} */}
           
        </div >
   

<PaginationCom itemsPerPage={12}/>

    </>
  )
}

export default Competition