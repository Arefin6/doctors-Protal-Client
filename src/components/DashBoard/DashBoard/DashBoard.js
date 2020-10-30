import React from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { useEffect } from 'react';

const DashBoard = () => {
    
    const [selectedDate,setSelectedDate] = useState(new Date);
    const [appointments,setAppointments] = useState([]);
    
    const handleDateChange = date =>{
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    const containerStyle = {
        backgroundColor:"#F4FBFD",
        height:"100%"
    }
     
    return (
        <div>
           <div style={containerStyle} className="row">
               <div className="col-md-3">
                 <Sidebar></Sidebar>
               </div>
               <div className="col-md-4">
                    <Calendar 
                onChange={handleDateChange}
                value={new Date()}
                />
               </div>
               <div className="col-md-4 mt-3">
                   <AppointmentByDate appointments={appointments}></AppointmentByDate>
               </div>
           </div>
        </div>
    );
};

export default DashBoard;