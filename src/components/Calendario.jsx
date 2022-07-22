import { useRef, useState } from 'react';
import Calendar from 'react-calendar';


const Calendario = () => {
    const [date, setDate] = useState(new Date())
    const searchRef = useRef(null)
    return (
        <div className="calendar-container mt-3">
            <Calendar onChange={setDate} value={date} href={searchRef} />
            {console.log(date)}
        </div>
    )
}

export default Calendario