import React, { useEffect, useState } from "react";
import firebaseConfig from "../config";
import { Link } from "react-router-dom";

function SectionProject() {
  const [projects, setProject] = useState([]);
  const [status, setStatus] = useState(false);

  const db = firebaseConfig.firestore().collection("User");

  function getProject() {
    db.limit(10).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProject(items);
      setStatus(false);
    });
  }

  function filterProject(testname) {
    db.where("type", "==", testname)
      .limit(10)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setProject(items);
        setStatus(true);
      });
  }

  useEffect(() => {
    if (status == false) {
      getProject();
    } else {
      filterProject();
    }
  }, []);

  return (
    <div className="container">
      <div className="mt-5">
        <button
          className="btn btn-outline-primary"
          style={{ margin: `0px 15px 0px 0px` }}
          onClick={() => filterProject("Tech")}
        >
          Tech
        </button>
        <button
          className="btn btn-outline-primary"
          style={{ margin: `0px 15px 0px 0px` }}
          onClick={() => filterProject("Community")}
        >
          Community
        </button>
        <button
          className="btn btn-outline-primary"
          style={{ margin: `0px 15px 0px 0px` }}
          onClick={() => filterProject("Science")}
        >
          Science
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ margin: `0px 15px 0px 0px` }}
          onClick={getProject}
        >
          Reset
        </button>
      </div>
      <div className="mt-5">
        <div className="col-sm-12">
          <div className="row row-cols-3">
            {projects.map((project) => (
              <div
                className="col-sm-4"
                key={project.name}
                style={{ margin: `0px 0px 30px 0px` }}
              >
                <div className="card">
                  <div className="card-body">
                    {/* to be enhance */}
                    <Link
                      to={{
                        pathname: "/testreceive",
                        value: project.name,
                      }}
                      className="card-title"
                    >
                      {project.name}
                    </Link>
                    {/* to be enhance */}
                    <h6 className="card-subtitle mb-2 text-muted">
                      {project.type}
                    </h6>
                    <p className="card-text">{project.message}</p>
                    <p className="card-text">{project.fund}</p>
                    <a href={`mailto:${project.email}`} className="card-link">
                      {project.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProject;
