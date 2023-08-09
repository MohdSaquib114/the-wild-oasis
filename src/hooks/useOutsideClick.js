import { useEffect, useRef } from "react"

export function useOutsideClick(handler,listenCapturing=true){
    const ref = useRef()
    useEffect(function(){
      function handleModalClose(e){
       
        if(ref.current && !ref.current.contains(e.target)) handler()
        
      }
      document.addEventListener('click', handleModalClose,listenCapturing)
      return ()=> document.removeEventListener('click', handleModalClose,listenCapturing )
    },[handler,listenCapturing])
    return ref
}
 