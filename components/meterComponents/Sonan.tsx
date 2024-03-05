import React from 'react'
import { GiCheckMark } from "react-icons/gi";

interface SonanProps {
  hide: (arg0: boolean) => void; // Specify the type of hide function
}
const Sonan: React.FC<SonanProps> = ({hide}) => {
  return (
   <>
       <div id="prodress-sonan-les" className="progress-less"  onClick={()=>hide(false)}  >
    أقل
  </div>
  <table id="sonan-table" style={{width:"100%"}} className="progress-table">
    <tbody>
    <tr>
      <th></th>
      <th>الفجر</th>
      <th>الظهر</th>
      <th>العصر</th>
      <th>المغرب</th>
      <th>العشاء</th>
      <th>المجموع</th>

    </tr>
    <tr>
      <td>1 رمضان</td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
      <td  rowSpan={30} style={{fontWeight:"bold", fontSize:"18px"}}>65%</td>
    </tr>
    <tr>
      <td>2 رمضان</td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
    </tr>
    <tr>
      <td>3 رمضان</td>
      <td>{<GiCheckMark />}</td>
     
      <td>✘</td>
      <td className="table-void"></td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
    </tr>
    <tr>
      <td>4 رمضان</td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
    </tr>
    <tr>
      <td>5 رمضان</td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>{<GiCheckMark />}</td>
      <td>✘</td>
    </tr>
 
    </tbody>
  </table>
   </>
  )
}

export default Sonan