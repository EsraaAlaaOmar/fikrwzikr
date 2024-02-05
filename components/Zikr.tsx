import React,{useState} from 'react'
interface MyComponentProps {
  zikrName: string;

}
const Zikr: React.FC<MyComponentProps> = ({ zikrName})  => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="zkr-box">
        <div className="zkr-name" id="zkr-name">
        {zikrName}
      </div>
      
      <button className="zkr-button" id="sbha" onClick={() => setCounter(counter + 1)}>{ counter }</button>
        <div onClick={()=>setCounter(0)} className="sbha-reset">reset</div>
    </div>

  )
}

export default Zikr