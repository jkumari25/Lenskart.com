import React, { useState,} from "react";


import './Silder.css'
function Silder() {
  let [idx, setIdx] = useState(0);
  let arr = [
    "https://static1.lenskart.com/media/desktop/img/Nov22/gifr-flipping-banner.gif",
    "https://static1.lenskart.com/media/desktop/img/Nov22/airplay/desk-play.jpg",
    "https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif",
    "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
    "https://static1.lenskart.com/media/desktop/img/Nov22/hooper-web.jpg",
    "https://static1.lenskart.com/media/desktop/img/Oct22/at/web.jpg",
    "https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif",
  ];
 
  let ind = arr.length - 1;


   setInterval(() => {
     

      if (idx ===ind) {
setIdx(0)

      }
      else{

      setIdx(idx + 1)};
    }, 8000);
  
 





//   left right button functions code 

  const set =(val)=>{

if(val===1){
if(idx===ind){
setIdx(0)
}
else{
    setIdx(idx+1);
}


}



else{

if(idx===0){
    setIdx(ind)
}
else{
    setIdx(idx-1);
}

    
}

  }


  // main code jsx
  return (
    <div>
      <img src={arr[idx]} alt="" />

<div id="lr-btn">
<p onClick={()=>set(-1)}>❯</p>
<p onClick={()=>set(1)}>❯</p>
</div>

    

    </div>
  );
}

export default Silder;
