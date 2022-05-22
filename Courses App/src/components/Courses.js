import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/BootAPI";
import axios from "axios";
import { toast } from "react-toastify";

function Courses() {
  // Function To Call Server API
  const getAllCourses = () => {
    axios.get(`${base_url}/courses`).then(
      (res) => {
        toast.success("Courses Loaded Successfully", {
          position: "bottom-center",
        });
        setCourses(res.data);
      },
      (err) => {
        toast.error("Error Loading Courses", { position: "bottom-center" });
      }
    );
  };

  const updateCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  useEffect(() => {
    document.title = "All Courses";
    getAllCourses();
  }, []);

  const [courses, setCourses] = useState([]);

  return (
    <>
      <div className="text-center my-2">
        <h1 className="display-4">All Courses</h1>
        {courses.length > 0 ? (
          courses.map((course) => (
            <Course key={course.id} course={course} update={updateCourse} />
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </>
  );
}

export default Courses;
