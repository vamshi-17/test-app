// single selection accordian

// multiple selection accordian
import React, { useState } from "react";
import data from "./data";
import "./styles.css"

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>
        {enableMultipleSelection ? "Disable" : "Enable"} Multiple Selection 
      </button>   
      
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+" }</span>
              </div>
              { 
                selected === dataItem.id ? 
                <div className="content">
                  {dataItem.answer}
                </div> 
                : null}
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>

  );
}
