import React from 'react';

const AppointmentTable = ({appointments}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-secondary">Name</th>
                        <th className="text-secondary">phone</th>
                        <th className="text-secondary">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      appointments.map((appointment,index) => 
                      
                        <tr>
                          <td>{appointment.name}</td>
                          <td>{appointment.phone}</td>
                          <td>{appointment.email}</td>
                        </tr>
    
                      )  
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentTable;