import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "📁",
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: "✅",
    },
  ];

  return (
    <aside
      className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl"
    >
      <div className="text-3xl font-bold p-6 border-b border-slate-700">
        Team Manager
      </div>

      <nav className="flex-1 p-5 space-y-3">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-5">
        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;