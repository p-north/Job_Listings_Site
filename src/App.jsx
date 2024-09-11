// import React from 'react'

// const App = () => {
//   //Above the returh write javascript
//   const name = 'John';
//   const x = 10;
//   const y = 20;
//   const names = ['Brad', 'Mary', 'Joe', 'Sara'];
//   const loggedIn = true;
//   const style = {
//     color: 'red',
//     fontSize: '55px'
//   }

//   return (
//     // Must be wrapped in a single element
//     //Use curly braces for variables
//     <>
//     <div classNameName='text-5xl'>
//       App
//     </div>
//     {/* Double brackets for inline CSS */}
//     <p style={style}>Hello {name}</p>
//     <p>The sum of {x} and {y} is {x+y}
//     </p>
//     {/* Create  list of names in array */}
//     <ul>
//       {names.map((name, index)=>(
//         <li key = {index} >{name}</li>
//       ))}

//     </ul>
//     {/* If else statement, seperated using colon */}
//     {/* { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>} */}
//     {loggedIn && <h1>Hello Member</h1>}
//     </>
//   )
// }

// export default App

// Video: 2;18Mins

import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const addJob = async (newJob) => {
    //request new job to server
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //Update Job
  const updatedJob = async (job) =>{
    //request new job to server
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;

  }
  const router = createBrowserRouter(
    //create parent route to rest of routes
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit = {updatedJob} />}
          //job loader gives the acess to data
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          //job loader gives acess to data
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

// // (
//   <>
//   <Navbar />
//   <Hero />
//   <HomeCards />
//   <JobListings />
//   <ViewAllJobs />
// </>
// );
