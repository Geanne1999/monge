import Router from "./router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
