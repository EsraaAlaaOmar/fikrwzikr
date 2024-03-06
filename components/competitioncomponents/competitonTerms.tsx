import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
const competitonTerms = () => {
    const[showterms, setShowTerms] = useState(true)
    const ref = useRef(null)

    const handleClickOutside = () => {
      console.log('clicked outside')
      setShowTerms(false)
    }

  
    useOnClickOutside(ref, handleClickOutside)
  return (
   <>{ showterms&& <div  ref={ref}>
              hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi
          <div className="white-background">
            </div>
   </div>}
   </>
  )
}

export default competitonTerms