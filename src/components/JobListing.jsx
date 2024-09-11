import React from "react";
import { useState } from "react";
// Import the react icons
//Use npm i install react-icons
import {FaMapMarker} from 'react-icons/fa'
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  //Use state value for read more toggle on/off
  //1st para is Name of state inside square brackets
  //2nd para is name of function to call
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    //Cute the description into a substring
    description = description.substring(0,90) + '...';
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}</div>

          {/* Add onClick event */}
          {/* Whatever the previous state is set it to the opposite */}
          <button onClick={()=> setShowFullDescription((prevState) =>!prevState)} className="text-indigo-500 mb-5  hover:text-indigo-600">
          {showFullDescription ? 'Less': 'More'}
          </button>

          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
              <FaMapMarker className="inline text-lg mb-1 mr-1"/>
              {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
