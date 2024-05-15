import React, { useRef, useState,useEffect } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/router'
const CompetitonTerms = () => {
    const[showterms, setShowTerms] = useState(true)
    const [Msdn,setMsdn]=useState('')
    useEffect(() => {
      // Accessing query parameters
      const queryParams = new URLSearchParams(window.location.search);
      
      // Reading specific query parameters
      const param1Value = queryParams.get('MSISDN');
      param1Value && setMsdn(param1Value)
      
     
  
    }, []);
    const ref = useRef(null)

    const handleClickOutside = () => {
      console.log('clicked outside')
      setShowTerms(false)
    }

  
    useOnClickOutside(ref, handleClickOutside)
     const router = useRouter()
  return (
   <>{ showterms&& <div className='overlay overlay_full_page' ref={ref} >
            
          <div className="white-background comp-terms ">
            <span className="icon" onClick={()=> router.push(`/Competition?MSISDN=${Msdn}`)}><IoClose /></span>
            <h3>
            لا يوجد مسابقة الان
            </h3>
          {/* <ul>
            <li>1.	هذه المسابقة تحت اشراف وزارة التضامن الاجتماعي بترخيص رقم (33) لسنة 2024 وجهاز حماية المستهلك بإخطار رقم (81) لسنة .2024</li>
            <li>2.	مدة المسابقة: تبدأ من10 مارس وتنتهي في30ابريل 2024</li>
            <li>3.		يقوم المتسابق بتسجيل فيديو بنفسه بجودة عالية يتضمن تسجيل صوتي بتلاوة للقرآن الكريم أودعاء أوابتهال أوانشاد.</li>
            <li>4.		لا يجب أن يزيد مدة الفيديو عن دقيقة واحدة.</li>
            <li>5.	يقوم المتسابق بتحميل المحتوى الذي تم تسجيله على الموقع.</li>
            <li>6.	سوف يتم تعليق الفيديوالى أن يتم مراجتعه من قبل الفريق المختص قبل نشر الفيديو على الموقع.</li>
            <li>7.	بعد نشر الفيديو على الموقع، يقوم باقي المشتركين بالتصويت للفيديو صاحب الصوت الأفضل.</li>
            <li>8.	يتم تحديد الفائزون المحتملون بناء على أعلى نسبه تصويت من المشتركين الآخرين على الموقع.</li>
            <li>9.	يقوم الفريق الخاص بمراجعة الفيديوهات صاحبة أعلى نسبة تصويت ليتم تحديد الأفضل من الناحية اللغوية والمحتوى الديني.</li>
            <li>10.	الفيديو الذي يحصل على أعلى نسبة تصويت من المشتركين وكذلك تقييم المراجعة اللغوية في المسابقه يحصل علي جنيه دهب.</li>
            <li>11.		يفوز 2 متسابقين لهم أعلى تصويت وتقييم في خلال مدة المسابقة على أن يتم استلام الجائزة خلال 15يوم من انتهاءالمسابقة.</li>
            <li>12.	يمكن تسجيل وتحميل عدد فيديوهات مختلفة لنفس المتسابق للحصول على فرص أعلى للفوز  بحد أقصى10  فيديوهات بحد أقصي فيديو واحد فقط يوميا من نفس رقم المحمول المشترك في المسابقه من خلاله.</li>
            <li>13.	يجب على المتسابق دفع الاشتراك اليومي الخاص بالموقع (1.5 ج يوميا) من أول يوم اشتراك وحتى اعلان النتيجة لكل يكون مستحق استلام الجائزة في حالة الفوز.</li>
            <li>14.	عند الغاء الاشتراك في الموقع قبل نهاية المسابقة يفقد المشترك فرصه في الفوز.	</li>
            <li>15.	يعتبر تحميل المحتوى على الموقع عن طريق المتسابق هو بمثابة تأكيد منه يعطي لاداره الموقع الحق في استغلال و نشر المحتوى الخاص به على الموقع وأيضا في جميع منصات التواصل الاجتماعي.</li>
            <li>16.	في حاله فوز أي من المتسابقين يمكن له الاشتراك مرة أخرى عن طريق تحميل محتوى جديد في المسابقات المستقبلية.</li>
          </ul> */}
             <div className="terms-btn" onClick={() =>  router.push(`/Competition?MSISDN=${Msdn}`)}>OK</div>
            </div>
            
   </div>}
   </>
  )
}

export default CompetitonTerms