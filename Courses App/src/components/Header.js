import React from "react";

function Header() {
  return (
    <>
      <div className="container-fluid text-center p-3 bg-dark rounded-3">
        <div className="container p-2 text-white">
          <h1 className="fw-bold">Welcome to Courses App</h1>
          <hr />
          <p>This is a simple app to manage your Courses.</p>
        </div>
      </div>
    </>
  );
}

export default Header;
