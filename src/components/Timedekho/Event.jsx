import React from 'react'

const Event = ({event,year,date,images}) => {
  // conoloeop console.log(images)
  return (
    <div>
    <div className="card" style={{backgroundColor:'blue',height:'auto',width:'auto',margin:'4rem'}}>
      <h1>{event}</h1>
      <h2>{year}</h2>
      <h3>{date}</h3>
       <img src={images[0].src}  />
   {
    
    images.map((ele)=>
    {   
          <div className="pic">
            
        <img src={ele.src}  style={{height:'10rem',width:'10rem'}} alt="l"/>
        </div>
        
    })
   }
      </div>
    </div>
  )
}

export default Event
