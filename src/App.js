import "./App.css";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Header from "../src/components/Header/Header";

function App({ children }) {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="header-and-main-panel-container">
        <Header />
        <div className="main-panel">{children}</div>
      </div>
    </div>
  );
}

export default App;
