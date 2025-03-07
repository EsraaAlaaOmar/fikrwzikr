import React from 'react'
import { GiCheckMark } from "react-icons/gi";
interface QuraanProps {
  hide: (arg0: boolean) => void; // Specify the type of hide function
  qurandata:[any]
  precentage:number;
}

const Quraan: React.FC<QuraanProps> = ({hide,qurandata,precentage}) => {

  var renderedRows = qurandata?.map((quran)=>{
    const parts = quran.HDATE.split(' ');
    const day = parts[2];
const month = parts[1];
    return(   <tr>
        <td>{ day } {month}</td>
        <td>{quran.FAGRFU? <GiCheckMark />: "✘" }</td>
        <td>{quran.DUHRFU? <GiCheckMark />: "✘" }</td>
        <td>{quran.ASRFU ? <GiCheckMark />: "✘" }</td>
        <td>{quran.MAGFUIR ? <GiCheckMark />: "✘" }</td>
        <td>{quran.ISHAFUIR ? <GiCheckMark />: "✘" }</td>
        
    </tr>)
      })
  return (
   <>
       <div id="prodress-quran-les" className="progress-less"  onClick={()=>hide(false)}  >
    أقل
  </div>
  <table id="quran-table" style={{width:"100%"}} className="progress-table">
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
        <td  rowSpan={30} style={{fontWeight: "bold", fontSize: "18px"}}>{Number(precentage.toFixed(2))}%</td>
    </tr>
    {renderedRows}
    </tbody>
  </table>
   </>
  )
}

export default Quraan