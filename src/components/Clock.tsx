import { useState, useEffect } from 'react';

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day: string = days[date.getDay()];
    const dateNumber: string = date.getDate().toString();
    const months: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month: string = months[date.getMonth()];
    const year: string = date.getFullYear().toString();
  return (
    <div className="Clock">
      <h1 className='text-2xl'>{day}</h1>
      <h3>{dateNumber + " " + month + " " + year }</h3>
    </div>
  )
}
