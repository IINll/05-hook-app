import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({url, name}) => {


  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height, width});

    
  }, [url])




  return (
    <>

        <blockquote
          className="blockquote text-end"
          style={{display: 'flex'}}
        >
            <p  ref={pRef} className="mb-1">{url}</p>
            <footer className="blockquote-footer">{name}</footer>
        </blockquote>

        <h5>{JSON.stringify(boxSize)}</h5>

    </>
  )
}
