import React, { useState } from 'react';
import Generate from './Generate.js';
import styled from 'styled-components';
import Navigate from './Navigate.js';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBNavbarBrand,
//   MDBCollapse
// } from 'mdb-react-ui-kit';


const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['Navigate Interface', 'Add System', 'Add Interface', 'Generate'];



function TreeRight(){
  // const [showNavColor, setShowNavColor] = useState(false);
  // const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  // const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [active, setActive] = useState(types[0]);
    return (
        <> 
        <div className="left-container">
        <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      {console.log(active)}
      {active === "Navigate Interface" ?<>
            <div id="navigate-interface" className="navigate">
                    <Navigate/>
            </div>
      </>:null}
      {active === "Add System" ? <div id="AddSystem" class="tabcontent">
            
            <p>System Name:</p>
            <input />
            <p>Description:</p>
            <textarea rows="3" cols="25">
            </textarea>
    
            <button class="sub">Submit</button>
      </div>:null}
      {active === "Add Interface" ? <div id="AddInterface" class="tabcontent data-box">
      {console.log("inside")}
     
      <div class="box">
    <p class="title">City Statistics</p>
    <p>Name:</p>
    <input type="text" />
    <p>Status: Loading..</p>
    <p>From System:</p>
    <select name="system" id="systems">
      <option value="Inter">InterSystems</option>
      <option value="Rhapsody">Rhapsody</option>
    </select>
    <p>To System:</p>
    <select name="system" id="systems">
      <option value="Inter">InterSystems</option>
      <option value="Rhapsody">Rhapsody</option>
    </select>
    <p>Component Type:</p>
    <div class="radios">
      <input type="radio" name="comp" id="html" />
      <label for="html">Service</label>
      <br />
      <input type="radio" name="comp" id="css" />
      <label for="css">Process</label>
      <br />
      <input type="radio" name="comp" id="javascript" />
      <label>Operation </label>
    </div>
    <p>Message Type:</p>
    <div class="radios">
      <input type="radio" name="message" id="html" />
      <label for="hl7">HL7</label>
      <br />
      <input type="radio" name="message" id="css" />
      <label for="web">Web Service</label>
      <br />
      <input type="radio" name="message" id="javascript" />
      <label for="fhir">FHIR</label>
    </div>
    <p>Message Event:</p>
    <input type="text" />
    <button className="interface-button">Submit</button>
      </div>
      
      </div>:null}
      {active === "Generate" ?  <div id="Generate" class="tabcontent">
           <Generate/>
      </div>:null}
      </div>
      </>
    );
}

export default TreeRight;