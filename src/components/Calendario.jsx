import { useState } from 'react';
import Calendar from 'react-calendar';


const Calendario = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="calendar-container mt-3">
            <Calendar onChange={setDate} value={date} />
            {console.log(date)}
        </div>
    )
}

export default Calendario