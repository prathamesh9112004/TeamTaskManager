const Project = require("../models/Project");
const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    const totalTasks = await Task.countDocuments();

    const todoTasks = await Task.countDocuments({ status: "Todo" });
    const inProgressTasks = await Task.countDocuments({
      status: "In Progress",
    });
    const completedTasks = await Task.countDocuments({
      status: "Completed",
    });

    const highPriorityTasks = await Task.countDocuments({
      priority: "High",
    });

    const recentProjects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const recentTasks = await Task.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      dashboard: {
        totalProjects,
        totalTasks,
        todoTasks,
        inProgressTasks,
        completedTasks,
        highPriorityTasks,
        recentProjects,
        recentTasks,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};