import React from 'react';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const AppointmentByDate = ({appointments}) => {
    return (
        <div className="bg-white pt-3">
            <h3 className="heading-primary mt-5 text-center">Appointments</h3>
             {
                appointments.length ?
                 
                <AppointmentTable appointments={appointments}></AppointmentTable> 
               :
               <div className="pt-4">
                  <h4 className="text-center lead">No appointments on this date</h4>
               </div>
              }
        </div>
    );
};

export default AppointmentByDate;