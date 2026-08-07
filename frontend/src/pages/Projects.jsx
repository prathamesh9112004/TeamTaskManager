import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {
  // Temporary: Allow all actions during development
  const isAdmin = true;

  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data.projects || []);
    } catch (err) {
      console.log(err);
    }
  };

  const createProject = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", form);

      alert("Project Created Successfully");

      setForm({
        name: "",
        description: "",
      });

      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const editProject = async (project) => {
    const name = prompt("Project Name", project.name);

    if (!name) return;

    const description = prompt(
      "Project Description",
      project.description
    );

    try {
      await API.put(`/projects/${project._id}`, {
        name,
        description,
      });

      alert("Project Updated");

      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await API.delete(`/projects/${id}`);

      alert("Project Deleted");

      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Projects
      </h1>

      {isAdmin && (
        <form
          onSubmit={createProject}
          style={{
            display: "grid",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <input
            placeholder="Project Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Project Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <button type="submit">
            Create Project
          </button>
        </form>
      )}

      <h2 style={{ textAlign: "center" }}>
        All Projects
      </h2>

      {projects.length === 0 ? (
        <p>No Projects Found</p>
      ) : (
        projects.map((project) => (
          <div
            key={project._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,.1)",
              textAlign: "center",
            }}
          >
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            {isAdmin && (
              <>
                <button
                  onClick={() => editProject(project)}
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    marginRight: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project._id)}
                  style={{
                    background: "red",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;