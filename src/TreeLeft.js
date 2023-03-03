import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";


const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />
};

const StyledTree = styled.div`
  line-height: 1.5;
`;

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {0;
      ￼    left: 0;
      ￼    right: 0;
      margin-left: 5px;
    }
  }
`;

const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map((item) => {
    // if its a file render <File />
    if (item.type === "file") {
      return <File name={item.name} />;
    }
    // if its a folder render <Folder />
    if (item.type === "folder") {
      return (
        <Folder name={item.name}>
          {/* Call the <TreeRecursive /> component with the current item.childrens */}
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });
};
const Tree = ({ data, children }) => {
  const isImparative = data && !children;

  return (
    <StyledTree>
      {isImparative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  );
};

Tree.File = File;
Tree.Folder = Folder;

const structure = [
  {
    type: "folder",
    name: "src",
    childrens: [
      // {
      //   type: "folder",
      //   name: "Components",
      //   childrens: [
      //     { type: "file", name: "Modal.js" },
      //     { type: "file", name: "Modal.css" }
      //   ]
      // },
      { type: "file", name: "index.js" },
      { type: "file", name: "index.html" }
    ]
  },
  { type: "file", name: "package.json" }
];

export default function TreeLeft() {
  return (
    <div className="App right-container">
      <h5 className="project-title">Project</h5>
      <Tree data={structure} />
    </div>
  );
}
