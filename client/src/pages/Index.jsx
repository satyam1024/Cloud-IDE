import MainNav from "../component/mainNav";
import { Link } from "react-router-dom";
import { Code, FileText, Settings, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <MainNav />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Code. Create. Deploy.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A powerful online code editor that helps you write, test, and deploy
            code faster. Start coding instantly with our cloud-based development
            environment.
          </p>
          <Link to="/editor">
            <button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl shadow-lg transition-all duration-200 hover:shadow-purple-500/25">
              Start Coding <ArrowRight className="ml-2" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link
            to="/editor"
            className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <Code className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3 text-white">
              Code Editor
            </h2>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Write and edit code with our powerful editor. Supports multiple
              languages and real-time collaboration.
            </p>
          </Link>

          <Link
            to="/docs"
            className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <FileText className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3 text-white">
              Documentation
            </h2>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Comprehensive guides and API references to help you make the most
              of our platform.
            </p>
          </Link>

          <Link
            to="/settings"
            className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/10"
          >
            <Settings className="w-12 h-12 text-green-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3 text-white">Settings</h2>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Customize your editor experience with powerful configuration
              options.
            </p>
          </Link>
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-400 text-sm">
            Join thousands of developers who trust our platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
