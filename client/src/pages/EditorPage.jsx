/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from "react";
import Terminal from "../component/terminal";
import FileTree from "../component/tree";
import socket from "../socket";
import AceEditor from "react-ace";
import { getFileMode } from "../utils/getFileMode";
import MainNav from "../component/mainNav";
import * as ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai"; // Using a dark theme for AceEditor
import "ace-builds/src-noconflict/ext-language_tools";
ace.config.set("basePath", "/ace");

function EditorPage() {
  const [fileTree, setFileTree] = useState({});
  const url = import.meta.env.VITE_BACKEND_URL;
  console.log(url);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFileContent, setSelectedFileContent] = useState("");
  const [code, setCode] = useState("");

  const isSaved = selectedFileContent === code;

  useEffect(() => {
    if (!isSaved && code) {
      const timer = setTimeout(() => {
        socket.emit("file:change", {
          path: selectedFile,
          content: code,
        });
        setSelectedFileContent(code);
      }, 5 * 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [code, selectedFile, isSaved]);

  useEffect(() => {
    setCode("");
  }, [selectedFile]);

  useEffect(() => {
    setCode(selectedFileContent);
  }, [selectedFileContent]);

  const getFileTree = async () => {
    const response = await fetch(`${url}/files`);
    console.log(response);
    const result = await response.json();
    console.log(result);
    setFileTree(result.tree);
  };

  const getFileContents = useCallback(async () => {
    if (!selectedFile) return;
    const response = await fetch(`${url}/files/content?path=${selectedFile}`);
    console.log(response);
    const result = await response.json();
    console.log(result);
    setSelectedFileContent(result.content);
  }, [selectedFile, url]);

  useEffect(() => {
    getFileTree();
    getFileContents();
  }, []);

  useEffect(() => {
    if (selectedFile) getFileContents();
  }, [getFileContents, selectedFile]);

  useEffect(() => {
    socket.on("file:refresh", getFileTree);
    return () => {
      socket.off("file:refresh", getFileTree);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <MainNav />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-100" />
        {selectedFile && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">
              {selectedFile.split("/").join(" > ")}
            </span>
            <span
              className={`text-sm px-2 py-1 rounded-full ${
                isSaved
                  ? "bg-green-700 text-green-100"
                  : "bg-yellow-700 text-yellow-100"
              }`}
            >
              {isSaved ? "Saved" : "Unsaved"}
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 flex-shrink-0 border-r border-gray-700 bg-gray-800">
          <div className="h-full overflow-y-auto p-4">
            <FileTree
              onSelect={(path) => {
                setSelectedFileContent("");
                setSelectedFile(path);
              }}
              tree={fileTree}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="relative flex-1 overflow-hidden">
            {!selectedFile && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800/60 backdrop-blur-sm text-gray-300 text-lg font-medium">
                Select a file to start editing
              </div>
            )}
            <AceEditor
              width="100%"
              height="100%"
              mode={getFileMode({ selectedFile }) || "text"}
              value={code}
              onChange={(e) => setCode(e)}
              className="h-full"
              theme="monokai" // Dark theme for AceEditor
              fontSize={14}
              showPrintMargin={false}
              showGutter={true}
              readOnly={!selectedFile}
            />
          </div>

          <div className="h-64 border-t border-gray-700 bg-gray-900">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
