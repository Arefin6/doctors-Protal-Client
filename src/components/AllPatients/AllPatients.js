import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllPatientsTable from '../AllPacientsTable/AllPatientsTable';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments,setAppointments] = useState([]);
    useEffect(()=>{
        fetch('https://peaceful-bayou-64939.herokuapp.com/allPatients')
        .then(res => res.json() )
        .then(data => setAppointments(data))
    },[]);
    return (
        <div>
            <div className="row">
              <div className="col-md-3">
              <Sidebar></Sidebar> 
             </div>
              <div className="col-md-9">
                <h4 className="heading-primary mt-5 ">All Patients</h4>
                 {
                     <AllPatientsTable appointments={appointments}></AllPatientsTable>
                 }
                  
             </div>  
               
            </div> 

        </div>
    );
};

export default AllPatients;