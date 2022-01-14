import "./App.css";
import Sidebar from "../src/components/Sidebar/Sidebar";

function App({ children }) {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="main-panel">{children}</div>
    </div>
  );
}

export default App;
