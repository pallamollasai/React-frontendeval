import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";
import Store from "./store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <Router
  //   basename="routes"
  //   // forceRefresh={true}
  //   getUserConfirmation={(message, callback) => {
  //     const allow = prompt("are you sure");
  //     if (allow) {
  //       callback(message);
  //     }
  //   }}
  // >
    <Provider store={Store}>
      <App />
    </Provider>
);
