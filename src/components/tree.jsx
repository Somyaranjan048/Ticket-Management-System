import React, { useState, useRef } from "react";
import $ from "jquery";
import "orgchart";
import "orgchart/dist/css/jquery.orgchart.css";
import "./orgChart.css"; 

const OrgChartComponent = () => {
    const chartContainerRef = useRef(null);
    const [orgChart, setOrgChart] = useState(null); 
    const [isModalOpen, setModalOpen] = useState(false); 
    const [nodeType, setNodeType] = useState(""); 
    const [nodeName, setNodeName] = useState(""); 
    const [selectedNode, setSelectedNode] = useState(null); 
  
   
    const initOrgChart = (data) => {
      const chart = $(chartContainerRef.current).orgchart({
        data,
        chartClass: "orgchart",
        nodeContent: "name",
        createNode: ($node, data) => {
          
          const addBtn = $('<i class="fa fa-plus-circle add-icon"></i>');
          addBtn.on("click", () => handleAddNodeClick(data));
          $node.append(addBtn);
        },
      });
      setOrgChart(chart);
    };
  
    
    const handleAddNodeClick = (node) => {
      setSelectedNode(node);
      console.log('Add button clicked');
      setModalOpen(true);
    };
  
   
    const handleAddNode = () => {
      const newNode = { name: nodeName };
  
      if (nodeType === "Parent") {
        
        const data = { ...newNode, children: [] };
        initOrgChart(data);
      } else if (nodeType === "Child" && selectedNode) {
        //--------------------------------------------Add a child to the selected node------------------------------------//
        if (!selectedNode.children) selectedNode.children = [];
        selectedNode.children.push(newNode);
        orgChart.init({ data: orgChart.getHierarchy() });
      } else if (nodeType === "Sibling" && selectedNode) {
        //---------------------------------------------Add a sibling to the selected node--------------------------------//
        const parent = orgChart.getParent(selectedNode.id);
        if (parent) {
          parent.children.push(newNode);
          orgChart.init({ data: orgChart.getHierarchy() });
        }
      }
     //-----------------------------------------Close modal and reset state---------------------------------------------// 
      setModalOpen(false);
      setNodeName("");
      setNodeType("");
    };
    //-----------------------------------------------------------------------------------------------------------------//
    //---------------------------------------------- Render the component----------------------------------------------//
    return (
      <div>
        {/*----------------------------------------- OrgChart Container ----------------------------------------------*/}
        <div id="chart-container" ref={chartContainerRef}>
          {!orgChart && (
            <button
              onClick={() => handleAddNodeClick(null)}
              style={{ fontSize: "1.5em", padding: "10px" }}
            >
              + Add Root Node
            </button>
          )}
        </div>
  
        {/*------------------------------------ Popup Modal--------------------------------------- */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>Add Node</h3>
              <label>
                Node Name:
                <input
                  type="text"
                  value={nodeName}
                  onChange={(e) => setNodeName(e.target.value)}
                />
              </label>
              <label>
                Node Type:
                <select
                  value={nodeType}
                  onChange={(e) => setNodeType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                </select>
              </label>
              <button onClick={handleAddNode}>Add</button>
              {/* <button onClick={() => setModalOpen(false)}>Cancel</button> */}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default OrgChartComponent;
  