import { useEffect, useState } from "react";
import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadProjects();
    loadTasks();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data.projects || []);
    } catch (err) {
      console.log(err);
    }
  };

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.log(err);
    }
  };

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <StatCard
              title="Total Projects"
              value={projects.length}
              color="#2563eb"
            />

            <StatCard
              title="Total Tasks"
              value={tasks.length}
              color="#16a34a"
            />

            <StatCard
              title="Pending Tasks"
              value={pendingTasks.length}
              color="#ea580c"
            />

          </div>

          <ChartCard tasks={tasks} />

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                Recent Projects
              </h2>

              {projects.length === 0 ? (
                <p className="text-gray-500">
                  No Projects Found
                </p>
              ) : (
                projects.slice(0, 5).map((project) => (
                  <div
                    key={project._id}
                    className="border-b py-3"
                  >
                    <h3 className="font-semibold">
                      {project.name}
                    </h3>

                    <p className="text-gray-500">
                      {project.description}
                    </p>
                  </div>
                ))
              )}

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                Recent Tasks
              </h2>

              {tasks.length === 0 ? (
                <p className="text-gray-500">
                  No Tasks Found
                </p>
              ) : (
                tasks.slice(0, 5).map((task) => (
                  <div
                    key={task._id}
                    className="border-b py-3"
                  >
                    <h3 className="font-semibold">
                      {task.title}
                    </h3>

                    <p>{task.description}</p>

                    <span className="text-blue-600 text-sm">
                      {task.priority}
                    </span>
                  </div>
                ))
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;