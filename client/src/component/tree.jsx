import FileTreeNode from "./node";
const FileTree = ({ tree, onSelect }) => {
  console.log(tree);
  return (
    <FileTreeNode
      onSelect={onSelect}
      fileName="/"
      path=""
      nodes={tree}
      isRoot={true}
    />
  );
};

export default FileTree;
