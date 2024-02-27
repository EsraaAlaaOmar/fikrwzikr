import React from 'react'
import { GiCheckMark } from "react-icons/gi";
const Frood = () => {
  return (
 <>
    <div id="prodress-salah-les" className="progress-less"   >
        أقل
    </div>
    <table id="salah-table" style={{width:"100%"}} className="progress-table">
    <tbody>
    <tr>
        <th></th>
        <th>الفجر</th>
        <th>الحمد لله</th>
        <th>العصر</th>
        <th>المغرب</th>
        <th>العشاء</th>
        <th>المجموع</th>

    </tr>
    <tr>
        <td>1</td>
        <td><GiCheckMark /></td>
        <td><GiCheckMark /></td>
        <td>✘</td>
        <td><GiCheckMark /></td>
        <td>✘</td>
        <td  rowSpan={30} style={{fontWeight: "bold", fontSize: "18px"}}>75%</td>
    </tr>
    <tr>
        <td>2</td>
        <td><GiCheckMark /></td>
        <td><GiCheckMark /></td>
        <td>✘</td>
        <td><GiCheckMark /></td>
        <td>✘</td>
    </tr>
    <tr>
        <td>3</td>
        <td><GiCheckMark /></td>
        <td><GiCheckMark /></td>
        <td>✘</td>
        <td><GiCheckMark /></td>
        <td>✘</td>
    </tr>
    <tr>
        <td>4</td>
        <td><GiCheckMark /></td>
        <td><GiCheckMark /></td>
        <td>✘</td>
        <td><GiCheckMark /></td>
        <td>✘</td>
    </tr>
    <tr>
        <td>5</td>
        <td><GiCheckMark /></td>
        <td><GiCheckMark /></td>
        <td>✘</td>
        <td><GiCheckMark /></td>
        <td>✘</td>
    </tr>
    </tbody>
    </table>
 </>
  )
}

export default Frood