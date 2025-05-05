import React from "react";
import { createRoot } from "react-dom/client";

const Home = () => {
  return (
    <>
      <h1>Hi</h1>
    </>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<Home />);
