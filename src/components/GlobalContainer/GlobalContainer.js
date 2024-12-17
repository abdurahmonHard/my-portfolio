import React from "react";

import "./globalcontainer.scss";

function GlobalContainer({ children }) {
  return <div className="global-container">{children}</div>;
}

export default GlobalContainer;