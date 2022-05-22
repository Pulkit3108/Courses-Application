import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <p>
        To add a course, click on the "Add Course" button in the menu. 
      </p>
      <p>
        To view all courses, click on the "View Courses" button in the menu.
      </p>
    </div>
  );
}

export default Home;
