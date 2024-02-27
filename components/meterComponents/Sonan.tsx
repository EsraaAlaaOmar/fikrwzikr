import React from 'react'

const Sonan = () => {
  return (
   <>
       <div id="prodress-sonan-les" className="progress-less"   >
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
      <td>1</td>
      <td>✔</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>✔</td>
      <td>✘</td>
      <td  rowSpan={30} style={{fontWeight:"bold", fontSize:"18px"}}>65%</td>
    </tr>
    <tr>
      <td>2</td>
      <td>✔</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>✔</td>
      <td>✘</td>
    </tr>
    <tr>
      <td>3</td>
      <td>✔</td>
     
      <td>✘</td>
      <td className="table-void"></td>
      <td>✔</td>
      <td>✘</td>
    </tr>
    <tr>
      <td>4</td>
      <td>✔</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>✔</td>
      <td>✘</td>
    </tr>
    <tr>
      <td>5</td>
      <td>✔</td>
      <td>✘</td>
      <td className="table-void"></td>
      <td>✔</td>
      <td>✘</td>
    </tr>
 
    </tbody>
  </table>
   </>
  )
}

export default Sonan