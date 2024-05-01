import React from "react";

function Input(props, ref) {
  return (
    <div
      style={{
        width: "500px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      <input 
        ref={ref}
        style={{
        width: "500px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "8px",
      }} type="text" />
    </div>
  );
}

export default React.forwardRef(Input);
