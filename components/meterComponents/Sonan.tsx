import React from 'react'
import { GiCheckMark } from "react-icons/gi";

interface sunanDataProps {
  hide: (arg0: boolean) => void; // Specify the type of hide function
  sunanData:[any]
  precentage:number;
}
const Sonan: React.FC<sunanDataProps> = ({hide,sunanData,precentage}) => {
  var renderedRows = sunanData?.map((sona)=>{
    const parts = sona.HDATE.split(' ');
    const day = parts[2];
const month = parts[1];
    return(   <tr>
        <td>{ day } {month}</td>
        <td>{sona.FAGRSO ? <GiCheckMark />: "✘" }</td>
        <td>{sona.DUHRSO ? <GiCheckMark />: "✘" }</td>
        <td className="table-void"></td>
        <td>{sona.MAGSON ? <GiCheckMark />: "✘" }</td>
        <td>{sona.ISHASON ? <GiCheckMark />: "✘" }</td>
        
    </tr>)
      })
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
    <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td  rowSpan={30} style={{fontWeight: "bold", fontSize: "18px"}}>{precentage}%</td>
    </tr>
 {renderedRows}
    </tbody>
  </table>
   </>
  )
}

export default Sonan