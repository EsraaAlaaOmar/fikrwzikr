import React from 'react'
import { GiCheckMark } from "react-icons/gi";

interface FroodProps {
    hide: (arg0: boolean) => void; // Specify the type of hide function
    froodData:[any];
    precentage:number;
  }
  const Frood: React.FC<FroodProps> = ({hide,froodData,precentage}) => {

  var renderedRows = froodData?.map((fard)=>{
    const parts = fard.HDATE.split(' ');
    const day = parts[2];
const month = parts[1];
    return(   <tr>
        <td>{ day } {month}</td>
    <td>{fard.FAGRFU ? <GiCheckMark />: "✘" }</td>
    <td>{fard.DUHRFU ? <GiCheckMark />: "✘" }</td>
    <td>{fard.ASRFU ? <GiCheckMark />: "✘" }</td>
    <td>{fard.MAGFUIR ? <GiCheckMark />: "✘" }</td>
    <td>{fard.ISHAFUIR ? <GiCheckMark />: "✘" }</td>
    
</tr>)
  })
  return (
 <>
    <div id="prodress-salah-les" className="progress-less"  onClick={()=>hide(false)}  >
        أقل
    </div>
    <table id="salah-table" style={{width:"100%"}} className="progress-table">
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

export default Frood