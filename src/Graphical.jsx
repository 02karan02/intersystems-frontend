import React from 'react';
import Tree from 'react-d3-tree';
import './custom-tree.css';


const data = {
  name: 'PACSGear',
  children: [
    {
      name: 'PACSGear_Router',   
    },
    {
      name: 'PACSGear_To_Epic_MDM_HL7_Send'
    },
    {
      name: 'From_Epic_PACSGear_ORM_HL7'
    },
    
    {
      name: 'From_PACSGear_Epic_MDN_HL7'
    }
  ]
};

// const data = {
//   name: 'Root',
//   children: [
//     {
//       name: 'Parent 1',
//       children: [
//         {
//           name: 'Child 1'
//         },
//         {
//           name: 'Child 2'
//         }
//       ]
//     },
//     {
//       name: 'Parent 2',
//       children: [
//         {
//           name: 'Child 3'
//         },
//         {
//           name: 'Child 4'
//         }
//       ]
//     }
//   ]
// };



const Graphical = () => {
    
  return (
    <div id="treeWrapper" style={{ width: '84%', height: '600px'}}>
      <Tree data={data} 
       rootNodeClassName="node__root"
       leafNodeClassName="node__leaf"
       translate={{x:300,y:300}}
       />
    </div>
  );
};

export default Graphical;
  