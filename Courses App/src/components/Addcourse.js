import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/BootAPI";

function Addcourse() {
  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({});

  const handleFormSubmit = (e) => {
    addCourse(course);
    e.preventDefault();
  };

  const addCourse = (course) => {
    axios.post(`${base_url}/courses`, course).then(
      (res) => {
        toast.success("Course Added Successfully", {
          position: "bottom-center",
        });
      },
      (err) => {
        toast.error("Error Adding Course", { position: "bottom-center" });
      }
    );
  };

  return (
    <>
      <Fragment>
        <div className="my-2">
          <h1 className="text-center display-4">Add Course</h1>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <label htmlFor="courseId">Course ID</label>
              <input
                type="text"
                className="form-control"
                id="courseId"
                placeholder="Enter Course ID"
                onChange={(e) => setCourse({ ...course, id: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                placeholder="Enter Course Name"
                onChange={(e) =>
                  setCourse({ ...course, title: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="courseDescription">Course Description</label>
              <textarea
                className="form-control"
                id="courseDescription"
                rows="3"
                placeholder="Enter Course Description"
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
              ></textarea>
            </FormGroup>
            <Container className="text-center">
              <button type="submit" className="btn btn-success mx-2">
                Submit
              </button>
              <button type="reset" className="btn btn-warning mx-2">
                Reset
              </button>
            </Container>
          </Form>
        </div>
      </Fragment>
    </>
  );
}

export default Addcourse;
