"use client"
 
import * as React from "react"
import { useTheme } from "next-themes"
import { useState } from "react"

export function ModeToggle() {
  const [Mode,setMode] = useState("light")
  const { setTheme } = useTheme()


const Handletoggle = () =>{
  if(Mode == "light"){
    setTheme("dark")
    setMode("dark")
  }else{
    setTheme("light")
    setMode("light")
  }
}

 
  return (
      <button onClick={Handletoggle}>Mode</button>
  )
}