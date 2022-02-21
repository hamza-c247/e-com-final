import React from 'react'
import {useState, useEffect, useRef} from "react"
import Confetti from 'react-confetti';
import {Link} from "react-router-dom"

function Orderplaced() {

 
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);
  

  useEffect(() => {
    
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }
  return (
    <div className='container '>
     <div className="App">
      <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
        <h1>Order Placed Successfully</h1>
        <h3>Thank you for Shopping</h3>
        <Link to="/products"> Continue Shopping</Link>
        <Confetti
          recycle={show}
          numberOfPieces={500}
          width={5000}
          height={1000}
        />
      </div>
    </div>
    
    </div>
  )
}

export default Orderplaced