import React from 'react'

import {useHistory} from "react-router-dom"
import {useState, useEffect} from "react"

function Protectedroute(props) {
  let Comp = props.comp
  let history = useHistory()

  useEffect(()=>{
      if(!localStorage.getItem("user-info")){
          history.push("/signup")
      }
  })
   
  return (
    <>
     <Comp/>
    </>
  )
}

export default Protectedroute