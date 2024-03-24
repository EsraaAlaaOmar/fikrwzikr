import React,{useState} from 'react'
interface MyComponentProps {
  zikrName: string;

}
const Zikr: React.FC<MyComponentProps> = ({ zikrName})  => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="zkr-box">
        
      
      <button className="zkr-button" id="sbha" onClick={() =>counter !==33 && setCounter(counter + 1)} style={{ outline:"none"}}>{ counter }</button>
       {counter !==33 && counter !==0 && <div onClick={()=>setCounter(0)} className="sbha-reset">بداية العد  </div>}
       {counter ==33 && <div onClick={()=>setCounter(0)} className="sbha-reset"> لقد اكملت التسبيحة ..  <span>اضغط لبدأ تسبيحة جديدة </span> </div>}
       
    </div>

  )
}

export default Zikr