import React, { useEffect, useState } from 'react';
import '/src/css/Time.css'

 function Time() {

    const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);

//     return () => {
//       clearInterval(timerID);
//     };
//   }, []);

//   const tick = () => {
//     setDate(new Date());
//   };


// Update the time every second
setInterval(() => {
  setDate(new Date());
}, 1000);

  return (
    <div className='time-page'>
      <div className="date-div">
      <h5>{date.toLocaleTimeString()}</h5>
      <h5>{date.toLocaleDateString()}</h5>
      </div>
    </div>
  );

}



export default Time