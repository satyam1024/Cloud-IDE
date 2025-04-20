import MainNav from "../component/mainNav";

const Docs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <MainNav />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          📘 CodeEditor — App Documentation
        </h1>

        {/* About the App */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            🧩 About the App
          </h2>
          <p className="text-gray-300">
            <strong className="text-white">CodeEditor</strong> is a web-based
            code editor that allows users to edit code files in real-time,
            navigate project directories, and run terminal commands — all in one
            place. It's ideal for learning, prototyping, and collaborative
            coding.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            🚀 Core Features
          </h2>
          <div className="space-y-2 text-gray-300">
            <div>
              📝 <strong className="text-white">Real-time code editing</strong>{" "}
              with syntax highlighting
            </div>
            <div>
              📁 <strong className="text-white">File explorer</strong> to browse
              and select files/folders
            </div>
            <div>
              💾 <strong className="text-white">Auto-save</strong> changes with
              debounce timer
            </div>
            <div>
              💻 <strong className="text-white">Integrated terminal</strong> for
              shell commands
            </div>
            <div>
              🔌 <strong className="text-white">Live updates</strong> via
              WebSockets (socket.io)
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            🧱 Tech Stack
          </h2>
          <div className="space-y-2 text-gray-300">
            <div>
              <strong className="text-white">Frontend:</strong> React, Tailwind
              CSS, React Ace, React Router
            </div>
            <div>
              <strong className="text-white">Backend:</strong> Node.js (custom
              file system + terminal APIs)
            </div>
            <div>
              <strong className="text-white">WebSocket:</strong> socket.io for
              real-time communication
            </div>
          </div>
        </div>

        {/* Folder Structure */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            📁 Folder Structure
          </h2>
          <pre className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-sm text-gray-300 overflow-auto">
            {`├── component/
│   ├── MainNav.jsx       // Navigation bar
│   ├── FileTree.jsx      // File explorer
│   └── Terminal.jsx      // Terminal window
├── pages/
│   ├── EditorPage.jsx    // Main editor UI
│   └── Docs.jsx          // Documentation page
├── utils/
│   └── getFileMode.js    // File type → Ace mode
└── socket.js             // WebSocket client`}
          </pre>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            ⚙️ How It Works
          </h2>
          <div className="space-y-2 text-gray-300">
            <div>
              1. The app fetches the file tree on load from the backend.
            </div>
            <div>
              2. File selection fetches and displays the content in AceEditor.
            </div>
            <div>
              3. Changes are saved automatically after a delay (debounced).
            </div>
            <div>4. Updates are pushed to other clients using WebSocket.</div>
            <div>
              5. The terminal sends and receives data to/from the backend shell.
            </div>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            📦 Environment Variables
          </h2>
          <pre className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-sm text-pink-400">
            VITE_BACKEND_URL=http://localhost:3000
          </pre>
          <p className="mt-2 text-gray-300">
            Place this in your <code className="text-pink-400">.env</code> file
            to connect to the backend.
          </p>
        </div>

        {/* Running the App */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            🧪 Running the App
          </h2>
          <pre className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-sm text-gray-300">
            {`# Frontend
npm install
npm run dev

# Backend
npm install
node server.js`}
          </pre>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            🙋 FAQ
          </h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <p>
                <strong className="text-white">
                  Q: Why does the editor throw a "mode-mode.js not found" error?
                </strong>
              </p>
              <p>
                Ensure <code className="text-pink-400">getFileMode()</code>{" "}
                returns a valid Ace mode string like{" "}
                <code className="text-pink-400">javascript</code> or{" "}
                <code className="text-pink-400">python</code>.
              </p>
            </div>
            <div>
              <p>
                <strong className="text-white">
                  Q: Why does the code disappear on refresh?
                </strong>
              </p>
              <p>
                Verify that <code className="text-pink-400">getFileTree()</code>{" "}
                and <code className="text-pink-400">getFileContents()</code> are
                triggered on page load and your backend is persisting file data.
              </p>
            </div>
          </div>
        </div>

        {/* Contributing */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">
            🤝 Contributing
          </h2>
          <div className="space-y-2 text-gray-300">
            <div>🔧 Fork the repo and clone it locally</div>
            <div>
              📦 Install dependencies using{" "}
              <code className="text-pink-400">npm install</code>
            </div>
            <div>
              🧱 Follow the folder structure and write clean modular code
            </div>
            <div>📬 Open pull requests with detailed messages</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
