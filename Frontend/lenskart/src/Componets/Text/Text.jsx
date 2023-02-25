import React from 'react'
import '../Comp.css'
function Text(props) {
  return (
    <div id="p-text">
<div>
   <hr/> 
</div>
<div>
  <h1 id="text-prop">{props.text}</h1>
</div>
<div>
<hr/>
</div>

    </div>
  )
}

export default Text