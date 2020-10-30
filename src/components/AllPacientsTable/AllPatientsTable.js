import React from 'react';

const AllPatientsTable = ({appointments}) => {
    return (
        <div>
           <table className="table">
                <thead>
                    <tr>
                     <th className="text-secondary">Sr.No</th>
                        <th className="text-secondary">Name</th>
                        <th className="text-secondary">Gender</th>
                        <th className="text-secondary">Age</th>
                        <th className="text-secondary">Weight</th>
                        <th className="text-secondary">Contact</th>
                        <th className="text-secondary">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      appointments.map((appointment,index) => 
                      
                        <tr>
                          <td>{index+1}</td>
                          <td>{appointment.name}</td>
                          <td>{appointment.gender}</td>
                          <td>{appointment.age}</td>
                          <td>{appointment.weight}</td>
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

export default AllPatientsTable;