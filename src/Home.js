import React from "react";
import TreeLeft from "./TreeLeft.js";
import TreeRight from "./TreeRight.js";

function Home(){
    return (
        <> <div className="title">
            <p className="top-bar">Automated Integration System</p>
            <div className="container">
                <TreeLeft/>
                <TreeRight/>
            </div>
           </div>
        </>
    );
}

export default Home;