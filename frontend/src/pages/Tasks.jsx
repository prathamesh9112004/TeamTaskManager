import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function Tasks() {
  // Temporary: Allow all actions during development
  const isAdmin = true;

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    project: "",
    priority: "Medium",
  });

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data.projects || []);
    } catch (err) {
      console.log(err);
    }
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", form);

      toast.success("Task Created Successfully");

      setForm({
        title: "",
        description: "",
        project: "",
        priority: "Medium",
      });

      fetchTasks();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error");
    }
  };

  const editTask = async (task) => {
    const title = prompt("Task Title", task.title);

    if (!title) return;

    const description = prompt(
      "Task Description",
      task.description
    );

    try {
      await API.put(`/tasks/${task._id}`, {
        title,
        description,
      });

      toast.success("Task Updated");

      fetchTasks();
    } catch {
      toast.error("Update Failed");
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await API.delete(`/tasks/${id}`);

      toast.success("Task Deleted");

      fetchTasks();
    } catch {
      toast.error("Delete Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Tasks</h1>

      {isAdmin && (
        <form
          onSubmit={createTask}
          style={{
            display: "grid",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <input
            placeholder="Task Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <input
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <select
            value={form.project}
            onChange={(e) =>
              setForm({
                ...form,
                project: e.target.value,
              })
            }
          >
            <option value="">Select Project</option>

            {projects.map((project) => (
              <option
                key={project._id}
                value={project._id}
              >
                {project.name}
              </option>
            ))}
          </select>

          <select
            value={form.priority}
            onChange={(e) =>
              setForm({
                ...form,
                priority: e.target.value,
              })
            }
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button type="submit">
            Create Task
          </button>
        </form>
      )}

      <h2>All Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              background: "#fff",
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <b>Project:</b>{" "}
              {task.project?.name || "No Project"}
            </p>

            <p>
              <b>Priority:</b> {task.priority}
            </p>

            <p>
              <b>Status:</b> {task.status}
            </p>

            {isAdmin && (
              <>
                <button
                  onClick={() => editTask(task)}
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
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

export default Tasks;