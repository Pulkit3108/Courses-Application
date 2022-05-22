import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  CardText,
  Container,
  Button,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/BootAPI";

function Course({ course, update }) {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (res) => {
        toast.success("Course Deleted Successfully", {
          position: "bottom-center",
        });
        update(id);
      },
      (err) => {
        toast.error("Error Deleting Course", { position: "bottom-center" });
      }
    );
  };

  return (
    <>
      <Container className="text-center my-2">
        <Card>
          <CardBody>
            <CardTitle className="fw-bold">{course.title}</CardTitle>
            <CardText>{course.description}</CardText>
            <CardFooter className="text-center">
              <Button
                className="btn btn-danger m-2"
                onClick={() => deleteCourse(course.id)}
              >
                Delete
              </Button>
              <Button className="btn btn-warning m-2">Update</Button>
            </CardFooter>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default Course;
