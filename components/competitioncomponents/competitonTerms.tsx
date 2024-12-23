import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { IoClose } from "react-icons/io5";
const CompetitonTerms = () => {
    const[showterms, setShowTerms] = useState(true)
    const ref = useRef(null)

    const handleClickOutside = () => {
      console.log('clicked outside')
      setShowTerms(false)
    }

  
    useOnClickOutside(ref, handleClickOutside)
  return (
   <>{ showterms&& <div className='overlay overlay_full_page' ref={ref} >
            
          <div className="white-background comp-terms ">
            <span className="icon" onClick={()=>setShowTerms(false)}><IoClose /></span>
            <h3>شروط واحكام المسابقة </h3>
          <ol>
          <li>هذا الموقع مقدم كخدمة لجميع العملاء الحاليين والجدد في شبكه اتصالات مصر.</li>
        <li>يشترك العميل في هذه الخدمة عن طريق الموقع باستخدام رقم الموبايل الخاص به.</li>
        <li>يستمتع المشترك بالمحتوى الديني المتميز من خلال الموقع بتكلفة جنيه ونصف فقط يوميا.</li>
        <li>
            يتم ارسال رسائل تأكيد الاشتراك تحتوي على تكلفة الخدمة والرابط الخاص بالموقع وأيضا كيفية إلغاء الاشتراك.
        </li>
        <li>
            تقوم شبكة الموبايل بخصم التكلفة اليومية (1.5 جنيه) من المشترك من رصيده في حالة الخطوط المدفوعة مقدما أو إضافة التكلفة على الفاتورة في حالة الخطوط ذات الفاتورة الشهرية.
        </li>
        <li>في حالة عدم وجود رصيد للخطوط المدفوعة مقدما، لا يتم الاستمتاع بالخدمة.</li>
        <li>
            يتم محاسبة مشاهدة الفيديوهات من باقة الانترنت أو الواي فاي الخاص بالعميل. الاشتراك في الخدمة لا يتضمن باقة انترنت مجانية.
        </li>
        <li>تجدد الخدمة تلقائيا يوميا.</li>
        <li>لإلغاء الخدمة في أي وقت، اطلب *7711# مجانا.</li>
          </ol>
          <div className="terms-btn" onClick={()=>setShowTerms(false)}>OK</div>
            </div>
   </div>}
   </>
  )
}

export default CompetitonTerms