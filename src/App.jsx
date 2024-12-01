import React from "react";
import NestedList from "./components/NestedList";

const App = () => {
  const data = [
    {
      name: "Applications",
      children: [
        { name: "App1" },
        { name: "App2", children: [{ name: "SubApp1" }, { name: "SubApp2" }] },
      ],
    },
    {
      name: "Library",
      children: [
        { name: "Lib1" },
        { name: "Lib2", children: [{ name: "SubLib1" }, { name: "SubLib2" }] },
      ],
    },
    {
      name: "System",
      children: [
        {
          name: "Users",
          children: [
            { name: "Shared" },
            {
              name: "Guest",
              children: [
                { name: "Desktop" },
                { name: "Documents" },
                { name: "Downloads" },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Nested List</h1>
      <NestedList items={data} />
    </div>
  );
};

export default App;
