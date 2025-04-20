import MainNav from "../component/mainNav";
// import { Button } from "../components/ui/button";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Editor Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Theme</label>
              <select className="border rounded p-2">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-gray-700">Font Size</label>
              <select className="border rounded p-2">
                <option>12px</option>
                <option>14px</option>
                <option>16px</option>
                <option>18px</option>
              </select>
            </div>

            <div className="pt-4">
              <button>Save Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
