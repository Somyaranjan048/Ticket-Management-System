import React, { useState } from "react";

const TreeNode = ({ nodeId, addChild }) => {
  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <span>Node {nodeId}</span>
      <button
        onClick={() => addChild(nodeId)}
        style={{
          marginLeft: "10px",
          cursor: "pointer",
          padding: "5px",
          border: "1px solid #ccc",
        }}
      >
        +
      </button>
    </div>
  );
};

const Tree = () => {
  const [treeData, setTreeData] = useState([{ id: 1, children: [] }]);

  const addChildNode = (parentId) => {
    setTreeData((prevTree) => {
      const addNode = (nodes) =>
        nodes.map((node) => {
          if (node.id === parentId) {
            const newChild = {
              id: Math.max(...prevTree.map((n) => n.id)) + 1,
              children: [],
            };
            return { ...node, children: [...node.children, newChild] };
          }
          return { ...node, children: addNode(node.children) };
        });
      return addNode(prevTree);
    });
  };

  const renderTree = (nodes) =>
    nodes.map((node) => (
      <div key={node.id}>
        <TreeNode nodeId={node.id} addChild={addChildNode} />
        {node.children.length > 0 && (
          <div style={{ marginLeft: "20px" }}>{renderTree(node.children)}</div>
        )}
      </div>
    ));

  return <div>{renderTree(treeData)}</div>;
};

export default Tree;
