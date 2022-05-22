import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menu() {
  return (
    <>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" to="/">
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="/add-course"
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          to="/view-courses"
        >
          View Courses
        </Link>
      </ListGroup>
    </>
  );
}

export default Menu;
