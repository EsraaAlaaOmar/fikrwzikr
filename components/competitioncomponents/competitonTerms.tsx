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
                            <li>هذا الموقع مقدم كخدمة لجميع العملاء الحاليين والجدد في جمهورية مصر العربية لشبكة أورنج.</li>
                            <li>يشترك العميل في هذه الخدمة عن طريق الموقع باستخدام رقم الهاتف الخاص به او عن طريق ارسال رسالة الي الرقم المختصر 7623.</li>
                            <li>يستمتع المشترك بالمحتوى الديني المتميز من خلال الموقع بتكلفة 1 جنيه فقط يوميا وذلك بعد انتهاء ال ٣ أيام المجانية.</li>
                            <li>يتم ارسال رسائل تأكيد الاشتراك تحتوي على تكلفة الخدمة والرابط الخاص بالموقع وأيضا كيفية إلغاء الاشتراك.</li>
                            <li>تقوم شبكة المحمول بخصم التكلفة اليومية (1 جنيه) من المشترك من رصيده في حالة الخطوط المدفوعة مقدما أوإضافة التكلفة على الفاتورة في حالة الخطوط ذات الفاتورة الشهرية.</li>
                            <li>في حالة عدم وجود رصيد للخطوط المدفوعة مقدما، لا يتم الاستمتاع بالخدمة.</li>
                            <li>يتم محاسبة مشاهدة الفيديوهات من باقة الانترنت أو الواي فاي الخاص بالعميل. الاشتراك في الخدمة لا يتضمن باقة انترنت مجانية.</li>
                            <li>تجدد الخدمة تلقائيا كل شهر.</li>
                            <li>لإلغاء الخدمة في أي وقت، اضغط “إلغاء الاشتراك” من الموقع مجانا او يقوم العميل بارسال 01 الي الرقم المختصر 7623.</li>
                            <li> للاشتراك في المسابقة: يقوم المشترك بتصوير فيديو له أثناء تلاوة القرآن أو الدعاء (على أن تكون صورة المتسابق واضحة أثناء التصوير) ويتم تحميل الفيديو على الموقع. </li>
                            <li>يجب على كل مشترك أن يسجل اسمه ثلاثي أثناء تحميل الفيديو.</li>
                            <li>يقوم المشتركين بالخدمة بعمل تصويت على الفيديوهات المحملة، على أن يفوز المتسابقين الحاصلين على أعلى تصويت.</li>
                            <li>لا يحق المشترك الفوز مرتين أثناء نفس المسابقة.</li>
             </ol>
          <div className="terms-btn" onClick={()=>setShowTerms(false)}>OK</div>
            </div>
   </div>}
   </>
  )
}

export default CompetitonTerms