import React from 'react'
import Proflex from './Pro-flex'
import '../Comp.css'
function Dropdown() {
let data1={img:"https://static1.lenskart.com/media/desktop/img/Apr22/a2.png",name:"Eyeglasses"}


  return (
    <div id="parent-drop">

<Proflex props={data1}/>

<Proflex/>
<Proflex/>
<Proflex/>
<Proflex/>
<Proflex/>
    </div>
  )
}

export default Dropdown