import React from "react";
import { Row, Col } from "reactstrap";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Addcourse from "./components/Addcourse";
import Courses from "./components/Courses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Row style={{marginRight: 0}}>
          <Col md="4">
            <Menu />
          </Col>
          <Col md="8">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/add-course" element={<Addcourse />} />
              <Route exact path="/view-courses" element={<Courses />} />
            </Routes>
          </Col>
        </Row>
      </Router>
    </>
  );
}

export default App;
