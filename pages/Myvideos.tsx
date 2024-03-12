import React, { useEffect, useState } from 'react'
import Myvideos from '../components/competitioncomponents/Myvideos'

const Myvideoss = () => {
  const [Msdn,setMsdn]=useState('')
  useEffect(() => {
    // Accessing query parameters
    const queryParams = new URLSearchParams(window.location.search);
    
    // Reading specific query parameters
    const param1Value = queryParams.get('MSISDN');
    param1Value && setMsdn(param1Value)
    
   

  }, []);
  return (
    <div><Myvideos Msdn={Msdn}/></div>
  )
}

export default Myvideoss