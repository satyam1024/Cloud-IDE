import { Link } from "react-router-dom";
import { Home, Code, FileText, Settings } from "lucide-react";

const MainNav = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 shadow-md">
      <div className="w-full px-5">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-purple-400 transition"
          >
            CodeEditor
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/editor"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition"
            >
              <Code className="w-5 h-5" />
              <span>Editor</span>
            </Link>
            <Link
              to="/docs"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition"
            >
              <FileText className="w-5 h-5" />
              <span>Docs</span>
            </Link>
            {/* <Link
              to="/settings"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
