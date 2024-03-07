import React from 'react'

const lvideosManagment = () => {
  return (
    <><h2 className="admin-title"> إدارة الفيديوهات</h2>
    
    <table className="admin-table">
      <tr>
        <th></th>
        <th>رقم المستخدم </th>
        <th>وصف الفيديو </th>
        <th>التاريخ  </th>
        <th>الاجراء </th>
       
      </tr>
      <tr>
        <th>1</th>
        <td>011211311411</td>
        <td className="td-describtion">اية الكرسي  ▶ </td>
        <th>2023‑2‑18  </th>
        <td><button>اضافة </button> <button>رفض</button></td>
      </tr>
      <tr>
        <th>2</th>
        <td>010987654310</td>
        <td className="td-describtion">اية الدين  ▶</td>
        <th>2023‑2‑18  </th>
        <td><button>اضافة </button> <button>رفض</button></td>
        
      </tr>
    </table>




    <div id="flash-add" className="flash-msg">
      <div>
        هل انت متأكد انك تريد اضافة هذا الفيديو 
      </div>
      <button>موافق</button>
      <button>إلغاء</button>
    </div>
    <div id="flash-remove" className="flash-msg">
      <div>
        هل انت متأكد انك تريد حذف هذا الفيديو 
      </div>
      <button >موافق</button>
      <button >إلغاء</button>
    </div>
 
  
    <div id="player-box"  className="videoplayer">
      <div className="video-player-close" >ⓧ</div>
        <video id ="videoplayer" width="100%" height="240"  controls>
          <source  src="movie.mp4" type="video/mp4"/>
      
          Your browser does not support the video tag.
  
          
        </video>
        <div className="videoplayer-description">
          <span id="videoplayer-description"> ما تيسر  من سورة البقرة </span>
          <button  className="video-decision" >
            رفض
         </button>
          <button  className="video-decision" >
            إضافة
          </button>
          
  
          <div >
           01234123567
          </div> 
        
  
        </div>
        </div>
        
        </>
  )
}

export default lvideosManagment