import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  FileText,
} from "lucide-react";

const FileTreeNode = ({ fileName, nodes, onSelect, path, isRoot }) => {
  const isDir = !!nodes;
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isDir && !isRoot) {
      setExpanded((prev) => !prev);
    } else if (!isDir) {
      onSelect(path);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className={`flex items-center px-2 py-1 rounded-md cursor-pointer 
        transition-colors duration-200 
        hover:bg-gray-700 
        ${isDir ? "text-gray-300" : "text-gray-400"}`}
      >
        <span className="mr-1">
          {isDir && !isRoot ? (
            expanded ? (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            )
          ) : (
            <span className="w-4" />
          )}
        </span>
        <span className="mr-2">
          {isDir ? (
            expanded || isRoot ? (
              <FolderOpen className="h-4 w-4 text-yellow-400" />
            ) : (
              <Folder className="h-4 w-4 text-yellow-400" />
            )
          ) : (
            <FileText className="h-4 w-4 text-blue-400" />
          )}
        </span>
        <span className="truncate">{fileName}</span>
      </div>

      {isDir && expanded && !isRoot && fileName !== "node_modules" && (
        <div className="ml-4">
          {Object.keys(nodes).map((child) => {
            const childPath = `${path}/${child}`;
            return (
              <FileTreeNode
                key={childPath}
                onSelect={onSelect}
                path={childPath}
                fileName={child}
                nodes={nodes[child]}
                isRoot={false}
              />
            );
          })}
        </div>
      )}

      {isDir && isRoot && (
        <div className="ml-4">
          {Object.keys(nodes).map((child) => {
            const childPath = `${path}/${child}`;
            return (
              <FileTreeNode
                key={childPath}
                onSelect={onSelect}
                path={childPath}
                fileName={child}
                nodes={nodes[child]}
                isRoot={false}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FileTreeNode;
