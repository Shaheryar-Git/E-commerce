import React, { useState } from "react";

// const Content = [
//   ["REACT IS EASY", "REACT IS EASY", "REACT IS EASY", "REACT IS EASY"],
//   ["REACT IS POPULAR", "REACT IS POPULAR", "REACT IS POPULAR", "REACT IS POPULAR"],
//   ["REACT IS FLEXIBLE", "REACT IS FLEXIBLE", "REACT IS FLEXIBLE", "REACT IS FLEXIBLE"],
//   ["REACT IS UNDERSTANDABLE", "REACT IS UNDERSTANDABLE", "REACT IS UNDERSTANDABLE", "REACT IS UNDERSTANDABLE"]
// ];

const ReactComponent = (props) => {
  // const [button, setButton] = useState();

  return (
    <div>

      <div>
        <h1>PERSON DATA {props.data}</h1>
        <h3>Name{props.text.name} {props.text.AGE}</h3>
      </div>




      {/* <header>
        <div>
          <h2 className="text-danger">REACT JS</h2>
          <p>NAVIGATION THROUGH ARRAY</p>
        </div>
      </header>
      <div className={button === 0 ? "active": ""}>
        <button onClick={() => setButton(0)}>WHY REACT</button>
      </div>
      <div  className={button === 1 ? "active": ""}>
        <button onClick={() => setButton(1)}>WHY REACT</button>
      </div>
      <div className="buttons">
        <button onClick={() => setButton(2)}>WHY REACT</button>
      </div>
      <div className="buttons">
        <button onClick={() => setButton(3)}>WHY REACT</button>
      </div>
      <div>
      {
       Content[button].map((ele,index)=>{
        return(
            <ul>
                <p key={index} >{ele}</p>
            </ul>
        )
       })
      }
          
        
      </div> */}
    </div>
  );
};

export default ReactComponent;
