import React, { useState } from "react";

const NestedList = ({ items, level = 0 }) => {
  const [open, setOpen] = useState({});

  const toggle = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      {items.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggle(index)}
            style={{
              cursor: item.children ? "pointer" : "default",
              fontWeight: item.children ? "bold" : "normal",
              padding: "5px",
            }}
          >
            {item.name}
            {item.children && (open[index] ? " ▼" : " ▶")}
          </div>
          {item.children && open[index] && (
            <NestedList items={item.children} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedList;
