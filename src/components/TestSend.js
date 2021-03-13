import React from "react";
import { Link } from "react-router-dom";

function TestSend() {
  let projectid = { id: "acb" };

  return (
    <div>
      <Link to={{ pathname: "/testreceive", state: projectid }}>Test Send</Link>
    </div>
  );
}

export default TestSend;
