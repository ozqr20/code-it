import React from 'react';
import Sidebar from "../../components/SideBar/index";
import JobCard from '../../components/JobCard';
import './jobs.css'

 const Jobs = () => {

  return (
    <>
      <div className="jobsContainer">
        <Sidebar />
        <JobCard/>
        
      </div>
    </>
  );
}

export default Jobs;